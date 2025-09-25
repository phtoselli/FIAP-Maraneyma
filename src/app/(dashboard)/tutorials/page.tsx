"use client";

import { Flex, Row } from "antd";

import { CustomTitle } from "@/shared/components/CustomTitle";
import { Activity } from "@/shared/types/activity";

import activitiesData from "@/database/activities.json";
import ActivityCard from "./components/ActivityCard";

export default function Tutorials() {
	const allActivities: Activity[] = activitiesData as Activity[];

	const groupActivities = allActivities.filter((a) => a.category === "group");
	const individualActivities = allActivities.filter(
		(a) => a.category === "individual"
	);

	return (
		<Flex gap={16} vertical>
			<CustomTitle level={2}>Tutoriais</CustomTitle>

			<Flex gap={8} vertical>
				<CustomTitle primary level={3}>
					Atividades em grupo
				</CustomTitle>
				<Row gutter={[16, 16]}>
					{groupActivities?.map((activity, index) => (
						<ActivityCard key={index} activity={activity} />
					))}
				</Row>
			</Flex>

			<Flex gap={8} vertical>
				<CustomTitle primary level={3}>
					Atividades individuais
				</CustomTitle>
				<Row gutter={[16, 16]}>
					{individualActivities?.map((activity, index) => (
						<ActivityCard key={index} activity={activity} />
					))}
				</Row>
			</Flex>
		</Flex>
	);
}
