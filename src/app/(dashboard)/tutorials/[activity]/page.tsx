"use client";

import { useEffect, useState } from "react";

import activitiesData from "@/database/activities.json";
import { CustomTitle } from "@/shared/components/CustomTitle";
import NotFoundResult from "@/shared/components/NotFoundResult";
import { IMAGE_FALLBACK_URL } from "@/shared/constants";
import useRoute from "@/shared/hooks/useRoute";
import {
	Activity,
	ActivityCategoryDescription,
	ActivityTip,
} from "@/shared/types/activity";
import { PathRoutes } from "@/shared/types/routes";
import { ArrowLeftOutlined, ShareAltOutlined } from "@ant-design/icons";
import {
	Breadcrumb,
	Button,
	Col,
	Divider,
	Image,
	Row,
	Tag,
	theme,
	Typography,
} from "antd";
import { useParams } from "next/navigation";
import CollapseRenderer from "./components/CollapseRenderer";
import LoadingSkeleton from "./components/LoadingSkeleton";

const { Text, Link } = Typography;

export default function ActivityDetails() {
	const params = useParams();
	const { redirect } = useRoute();
	const { token } = theme.useToken();

	const { activity } = params;
	const allActivities: Activity[] = activitiesData as Activity[];

	const [loading, setLoading] = useState(false);
	const [currentActivity, setCurrentActivity] = useState<Activity | null>(null);

	useEffect(() => {
		setLoading(true);

		const foundActivity = allActivities.find((a) => a.id === activity);
		setCurrentActivity(foundActivity || null);

		setLoading(false);
	}, [activity]);

	if (loading) return <LoadingSkeleton />;
	if (!currentActivity) return <NotFoundResult />;

	return (
		<>
			<Button
				color="primary"
				variant="link"
				icon={
					<ArrowLeftOutlined style={{ fontSize: token.fontSizeHeading1 }} />
				}
				onClick={() => redirect(PathRoutes.TUTORIALS)}
				style={{ marginBottom: 16, padding: 0 }}
			/>

			<Breadcrumb
				style={{ marginBottom: 8 }}
				items={[
					{
						title: (
							<Link
								underline
								onClick={() => redirect(PathRoutes.TUTORIALS)}
								style={{ color: "var(--color-primary)", background: "none" }}
							>
								Tutoriais
							</Link>
						),
					},
					{
						title: currentActivity.title,
					},
				]}
			/>

			<Row gutter={16} align="middle">
				<Col xs={24} md={14}>
					<CustomTitle level={2} style={{ marginBottom: 8 }}>
						{currentActivity.title}
					</CustomTitle>
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

			<Divider style={{ margin: "16px 0" }} />

			{currentActivity.tips.map((tip: ActivityTip, index) => (
				<CollapseRenderer
					key={`${tip.title}-${index}`}
					tip={tip}
					index={index}
				/>
			))}
		</>
	);
}
