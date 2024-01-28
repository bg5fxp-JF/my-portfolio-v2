import Hero from "@/components/Hero";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";

export const metadata = {
	title: "JF | Portfolio",
	description: "Full-Stack Web3 Developer",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-background">
				<div className=" absolute top-0 w-full h-[250px] max-w-[1440px] left-1/2 transform -translate-x-1/2 px-3 rounded-md bg-white sm:px-6 "></div>
				<div className="relative flex flex-col gap-7 w-full max-w-[1440px] mx-auto mt-40 px-6 pb-28 sm:px-16">
					<Hero />
					<div className="md:grid grid-cols-5 grid-rows-5 gap-7">
						<div className="hidden md:block row-span-5 col-start-1 row-start-1">
							<Navbar />
						</div>
						<div className="col-span-4 row-span-5 col-start-2 row-start-1">
							{children}
						</div>
					</div>
				</div>
				<MobileNav />
				{/* <section className="relative flex w-full max-w-[1440px] mt-40 mx-auto px-6 pb-28 sm:px-16 ">
					
					{children}
				</section> */}
			</body>
		</html>
	);
}
