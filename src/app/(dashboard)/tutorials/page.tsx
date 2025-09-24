// @ts-nocheck
"use client";

import {
	groupActivities,
	individualActivities,
} from "@/shared/constants/activities";
import useRoute from "@/shared/hooks/useRoute";
import { PathRoutes } from "@/shared/hooks/useRoute/types";
import { Button, Card, Col, Flex, Row, theme, Typography } from "antd";
const { Title, Text } = Typography;

export default function Tutorials() {
	const { redirect } = useRoute();

	const { token } = theme.useToken();

	const ActivityCard = ({ activity }: any) => {
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
						backgroundColor: token.colorBgContainerLight,
					}}
					styles={{ body: { height: "100%" } }}
				>
					<Flex
						vertical
						justify="space-between"
						gap={8}
						style={{ width: "100%", height: "100%" }}
					>
						<div>
							<Title level={5} style={{ padding: 0, margin: 0 }}>
								{activity.title}
							</Title>
							<Text type="secondary">{activity.description}</Text>
						</div>

						<div
							style={{
								justifySelf: "end",
							}}
						>
							<Button
								color="primary"
								variant="outlined"
								onClick={() =>
									redirect(`${PathRoutes.TUTORIALS}/${activity.activity}`)
								}
							>
								Ver detalhes
							</Button>
						</div>
					</Flex>
				</Card>
			</Col>
		);
	};

	return (
		<div>
			<Title
				level={2}
				style={{ color: token.colorTitle, fontWeight: "bolder" }}
			>
				Tutoriais
			</Title>

			<Title
				level={4}
				style={{
					color: token.colorPrimary,
					marginTop: "2rem",
					fontWeight: "bolder",
				}}
			>
				Atividades em grupo
			</Title>
			<Row gutter={[16, 16]}>
				{groupActivities.map((activity, index) => (
					<ActivityCard key={index} activity={activity} />
				))}
			</Row>

			<Title
				level={4}
				style={{
					color: token.colorPrimary,
					marginTop: "2rem",
					fontWeight: "bolder",
				}}
			>
				Atividades individuais
			</Title>
			<Row gutter={[16, 16]}>
				{individualActivities.map((activity, index) => (
					<ActivityCard key={index} activity={activity} />
				))}
			</Row>
		</div>
	);
}
