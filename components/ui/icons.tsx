import { SVGProps } from "react";

type Icon = SVGProps<SVGSVGElement>;

export const Icons = {
	TriangleLeftIcon: (props: Icon) => (
		<svg
			width="15"
			height="15"
			viewBox="0 0 15 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M9 4L9 11L4.5 7.5L9 4Z"
				fill="currentColor"
			></path>
		</svg>
	),
	TriangleRightIcon: (props: Icon) => (
		<svg
			width="15"
			height="15"
			viewBox="0 0 15 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M6 11L6 4L10.5 7.5L6 11Z"
				fill="currentColor"
			></path>
		</svg>
	),
	TriangleUpIcon: (props: Icon) => (
		<svg
			width="15"
			height="15"
			viewBox="0 0 15 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M4 9H11L7.5 4.5L4 9Z"
				fill="currentColor"
			></path>
		</svg>
	),
	TriangleDownIcon: (props: Icon) => (
		<svg
			width="15"
			height="15"
			viewBox="0 0 15 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M4 6H11L7.5 10.5L4 6Z"
				fill="currentColor"
			></path>
		</svg>
	),
};
