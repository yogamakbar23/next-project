"use client";

import { GithubLogo, TelegramLogo, TwitterLogo } from "@phosphor-icons/react";
import Link from "next/link";

function Footer() {
  const emailAddress = "kyronode@gmail.com";
  const telegtamUsername = "kyronode";
  const twitterUsername = "kyronode";
  const githubUsername = "kyronode";

  return (
    <footer className="flex justify-center items-center text-center md:text-start bg-white dark:bg-zinc-950 mt-20 border-t border-black dark:border-white">
      <div className="container container mx-auto max-w-screen-xl px-4 pt-8 pb-20 gap-4 flex flex-col md:flex-row justify-between items-center text-black dark:text-zinc-300 z-10">
        {/* Copyright */}
        <p className="p-4">Copyright © 2024 Kyronode. All Rights Reserved.</p>
        {/* Navigation & Contact Us */}
        <div className="flex gap-4 md:gap-8 px-4">
          <div className="flex flex-col gap-1">
            <p className="font-bold">Navigation</p>

            <Link
              className="hover:text-amber-700 dark:hover:text-amber-600"
              href={"/services"}
              target="_blank"
            >
              Services
            </Link>
            <Link
              className="hover:text-amber-700 dark:hover:text-amber-600"
              href={"https://testnet.kyronode.xyz/"}
              target="_blank"
            >
              Explorer
            </Link>
          </div>
          <div className="flex flex-col gap-1 items-center md:items-start">
            <p id="contact" className="font-bold">
              Contact Us
            </p>
            <Link
              className="hover:text-amber-700 dark:hover:text-amber-600"
              href={`mailto:${emailAddress}`}
              target="_blank"
            >
              {emailAddress}
            </Link>
            <div className="flex gap-2 my-2">
              <Link
                href={`https://t.me/${telegtamUsername}`}
                className="hover:text-amber-700 dark:hover:text-amber-600"
                target="_blank"
              >
                <TelegramLogo size={28} />
              </Link>
              <Link
                href={`https://twitter.com/${twitterUsername}`}
                className="hover:text-amber-700 dark:hover:text-amber-600"
                target="_blank"
              >
                <TwitterLogo size={28} />
              </Link>
              <Link
                href={`https://github.com/${githubUsername}`}
                className="hover:text-amber-700 dark:hover:text-amber-600"
                target="_blank"
              >
                <GithubLogo size={28} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
