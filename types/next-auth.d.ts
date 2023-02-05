import NextAuth, { DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    user?: {
      _id: string;
      username: string;
      name: string;
    };
  }
}
declare module 'next-auth' {
  interface Session {
    user: {
      _id: string;
      username: string;
      name: string;
    };
  }
  interface User {
    _id: string;
    username: string;
    name: string;
  }
}
