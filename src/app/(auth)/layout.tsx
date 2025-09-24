"use client";

import { ReactNode } from "react";

import { MAX_CONTAINER_WIDTH } from "@/shared/constants";
import useRoute from "@/shared/hooks/useRoute";
import { PathRoutes } from "@/shared/hooks/useRoute/types";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Grid, Image, Layout, theme, Tooltip } from "antd";

const { Content } = Layout;

export default function AuthLayout({ children }: { children: ReactNode }) {
	const { redirect } = useRoute();
	const { token } = theme.useToken();

	const screens = Grid.useBreakpoint();
	const isMobile = !screens.md;

	return (
		<Layout style={{ padding: 0, margin: 0, height: "100vh" }}>
			<Content>
				<div
					style={{
						maxWidth: MAX_CONTAINER_WIDTH,
						width: "100%",
						margin: "0 auto",
						padding: "0 16px",
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
								src="/images/logo/logo-wordmark.svg"
								alt="logo Maraneyma"
								style={{
									maxWidth: "160px",
									width: "40vw",
									objectFit: "contain",
								}}
								preview={false}
							/>

							<div />
						</Flex>

						<Card
							style={{
								width: "100%",
								backgroundColor: token.colorWhite,
							}}
							styles={{
								body: {
									padding: isMobile ? 40 : 52,
									height: "100%",
									width: "100%",
								},
							}}
						>
							{children}
						</Card>
					</Flex>
				</div>
			</Content>
		</Layout>
	);
}
