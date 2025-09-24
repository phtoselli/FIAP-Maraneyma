"use client";

import activitiesData from "@/database/activities.json";
import { IMAGE_FALLBACK_URL } from "@/shared/constants";
import useRoute from "@/shared/hooks/useRoute";
import { PathRoutes } from "@/shared/hooks/useRoute/types";
import { Activity, ActivityCategoryDescription } from "@/shared/types/activity";
import { ArrowLeftOutlined, ShareAltOutlined } from "@ant-design/icons";
import {
	Breadcrumb,
	Button,
	Col,
	Collapse,
	Divider,
	Image,
	Result,
	Row,
	Skeleton,
	Tag,
	theme,
	Typography,
} from "antd";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const { Title, Text } = Typography;

export default function ActivityDetails() {
	const params = useParams();
	const { activity } = params;
	const { redirect } = useRoute();

	const { token } = theme.useToken();

	const allActivities: Activity[] = activitiesData as Activity[];

	const [loading, setLoading] = useState(true);
	const [currentActivity, setCurrentActivity] = useState<Activity | null>(null);

	useEffect(() => {
		const foundActivity = allActivities.find((a) => a.id === activity);
		setCurrentActivity(foundActivity || null);
		setLoading(false);
	}, [activity]);

	if (loading) {
		return (
			<div style={{ padding: "2rem" }}>
				<Row gutter={[24, 24]} align="middle" style={{ marginTop: "1rem" }}>
					<Col xs={24} md={14}>
						<Skeleton.Button
							style={{ width: 120, marginBottom: "1rem" }}
							active
						/>
						<Skeleton active paragraph={{ rows: 3 }} />
						<Skeleton.Button style={{ width: 120, marginTop: "1rem" }} active />
					</Col>
					<Col xs={24} md={10}>
						<Skeleton.Image style={{ width: 300, height: 200 }} active />
					</Col>
				</Row>
				<Divider style={{ margin: "2rem 0" }} />
				<Skeleton active paragraph={{ rows: 3 }} />
			</div>
		);
	}

	if (!currentActivity)
		return (
			<Result
				status="404"
				title="404!"
				subTitle="Oops! Atividade não encontrada."
			/>
		);

	return (
		<div style={{ padding: "2rem" }}>
			<Button
				color="primary"
				variant="link"
				icon={<ArrowLeftOutlined />}
				onClick={() => redirect(PathRoutes.TUTORIALS)}
				style={{ marginBottom: "1rem", padding: 0 }}
			/>

			<Breadcrumb
				style={{ marginBottom: "1rem" }}
				items={[
					{
						title: (
							<a onClick={() => redirect(PathRoutes.TUTORIALS)}>Tutoriais</a>
						),
					},
					{
						title: currentActivity.title,
					},
				]}
			/>

			<Row gutter={[24, 24]} align="middle">
				<Col xs={24} md={14}>
					<Title level={2}>{currentActivity.title}</Title>

					<Tag color="yellow">
						{ActivityCategoryDescription[currentActivity.category]}
					</Tag>

					<Text style={{ display: "block", marginTop: "1rem" }}>
						{currentActivity.description}
					</Text>

					<Button
						type="primary"
						icon={<ShareAltOutlined />}
						style={{ marginTop: "1rem" }}
					>
						Compartilhar
					</Button>
				</Col>

				<Col xs={24} md={10}>
					<Image
						src={currentActivity.image}
						alt={currentActivity.title}
						width={300}
						preview={false}
						fallback={IMAGE_FALLBACK_URL}
					/>
				</Col>
			</Row>

			<Divider style={{ margin: "2rem 0" }} />

			{currentActivity.tips.map((tip, index) => (
				<Collapse
					key={`${tip.title}-${index}`}
					accordion
					style={{ marginBottom: "1rem", borderRadius: 2 }}
					items={[
						{
							label: tip.title,
							styles: { body: { backgroundColor: token.colorWhite } },
							children: (
								<>
									{tip.description && <Text>{tip.description}</Text>}
									<ul>
										{tip.items.map((item, i) => (
											<li key={i}>
												<Text>{item.content}</Text>
											</li>
										))}
									</ul>
								</>
							),
						},
					]}
				/>
			))}
		</div>
	);
}
