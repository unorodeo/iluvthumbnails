import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import { type Metadata } from "next";
import { Section } from "@/components/ui/section";
import { auth } from "@/lib/auth";
import { buttonVariants } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { SignUpForm } from "@/components/forms/auth/sign-up-form";

export const metadata: Metadata = {
	title: "Sign up",
};

export default async function SignUp() {
	const session = await auth();

	if (session?.user) {
		redirect("/studio");
	}

	return (
		<Section>
			<Card className="border-none shadow-none">
				<CardHeader>
					<CardTitle>Create an Account</CardTitle>
					<CardDescription>Enter credentials to gain access</CardDescription>
				</CardHeader>
				<CardContent>
					<SignUpForm />
				</CardContent>
				<CardFooter className="justify-center">
					<Link
						href={"/sign-in"}
						className={buttonVariants({ variant: "link", size: "sm" })}
					>
						Have an account? Sign in
					</Link>
				</CardFooter>
			</Card>
		</Section>
	);
}
