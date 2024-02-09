import Hero from "@/components/Hero";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import TopHero from "@/components/TopHero";
import Preloader from "@/components/Preloader";
import ScrollBack from "@/components/ScrollBack";

export const metadata = {
	title: "JF | Portfolio",
	description:
		"I'm a forward-thinking Full-Stack Web3 Developer, who thrives in the face of challenges and embodies an unwavering commitment to lifelong learning.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className=" bg-background">{children}</body>
		</html>
	);
}
