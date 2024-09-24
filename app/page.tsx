"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// import Image from "next/image";
export default function Home() {
  const Login = true;
  const router = useRouter();
  useEffect(() => {
    if (!Login) router.push("/login");
  }, [router, Login]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is the main page after login</h1>
    </main>
  );
}
