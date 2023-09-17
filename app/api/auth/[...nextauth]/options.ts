import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    providers: [
        // OAuth authentication providers...
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
    ],

    // customise auth pages
    // pages: {
    //     signIn: "/auth/signin",
    //     signOut: "/auth/signout",
    // },
    // A database is optional, but required to persist accounts in a database
    // database: process.env.DATABASE_URL,
};
