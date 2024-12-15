import Link from "next/link";

function Footer() {
  const whatsappNumber = "+628123456789";
  const emailAddress = "kyronode@gmail.com";

  return (
    <footer className="bg-zinc-950 mt-20 border-t border-white/12">
      <div className="container container mx-auto max-w-screen-xl px-4 pt-8 pb-20 flex justify-between items-center text-zinc-300">
        {/* Copyright */}
        <p>Copyright © 2024 Kyronode. All Rights Reserved.</p>
        {/* Navigation & Contact Us */}
        <div className="flex gap-8">
          <div className="flex flex-col gap-1">
            <p className="font-bold">Navigation</p>
            <Link href={"/services"}>Services</Link>
            <Link href={"/explorer"}>Explorer</Link>
          </div>
          <div className="flex flex-col gap-1">
            <p id="contact" className="font-bold">
              Contact Us
            </p>
            <Link href={`https://wa.me/${whatsappNumber}`} target="_blank">
              {whatsappNumber}
            </Link>
            <Link href={`mailto:${emailAddress}`} target="_blank">
              {emailAddress}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
