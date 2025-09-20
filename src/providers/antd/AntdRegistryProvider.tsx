"use client";

import { PropsWithChildren } from "react";

import { AntdRegistry } from "@ant-design/nextjs-registry";

/**
 * AntdRegistryProvider
 *
 * Esse provider é necessário porque o Ant Design precisa de uma integração especial
 * para funcionar corretamente com o App Router do Next.js (SSR + Streaming).
 *
 * O `AntdRegistry` garante que os estilos do Ant Design sejam renderizados de forma
 * consistente no servidor e enviados já prontos para o cliente, evitando problemas
 * como perda de estilos durante a hidratação.
 *
 * Em resumo: sem esse wrapper, componentes do Ant Design podem aparecer "sem estilo"
 * na primeira renderização ou gerar inconsistências entre server e client.
 */
const AntdRegistryProvider = ({ children }: PropsWithChildren) => {
	return <AntdRegistry>{children}</AntdRegistry>;
};

export default AntdRegistryProvider;
