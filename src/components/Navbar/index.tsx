"use client";

import Link from "next/link";
import Image from "next/image";
import { DotsThreeOutlineVertical } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoLoad = () => {
    setIsLogoLoaded(true);
  };

  useEffect(() => {}, [isLogoLoaded]);

  return (
    <nav className=" bg-zinc-950 fixed top-0 left-0 w-full z-50 text-white shadow-md border-b border-white/12">
      <div className="container mx-auto max-w-screen-xl px-4 py-4 flex justify-between items-center ">
        {/* Logo */}
        <Link href={"/"} className="flex text-3xl font-bold items-center ">
          <div className="flex w-15 h-15 ">
            <Image
              src="/images/logo.svg"
              alt="Kyronode Logo"
              width={60}
              height={60}
              className="rounded-full"
              onLoadingComplete={handleLogoLoad}
            />
          </div>
          {isLogoLoaded && <p className="-ml-3">yronode</p>}
        </Link>
        {/* Links */}
        <ul className="hidden lg:flex space-x-4 text-xl text-zinc-300">
          <li>
            <Link
              href="/services"
              className="px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-amber-600 hover:text-black"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/explorer"
              className="px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-amber-600 hover:text-black"
            >
              Explorer
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-amber-600 hover:text-black"
            >
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
          className={`lg:hidden absolute border-2 top-16 right-0 w-6/12 bg-zinc-900 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col space-y-4 text-xl p-4">
            <li>
              <Link
                href="/services"
                className="px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-amber-600 hover:text-black"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/explorer"
                className="px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-amber-600 hover:text-black"
              >
                Explorer
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="px-4 py-2 w-full rounded-lg transition duration-300 ease-in-out after:bg-amber-600 hover:text-black"
              >
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
