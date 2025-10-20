/* eslint-disable @typescript-eslint/no-explicit-any */
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { getUserByEmail, saveUser } from "@/app/api/auth/[...nextauth]/route";

export const authOptions = {
  providers: [
    // Credentials Login
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
        };
      },
    }),

    // Google Login
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    }),
  ],
callbacks: {
  async signIn({ user, account }: { user: any; account?: { provider?: string } | null }) {
    if (account?.provider === "google") {
      await saveUser(user);
    }
    return true;
  },

  async jwt({
    token,
    user,
  }: {
    token: any;
    user?: any;
  }) {
    if (user) token.role = user.role || "student";
    return token;
  },

  async session({
    session,
    token,
  }: {
    session: any;
    token: any;
  }) {
    if (session.user) {
      session.user.role = token.role;
    }
    return session;
  },
},

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};