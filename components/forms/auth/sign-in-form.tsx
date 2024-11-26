"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Loader2Icon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/cn";
import { signIn } from "next-auth/react";
import { signInSchema } from "@/lib/zod/auth";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const SignInForm: React.FC = () => {
	const { toast } = useToast();
	const router = useRouter();

	const form = useForm<z.infer<typeof signInSchema>>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	async function onSubmit(values: z.infer<typeof signInSchema>) {
		const result = await signIn("credentials", {
			email: values.email,
			password: values.password,
			redirectTo: "/studio",
			redirect: false,
		});

		if (result?.error) {
			toast({
				description: "Invalid email/password",
				variant: "destructive",
			});
		}

		if (result?.ok) {
			form.reset();
			toast({
				description: "Sign in complete",
				variant: "successive",
			});
			router.push("/studio");
		} else {
			toast({
				description: "Failed to Sign in",
				variant: "destructive",
			});
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid gap-4 min-w-[20rem]"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="sr-only">Email address</FormLabel>
							<FormControl>
								<Input
									type="email"
									placeholder="Enter email address"
									variant={"secondary"}
									autoFocus
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="sr-only">Password</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="Enter password"
									variant={"secondary"}
									{...field}
								/>
							</FormControl>
							<FormMessage />
							<div className="flex justify-end">
								<Link
									href={"/forgot-password"}
									className={cn(
										buttonVariants({ variant: "mute", size: "xs" })
									)}
								>
									Forgot password?
								</Link>
							</div>
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					className="w-full"
					aria-disabled={form.formState.isSubmitting}
					disabled={form.formState.isSubmitting}
				>
					{form.formState.isSubmitting ? (
						<>
							Please wait
							<Loader2Icon className="animate-spin" />
						</>
					) : (
						<>
							Continue
							<Icons.TriangleRightIcon />
						</>
					)}
				</Button>
			</form>
		</Form>
	);
};
