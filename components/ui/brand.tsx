import Link from "next/link";
import React from "react";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/focuses";

export const Brand: React.FC<{
	asChild?: "link" | "div";
	href?: string;
}> = ({ asChild = "link", href }) => {
	if (asChild === "link") {
		return (
			<Link
				href={href ?? "/"}
				className={cn(
					"rounded-md transition-colors p-1 font-semibold text-xl tracking-tight",
					focusRing
				)}
			>
				I💖Thumbnails
			</Link>
		);
	}

	if (asChild === "div") {
		return (
			<div
				className={cn("select-none p-1 font-semibold text-xl tracking-tight")}
			>
				I💖Thumbnails
			</div>
		);
	}

	return null;
};
