import Link from "next/link";
import { Section } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export default function Home() {
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
				<div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4">
					<Link
						href={"/"}
						className={cn(buttonVariants({ size: "sm" }))}
					>
						Create a free account
					</Link>
					<Link
						href={"/"}
						className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
					>
						Sign in
					</Link>
				</div>
			</Section>
		</>
	);
}
