"use client";

import Image from "next/image";
import Link from "next/link";

const Header = ({ lang }: { lang: "en" | "bn" }) => {
  const newLang = lang === "en" ? "bn" : "en";

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 py-4 bg-white shadow">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <Image src="/10mslogo-svg.svg" width={100} height={40} alt="10ms" />

        <Link
          href={`/${newLang}`}
          className="w-20 h-8 flex items-center justify-center rounded border border-gray-400 hover:bg-slate-50"
        >
          {lang === "en" ? "বাংলা" : "Eng"}
        </Link>
      </div>
    </header>
  );
};

export default Header;
