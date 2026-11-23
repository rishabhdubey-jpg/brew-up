"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const [search, setSearch] = useState("");

  // Show center nav links & search only on main public pages
  const mainRoutes = ["/", "/explore", "/creators", "/about"];
  const showNavLinks = mainRoutes.includes(pathname);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Creators", href: "/creators" },
    { name: "About", href: "/about" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/${search.trim()}`);
      setSearch("");
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-[#08060e]/90 backdrop-blur-md border-b border-white/10 px-6 py-4 text-white">
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight">
        <span className="flex justify-center items-center">
          <img className="p-2" width="50" height="50" src="https://img.icons8.com/keek/100/espresso-cup.png" alt="espresso-cup"/>
          Brew<span className="text-purple-500">Up</span>
        </span>
      </Link>

      {/* Center Nav Links (Hidden on /login, /dashboard, and /[username]) */}
      {showNavLinks && (
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-purple-700/80 text-white shadow-[0_0_15px_rgba(147,51,234,0.5)]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}

      {/* Right Side: Search + Account */}
      <div className="flex items-center gap-4">
        {showNavLinks && (
          <form onSubmit={handleSearch} className="hidden lg:block">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search creators..."
              className="w-52 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder-slate-400 focus:border-purple-500 focus:outline-none"
            />
          </form>
        )}

        {session ? (
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              className="rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              Account ▾
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl border border-white/10 bg-[#120d1f] py-2 shadow-xl">
                <Link
                  href="/dashboard"
                  className="block px-4 py-2 text-sm text-slate-200 hover:bg-purple-600/20 hover:text-white"
                >
                  Dashboard
                </Link>
                <Link
                  href={`/${session.user.name}`}
                  className="block px-4 py-2 text-sm text-slate-200 hover:bg-purple-600/20 hover:text-white"
                >
                  Your Page
                </Link>
                <hr className="my-1 border-white/10" />
                <button
                  onClick={() => signOut()}
                  className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500/10"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            href="/login"
            className="rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;