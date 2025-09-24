export enum ActivityCategoryDescription {
	group = "Atividade em grupo",
	individual = "Atividade individual",
}

type ActivityCategory = "group" | "individual";

interface ActivityTipItem {
	content: string;
}

interface ActivityTip {
	title: string;
	description?: string;
	items: ActivityTipItem[];
}

export interface Activity {
	id: string;
	title: string;
	category: ActivityCategory;
	description: string;
	image: string;
	tips: ActivityTip[];
}
