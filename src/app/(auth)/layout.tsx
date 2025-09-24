"use client";

import { ReactNode } from "react";

import useRoute from "@/shared/hooks/useRoute";
import { PathRoutes } from "@/shared/hooks/useRoute/types";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Image, Layout, Tooltip, Typography } from "antd";

const { Text } = Typography;
const { Content } = Layout;

export default function AuthLayout({ children }: { children: ReactNode }) {
	const { redirect } = useRoute();

	return (
		<Layout style={{ padding: 0, margin: 0, height: "100vh" }}>
			<Content
				style={{
					flex: 1,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					padding: "24px",
				}}
			>
				<Flex
					vertical
					align="center"
					justify="space-between"
					gap={40}
					style={{ height: "100%", width: "100%", padding: "40px 80px" }}
				>
					<Flex
						align="center"
						justify="space-between"
						style={{ width: "100%" }}
					>
						<Tooltip title="Voltar">
							<Button
								color="primary"
								variant="link"
								icon={<ArrowLeftOutlined style={{ fontSize: 24 }} />}
								onClick={() => redirect(PathRoutes.HOME)}
							/>
						</Tooltip>

						<Image
							src="/images/logo/logo-wordmark.png"
							alt="logo Maraneyma"
							style={{ maxWidth: "160px", width: "40vw", objectFit: "contain" }}
						/>

						<div />
					</Flex>

					<Card
						style={{
							width: "800px",
							height: "400px",
						}}
						styles={{ body: { padding: 40, height: "100%", width: "100%" } }}
					>
						{children}
					</Card>

					<Flex align="center" justify="center">
						<Text type="secondary">
							© {new Date().getFullYear()} Maraneyma. Todos os direitos
							reservados.
						</Text>
					</Flex>
				</Flex>
			</Content>
		</Layout>
	);
}
