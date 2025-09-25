"use client";

import { Typography } from "antd";

import { sofiaSans } from "@/styles/fonts";

const { Title } = Typography;

interface CustomTitleProps extends React.ComponentProps<typeof Title> {
	primary?: boolean;
}

export const CustomTitle = ({ primary, style, ...props }: CustomTitleProps) => {
	return (
		<Title
			style={{
				padding: 0,
				margin: 0,
				color: primary ? "var(--color-primary)" : "var(--color-title)",
				...style,
			}}
			className={`${sofiaSans.className} ${props.className || ""}`}
			{...props}
		/>
	);
};
