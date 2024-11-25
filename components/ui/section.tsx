import React from "react";
import { cn } from "@/lib/cn";

export const Section: React.FC<
	React.ComponentPropsWithoutRef<"section"> & {
		bleed?: boolean | undefined;
	}
> = ({ className, children, bleed, ...props }) => {
	return (
		<section
			className={cn(
				"max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-12",
				{
					"max-w-full py-4 md:py-10": bleed,
				},
				className
			)}
			{...props}
		>
			{children}
		</section>
	);
};
