import React, { ReactNode } from "react";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/components/themes";
import { Toaster } from "@/components/ui/toaster";

export const Providers: React.FC<{
	children: ReactNode;
}> = ({ children }) => {
	return (
		<SessionProvider>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				{children}
				<Toaster />
			</ThemeProvider>
		</SessionProvider>
	);
};
