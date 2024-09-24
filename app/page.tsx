"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// import Image from "next/image";
import Navbar from "@/components/navbar";
export default function Home() {
  const Login = true;
  const router = useRouter();
  useEffect(() => {
    if (!Login) router.push("/login");
  }, [router, Login]);

  return (
    <main className="main-body-container">
      <Navbar />
      <h1>This is the main page after login</h1>
    </main>
  );
}
