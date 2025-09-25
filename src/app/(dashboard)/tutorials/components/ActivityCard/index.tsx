"use client";

import { CustomTitle } from "@/shared/components/CustomTitle";
import useRoute from "@/shared/hooks/useRoute";
import { Activity } from "@/shared/types/activity";
import { PathRoutes } from "@/shared/types/routes";

import { Button, Card, Col, Flex, Typography } from "antd";

const { Text } = Typography;

interface ActivityCardProps {
	activity: Activity;
}

export default function ActivityCard({ activity }: ActivityCardProps) {
	const { redirect } = useRoute();

	return (
		<Col
			xs={24}
			sm={12}
			md={8}
			style={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Card
				style={{
					height: "100%",
					backgroundColor: "var(--color-bg-container-light)",
				}}
				styles={{ body: { height: "100%" } }}
			>
				<Flex
					vertical
					justify="space-between"
					gap={8}
					style={{ width: "100%", height: "100%" }}
				>
					<Flex vertical gap={4}>
						<CustomTitle level={5}>{activity.title}</CustomTitle>
						<Text type="secondary">{activity.description}</Text>
					</Flex>

					<div
						style={{
							justifySelf: "end",
						}}
					>
						<Button
							ghost
							color="primary"
							variant="outlined"
							onClick={() =>
								redirect(`${PathRoutes.TUTORIALS}/${activity.id}` as PathRoutes)
							}
						>
							Ver detalhes
						</Button>
					</div>
				</Flex>
			</Card>
		</Col>
	);
}
