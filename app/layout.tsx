"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Deramaa",
  description: "Makes Rental easy pissy!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showNavbar = pathname !== "/login";
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>

      <body className={inter.className}>
        {showNavbar && <Navbar />}
        {children}
      </body>
    </html>
  );
}
