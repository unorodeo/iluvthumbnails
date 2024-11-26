import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import React from "react";
import { signOut } from "@/lib/auth";

export const SignOut: React.FC<{
	asIcon?: boolean | undefined;
}> = ({ asIcon = false }) => {
	return (
		<form
			action={async () => {
				"use server";
				await signOut();
			}}
		>
			<Button
				type="submit"
				variant={"secondary"}
				size={asIcon ? "icon-sm" : "sm"}
			>
				{asIcon ? (
					<>
						<LogOutIcon className="text-muted-foreground" />
						<span className="sr-only">Sign out</span>
					</>
				) : (
					<>
						<LogOutIcon className="text-muted-foreground" />
						Sign out
					</>
				)}
			</Button>
		</form>
	);
};
