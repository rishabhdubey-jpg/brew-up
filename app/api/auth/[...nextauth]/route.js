
import NextAuth from "next-auth";

import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import LinkedInProvider from "next-auth/providers/linkedin";
import TwitterProvider from "next-auth/providers/twitter";
import AppleProvider from "next-auth/providers/apple";

import connectDb from "@/db/connectDb";
import User from "@/models/User";

const handler = NextAuth({
  providers: [

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    LinkedInProvider({
      clientId: process.env.LINKEDIN_ID,
      clientSecret: process.env.LINKEDIN_SECRET,
    }),

    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
    }),

  ],

  callbacks: {
  async signIn({ user, account }) {
    if (account.provider === "github" || account.provider === "google") {
      await connectDb();
      const currentUser = await User.findOne({ email: user.email });
      if (!currentUser) {
        await User.create({
          email: user.email,
          username: user.email.split("@")[0],
        });
      }
      return true;
    }
    return false;
  },

  async session({ session }) {
    await connectDb();
    const dbUser = await User.findOne({ email: session.user.email });
    if (dbUser) {
      session.user.name = dbUser.username;
    }
    return session;
  },
}
});

export { handler as GET, handler as POST };
