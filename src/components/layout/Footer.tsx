import Link from "next/link";
import Image from "next/image";
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";
import BackToTopButton from "../utilities/BackToTopButton";

export default function Footer() {
  const socialLinksData = [
    { name: "Facebook", href: "#", icon: IconMail },
    { name: "Instagram", href: "#", icon: IconPhone },
  ];

  const contactInfo = {
    email: "info@safwanschemistry.com",
    headOffice: {
      phone: "+880123456789",
      address: "Radhanagar, Govt. Edward College, Pabna",
    },
    SubOffice: {
      phone: "+880987654321",
    },
  };

  const navigationLinks = [
    { title: "হোম", href: "/" },
    { title: "আমাদের সম্পর্কে", href: "/about" },
    { title: "কোর্সসমূহ", href: "/courses" },
    { title: "যোগাযোগ", href: "/contact" },
  ];

  return (
    <>
    <footer className="py-12 md:py-16 border-t border-gray-700 bg-gray-900 text-gray-300 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* -------- GRID SECTION -------- */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-8 text-center md:text-left">
          {/* ---- Column 1: Logo ---- */}
          <div className="md:col-span-2 lg:col-span-2 space-y-4 flex flex-col items-center md:items-start">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/scslogo.jpg"
                alt="SCS Logo"
                width={45}
                height={45}
                className="rounded-full shadow-lg"
              />
              <span className="font-extrabold text-xl text-emerald-400">
                সাফওয়ান’স কেমিস্ট্রি সলিউশন
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-md text-center md:text-left">
              তোমার নির্ভরযোগ্য সঙ্গী উন্নত কেমিস্ট্রি কনসেপ্ট আয়ত্তে আনার জন্য
              এবং একাডেমিক সফলতা অর্জনের লক্ষ্যে।
            </p>

            {/* ---- Social Icons ---- */}
            <div className="flex gap-4 justify-center md:justify-start pt-2">
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

          {/* ---- Column 2: Quick Links ---- */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-emerald-500/50 pb-2">
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

          {/* ---- Column 3: Contact ---- */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-emerald-500/50 pb-2">
              যোগাযোগ
            </h4>
            <div className="space-y-3 text-sm text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start gap-3">
                <IconMail className="size-5 text-emerald-400 flex-shrink-0" />
                <Link
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  {contactInfo.email}
                </Link>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-3">
                <IconPhone className="size-5 text-emerald-400 flex-shrink-0" />
                <Link
                  href={`tel:${contactInfo.headOffice.phone}`}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  {contactInfo.headOffice.phone} (Head Office)
                </Link>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-3">
                <IconPhone className="size-5 text-emerald-400 flex-shrink-0" />
                <Link
                  href={`tel:${contactInfo.SubOffice.phone}`}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  {contactInfo.SubOffice.phone} (Sub Office)
                </Link>
              </p>
            </div>
          </div>

          {/* ---- Column 4: Location ---- */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-emerald-500/50 pb-2">
              আমাদের ঠিকানা
            </h4>
            <div className="space-y-4 text-sm text-center md:text-left">
              <div className="flex gap-3 justify-center md:justify-start">
                <IconMapPin className="size-5 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">Head Office</p>
                  <address className="not-italic text-gray-400">
                    {contactInfo.headOffice.address}
                  </address>
                </div>
              </div>

              <div className="flex gap-3 justify-center md:justify-start">
                <IconMapPin className="size-5 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">Sub Office</p>
                  <address className="not-italic text-gray-400">
                    Radhanagar, Govt. Edward College, Pabna
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---- COPYRIGHT ---- */}
        <div className="mt-12 pt-8 border-t border-gray-700/50 text-center space-y-1">
          <p className="text-sm">
            © {new Date().getFullYear()} Safwan’s Chemistry Solution. All Rights
            Reserved.
          </p>
          <p className="text-xs">
            Developer{" "}
            <Link
              href="https://hkabir-portfolio.netlify.app/" target="_blank"
              className="hover:text-emerald-400 transition-colors"
            >
              <span className="text-green-600 ">Humaon Kabir</span>
            </Link>{" "}
            – Jahangirnagar University, IIT
          </p>
        </div>
      </div>
    </footer>

    <BackToTopButton />
    </>
  );
}
