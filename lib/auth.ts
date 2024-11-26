import NextAuth, { CredentialsSignin, type DefaultSession } from "next-auth";

import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/lib/db";
import { env } from "@/lib/env";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "@/lib/zod/auth";
import { getAccount } from "@/utils/orm-queries";
import { ZodError } from "zod";
import { compare } from "bcryptjs";

declare module "next-auth" {
	interface Session extends DefaultSession {
		user: {
			id: string;
		} & DefaultSession["user"];
	}
}

export const { handlers, signIn, signOut, auth } = NextAuth({
	callbacks: {
		jwt: ({ token, user }) => {
			if (user) {
				token.id = user.id;
			}
			return token;
		},
		session: ({ session, token }) => {
			session.user.id = token.id as string;
			return session;
		},
	},
	adapter: DrizzleAdapter(db),
	providers: [
		Credentials({
			credentials: {
				email: {},
				password: {},
			},
			authorize: async (credentials) => {
				try {
					const { email, password } = await signInSchema.parseAsync(
						credentials
					);

					const user = await getAccount(email);

					if (!user) {
						throw new CredentialsSignin("Account not found");
					}

					const pass = await compare(password, user.password as string);

					if (!pass) {
						return null;
					}

					return user;
				} catch (error) {
					if (error instanceof ZodError) {
						return null;
					}
				}
				return null;
			},
		}),
	],
	secret: env.AUTH_SECRET,
	pages: {
		signIn: "/sign-in",
	},
	session: {
		strategy: "jwt",
	},
	debug: process.env.NODE_ENV === "development",
});
