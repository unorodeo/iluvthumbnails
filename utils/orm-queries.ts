import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { signUpSchema } from "@/lib/zod/auth";
import { users } from "@/models/schema/auth";
import { z } from "zod";

export const getAccount = async (email: string) => {
	return db.query.users.findFirst({
		where: eq(users.email, email),
	});
};

export const createAccount = async (
	data: Omit<z.infer<typeof signUpSchema>, "confirm">
) => {
	return db.insert(users).values({
		name: data.name,
		email: data.email,
		password: data.password,
	});
};
