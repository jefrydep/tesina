import { LoginInterface, LoginResponse } from "@/interfaces/loginInterface";
import { UsersResponse } from "@/interfaces/usersResponse";
import NextAuth, { RequestInternal } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        usuario: {
          label: "cidusuario",
          type: "text",
          placeholder: "45784578@gmail.com",
        },
        password: {
          label: "ccpassword",
          type: "text",
          placeholder: "************",
        },
         
      },

      async authorize(credentials) {
        const { documentNumber, password } = credentials as any;
        const res = await fetch(
          "http://localhost:3000/api/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify( {
              documentNumber,password
            }),
          }
        );
       
        const user: UsersResponse | any = await res.json();
        console.log(user);
        if (res.ok && user) {
          // if (user) {
          return user;
        } else {
          return null;
        }
      },
    }), 
  ],

  callbacks: {
    async jwt({ token, account, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      return { ...token, ...user };
    },

    async session({ session, token, user }) {
      session.user = token as any;

      return session;
    },
  },

  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };