"use client";

import { Space } from "antd";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<div
			style={{
				minHeight: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#f0f2f5",
				padding: "2rem",
			}}
		>
			<div
				style={{
					width: "100%",
					maxWidth: 500,
					backgroundColor: "white",
					borderRadius: 8,
					padding: "2rem",
					boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
				}}
			>
				{/* Logo */}
				<div style={{ textAlign: "center", marginBottom: "2rem" }}>
					<img
						src="/images/logo/logo-wordmark.png"
						alt="Maraneyma"
						style={{ width: 150 }}
					/>
				</div>

				{/* Conteúdo da página */}
				<Space direction="vertical" size={16} style={{ width: "100%" }}>
					{children}
				</Space>
			</div>
		</div>
	);
}
