"use client";

import { CloudUploadIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import React from "react";

interface Props {
	setImageFile: (file?: File) => void;
}

export const Dropzone: React.FC<Props> = ({ setImageFile }) => {
	return (
		<div>
			<label
				htmlFor="studio-file-upload"
				className="grid p-6 border-2 border-dashed rounded-md cursor-pointer place-items-center md:p-12 bg-background hover:border-primary h-[20rem] md:h-auto"
			>
				<div className="flex items-center gap-4">
					<span className="p-4 rounded-full bg-muted">
						<CloudUploadIcon className="text-muted-foreground size-6" />
					</span>
					<h2>
						Start from scratch &mdash;{" "}
						<span className="text-muted-foreground">upload an image</span>
					</h2>
				</div>
			</label>
			<Input
				id="studio-file-upload"
				name="image"
				type="file"
				accept="image/*"
				className="hidden"
				onChange={(e) => setImageFile(e.target.files?.[0])}
				aria-hidden
			/>
		</div>
	);
};
