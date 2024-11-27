import { Section } from "@/components/ui/section";
import { auth } from "@/lib/auth";
import { getCredits } from "@/utils/orm-queries";
import { type Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: "Studio",
};

export default async function Studio() {
	const session = await auth();

	if (!session) {
		redirect("/sign-in");
	}

	const data = await getCredits(session.user.id);

	return (
		<>
			<Section>
				<hgroup className="space-y-6">
					<h1>Welcome to Studio</h1>
					<p className="lead">
						Start creating unique thumbnails. You currently have{" "}
						<span className="font-medium text-primary">{data?.credits}</span>{" "}
						credits.
					</p>
				</hgroup>
			</Section>
			<Section>
				{data?.credits! >= 1 ? (
					<div>thumbnails creator</div>
				) : (
					<div>buy more credits</div>
				)}
			</Section>
		</>
	);
}
