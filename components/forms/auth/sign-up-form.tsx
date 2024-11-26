"use client";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Loader2Icon } from "lucide-react";
import React from "react";
import { signUp } from "@/actions/auth";
import { signUpSchema } from "@/lib/zod/auth";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const SignUpForm: React.FC = () => {
	const { toast } = useToast();
	const form = useForm<z.infer<typeof signUpSchema>>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirm: "",
		},
	});

	async function onSubmit(values: z.infer<typeof signUpSchema>) {
		const error = await signUp(values);

		if (error) {
			toast({
				description: error,
				variant: "destructive",
			});
		} else {
			toast({
				title: "Sign up complete",
				description: "Now redirecting to sign in...",
				variant: "successive",
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
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="sr-only">Display name</FormLabel>
							<FormControl>
								<Input
									type="text"
									placeholder="Enter display name"
									variant={"secondary"}
									autoFocus
									{...field}
								/>
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
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
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirm"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="sr-only">Confirm password</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="Enter confirm password"
									variant={"secondary"}
									{...field}
								/>
							</FormControl>
							<FormMessage />
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
