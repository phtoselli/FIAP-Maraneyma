// Função para renderizar o conteúdo dependendo do tipo
export default function renderTipContent(content: {
	type: string;
	content: any;
}) {
	if (!content) return null;

	switch (content.type) {
		case "ul":
			return (
				<ul style={{ padding: "0px 16px" }}>
					{content.content.map((item: string, idx: number) => (
						<li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
					))}
				</ul>
			);

		case "ol":
			return (
				<ol style={{ padding: "0px 16px" }}>
					{content.content.map((item: string, idx: number) => (
						<li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
					))}
				</ol>
			);

		case "paragraph":
			return <p dangerouslySetInnerHTML={{ __html: content.content }} />;

		default:
			return null;
	}
}
