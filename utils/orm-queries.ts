import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { users } from "@/models/schema/auth";

export const getAccount = async (email: string) => {
	return db.query.users.findFirst({
		where: eq(users.email, email),
	});
};
