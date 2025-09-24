import "@ant-design/v5-patch-for-react-19";
import "./globals.css";

import AntdRegistryProvider from "@/providers/antd/AntdRegistryProvider";
import AntdThemeProvider from "@/providers/antd/AntdThemeProvider";

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
			<body>
				<AntdRegistryProvider>
					<AntdThemeProvider>{children}</AntdThemeProvider>
				</AntdRegistryProvider>
			</body>
		</html>
	);
}
