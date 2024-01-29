import type { Metadata } from "next";
import { Roboto  } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/global/nav-bar";
import Footer from "@/components/global/footer";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Zack",
  description: "Programmer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>

    </html>
  );
}
