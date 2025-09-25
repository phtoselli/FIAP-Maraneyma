import "@ant-design/v5-patch-for-react-19";
import "./globals.css";

import AntdRegistryProvider from "@/providers/antd/AntdRegistryProvider";
import AntdThemeProvider from "@/providers/antd/AntdThemeProvider";

import { roboto, sofiaSans } from "@/styles/fonts";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Maraneyma",
	description: "Ensinar, Aprender e Praticar",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${roboto.variable} ${sofiaSans.variable} font-roboto`}>
				<AntdRegistryProvider>
					<AntdThemeProvider>{children}</AntdThemeProvider>
				</AntdRegistryProvider>
			</body>
		</html>
	);
}
