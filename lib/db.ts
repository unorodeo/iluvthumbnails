import * as authSchemas from "@/models/schema/auth";

import { drizzle } from "drizzle-orm/neon-http";
import { env } from "@/lib/env";

export const db = drizzle({
	connection: env.DATABASE_URL,
	schema: { ...authSchemas },
});
