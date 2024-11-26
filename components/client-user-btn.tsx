"use client";

import {
	CastleIcon,
	GemIcon,
	LogOutIcon,
	UserCircleIcon,
	UserIcon,
} from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";

import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";

/**
 * A user button that can be rendered as client component.
 */
export const UserBtn: React.FC = () => {
	const { data: session } = useSession();

	if (!session) {
		return <span className="font-medium muted">Not authorized</span>;
	}
  
	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				className={buttonVariants({
					variant: "ghost",
					className: "[&_svg]:size-5",
				})}
			>
				Account
				{session.user.image ? (
					<span>img</span>
				) : (
					<UserCircleIcon className="text-muted-foreground" />
				)}
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
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
				<DropdownMenuItem onClick={() => signOut()}>
					<LogOutIcon className="text-muted-foreground" />
					<span>Sign out</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};