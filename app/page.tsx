"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react"; // import Image from "next/image";
import Navbar from "@/components/navbar";
import SearchAndFilters from "@/components/searchWithFilters";
import Hero from "@/components/hero";
export default function Home() {
  const Login = true;
  const router = useRouter();
  useEffect(() => {
    if (!Login) router.push("/login");
  }, [router, Login]);

  return (
    <main className="main-body-container">
      <Navbar />
      <SearchAndFilters />

      <Hero />
    </main>
  );
}
