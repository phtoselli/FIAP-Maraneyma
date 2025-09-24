"use client";

import { Divider, Flex, Typography } from "antd";

const { Text } = Typography;

export default function RegisterPage() {
	return (
		<Flex
			align="center"
			justify="space-between"
			style={{ height: "100%", width: "100%" }}
		>
			<Flex align="center" justify="center" style={{ height: "100%" }}>
				<p>a</p>
			</Flex>

			<Flex
				vertical
				align="center"
				justify="center"
				gap={8}
				style={{
					width: "40px",
					height: "100%",
				}}
			>
				<Divider
					type="vertical"
					style={{ flex: 1, height: "100%", margin: 0 }}
				/>

				<Text strong style={{ background: "#fff", padding: "0 4px" }}>
					OU
				</Text>

				<Divider
					type="vertical"
					style={{ flex: 1, height: "100%", margin: 0 }}
				/>
			</Flex>

			<Flex align="center" justify="center" style={{ height: "100%" }}>
				<p>b</p>
			</Flex>
		</Flex>
	);
}
