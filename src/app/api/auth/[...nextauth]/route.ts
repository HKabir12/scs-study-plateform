import NextAuth, {
  AuthOptions,
  User as NextAuthUser,
  Session,
} from "next-auth";
import { JWT } from "next-auth/jwt";

import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";

// MongoDB setup
const uri = process.env.NEXT_PUBLIC_MONGODB_URI!;
const dbName = process.env.DB_NAME!;

// Type for OAuth user / credentials user
type AppUser = {
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  image?: string;
  password?: string;
  role?: string;
};

// Get user by email from MongoDB
async function getUserByEmail(email: string) {
  const client = new MongoClient(uri);
  await client.connect();
  const user = await client.db(dbName).collection("users").findOne({ email });
  await client.close();
  return user;
}

// Save new user to MongoDB (if doesn't exist)
async function saveUser(user: AppUser) {
  const client = new MongoClient(uri);
  await client.connect();
  const usersCollection = client.db(dbName).collection("users");

  const existingUser = await usersCollection.findOne({ email: user.email });
  if (!existingUser) {
    const newUser = {
      firstName: user.firstName || user.name?.split(" ")[0] || "User",
      lastName: user.lastName || user.name?.split(" ")[1] || "",
      email: user.email,
      image: user.image || "",
      password: user.password || "", // Google login will have empty password
      role: "student",
      createdAt: new Date(),
    };
    await usersCollection.insertOne(newUser);
    return newUser;
  }
  return existingUser;
}

// NextAuth configuration
export const authOptions: AuthOptions = {
  providers: [
    // Credentials login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await getUserByEmail(credentials.email);
        if (!user) throw new Error("User not found");

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) throw new Error("Invalid password");

        return {
          id: user._id.toString(),
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          role: user.role || "student",
        } as NextAuthUser & { role: string };
      },
    }),

    // Google login
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      // Save Google users to MongoDB
      if (account?.provider === "google") {
        await saveUser(user as AppUser);
      }
      return true;
    },

    async jwt({
      token,
      user,
    }: {
      token: JWT & { role?: string };
      user?: NextAuthUser & { role?: string };
    }) {
      if (user) token.role = user.role || "student";
      return token;
    },

    async session({
      session,
      token,
    }: {
      session: Session & { user: Session["user"] & { role?: string } };
      token: JWT & { role?: string };
    }) {
      (session.user as Session["user"] & { role?: string }).role = token.role;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },

  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
