import "@/app/globals.css";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "Notulensi",
  description: "Website Krypto No.1 di Indonesia",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.className} bg-color-dark`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
