"use server"

import {
	CastleIcon,
	GemIcon,
	LogOutIcon,
	UserIcon,
} from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth, signOut } from "@/lib/auth";

import Avatar from "boring-avatars";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/focuses";

/**
 * A user button that can be rendered as server component
 */
export const UserBtn: React.FC = async () => {
	const session = await auth();

	if (!session) {
		return <span className="font-medium muted">Not authorized</span>;
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				className={cn(
					// base
					"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
					// color
					"hover:bg-accent hover:text-accent-foreground",
					// size
					"h-9 w-9",
					// focus
					focusRing
				)}
			>
				{session.user.image ? (
					<span>img</span>
				) : (
					<Avatar
						name={session.user.name as string}
						variant="beam"
						size={24}
					/>
				)}
			</DropdownMenuTrigger>
			<DropdownMenuContent className="min-w-48">
				<DropdownMenuItem asChild>
					<Link href={"/studio"}>
						<CastleIcon className="text-muted-foreground" />
						<span>Studio</span>
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href={"/studio/profile"}>
						<UserIcon className="text-muted-foreground" />
						<span>Profile</span>
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href={"/studio/billing"}>
						<GemIcon className="text-muted-foreground" />
						<span>Billing</span>
					</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<form
					action={async () => {
						"use server";
						await signOut();
					}}
				>
					<DropdownMenuItem asChild>
						<button
							type="submit"
							className="w-full"
						>
							<LogOutIcon className="text-muted-foreground" />
							<span>Sign out</span>
						</button>
					</DropdownMenuItem>
				</form>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
