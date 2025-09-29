"use client";

import { root } from "@/providers/antd/AntdThemeProvider";
import { CustomTitle } from "@/shared/components/CustomTitle";
import { IMAGE_FALLBACK_URL, MAX_CONTAINER_WIDTH } from "@/shared/constants";
import useRoute from "@/shared/hooks/useRoute";
import { PathRoutes } from "@/shared/types/routes";
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
const { Text, Paragraph } = Typography;

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
		image: "/images/illustrations/run.svg",
	},
	{
		title: "Funciona offline (e sincroniza quando voltar a ter conexão)",
		description:
			"Não precisa ter internet para usar o aplicativo nem para cadastrar a pontuação dos jogos. Você pode sincronizar os resultados posteriormente",
		image: "/images/illustrations/jump-rope.svg",
	},
	{
		title: "Para escolas com pouca ou nenhuma infra-estrutura disponível",
		description:
			"Pensamos em jogos e brincadeiras para escolas com pouca infra estrutura, sem quadras e sem equipamentos caros",
		image: "/images/illustrations/shuttlecock.svg",
	},
	{
		title:
			"Tutoriais que ajuda os professores a criarem competições e improvisar",
		description:
			"Criamos uma série de conteúdos para te ajudar a entender a dinâmica das brincadeiras e como improvisar com o que tem",
		image: "/images/illustrations/music-chair.svg",
	},
	{
		title: "Rankings pra acompanhar os campeonatos e os participantes",
		description:
			"Quem está na frente do campeonato? Qual o participantes com mais vitórias?",
		image: "/images/illustrations/soccer.svg",
	},
	{
		title:
			"Simples, fácil e acessível. Feito pra democratizar a prática de esportes",
		description:
			"Feito para transpor barreiras, com linguagem simples e acessível.",
		image: "/images/illustrations/tug-war.svg",
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
						gap={8}
						vertical
						align="center"
						justify="center"
						style={{ textAlign: "center" }}
					>
						{card.image && (
							<Image
								src={card.image}
								alt={card.title}
								preview={false}
								fallback={IMAGE_FALLBACK_URL}
							/>
						)}
						<CustomTitle level={5}>{card.title}</CustomTitle>
						<Text type="secondary">{card.description}</Text>
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
		<Layout style={{ padding: 0, margin: 0 }}>
			<Header
				style={{
					backgroundColor: "var(--color-black)",
					padding: "0 1.5rem",
					height: 30,
					display: "flex",
					alignItems: "center",
				}}
			>
				<div
					style={{
						maxWidth: MAX_CONTAINER_WIDTH,
						width: "100%",
						margin: "0 auto",
						padding: "0 16px",
					}}
				>
					<Row justify="space-between" align="middle" style={{ width: "100%" }}>
						<Col></Col>

						<Col>
							<Space size={8}>
								<Button
									variant="link"
									color="default"
									style={{ color: root.colorLightBlue, padding: 0 }}
									onClick={() => redirect(PathRoutes.LOGIN)}
								>
									Fazer login
								</Button>

								<Divider
									type="vertical"
									style={{ backgroundColor: root.colorLightBlue }}
								/>

								<Button
									variant="link"
									color="default"
									style={{ color: root.colorLightBlue, padding: 0 }}
									onClick={() => redirect(PathRoutes.REGISTER)}
								>
									Criar conta
								</Button>
							</Space>
						</Col>
					</Row>
				</div>
			</Header>

			<Content
				style={{
					padding: "2rem 1rem",
					backgroundColor: token.colorBgLayout,
				}}
			>
				<div
					style={{
						maxWidth: MAX_CONTAINER_WIDTH,
						width: "100%",
						margin: "0 auto",
						padding: "0 16px",
					}}
				>
					<Flex
						align="center"
						justify="center"
						style={{ margin: "40px 0px" }}
						gap={8}
						vertical
					>
						<Image
							alt="Logo Maraneyma"
							src="/images/logo/logo-wordmark.svg"
							preview={false}
						/>
					</Flex>

					<Flex
						vertical
						gap={8}
						style={{
							margin: "0px 0px 80px 0px",
						}}
					>
						<Text>
							<Text strong style={{ color: token.colorPrimary }}>
								”Maraneyma”
							</Text>{" "}
							significa "saúde" em <Text strong>Tupi-Guarani</Text>.
						</Text>

						<Card
							style={{
								overflow: "visible",
								backgroundColor: token.colorWhite,
								padding: 16,
								borderRadius: 16,
							}}
						>
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
									md={16}
									style={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										height: isMobile ? "100%" : "200px",
										padding: isMobile ? "0 16px" : "0 0 24px 24px",
									}}
								>
									<CustomTitle primary level={1}>
										Seu guia gratuito de esportes escolares
									</CustomTitle>
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
									md={8}
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
										fallback={IMAGE_FALLBACK_URL}
									/>
								</Col>
							</Row>
						</Card>
					</Flex>

					<Row gutter={[16, 16]}>
						<RenderCards />
					</Row>
					<Divider />
				</div>
			</Content>

			<Footer style={{ backgroundColor: token.colorWhite }}>
				<div
					style={{
						maxWidth: MAX_CONTAINER_WIDTH,
						width: "100%",
						margin: "0 auto",
						padding: "0 16px",
					}}
				>
					<Row gutter={40}>
						<Col
							span={24}
							style={{
								display: "flex",
								alignItems: "center",
								marginBottom: 32,
							}}
						>
							<CustomTitle level={2}>Esportes disponíveis</CustomTitle>
						</Col>

						<Col xs={12} md={6}>
							<Flex
								vertical
								style={{
									borderRight: isMobile
										? "none"
										: "1px solid var(--color-light-gray)",
								}}
							>
								<CustomTitle level={5}>Competição individual</CustomTitle>
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
							<Flex
								vertical
								style={{
									borderRight: isMobile
										? "none"
										: "1px solid var(--color-light-gray)",
								}}
							>
								<CustomTitle level={5}>Competição de equipes</CustomTitle>
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
							<Flex
								vertical
								style={{
									width: isMobile ? "100%" : "260px",
								}}
								gap={16}
							>
								<Paragraph type="secondary" style={{ margin: 0, padding: 0 }}>
									Nossa curadoria de esportes foi{" "}
									<Text strong>
										pensada para atender a grande maioria das escolas
										brasileiras
									</Text>
									, muitas delas longe de grandes centros e com pouca
									infraestrutura.
								</Paragraph>
								<Paragraph type="secondary" style={{ margin: 0, padding: 0 }}>
									Cada um dos esportes oferecidos foi pensado para que pudesse
									ser{" "}
									<Text strong>
										adaptado com materiais baratos e mais fáceis de encontrar.
									</Text>
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
									src="/images/illustrations/sack-race.svg"
									alt="Ilustração crianças"
									preview={false}
									style={{ height: "100%" }}
									fallback={IMAGE_FALLBACK_URL}
								/>
							</Flex>
						</Col>
					</Row>

					<Divider style={{ margin: isMobile ? "50px 0px" : "40px 0px" }} />

					<Row
						justify="space-between"
						align="middle"
						gutter={[16, 16]}
						style={{ flexWrap: "wrap" }}
					>
						<Col xs={24} md={12}>
							<Image
								src="/images/logo/logo-wordmark-vertical.svg"
								alt="Logo Maraneyma"
								preview={false}
							/>
						</Col>
						<Col xs={24} md={12}>
							<Flex align="center" gap={16} justify="end">
								<Flex vertical style={{ width: "180px" }}>
									<Paragraph
										strong
										style={{ fontSize: "2rem", marginBottom: 0 }}
									>
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
				</div>
			</Footer>
		</Layout>
	);
}
