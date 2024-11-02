"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react"; // import Image from "next/image";
import SearchAndFilters from "@/components/searchWithFilters";
import Hero from "@/components/hero";
import { SearchProvider } from "@/app/context/searchLocation";

export default function Home() {
  const SignIn = true;
  const router = useRouter();
  useEffect(() => {
    if (!SignIn) router.push("/signin");
  }, [router, SignIn]);

  return (
    <main className="main-body-container">
      <SearchProvider>
        <SearchAndFilters />

        <Hero />
      </SearchProvider>
    </main>
  );
}
