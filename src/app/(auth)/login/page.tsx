"use client";

import { Button, Input, Typography } from "antd";
import Link from "next/link";

const { Title } = Typography;

export default function LoginPage() {
	return (
		<div style={{ width: "100%" }}>
			<Title level={4}>Entrar</Title>

			<Input placeholder="Email" style={{ marginBottom: 16 }} />
			<Input.Password placeholder="Senha" style={{ marginBottom: 16 }} />

			<Button type="primary" block style={{ marginBottom: 16 }}>
				Entrar
			</Button>

			<div style={{ textAlign: "center" }}>
				<span>Não tem uma conta? </span>
				<Link href="/register">Criar conta</Link>
			</div>
		</div>
	);
}
