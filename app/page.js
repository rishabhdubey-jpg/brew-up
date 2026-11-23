
import Link from "next/link";
export const dynamic = "force-dynamic";

const features = [
  {
    icon: "⚡",
    title: "Support Creators",
    description: "Show your love with simple and secure payments.",
    color: "text-purple-500",
  },
  {
    icon: "💎",
    title: "Unlock Perks",
    description: "Get exclusive content, early access & more.",
    color: "text-pink-400",
  },
  {
    icon: "👥",
    title: "Join a Community",
    description: "Be a part of a growing supportive community.",
    color: "text-orange-400",
  },
  {
    icon: "📊",
    title: "Help Them Grow",
    description: "Your support helps creators do more of what they love.",
    color: "text-emerald-400",
  },
];

function CoffeeIllustration() {
  return (
    <div className="relative flex h-[350px] w-full items-center justify-center md:h-[450px]">

      {/* Orbit */}
      <div className="absolute h-32 w-[280px] rotate-[-17deg] rounded-[50%] border-[7px] border-purple-600 shadow-[0_0_25px_#9333ea] sm:w-[400px] md:h-36 md:w-[470px]" />

      {/* Coffee cup */}
      <div className="relative z-10 -rotate-6">
        <div className="relative flex h-[200px] w-[205px] items-center justify-center rounded-[35%_35%_42%_42%] bg-gradient-to-br from-white via-[#e9dcd8] to-[#a78c83] shadow-[15px_25px_45px_rgba(0,0,0,0.6)] md:h-[245px] md:w-[250px]">

          {/* Coffee */}
          <div className="absolute left-[5%] top-[8%] h-[85px] w-[90%] rounded-[50%] border-[9px] border-[#d9c2b2] bg-gradient-to-br from-[#f5d4a6] via-[#a65b25] to-[#5b2c16] shadow-inner md:h-[95px]">
            <div className="absolute inset-3 flex items-center justify-center rounded-full border-2 border-[#f5e3c5] text-5xl text-[#fff0dc]">
              ♡
            </div>
          </div>

          {/* Face */}
          <div className="absolute top-[54%] flex items-center gap-5 md:gap-8">
            <div className="h-4 w-4 rounded-full bg-pink-300" />
            <div className="flex gap-5">
              <span className="text-3xl text-black">⌣</span>
              <span className="text-3xl text-black">⌣</span>
            </div>
            <div className="h-4 w-4 rounded-full bg-pink-300" />
          </div>

          {/* Handle */}
          <div className="absolute -right-[55px] top-[35%] -z-10 h-[100px] w-[85px] rounded-r-[50%] border-[20px] border-[#c9b1a7] md:-right-[65px] md:h-[115px] md:w-[105px]" />
        </div>
      </div>

      {/* Decorations */}
      <span className="absolute left-[5%] top-[10%] text-5xl text-white">〰</span>
      <span className="absolute right-[5%] top-[12%] text-3xl text-purple-500">✦</span>
      <span className="absolute bottom-[5%] left-[12%] text-4xl text-purple-500">✦</span>
      <span className="absolute bottom-[15%] right-[8%] text-4xl text-orange-300">✦</span>
      <span className="absolute right-0 top-[45%] text-4xl text-white">♡</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08060e] text-white">

      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-24 -top-28 h-64 w-64 rounded-full bg-purple-800/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-[35%] h-80 w-80 rounded-full bg-purple-900/30 blur-3xl" />

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-[1500px] items-center gap-8 px-6 pb-12 pt-12 md:grid-cols-2 md:px-12 md:pt-16">

        {/* Hero content */}
        <div className="relative z-10">

          <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl xl:text-[92px]">
            Fuel Creators.
            <span className="block bg-gradient-to-r from-purple-600 via-fuchsia-400 to-orange-300 bg-clip-text text-transparent">
              Keep Ideas Alive.
            </span>
          </h1>

          <p className="mt-7 max-w-[620px] text-lg leading-9 text-gray-300 md:text-2xl">
            Support your favourite creators with a coffee,
            unlock exclusive perks, and be part of their journey.
            <span className="ml-2 text-3xl text-white">♡</span>
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">

            <Link
              href="/explore"
              className="brew-btn brew-btn-primary min-h-[68px] px-3 py-5 text-base text-white sm:text-lg"
            >
              <span><img className="p-1" width="50" height="50" src="https://img.icons8.com/keek/100/espresso-cup.png" alt="espresso-cup" />
              </span>
              <span>Support a Creator</span>
              <span>→</span>
            </Link>

            <Link
              href="/creators"
              className="brew-btn brew-btn-secondary min-h-[68px] px-8 py-5 text-base text-white sm:text-lg"
            >
              Explore Creators
            </Link>

          </div>
        </div>

        {/* Coffee illustration */}
        <div className="relative">
          <CoffeeIllustration />

          <p className="absolute right-0 top-0 hidden -rotate-6 text-center font-serif text-2xl italic leading-9 text-white md:block">
            A little support.
            <br />
            A lot of creativity.
            <br />
            <span className="text-orange-300">〰</span>
          </p>
        </div>

      </section>

      {/* Feature cards */}
      <section className="relative z-10 mx-auto grid max-w-[1500px] grid-cols-1 gap-6 px-6 pb-20 md:grid-cols-2 md:px-12 xl:grid-cols-4">

        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#171420] to-[#100e18] px-8 py-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-purple-500/40 md:px-10"
          >
            <div className={`mb-5 text-5xl ${feature.color}`}>
              {feature.icon}
            </div>

            <h3 className="text-xl font-bold text-white md:text-2xl">
              {feature.title}
            </h3>

            <p className="mt-3 text-base leading-7 text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}

      </section>

    </main>
  );
}
