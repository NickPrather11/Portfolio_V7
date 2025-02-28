import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex flex-row top-0 w-full shadow-md">
      <Link
        href="/"
        className="flex flex-row items-center p-2 m-2 gap-4 bg-slate-800 rounded-3xl md:mr-4 hover:text-slate-300"
      >
        <h2 className="mb-0 mx-4 text-slate-100">Nick Prather</h2>
      </Link>
      <NavbarMobile className="lg:hidden" />
      <NavbarDesktop className="lg:flex" />
    </header>
  );
};

export default Navbar;
