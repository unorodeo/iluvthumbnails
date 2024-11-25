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
import { SignInForm } from "@/components/forms/auth/sign-in-form";
import { auth } from "@/lib/auth";
import { buttonVariants } from "@/components/ui/button";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: "Sign in",
};

export default async function SignIn() {
	const session = await auth();

	if (session?.user) {
		redirect("/studio");
	}

	return (
		<Section>
			<Card className="border-none shadow-none">
				<CardHeader>
					<CardTitle>Sign in to Account</CardTitle>
					<CardDescription>Enter credentials to gain access</CardDescription>
				</CardHeader>
				<CardContent>
					<SignInForm />
				</CardContent>
				<CardFooter className="justify-center">
					<Link
						href={"/sign-up"}
						className={buttonVariants({ variant: "link", size: "sm" })}
					>
						Do not have an account? Sign up
					</Link>
				</CardFooter>
			</Card>
		</Section>
	);
}
