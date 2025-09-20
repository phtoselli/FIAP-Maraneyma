"use client";

import useRoute from "@/shared/hooks/useRoute";
import { PathRoutes } from "@/shared/hooks/useRoute/types";
import { ArrowUpOutlined } from "@ant-design/icons";
import {
	Button,
	Card,
	Col,
	Divider,
	Flex,
	Grid,
	Image,
	Layout,
	Row,
	Space,
	Typography,
	theme,
} from "antd";
import { useCallback } from "react";

const { useBreakpoint } = Grid;
const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph, Link } = Typography;

const esportesIndividuais = [
	"Amarelinha",
	"Corrida",
	"Corrida de Saco",
	"Dança das Cadeiras",
	"Pega-pega",
	"Pular Corda",
];

const esportesEquipes = [
	"Cabo de guerra",
	"Corrida de revezamento",
	"Futebol",
	"Handball",
	"Peteca",
	"Queimada (Carimbada)",
];

const cards = [
	{
		title: "Crie competições e campeonatos entre os alunos",
		description:
			"Crie e gerencie campeonatos, cadastrando equipes e participantes",
		image: "/images/illustrations/run.png",
	},
	{
		title: "Funciona offline (e sincroniza quando voltar a ter conexão)",
		description:
			"Não precisa ter internet para usar o aplicativo nem para cadastrar a pontuação dos jogos. Você pode sincronizar os resultados posteriormente",
		image: "/images/illustrations/jump-rope.png",
	},
	{
		title: "Para escolas com pouca ou nenhuma infra-estrutura disponível",
		description:
			"Pensamos em jogos e brincadeiras para escolas com pouca infra estrutura, sem quadras e sem equipamentos caros",
		image: "/images/illustrations/shuttlecock.png",
	},
	{
		title:
			"Tutoriais que ajuda os professores a criarem competições e improvisar",
		description:
			"Criamos uma série de conteúdos para te ajudar a entender a dinâmica das brincadeiras e como improvisar com o que tem",
		image: "/images/illustrations/music-chair.png",
	},
	{
		title: "Rankings pra acompanhar os campeonatos e os participantes",
		description:
			"Quem está na frente do campeonato? Qual o participantes com mais vitórias?",
		image: "/images/illustrations/soccer.png",
	},
	{
		title:
			"Simples, fácil e acessível. Feito pra democratizar a prática de esportes",
		description:
			"Feito para transpor barreiras, com linguagem simples e acessível.",
		image: "/images/illustrations/tug-war.png",
	},
];

