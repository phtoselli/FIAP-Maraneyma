"use client";

import type { MenuProps } from "antd";
import { Image, Layout, Menu, theme, Typography } from "antd";

import useRoute from "@/shared/hooks/useRoute";
import { PathRoutes } from "@/shared/hooks/useRoute/types";
import { RightOutlined } from "@ant-design/icons";

const { Content, Sider } = Layout;
const { Text } = Typography;

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { redirect } = useRoute();
	const { token } = theme.useToken();

	const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
		redirect(key as PathRoutes);
	};

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
					<RightOutlined
						style={{ fontSize: 12, opacity: 0.6, color: token.colorPrimary }}
					/>
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
					<RightOutlined
						style={{ fontSize: 12, opacity: 0.6, color: token.colorPrimary }}
					/>
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
					<RightOutlined
						style={{ fontSize: 12, opacity: 0.6, color: token.colorPrimary }}
					/>
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
					<RightOutlined
						style={{ fontSize: 12, opacity: 0.6, color: token.colorPrimary }}
					/>
				</div>
			),
		},
	];

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
				style={{ background: token.colorBgContainer }}
			>
				<div
					style={{
						height: 64,
						margin: "16px 16px 40px 16px",
						padding: "16px",
					}}
				>
					<Image
						src="/images/logo/logo-wordmark.png"
						alt="Logo"
						preview={false}
					/>
				</div>
				<Menu
					mode="inline"
					items={menuItems}
					onClick={handleMenuClick}
					defaultSelectedKeys={["/dashboard"]}
				/>
			</Sider>

			<Layout style={{ background: token.colorWhite }}>
				<Content
					style={{
						margin: 24,
						padding: 24,
					}}
				>
					{children}
				</Content>
			</Layout>
		</Layout>
	);
}
