import { Roboto, Sofia_Sans } from "next/font/google";

export const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-roboto",
});

export const sofiaSans = Sofia_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-sofia-sans",
});
