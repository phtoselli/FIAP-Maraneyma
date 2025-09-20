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
					borderRadius: 4,
				},
				algorithm: theme.compactAlgorithm,
			}}
		>
			{children}
		</ConfigProvider>
	);
};

export default AntdThemeProvider;
