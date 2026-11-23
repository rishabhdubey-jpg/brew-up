
"use client";

import React, { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const providers = [
  { id: "google", name: "Google", icon: "G", color: "text-red-500" },
  { id: "linkedin", name: "LinkedIn", icon: "in", color: "text-blue-600" },
  { id: "twitter", name: "Twitter", icon: "𝕏", color: "text-sky-500" },
  { id: "facebook", name: "Facebook", icon: "f", color: "text-blue-700" },
  { id: "github", name: "GitHub", icon: "⌘", color: "text-black" },
  { id: "apple", name: "Apple", icon: "●", color: "text-black" },
];

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState("");

  useEffect(() => {
    document.title = "Login - BrewUp";

    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  const handleLogin = async (provider) => {
    try {
      setLoading(provider);

      await signIn(provider, {
        callbackUrl: "/dashboard",
      });
    } catch (error) {
      console.error("Login error:", error);
      setLoading("");
    }
  };

  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-[#08060e] px-4 py-16 text-white">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#15121e] p-8 shadow-2xl">

        <div className="mb-8 text-center">
          <div className="mb-4 text-5xl">☕</div>

          <h1 className="text-3xl font-extrabold">
            Welcome to <span className="text-purple-500">BrewUp</span>
          </h1>

          <p className="mt-3 text-gray-400">
            Login to support your favourite creators.
          </p>
        </div>

        <div className="flex flex-col gap-3">

          {providers.map((provider) => (
            <button
              key={provider.id}
              onClick={() => handleLogin(provider.id)}
              disabled={loading !== ""}
              className="flex w-full items-center justify-center gap-4 rounded-xl border border-gray-300 bg-white px-5 py-3.5 font-semibold text-gray-900 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className={`w-7 text-xl font-extrabold ${provider.color}`}>
                {provider.icon}
              </span>

              <span>
                {loading === provider.id
                  ? "Connecting..."
                  : `Continue with ${provider.name}`}
              </span>
            </button>
          ))}

        </div>

        <p className="mt-7 text-center text-sm text-gray-500">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>

        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-sm text-purple-400 transition hover:text-purple-300"
          >
            ← Back to Home
          </a>
        </div>

      </div>
    </main>
  );
}
