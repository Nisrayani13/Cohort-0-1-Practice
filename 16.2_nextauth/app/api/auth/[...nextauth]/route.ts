import { NEXT_AUTH } from "@/app/lib/auth";
import NextAuth, { Awaitable, RequestInternal, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const hanlder= NextAuth(NEXT_AUTH);

export const GET = hanlder
export const POST = hanlder