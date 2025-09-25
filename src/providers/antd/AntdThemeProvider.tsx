"use client";

import React from "react";

import { roboto } from "@/styles/fonts";
import { ConfigProvider, theme } from "antd";

export const root = {
	colorWhite: "#ffffff",
	colorWhiteTransparent: "#ffffffa9",
	colorBlack: "#000000",

	colorPrimary: "#EB2F96",
	colorSecondary: "#f48fc6ff",
	colorLightBlue: "#B1DAFF",

	colorTextPrimary: "#515151",
	colorTextSecondary: "#7B7B7B",

	colorBglevel0: "#F0F4F3",
	colorBglevel1: "#F1F5F4",
	colorBglevel2: "#DDE7E5",
};

/**
 * ThemeProvider
 *
 * Esse provider encapsula o `ConfigProvider` do Ant Design, responsável por
 * centralizar todas as definições de tema da aplicação.
 *
 * Ao separar em um arquivo próprio, ganhamos:
 * - Organização: o layout raiz fica mais limpo.
 * - Reutilização: podemos ajustar tokens e algoritmos de tema em um único lugar.
 * - Escalabilidade: fica simples adicionar suporte a temas múltiplos (ex: light/dark).
 *
 * Em resumo: esse wrapper existe para que a configuração do Ant Design
 * permaneça desacoplada do restante da aplicação e fácil de manter.
 */
const AntdThemeProvider = ({ children }: React.PropsWithChildren) => {
	return (
		<ConfigProvider
			theme={{
				token: {
					borderRadius: 4,
					colorPrimary: root.colorPrimary,
					colorBgLayout: root.colorBglevel0,

					colorLink: root.colorPrimary,
					colorLinkHover: root.colorPrimary,
					colorLinkActive: root.colorSecondary,

					fontFamily: roboto.style.fontFamily,
					colorTextSecondary: root.colorTextSecondary,
				},
				components: {
					Layout: {
						bodyBg: root.colorWhite,
						siderBg: root.colorBglevel1,
						colorBgLayout: root.colorWhite,
						colorBgContainer: root.colorWhite,
					},
					Menu: {
						itemSelectedBg: root.colorBglevel2,
						colorBgContainer: root.colorBglevel1,
					},
					Input: {
						colorBgContainer: root.colorWhite,
					},
					Card: {
						colorBgContainer: root.colorBglevel1,
					},
				},
				algorithm: theme.compactAlgorithm,
			}}
		>
			{children}
		</ConfigProvider>
	);
};

export default AntdThemeProvider;
