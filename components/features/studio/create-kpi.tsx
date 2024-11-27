import { Card, CardFooter, CardHeader } from "@/components/ui/card";

import { CircleArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/focuses";

interface KpiData {
	title: string;
	img: string;
}
interface Props {
	data: KpiData;
	pickedImg?: () => void;
	chosenImg?: boolean;
}

export const CreateKpi: React.FC<Props> = ({ data, pickedImg, chosenImg }) => {
	return (
		<Link
			href={"#"}
			className={cn("rounded-md ring-offset-2", focusRing)}
		>
			<Card className="border-none shadow-none hover:bg-muted dark:hover:bg-muted/20">
				<CardHeader>
					<div
						className={cn("relative rounded shadow-sm min-h-44", {
							"ring-2 ring-offset-background ring-offset-2 ring-blue-500":
								chosenImg,
						})}
					>
						<Image
							src={data.img}
							alt={`${data.title} template cover`}
							fill
							className="object-cover w-full h-auto rounded"
							priority
						/>
					</div>
				</CardHeader>
				<CardFooter>
					<div className="inline-flex items-center gap-2 text-sm font-medium">
						use template
						<CircleArrowRightIcon className="-rotate-45 text-muted-foreground size-4" />
					</div>
				</CardFooter>
			</Card>
		</Link>
	);
};