export default function Home() {
	const screens = useBreakpoint(); // retorna { xs, sm, md, lg, xl, xxl }
	const { redirect } = useRoute();
	const { token } = theme.useToken();

	const isMobile = !screens.md;

	const RenderCards = useCallback(() => {
		return cards.map((card, idx) => (
			<Col xs={24} sm={12} md={8} key={idx}>
				<Card
					style={{
						minHeight: 250,
						height: "100%",
						backgroundColor: "rgba(255,255,255,0.5)",
					}}
					styles={{ body: { padding: "16px 32px" } }}
				>
					<Flex
						align="center"
						justify="center"
						vertical
						style={{ textAlign: "center" }}
					>
						{card.image && (
							<Image src={card.image} alt={card.title} preview={false} />
						)}
						<Title level={5}>{card.title}</Title>
						<Text>{card.description}</Text>
					</Flex>
				</Card>
			</Col>
		));
	}, [cards]);

	const scrollToTop = () => {
		if (typeof window !== "undefined") {
			requestAnimationFrame(() => {
				window.scrollTo({ top: 0, behavior: "smooth" });
			});
		}
	};

	return (
		<Layout>
			{/* Header */}
			<Header
				style={{ backgroundColor: token.colorPrimary, padding: "0 1.5rem" }}
			>
				<Row justify="space-between" align="middle">
					<Col>
						<Image
							alt="Logo Maraneyma"
							src="/images/logo/logo-wordmark-vertical-min-white.png"
							preview={false}
							width={160}
						/>
					</Col>

					<Col>
						<Space size={16}>
							<Button
								variant="link"
								color="default"
								style={{ color: "white" }}
								onClick={() => redirect(PathRoutes.LOGIN)}
							>
								Fazer login
							</Button>

							<Button
								variant="filled"
								color="primary"
								onClick={() => redirect(PathRoutes.REGISTER)}
							>
								Criar conta
							</Button>
						</Space>
					</Col>
				</Row>
			</Header>

			{/* Content */}
			<Content
				style={{
					padding: "2rem 1rem",
					backgroundColor: "#f0f2f5",
				}}
			>
				{/* Logo Section */}
				<Flex
					align="center"
					justify="center"
					style={{ margin: "40px 0px" }}
					gap={8}
					vertical
				>
					<Image
						alt="Logo Maraneyma"
						src="/images/logo/logo-wordmark.png"
						preview={false}
					/>

					<Paragraph>
						<Text strong style={{ color: token.colorPrimary }}>
							”Maraneyma”
						</Text>{" "}
						significa "saúde" em <Text strong>Tupi-Guarani</Text>.
					</Paragraph>
				</Flex>

				{/* Hero Section */}
				<Card style={{ overflow: "visible", margin: "20px 0px 80px 0px" }}>
					<Row
						gutter={[16, 16]}
						style={{
							display: "flex",
							flexWrap: "wrap",
							alignItems: "stretch",
							flexDirection: isMobile ? "column-reverse" : "row",
						}}
					>
						<Col
							xs={24}
							md={12}
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								height: isMobile ? "100%" : "200px",
								padding: isMobile ? "0 16px" : "0 0 35px 80px",
							}}
						>
							<Title
								level={2}
								style={{ fontSize: "1.5rem", color: token.colorPrimary }}
							>
								Seu guia gratuito de{" "}
								<Text
									style={{
										fontSize: "1.5rem",
										color: token.colorPrimary,
										fontWeight: 800,
									}}
								>
									esportes escolares
								</Text>
							</Title>
							<Paragraph type="secondary" style={{ fontSize: "1rem" }}>
								Aplicativo gratuito feito para{" "}
								<strong>
									ajudar professores a incentivar a prática de esportes
								</strong>{" "}
								e atividades físicas nas escolas
							</Paragraph>
							<Button
								type="primary"
								size="large"
								style={{ padding: "8px 24px", alignSelf: "start" }}
								block={isMobile ?? false}
							>
								Download (Android)
							</Button>
						</Col>

						<Col
							xs={24}
							md={12}
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "flex-end",
								position: "relative",
								overflow: "visible",
								height: isMobile ? "100%" : "200px",
							}}
						>
							<Image
								alt="App Maraneyma"
								src="/images/illustrations/mobile-mockup.png"
								preview={false}
								style={{
									position: "relative",
									top: isMobile ? 0 : 50,
									width: "80%",
									height: "auto",
								}}
							/>
						</Col>
					</Row>
				</Card>

				{/* Cards Features */}
				<Row gutter={[16, 16]}>
					<RenderCards />
				</Row>
				<Divider />
			</Content>

			{/* Footer */}
			<Footer style={{ backgroundColor: "white" }}>
				<Row gutter={[16, 16]}>
					<Col span={24} style={{ display: "flex", alignItems: "center" }}>
						<Title level={3} style={{ fontSize: "1.5rem", marginBottom: 0 }}>
							Esportes disponíveis
						</Title>
					</Col>

					<Col xs={12} md={6}>
						<Flex vertical>
							<Title level={5}>Competição individual</Title>
							{esportesIndividuais.map((e, i) => (
								<Button
									key={i}
									color="default"
									variant="link"
									style={{
										justifyContent: "flex-start",
										padding: 0,
										margin: 0,
									}}
								>
									{e}
								</Button>
							))}
						</Flex>
					</Col>

					<Col xs={12} md={6}>
						<Flex vertical>
							<Title level={5}>Competição de equipes</Title>
							{esportesEquipes.map((e, i) => (
								<Button
									key={i}
									color="default"
									variant="link"
									style={{
										justifyContent: "flex-start",
										padding: 0,
										margin: 0,
									}}
								>
									{e}
								</Button>
							))}
						</Flex>
					</Col>

					<Col
						xs={24}
						md={6}
						style={{
							display: "flex",
							alignItems: "center",
							marginBottom: isMobile ? 24 : 0,
							flexDirection: isMobile ? "column" : "row",
						}}
					>
						<Divider
							type={isMobile ? "horizontal" : "vertical"}
							style={{ height: "60%" }}
						/>

						<Flex
							vertical
							style={{
								padding: "16px",
								width: isMobile ? "100%" : "260px",
							}}
						>
							<Paragraph type="secondary">
								Nossa curadoria de esportes foi{" "}
								<strong>
									pensada para atender a grande maioria das escolas brasileiras
								</strong>
								, muitas delas longe de grandes centros e com pouca
								infraestrutura.
							</Paragraph>
							<Paragraph type="secondary">
								Cada um dos esportes oferecidos foi pensado para que pudesse ser{" "}
								<strong>
									adaptado com materiais baratos e mais fáceis de encontrar.
								</strong>
							</Paragraph>
						</Flex>
					</Col>

					<Col
						xs={24}
						md={6}
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Flex align="center" justify="center" style={{ height: "180px" }}>
							<Image
								src="/images/illustrations/sack-race.png"
								alt="Ilustração crianças"
								preview={false}
								style={{ height: "100%" }}
							/>
						</Flex>
					</Col>
				</Row>

				<Divider style={{ margin: isMobile ? "50px 0px" : "24px 0px" }} />

				<Row
					justify="space-between"
					align="middle"
					gutter={[16, 16]}
					style={{ flexWrap: "wrap" }}
				>
					<Col>
						<Image
							src="/images/logo/logo-wordmark-vertical.png"
							alt="Logo Maraneyma"
							preview={false}
						/>
					</Col>
					<Col>
						<Flex align="center" gap={16}>
							<Flex vertical style={{ width: "180px" }}>
								<Paragraph strong style={{ fontSize: "2rem", marginBottom: 0 }}>
									Baixe o app
								</Paragraph>
								<Paragraph type="secondary">
									O Maraneyma é 100% gratuito.
								</Paragraph>
							</Flex>
							<Button type="primary">Download (Android)</Button>
						</Flex>
					</Col>
				</Row>

				<Divider style={{ margin: "24px 0px" }} />

				<Row
					justify={isMobile ? "center" : "space-between"}
					align="middle"
					style={{ flexWrap: "wrap" }}
				>
					<Col
						style={{
							textAlign: isMobile ? "center" : "left",
							marginBottom: isMobile ? "16px" : 0,
						}}
					>
						<Button color="default" variant="link" style={{ padding: 0 }}>
							Preferências de Cookies
						</Button>
						<Divider type={isMobile ? "horizontal" : "vertical"} />
						<Text type="secondary">
							© {new Date().getFullYear()} Maraneyma. Todos os direitos
							reservados.
						</Text>
					</Col>

					<Col>
						<Button
							color="primary"
							variant="filled"
							icon={<ArrowUpOutlined />}
							onClick={scrollToTop}
						>
							Voltar ao topo
						</Button>
					</Col>
				</Row>
			</Footer>
		</Layout>
	);
}
