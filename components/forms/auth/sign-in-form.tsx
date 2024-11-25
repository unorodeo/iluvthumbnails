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
import React from "react";
import { cn } from "@/lib/cn";
import { signInSchema } from "@/lib/zod/auth";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const SignInForm: React.FC = () => {
	const form = useForm<z.infer<typeof signInSchema>>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function onSubmit(values: z.infer<typeof signInSchema>) {
		console.log(values);
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
				>
					Continue
					<Icons.TriangleRightIcon />
				</Button>
			</form>
		</Form>
	);
};
