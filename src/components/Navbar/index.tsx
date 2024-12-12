"use client";

import Link from "next/link";
import { CurrencyBtc } from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <nav className=" bg-gray-900 fixed top-0 left-0 w-full z-50 text-white shadow-md border-b border-white/12">
      <div className="container mx-auto max-w-screen-xl px-4 py-4 flex justify-between items-center ">
        {/* Logo */}
        <Link href={"/"} className="flex text-3xl font-bold items-center gap-2">
          <div className="flex w-10 h-10 bg-blue-500 rounded-full text-white justify-center items-center">
            <CurrencyBtc size={28} />
          </div>
          Notulensi
        </Link>
        {/* Links */}
        <ul className="flex space-x-4 text-xl text-gray-300">
          <li>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link href="/explorer" className="hover:underline">
              Explorer
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
