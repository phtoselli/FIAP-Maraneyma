// @ts-nocheck
"use client";

import useRoute from "@/shared/hooks/useRoute";
import { PathRoutes } from "@/shared/hooks/useRoute/types";
import {
	Button,
	Divider,
	Flex,
	Form,
	Grid,
	Image,
	Input,
	Space,
	theme,
	Typography,
} from "antd";

const { Text, Title } = Typography;
const { Item } = Form;

export default function LoginPage() {
	const { redirect } = useRoute();
	const { token } = theme.useToken();

	const [form] = Form.useForm();

	const doLogin = () => {
		redirect(PathRoutes.DASHBOARD);
	};

	const screens = Grid.useBreakpoint();
	const isMobile = !screens.md;

	return (
		<Flex
			align="center"
			justify="space-between"
			style={{ height: "100%", width: "100%", flexWrap: "wrap" }}
		>
			<Flex
				vertical
				style={{
					height: "100%",
					flex: isMobile ? "0 0 100%" : 1,
					width: isMobile ? "100%" : "auto",
				}}
				gap={24}
			>
				<Title level={1} style={{ margin: 0, padding: 0 }}>
					Login
				</Title>

				<div>
					<Title level={3} style={{ color: token.colorTitle }}>
						Opção mais simples:
					</Title>
					<Text type="secondary">Faça login a partir da sua conta Google</Text>
				</div>

				<Button
					icon={
						<Image
							src="/images/logo/google-logo.png"
							alt="logo Google"
							preview={false}
							width={28}
						/>
					}
					style={{
						backgroundColor: token.colorWhite,
						borderRadius: 24,
						padding: "20px 24px",
						color: "#1890FF",
						fontWeight: "bold",
						borderColor: "#D9D9D9",
					}}
					onClick={doLogin}
				>
					Continue com o Google
				</Button>
			</Flex>

			<Flex
				vertical={isMobile ?? false}
				align="center"
				justify="center"
				gap={8}
				style={{
					flex: isMobile ? "0 0 100%" : 1,
					width: isMobile ? "100%" : "40px",
					height: isMobile ? "auto" : "100%",
					flexDirection: isMobile ? "row" : "column",
					margin: isMobile ? "16px 0" : 0,
				}}
			>
				{isMobile && (
					<Divider
						size="large"
						style={{
							margin: 0,
							borderWidth: 2,
							borderColor: token.colorLightGray,
						}}
					>
						OU
					</Divider>
				)}

				{!isMobile && (
					<>
						<Divider
							type="vertical"
							style={{
								height: 80,
								margin: 0,
								borderWidth: 2,
								borderColor: token.colorLightGray,
							}}
						/>

						<Text strong style={{ padding: "0 4px" }}>
							OU
						</Text>

						<Divider
							type="vertical"
							style={{
								height: 80,
								margin: 0,
								borderWidth: 2,
								borderColor: token.colorLightGray,
							}}
						/>
					</>
				)}
			</Flex>

			<Flex
				vertical
				style={{
					height: "100%",
					flex: isMobile ? "0 0 100%" : 1,
					width: isMobile ? "100%" : "auto",
					gap: 24,
				}}
				gap={24}
			>
				<div>
					<Text type="secondary">Faça login a partir do seu Email</Text>
				</div>

				<div>
					<Form form={form} layout="vertical" onFinish={doLogin}>
						<Item name="email" label="Qual o seu email?">
							<Input placeholder="Email" />
						</Item>

						<Item name="password" label="Qual a sua senha?">
							<Input.Password allowClear placeholder="Senha" />
						</Item>
					</Form>
				</div>

				<Space direction="vertical">
					<Button
						block
						color="primary"
						variant="solid"
						onClick={() => form.submit()}
					>
						Fazer login
					</Button>

					<Button
						block
						color="primary"
						variant="link"
						onClick={() => redirect(PathRoutes.REGISTER)}
					>
						Não possui uma conta? Cadastre-se
					</Button>
				</Space>
			</Flex>
		</Flex>
	);
}
