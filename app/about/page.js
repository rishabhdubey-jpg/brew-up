import Link from "next/link";
export const dynamic = "force-dynamic";

export default function About() {
  const stats = [
    { value: "0%", label: "Platform Friction" },
    { value: "Instant", label: "Razorpay Payouts" },
    { value: "100%", label: "Creator Owned" },
    { value: "24/7", label: "Global Fan Support" },
  ];

  const features = [
    {
      badge: "DIRECT FUNDING",
      title: "Support Without Middlemen",
      desc: "Fans send support directly to your connected Razorpay account with zero complicated approval queues.",
    },
    {
      badge: "CUSTOM IDENTITY",
      title: "Your Own Creator Space",
      desc: "Claim a clean brewup link, upload your custom banner and avatar, and showcase your top supporters live.",
    },
    {
      badge: "COMMUNITY FIRST",
      title: "Supporter Leaderboards",
      desc: "Every coffee comes with a personalized message displayed on your public supporter wall to build real loyalty.",
    },
    {
      badge: "BUILT FOR SPEED",
      title: "One-Tap Checkout",
      desc: "Preset quick-pay amounts (₹10, ₹20, ₹30) or custom tips let fans back your work in under 10 seconds.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08060e] text-white px-6 py-20">
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-purple-600/20 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-600/15 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-purple-300 uppercase">
            Fueling Independent Creativity
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Where Fans Turn Appreciation Into{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Real Momentum
            </span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-slate-400 leading-relaxed">
            BrewUp is a modern creator-support platform built for developers, artists,
            writers, and dreamers. No paywalls, no algorithms—just direct support from
            the people who love what you make.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-md"
            >
              <div className="text-2xl md:text-3xl font-bold text-purple-400">{s.value}</div>
              <div className="mt-1 text-xs md:text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-24">
          <h2 className="text-center text-3xl font-bold">How BrewUp Works</h2>
          <p className="mt-2 text-center text-slate-400">
            Go from signup to receiving your first coffee in three simple steps.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Create Your Page",
                desc: "Sign in with Google or GitHub, set your handle, and add your Razorpay credentials in your dashboard.",
              },
              {
                step: "02",
                title: "Share Your Link",
                desc: "Drop your BrewUp profile link in your YouTube descriptions, GitHub READMEs, or Instagram bio.",
              },
              {
                step: "03",
                title: "Get Supported",
                desc: "Receive instant contributions and heartfelt messages directly on your creator leaderboard.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-8 hover:border-purple-500/50 transition"
              >
                <span className="text-4xl font-black text-purple-500/30 group-hover:text-purple-400/60 transition">
                  {item.step}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why BrewUp Bento Grid */}
        <div className="mt-24">
          <h2 className="text-center text-3xl font-bold">Built Different for Creators</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-[#100c1a] p-8 hover:border-purple-500/40 transition"
              >
                <span className="text-xs font-bold tracking-wider text-purple-400">
                  {f.badge}
                </span>
                <h3 className="mt-3 text-xl font-bold">{f.title}</h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-[#150e26] to-indigo-900/40 p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to launch your page?</h2>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto">
            Join the growing community of creators turning passion projects into sustainable work.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/login"
              className="rounded-full bg-purple-600 px-8 py-3 font-semibold text-white hover:bg-purple-500 shadow-[0_0_25px_rgba(147,51,234,0.45)] transition"
            >
              Start Your Page
            </Link>
            <Link
              href="/creators"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              Browse Creators
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}