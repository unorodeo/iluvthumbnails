import { Brand } from "@/components/ui/brand";
import { Credits } from "@/components/features/credits";
import { LoaderIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import { ThemeBtn } from "@/components/theme-btn";
import { UserBtn } from "@/components/features/user-btn";

export const Header: React.FC = () => {
	return (
		<header className="sticky inset-x-0 top-0 border-b bg-background">
			<nav className="flex items-center justify-between max-w-6xl px-4 mx-auto md:px-8 h-14">
				<Brand href="/studio" />

				<div className="flex items-center gap-4">
					<Suspense fallback={<LoaderIcon className="animate-spin size-5" />}>
						<Credits />
					</Suspense>
					<Suspense fallback={<LoaderIcon className="animate-spin size-5" />}>
						<UserBtn />
					</Suspense>
					<Separator orientation="vertical" className="h-6 w-[2px]"/>
					<ThemeBtn />
				</div>
			</nav>
		</header>
	);
};
