import React, { ReactNode } from "react";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";

export const Providers: React.FC<{
	children: ReactNode;
}> = ({ children }) => {
	return (
		<SessionProvider>
			{children}
			<Toaster />
		</SessionProvider>
	);
};
