import Link from "next/link";
import { Section } from "@/components/ui/section";
import { auth } from "@/lib/auth";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { redirect } from "next/navigation";

export default async function Home() {
	const session = await auth();

	if (session?.user) {
		redirect("/studio");
	}
	
	return (
		<>
			<Section className="mt-24">
				<hgroup className="md:text-center">
					<h1>I💖thumbnails</h1>
					<div className="mt-6">
						<p className="lead">
							Generate unique thumbnails for your projects.
						</p>
					</div>
				</hgroup>
			</Section>
			<Section>
				<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center">
					<Link
						href={"/sign-up"}
						className={cn(buttonVariants({ size: "sm" }))}
					>
						Create a free account
					</Link>
					<Link
						href={"/sign-in"}
						className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
					>
						Sign in
					</Link>
				</div>
			</Section>
		</>
	);
}
