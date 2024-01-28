import Hero from "@/components/Hero";
import "./globals.css";

export const metadata = {
	title: "JF | Portfolio",
	description: "Full-Stack Web3 Developer",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-background">
				<Hero />
				{children}
			</body>
		</html>
	);
}
