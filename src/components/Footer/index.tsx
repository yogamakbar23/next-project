import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-white/12">
      <div className="container container mx-auto max-w-screen-xl px-4 pt-8 pb-20 flex justify-between items-center ">
        {/* Copyright */}
        <p>Copyright © 2024 Notulensi. All Rights Reserved.</p>
        {/* Navigation & Contact Us */}
        <div className="flex gap-8">
          <div className="flex flex-col">
            <p className="font-bold">Navigation</p>
            <Link href={"/services"}>Services</Link>
            <Link href={"/explorer"}>Explorer</Link>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Contact Us</p>
            <p>08xxxxxxxxx</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
