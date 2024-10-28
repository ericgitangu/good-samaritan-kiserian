// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email', type:
                        'text', placeholder: 'jsmith@example.com'
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                // Implement your authentication logic here
                const user = await prisma.user.findUnique({
                    where: { email: credentials?.email },
                });

                if (user && (await bcrypt.compare(credentials?.password as string, user.password))) {
                    return user; // Fixed: return statement should be on the same line
                }
                return null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async session({ session, token }) {
            console.log('Session callback:', { session, token });
            return session;
        },
        async redirect({ url, baseUrl }) {
            console.log('Redirect callback:', { url, baseUrl });
            return baseUrl;
        },
    },
    // events: {
    //     async signIn(message: string) {
    //         console.log('Sign in event:', message);
    //     },
    //     async signOut(message: any) {
    //         console.log('Sign out event:', message);
    //     },
    //     // ... other events
    // },
    debug: true,
});