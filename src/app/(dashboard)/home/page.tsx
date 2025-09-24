"use client";

import { Result } from "antd";

export default function Home() {
	return (
		<Result
			status="404"
			title="404!"
			subTitle="Oops! Esta página ainda está sendo construída."
		/>
	);
}
