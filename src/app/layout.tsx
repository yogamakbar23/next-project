import "@/app/globals.css";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "Kyronode",
  description: "Supporting Decentralized Networks with Reliable Infrastructure",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body
        className={`${gabarito.className} bg-color-dark`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
