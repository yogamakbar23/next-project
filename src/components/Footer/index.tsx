import Link from "next/link";

function Footer() {
  const whatsappNumber = "+628123456789";
  const emailAddress = "kyronode@gmail.com";

  return (
    <footer className="flex justify-center items-center text-center md:text-start bg-amber-300 dark:bg-zinc-950 mt-20 border-t border-black dark:border-white">
      <div className="container container mx-auto max-w-screen-xl px-4 pt-8 pb-20 gap-4 flex flex-col md:flex-row justify-between items-center text-black dark:text-zinc-300">
        {/* Copyright */}
        <p>Copyright © 2024 Kyronode. All Rights Reserved.</p>
        {/* Navigation & Contact Us */}
        <div className="flex gap-4 md:gap-8">
          <div className="flex flex-col gap-1">
            <p className="font-bold">Navigation</p>
            <Link
              className="hover:text-amber-700 dark:hover:text-amber-600"
              href={"/services"}
            >
              Services
            </Link>
            <Link
              className="hover:text-amber-700 dark:hover:text-amber-600"
              href={"/explorer"}
            >
              Explorer
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <p id="contact" className="font-bold">
              Contact Us
            </p>
            <Link
              className="hover:text-amber-700 dark:hover:text-amber-600"
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
            >
              {whatsappNumber}
            </Link>
            <Link
              className="hover:text-amber-700 dark:hover:text-amber-600"
              href={`mailto:${emailAddress}`}
              target="_blank"
            >
              {emailAddress}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
