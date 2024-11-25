import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";

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
				<div className="grid place-items-center">
					<div className="w-72">
						<div className="grid gap-2">
							<Input
								type="email"
								placeholder="Enter email address"
							/>
							<Button
								type="button"
								variant={"secondary"}
								size={"sm"}
								className="w-full"
							>
								Get magic link
								<Icons.TriangleRightIcon />
							</Button>
						</div>
					</div>
				</div>
			</Section>
		</>
	);
}
