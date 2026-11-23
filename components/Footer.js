import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Creators", href: "/creators" },
    { name: "About", href: "/about" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#08060e] text-white">
      {/* Animated Top Gradient Glow Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-75 animate-pulse" />

      {/* Ambient Background Aura */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-56 w-[500px] rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center text-center">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-1 text-2xl font-extrabold tracking-tight"
          >
            <span className="transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
              <img className="p-1" width="50" height="50" src="https://img.icons8.com/keek/100/espresso-cup.png" alt="espresso-cup" />

            </span>
            <span>
              Brew
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Up
              </span>
            </span>
          </Link>

          {/* Animated Tagline */}
          <p className="mt-4 font-serif text-lg md:text-xl italic text-slate-300">
            Together, let&apos;s keep creativity alive.{" "}
            <span className="inline-block text-fuchsia-400 animate-pulse">♡</span>
          </p>

          {/* Navigation Links with Sliding Underline */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-400">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative py-1 transition-colors duration-200 hover:text-white"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Trending Status Pill */}

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} BrewUp. All rights reserved.</p>
          <p className="text-slate-500">
            Crafted with{" "}
            <span className="text-purple-400">passion</span> for independent creators
          </p>
        </div>
      </div>
    </footer>
  );
}