"use client";

import { Lexend } from "next/font/google";
import "./globals.css";
import "./globalicons.css"; //
import Navbar from "@/components/navbar";

const lexend = Lexend({ subsets: ["latin"] });

const metadata = {
  title: "Deramaa",
  description: "Makes Rental easy pissy!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>

      <body className={lexend.className}>
        <div className="content w-">
          {<Navbar />}
          {children}
        </div>
      </body>
    </html>
  );
}
