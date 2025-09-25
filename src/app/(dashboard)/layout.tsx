"use client";

import type { MenuProps } from "antd";
import { Flex, Image, Layout, Menu, Typography } from "antd";

import UserActionCard from "@/shared/components/UserActionCard";
import useRoute from "@/shared/hooks/useRoute";
import { PathRoutes } from "@/shared/types/routes";

const { Content, Sider } = Layout;
const { Text } = Typography;

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { redirect } = useRoute();

	const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
		redirect(key as PathRoutes);
	};

	const Arrow = () => (
		<Image
			src="/icons/arrow-right.svg"
			width={12}
			alt="Seta pra direita"
			preview={false}
		/>
	);

	const menuItems: MenuProps["items"] = [
		{
			key: PathRoutes.DASHBOARD,
			icon: (
				<span style={{ marginRight: 4 }}>
					<Image
						src="/icons/home.svg"
						alt="ícone"
						width={24}
						height={24}
						preview={false}
					/>
				</span>
			),
			label: (
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Text>Início</Text>
					<Arrow />
				</div>
			),
		},
		{
			key: PathRoutes.TUTORIALS,
			icon: (
				<span style={{ marginRight: 4 }}>
					<Image
						src="/icons/book.svg"
						alt="ícone"
						width={24}
						height={24}
						preview={false}
					/>
				</span>
			),
			label: (
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Text>Tutoriais</Text>
					<Arrow />
				</div>
			),
		},
		{
			key: PathRoutes.CHAMPIONSHIP,
			icon: (
				<span style={{ marginRight: 4 }}>
					<Image
						src="/icons/people.svg"
						alt="ícone"
						width={24}
						height={24}
						preview={false}
					/>
				</span>
			),
			label: (
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Text>Campeonatos</Text>
					<Arrow />
				</div>
			),
		},
		{
			key: PathRoutes.RANKING,
			icon: (
				<span style={{ marginRight: 4 }}>
					<Image
						src="/icons/ranking.svg"
						alt="ícone"
						width={24}
						height={24}
						preview={false}
					/>
				</span>
			),
			label: (
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Text>Ranking</Text>
					<Arrow />
				</div>
			),
		},
	];

	return (
		<Layout style={{ height: "100vh" }}>
			<Sider breakpoint="lg" collapsedWidth="0">
				<Flex
					align="center"
					justify="center"
					style={{
						height: 64,
						margin: "16px 16px 40px 16px",
						padding: "16px",
					}}
				>
					<Image
						src="/images/logo/logo-wordmark.svg"
						alt="Logo"
						preview={false}
					/>
				</Flex>

				<Menu
					mode="inline"
					items={menuItems}
					onClick={handleMenuClick}
					defaultSelectedKeys={["/dashboard"]}
					style={{ padding: 4 }}
				/>

				<Flex align="center" justify="center" style={{ padding: 16 }}>
					<UserActionCard />
				</Flex>
			</Sider>

			<Layout
				style={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Content
					style={{
						flex: 1,
						padding: 48,
						overflowY: "auto",
					}}
				>
					{children}
				</Content>
			</Layout>
		</Layout>
	);
}
