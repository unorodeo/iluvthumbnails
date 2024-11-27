import { Brand } from "./ui/brand";
import React from "react";

export const Footer: React.FC = () => {
	return (
		<footer className="mt-12 border-t bg-background">
			<nav className="flex items-center max-w-6xl px-4 py-6 mx-auto md:px-8">
				<div className="flex flex-col">
					<Brand asChild="div" />
					<p className="muted">Create unique and beautiful thumbnails.</p>
				</div>
			</nav>
		</footer>
	);
};
