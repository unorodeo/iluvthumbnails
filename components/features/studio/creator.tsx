"use client";

import React, { useState } from "react";

import { CreateKpi } from "./create-kpi";
import { Dropzone } from "./dropzone";
import { Section } from "@/components/ui/section";

export const Creator: React.FC = () => {
	const [pickedImg, setPickedImg] = useState<
		"style-01" | "style-02" | "style-03"
	>("style-02");
	const setImageFile = async (file?: File) => {};

	return (
		<>
			<Section className="md:py-0">
				<h2>Start with a template</h2>
				<div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
					<CreateKpi
						data={{
							title: "Anime thumbnail",
							img: "/temp_one.jpg",
						}}
						chosenImg={pickedImg === "style-01"}
					/>
					<CreateKpi
						data={{
							title: "OTH thumbnail",
							img: "/temp_two.jpg",
						}}
						pickedImg={() => setPickedImg("style-02")}
						chosenImg={pickedImg === "style-02"}
					/>
					<CreateKpi
						data={{
							title: "Autumn thumbnail",
							img: "/temp_three.jpg",
						}}
						chosenImg={pickedImg === "style-03"}
					/>
				</div>
			</Section>
			<Section>
				<div className="flex items-center py-3 text-sm font-medium text-foreground before:flex-1 before:border-t before:border-border before:me-6 after:flex-1 after:border-t after:border-border after:ms-6">
					OR
				</div>
			</Section>
			<Section className="md:py-0">
				<Dropzone setImageFile={setImageFile} />
			</Section>
		</>
	);
};
