import {
	attributesGroup1,
	attributesGroup2,
	attributesGroup3,
} from "@/constants";
import React from "react";

export default function TopHero() {
	return (
		<div className=" absolute top-0 w-full h-[250px] max-w-[1440px] left-1/2 transform -translate-x-1/2 py-2 rounded-md bg-primary overflow-hidden ">
			<div className="text-6xl text-primary-content text-opacity-30 font-bold text-nowrap">
				<h1 className=" animate-infinite-scroll">{attributesGroup1}</h1>
				<h1 className=" animate-infinite-scroll2">{attributesGroup2}</h1>
				<h1 className=" animate-infinite-scroll">{attributesGroup3}</h1>
			</div>
		</div>
	);
}
