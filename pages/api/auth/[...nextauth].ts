import NextAuth from "next-auth";
import LineProvider from "next-auth/providers/line";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID!, // channel Id
      clientSecret: process.env.LINE_CLIENT_SECRET!,
    }),

    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin",
  },
});
