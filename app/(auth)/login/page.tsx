"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

async function LoginPage() {
  // ths page will be having all those ui and logic to ensure the functioning of reposive logging page
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      console.log(res);

      route.push("/");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} className="text-black">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" className="">
          Login
        </button>
      </form>
    </main>
  );
}

export default LoginPage;
