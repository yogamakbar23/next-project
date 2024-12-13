"use client";

import Link from "next/link";
import Image from "next/image";
import { DotsThreeOutlineVertical } from "@phosphor-icons/react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" bg-zinc-950 fixed top-0 left-0 w-full z-50 text-white shadow-md border-b border-white/12">
      <div className="container mx-auto max-w-screen-xl px-4 py-4 flex justify-between items-center ">
        {/* Logo */}
        <Link href={"/"} className="flex text-3xl font-bold items-center ">
          <div className="flex w-15 h-15 ">
            <Image
              src="/images/logo.svg" // Path ke ikon Anda
              alt="Kyronode Logo"
              width={60}
              height={60}
              className="rounded-full" // Tambahkan styling jika perlu
            />
          </div>
          <p className="-ml-3">yronode</p>
        </Link>
        {/* Links */}
        <ul className="hidden lg:flex space-x-4 text-xl text-gray-300">
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

        {/* Hamburger Button for Mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white p-4 focus:outline-none"
        >
          <DotsThreeOutlineVertical size={28} />
        </button>

        {/* Dropdown Menu for Mobile */}
        <div
          className={`lg:hidden absolute border-2 top-16 left-0 w-full bg-gray-900 text-white transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col space-y-4 text-xl p-4">
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
      </div>
    </nav>
  );
};

export default Navbar;
