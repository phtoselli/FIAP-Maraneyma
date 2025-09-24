// @ts-nocheck
"use client";

import { ConfigProvider, theme } from "antd";
import React from "react";

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
					colorPrimary: "#EB2F96",
					borderRadius: 8,
					colorBgContainer: "#F1F5F4",
					colorBgContainerLight: "#f6f6f6ff",
					colorBgLayout: "#F0F4F3",
					colorBlack: "#000000",
					colorLink: "#B1DAFF",
					colorLinkHover: "#EB2F96",
					colorLinkCustom: "#7B7B7B",
					colorTitle: "#515151",
					colorLightGray: "#f2f2f2ff",
				},
				components: {
					Menu: {
						itemSelectedBg: "#DDE7E5",
					},
					Button: {
						colorBgTextHover: "#EB2F96",
						colorText: "#7B7B7B",
						borderRadius: 4,
					},
					Input: {
						colorBgContainer: "#ffffff",
						borderRadius: 4,
					},
					Collapse: {
						borderRadius: 2,
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
