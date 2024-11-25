import React, { ReactNode } from "react";

export const Providers: React.FC<{
	children: ReactNode;
}> = ({ children }) => {
	return <>{children}</>;
};
