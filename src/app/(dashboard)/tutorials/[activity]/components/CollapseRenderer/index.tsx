import { ActivityTip } from "@/shared/types/activity";
import { Collapse, theme } from "antd";
import renderTipContent from "./components/RenderTipContent";

interface CollapseRendererProps {
	tip: ActivityTip;
	index: number;
}

export default function CollapseRenderer({
	tip,
	index,
}: CollapseRendererProps) {
	const { token } = theme.useToken();

	return (
		<Collapse
			key={`${tip.title}-${index}`}
			accordion
			defaultActiveKey={[`${tip.title}-${index}`]}
			style={{ marginBottom: "16px" }}
			items={[
				{
					key: `${tip.title}-${index}`,
					label: tip.title,
					styles: { body: { backgroundColor: token.colorWhite } },
					children: <>{renderTipContent(tip.content)}</>,
				},
			]}
		/>
	);
}
