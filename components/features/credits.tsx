import { Button } from "@/components/ui/button";
import { GemIcon } from "lucide-react";
import React from "react";
import { auth } from "@/lib/auth";
import { getCredits } from "@/utils/orm-queries";

export const Credits: React.FC = async () => {
	const session = await auth();

	if (!session) {
		return <span className="font-medium muted">Not authorized</span>;
	}

	const data = await getCredits(session.user.id);

	return (
		<Button
			type="button"
			variant={"ghost"}
			size={"sm"}
		>
			<GemIcon className="text-primary" />
			{data?.credits} credits left
		</Button>
	);
};
