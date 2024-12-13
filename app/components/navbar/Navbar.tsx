import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex flex-row top-0 w-full bg-slate-900">
      <Link
        href="/"
        className="flex flex-row items-center p-2 gap-4 bg-black rounded-3xl md:mr-4 hover:text-slate-300"
      >
        <img src="/AvatarNick.svg" alt="" className="h-12 rounded-xl" />
        <h2 className="mb-0">Nick Prather</h2>
      </Link>
      <NavbarMobile className="lg:hidden" />
      <NavbarDesktop className="lg:flex" />
    </header>
  );
};

export default Navbar;
