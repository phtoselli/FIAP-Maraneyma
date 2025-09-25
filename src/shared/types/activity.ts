export enum ActivityCategoryDescription {
	group = "Atividade em grupo",
	individual = "Atividade individual",
}

export type ActivityCategory = "group" | "individual";

export type TipContentType = "ul" | "ol" | "paragraph";

export interface ActivityTipContent {
	type: TipContentType;
	content: string[] | string;
}

export interface ActivityTip {
	title: string;
	content: ActivityTipContent;
}

export interface Activity {
	id: string;
	title: string;
	category: ActivityCategory;
	description: string;
	overview?: string;
	image: string;
	tips: ActivityTip[];
}
