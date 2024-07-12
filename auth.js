import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // session: {
    //   user: {
    //   name: 'Tommy Kung',
    //   email: 'kungchihchia@gmail.com',
    //   image: 'https://lh3.googleusercontent.com/a/ACg8ocKsZgTPLvxOfs4DvDgM1QZQUWyhu9X9PKriyR0Eg7x81JGX6w=s96-c'
    // },
    //   expires: '2024-08-09T13:25:24.923Z'
    // }
    // token : {
    //   name: 'Tommy Kung',
    //   email: 'kungchihchia@gmail.com',
    //   picture: 'https://lh3.googleusercontent.com/a/ACg8ocKsZgTPLvxOfs4DvDgM1QZQUWyhu9X9PKriyR0Eg7x81JGX6w=s96-c',
    //   sub: 'b85bd5b3-b51d-49c3-b1d5-b74e783c4568',
    //   iat: 1720617907,
    //   exp: 1723209907,
    //   jti: 'a1385849-f734-41e7-bc35-45e2e82b218d'
    // }
    async session({ session, token }) {
      return session;
      },
    },
  pages: {
    signIn: "/signin",
  },
});

