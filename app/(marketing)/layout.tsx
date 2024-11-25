import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function MarketingLayout({ children }: Props) {
	return <>{children}</>;
}
