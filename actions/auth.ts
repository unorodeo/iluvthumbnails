"use server";

import { createAccount, getAccount } from "@/utils/orm-queries";
import { genSalt, hash } from "bcryptjs";

import { env } from "@/lib/env";
import { redirect } from "next/navigation";
import { signUpSchema } from "@/lib/zod/auth";
import { z } from "zod";

export const signUp = async (values: z.infer<typeof signUpSchema>) => {
	const data = await signUpSchema.safeParseAsync(values);

	if (data.error) {
		return "Invalid data";
	}

	const { name, email, password } = data.data;

	const user = await getAccount(email);

	if (user) {
		return "Account already exists";
	}

	const salt = await genSalt(Number(env.ENCRYPT_ROUNDS));

	const pwd = await hash(password, salt);

	await createAccount({
		name: name,
		email: email,
		password: pwd,
	});

	redirect("/sign-in");
};
