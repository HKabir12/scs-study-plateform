import * as React from "react";
import Image from "next/image";
import Link from "next/link";

// Lucide-style Icons (using the user's provided SVGs and adding new ones)

const IconMail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const IconPhone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72 17.5 17.5 0 0 0 .15 2.5a2 2 0 0 1-2.26 2.11L4 10.5a19.45 19.45 0 0 0 9.5 9.5l1.09-1.93a2 2 0 0 1 2.11-2.26 17.5 17.5 0 0 0 2.5.15A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconMapPin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconFacebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    className="size-5"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5C10.5 7.6 11.9 6 14.3 6c1.1 0 2.2.1 2.2.1v2.4H15c-1.2 0-1.6.8-1.6 1.6V12H16l-.5 3h-2.1v7A10 10 0 0 0 22 12"
    ></path>
  </svg>
);

const IconYoutube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    className="size-5"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M10 15V9l5.2 3zm12-3a26.7 26.7 0 0 0-.5-6.1a2.9 2.9 0 0 0-2-2A64.6 64.6 0 0 0 12 3a64.6 64.6 0 0 0-7.5.9a2.9 2.9 0 0 0-2 2A26.7 26.7 0 0 0 2 12a26.7 26.7 0 0 0 .5 6.1a2.9 2.9 0 0 0 2 2A64.6 64.6 0 0 0 12 21a64.6 64.6 0 0 0 7.5-.9a2.9 2.9 0 0 0 2-2A26.7 26.7 0 0 0 22 12z"
    ></path>
  </svg>
);

const IconInstagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    className="size-5"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m4.2 5a5 5 0 1 0 0 10a5 5 0 0 0 0-10z"
    ></path>
  </svg>
);

// --- TYPE DEFINITIONS ---
interface NavLink {
  title: string;
  href: string;
}

interface SocialLink extends NavLink {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface OfficeLocation {
  phone: string;
  address: string;
}

interface ContactDetails {
  email: string;
  headOffice: OfficeLocation;
  uttaraOffice: OfficeLocation;
}

// --- DATA ---
const navigationLinks: NavLink[] = [
  { title: "Home", href: "/" },
  { title: "Courses", href: "/courses" },
  { title: "Teachers", href: "/teachers" },
  { title: "About", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

const socialLinksData: SocialLink[] = [
  {
    title: "Facebook",
    name: "Facebook",
    href: "https://facebook.com",
    icon: IconFacebook,
  },
  {
    title: "YouTube",
    name: "YouTube",
    href: "https://youtube.com",
    icon: IconYoutube,
  },
  {
    title: "Instagram",
    name: "Instagram",
    href: "https://instagram.com",
    icon: IconInstagram,
  },
];

const contactInfo: ContactDetails = {
  email: "support@scs.com.bd",
  headOffice: {
    phone: "01324-723301",
    address: "Radhanagar, Govt. Edward College, Pabna",
  },
  uttaraOffice: {
    phone: "01324-723302",
    address: "Radhanagar, Govt. Edward College, Pabna",
  },
};

const Footer: React.FC = () => {
  return (
    <footer className="py-12 md:py-16 border-t border-gray-700 bg-gray-900 text-gray-300 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-8">
          {/* Column 1: Logo & Mission (Main Info) */}
          <div className="md:col-span-2 lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              {/* Note: src="/scslogo.jpg" will need to be a live URL or placeholder in a real environment */}
              <Image
                src="/scslogo.jpg"
                alt="SCS Logo"
                width={40}
                height={40}
                className="rounded-full shadow-lg"
              />
              <span className="font-extrabold text-xl text-emerald-400">
                Safwan’s Chemistry Solution
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-md">
              Your dedicated partner for mastering advanced chemistry concepts
              and achieving academic excellence.
            </p>

            {/* Social Icons (Desktop/Tablet) */}
            <div className="flex gap-4 pt-2">
              {socialLinksData.map((s, i) => (
                <Link
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${s.name} page`}
                  className="p-2 rounded-full transition-all duration-300 bg-gray-800 text-gray-400 hover:bg-emerald-500 hover:text-white shadow-md hover:shadow-emerald-500/50"
                >
                  <s.icon className="size-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-emerald-500/50 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navigationLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-base group"
                  >
                    <span className="mr-2 inline-block transition-transform group-hover:translate-x-1">
                      &rsaquo;
                    </span>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-emerald-500/50 pb-2 inline-block">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-3">
                <IconMail className="size-5 text-emerald-400 flex-shrink-0" />
                <Link
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  {contactInfo.email}
                </Link>
              </p>
              <p className="flex items-center gap-3">
                <IconPhone className="size-5 text-emerald-400 flex-shrink-0" />
                <Link
                  href={`tel:${contactInfo.headOffice.phone}`}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  {contactInfo.headOffice.phone} (Head Office)
                </Link>
              </p>
              <p className="flex items-center gap-3">
                <IconPhone className="size-5 text-emerald-400 flex-shrink-0" />
                <Link
                  href={`tel:${contactInfo.uttaraOffice.phone}`}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  {contactInfo.uttaraOffice.phone} (Head Office)
                </Link>
              </p>
            </div>
          </div>

          {/* Column 4: Office Locations */}
          <div className="space-y-4 lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-emerald-500/50 pb-2 inline-block">
              Visit Us
            </h4>
            <div className="space-y-4 text-sm">
              {/* Head Office */}
              <div className="flex gap-3">
                <IconMapPin className="size-5 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">Head Office</p>
                  <address className="not-italic text-gray-400">
                    {contactInfo.headOffice.address}
                  </address>
                </div>
              </div>
              {/* Uttara Office (Simplified location) */}
              <div className="flex gap-3">
                <IconMapPin className="size-5 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">Uttara Office</p>
                  <address className="not-italic text-gray-400">
                    Radhanagar, Govt. Edward College, Pabna
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator and Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <p className="text-center text-sm ">
            © {new Date().getFullYear()} Safwan’s Chemistry Solution. All Rights
            Reserved.
          </p>
          <p className="text-center text-xs  mt-1">
            Developer{" "}
            <Link
              href="https://tailwindcss.com"
              className="hover:text-emerald-400 transition-colors"
            >
              Humaon Kabir
            </Link>{" "}
            Jahangirnagar University, Institute of Information Technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
