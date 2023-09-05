import { DefaultSession, NextAuth } from "next-auth";
import { UsersResponse } from "@/interfaces/usersResponse";
import { LoginResponse } from "@/interfaces/loginInterface";

declare module "next-auth" {
  interface Session {
    user: LoginResponse;
  }
}
