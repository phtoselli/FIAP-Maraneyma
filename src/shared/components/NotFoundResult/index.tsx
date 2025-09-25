"use client";

import { Result } from "antd";

export default function NotFoundResult(
	props: React.ComponentProps<typeof Result>
) {
	return (
		<Result
			title="404!"
			status="404"
			subTitle="Oops! Página não encontrada."
			{...props}
		/>
	);
}
