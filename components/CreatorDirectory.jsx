
"use client";

import Link from "next/link";
import { useState } from "react";

export default function CreatorDirectory({ creators = [], title = "Discover Creators", subtitle = "Find people worth supporting." }) {
  const [search, setSearch] = useState("");

  const filtered = creators.filter((creator) =>
    creator.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-[75vh] bg-[#08060e] px-6 py-16 md:px-12">
      <div className="mx-auto max-w-[1400px]">

        <div className="mb-12 text-center">
          <p className="mb-4 font-semibold uppercase tracking-[5px] text-purple-400">
            BREWUP COMMUNITY
          </p>

          <h1 className="text-5xl font-extrabold md:text-7xl">
            {title}
          </h1>

          <p className="mt-5 text-lg text-gray-400">{subtitle}</p>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search your favourite creator..."
            className="mt-8 w-full max-w-lg rounded-full border border-white/10 bg-[#171321] px-7 py-4 outline-none focus:border-purple-500"
          />
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-[#15121e] p-16 text-center">
            <div className="text-5xl">☕</div>
            <h2 className="mt-5 text-2xl font-bold">No creators found</h2>
            <p className="mt-3 text-gray-400">
              Try another search or become the first creator.
            </p>
            <Link href="/dashboard" className="mt-7 inline-block rounded-full bg-purple-600 px-7 py-3">
              Become a Creator
            </Link>
          </div>
        ) : (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((creator) => (
              <Link
                href={`/${creator.username}`}
                key={creator._id}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#15121e] transition hover:-translate-y-2 hover:border-purple-500/50"
              >
                <div className="h-36 bg-gradient-to-br from-purple-900 to-[#21152e]">
                  {creator.coverpic && (
                    <img
                      src={creator.coverpic}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>

                <div className="px-6 pb-7 text-center">
                  <img
                    src={creator.profilepic || "/default-avatar.png"}
                    alt={creator.username}
                    className="-mt-12 mx-auto h-24 w-24 rounded-full border-4 border-[#15121e] object-cover"
                  />

                  <h2 className="mt-4 text-xl font-bold">
                    @{creator.username}
                  </h2>

                  <p className="mt-2 text-sm text-gray-400">
                    Creator on BrewUp
                  </p>

                  <div className="mt-6 rounded-full bg-purple-600/20 py-3 font-semibold text-purple-300 transition group-hover:bg-purple-600 group-hover:text-white">
                    Support Creator →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
