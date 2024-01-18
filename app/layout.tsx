import type { Metadata } from "next";
import { Biryani } from "next/font/google";
import Header from "./Components/Sections/Header/Header";
import "./styles/index.scss";
import "./styles/global.scss";

export const metadata: Metadata = {
	title: "Finance",
	description: "Know all about your money",
};

const biryani = Biryani({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-primary",
	display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			className={biryani.variable}
			lang="en"
		>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
