import Link from "next/link";
import connectDb from "@/db/connectDb";
import User from "@/models/User";

export const dynamic = "force-dynamic";

const categories = [
  {
    name: "Tech & Open Source",
    desc: "Full-stack devs, indie hackers, and tool builders.",
    accent: "from-purple-600/30 to-indigo-600/10 border-purple-500/30",
    tag: "Popular",
  },
  {
    name: "Digital Art & Design",
    desc: "Illustrators, UI designers, and 3D concept artists.",
    accent: "from-fuchsia-600/30 to-pink-600/10 border-fuchsia-500/30",
    tag: "Trending",
  },
  {
    name: "Video & Streaming",
    desc: "YouTubers, educators, and live gaming streamers.",
    accent: "from-blue-600/30 to-cyan-600/10 border-blue-500/30",
    tag: "Active",
  },
  {
    name: "Writing & Newsletters",
    desc: "Storytellers, tech bloggers, and independent journalists.",
    accent: "from-emerald-600/30 to-teal-600/10 border-emerald-500/30",
    tag: "New",
  },
  {
    name: "Music & Podcasts",
    desc: "Indie producers, vocalists, and late-night podcasters.",
    accent: "from-amber-600/30 to-orange-600/10 border-amber-500/30",
    tag: "Featured",
  },
  {
    name: "Education & Tutorials",
    desc: "Mentors teaching coding, finance, and creative skills.",
    accent: "from-violet-600/30 to-purple-600/10 border-violet-500/30",
    tag: "Growing",
  },
];

export default async function Explore() {
  await connectDb();
  const creators = await User.find({}).limit(3).lean();
  const totalCreators = await User.countDocuments();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08060e] text-white px-6 py-16">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-80 w-[550px] rounded-full bg-purple-700/20 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest text-purple-400 uppercase">
              Discover BrewUp
            </span>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold">
              Explore Creative Worlds
            </h1>
            <p className="mt-3 text-slate-400 max-w-xl">
              Browse niches, discover rising talent, and find your next favourite creator to back.
            </p>
          </div>

          <Link
            href="/creators"
            className="self-start md:self-auto rounded-full border border-purple-500/40 bg-purple-500/10 px-6 py-2.5 text-sm font-semibold text-purple-300 hover:bg-purple-600 hover:text-white transition"
          >
            View All {totalCreators} Creators →
          </Link>
        </div>

        {/* Category Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href="/creators"
              className={`group rounded-2xl border bg-gradient-to-br p-6 transition hover:-translate-y-1 ${cat.accent}`}
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-slate-200">
                  {cat.tag}
                </span>
                <span className="text-slate-400 group-hover:text-white group-hover:translate-x-1 transition">
                  →
                </span>
              </div>
              <h2 className="mt-5 text-xl font-bold text-white">{cat.name}</h2>
              <p className="mt-2 text-sm text-slate-300/80">{cat.desc}</p>
            </Link>
          ))}
        </div>

        {/* Rising Creators Spotlight */}
        {creators.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Spotlight Creators</h2>
              <Link href="/creators" className="text-sm text-purple-400 hover:underline">
                See everyone
              </Link>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {creators.map((creator) => (
                <Link
                  key={creator._id.toString()}
                  href={`/${creator.username}`}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#100c1a] p-5 hover:border-purple-500/50 transition"
                >
                  <img
                    src={creator.profilepic || "/avatar.gif"}
                    alt={creator.username}
                    className="h-14 w-14 shrink-0 rounded-full object-cover border-2 border-purple-500"
                  />
                  <div className="min-w-0">
                    <h3 className="truncate font-semibold text-white">
                      {creator.name || creator.username}
                    </h3>
                    <p className="truncate text-sm text-purple-400">@{creator.username}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}