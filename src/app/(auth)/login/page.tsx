"use client";

import { CustomTitle } from "@/shared/components/CustomTitle";
import useRoute from "@/shared/hooks/useRoute";
import { PathRoutes } from "@/shared/types/routes";
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

const { Text } = Typography;
const { Item } = Form;

export default function LoginPage() {
	const { redirect } = useRoute();
	const { token } = theme.useToken();

	const [form] = Form.useForm();

	const onFinish = () => {
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
				<CustomTitle level={1}>Login</CustomTitle>

				<div>
					<CustomTitle level={3}>Opção mais simples:</CustomTitle>
					<Text type="secondary">Faça login a partir da sua conta Google</Text>
				</div>

				<Button
					icon={
						<Image
							src="/images/logo/google-logo.svg"
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
					onClick={onFinish}
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
							borderColor: "var(--color-light-gray)",
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
								borderColor: "var(--color-light-gray)",
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
								borderColor: "var(--color-light-gray)",
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
					<Form form={form} layout="vertical" onFinish={onFinish}>
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
