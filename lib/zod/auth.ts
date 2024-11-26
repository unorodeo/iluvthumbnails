import { object, string } from "zod";

const email = string()
	.min(1, "Email must be min 1 character")
	.max(225, "Email must be max 225 characters")
	.email("Invalid email");

const password = string()
	.min(8, "Password must be min 8 characters")
	.max(25, "Password must be max 25 characters")
	.regex(
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{0,}/,
		{
			message: "Invalid password",
		}
	);

// Validations

const signInSchema = object({
	email: email,
	password: password,
});

const signUpSchema = object({
	name: string()
		.min(4, "Name must be min 4 characters")
		.max(20, "Name must be min 20 characters"),
	email: email,
	password: password,
	confirm: password,
}).refine((data) => data.password === data.confirm, {
	path: ["confirm"],
	message: "Password does not match",
});

const forgotPasswordSchema = object({
	email: email,
});

const resetPasswordSchema = object({
	password: password,
	confirm: password,
}).refine((data) => data.password === data.confirm, {
	path: ["confirm"],
	message: "Password does not match",
});

export {
	signInSchema,
	signUpSchema,
	forgotPasswordSchema,
	resetPasswordSchema,
};
