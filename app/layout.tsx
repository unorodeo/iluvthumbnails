import "@/styles/globals.css";

import { geistMono, geistSans } from "@/lib/fonts";

import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
	title: {
		template: "%s | I💖thumbnails",
		default: "I💖thumbnails | Generated unqiue thumbnails for your projects",
	},
	description: "Generated unqiue thumbnails for your projects.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body
				className={cn(
					"font-geist-sans antialiased",
					geistSans.variable,
					geistMono.variable
				)}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}

