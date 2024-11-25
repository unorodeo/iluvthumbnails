import { object, string } from "zod";

const email = string().min(1).max(225).email();

const password = string()
	.min(8)
	.max(25)
	.regex(
		/"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{0,}/,
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
