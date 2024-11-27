import { Card, CardFooter, CardHeader } from "@/components/ui/card";

import { CircleArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/focuses";

interface Preset {
	src: string;
	label: string;
}
interface Props {
	data: Preset;
	preset?: boolean;
	setPreset?: () => void;
}

export const Preset: React.FC<Props> = ({ data, preset, setPreset }) => {
	return (
		<Link
			href={"#"}
			className={cn("rounded-md ring-offset-2", focusRing)}
		>
			<Card className="border-none shadow-none hover:bg-muted dark:bg-muted/20 dark:hover:bg-muted/50">
				<CardHeader>
					<div
						className={cn("relative rounded shadow-sm min-h-44", {
							"ring-2 ring-offset-background ring-offset-2 ring-blue-500":
								preset,
						})}
					>
						<Image
							src={data.src}
							alt={`${data.label} preset cover`}
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							className="object-cover w-full h-auto rounded"
							priority
						/>
					</div>
				</CardHeader>
				<CardFooter>
					<div className="inline-flex items-center gap-2 text-sm font-medium">
						{data.label}
						<CircleArrowRightIcon className="-rotate-45 text-muted-foreground size-4" />
					</div>
				</CardFooter>
			</Card>
		</Link>
	);
};
