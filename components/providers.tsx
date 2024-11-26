import React, { ReactNode } from "react";

import { Toaster } from "@/components/ui/toaster";

export const Providers: React.FC<{
	children: ReactNode;
}> = ({ children }) => {
	return (
		<>
			{children}
			<Toaster />
		</>
	);
};
