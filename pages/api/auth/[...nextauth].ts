import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import models from '@models/index';
import dbConnect from 'db/config/index';

const User = models.User;

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'Användarnamn', type: 'text' },
        password: { label: 'Lösenord', type: 'password' },
      },
      async authorize(credentials, req) {
        await dbConnect();
        const user = await User.findOne({
          username: credentials.username,
        }).exec();
        if (user.password === credentials.password) {
          // only return select field from user;
          return user.toObject();
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // user is undefined after login
        token.user = user;
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
  theme: {
    colorScheme: 'light',
    brandColor: '#ff0000',
    logo: 'http://localhost:3000/logo.png',
  },
  pages: {
    signIn: '/auth/signin',
  },
};

export default NextAuth(authOptions);
