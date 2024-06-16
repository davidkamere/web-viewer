
import type { Metadata } from "next";

import { Mulish } from "next/font/google";
import "./globals.css";

import { Providers } from "@/components/Providers";
import NavigationBar from "@/components/NavigationBar";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ello - Web Viewer",
  description: "Allows teachers to share our books with children",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <NavigationBar/>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
