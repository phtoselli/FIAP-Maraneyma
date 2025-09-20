"use client";

import { Button, Input, Radio, Typography } from "antd";
const { Title, Text } = Typography;

export default function RegisterPage() {
	return (
		<div style={{ width: "100%" }}>
			<Title level={4}>Seus dados</Title>
			<Text type="secondary">Complete seus dados</Text>

			<div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
				<Input placeholder="Seu nome" />
				<Input placeholder="Email" />
			</div>

			<div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
				<Input placeholder="Ano de nascimento" style={{ width: 100 }} />
				<Radio.Group>
					<Radio value="professor">Professor</Radio>
					<Radio value="estudante">Estudante / aluno</Radio>
				</Radio.Group>
			</div>

			<Button type="primary" block style={{ marginTop: "1.5rem" }}>
				Concluir
			</Button>
		</div>
	);
}
