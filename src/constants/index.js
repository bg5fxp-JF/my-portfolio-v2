import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const attributesGroup1 =
	"Innovative · Adaptive · Collaborative · Proactive · Problem-solver · Tech-savvy · Boundary-pushing · Committed · Forward-thinking · Lifelong-learner";

export const attributesGroup2 =
	"Web3-proficient · Full-stack-expertise · Challenge-driven · Team-player · Solution-oriented · Creative-thinker · Passionate · Skilled-communicator · Ambitious · Resilient";

export const attributesGroup3 =
	"Motivated · Visionary · Strategic · Agile · Persistent · Empowering · Enthusiastic · Dedicated · Resourceful · Inspirational";

export const myInfo = {
	name: "Jacob Fecunda",
	title: "Full-stack Web3 Developer",
	email: "jacobfecunda@outlook.com",
	tel: "+447759994390",
	location: "London, UK",
	links: [
		{
			link: "https://www.linkedin.com/in/jacob-fecunda",
			Icon: AiFillLinkedin,
		},
		{
			link: "https://github.com/bg5fxp-JF",
			Icon: AiFillGithub,
		},
	],
	img: "/images/jf.jpg",
};
export const navItems = [
	{
		title: "About",
		link: "/",
	},
	{
		title: "Resume",
		link: "/resume",
	},
	{
		title: "Projects",
		link: "/projects",
	},
	{
		title: "Blog",
		link: "/blog",
	},
	{
		title: "Contact",
		link: "/contact",
	},
];
export const clients = [
	{
		company: "Crypt0Hackers",
		client: "Amaechi Okolobi",
		img: "/images/ao.png",
	},
	{ company: "DeCentral Hub", client: "Dolapo", img: "/images/dch.jpg" },
	{
		company: "Magnate Core",
		client: "Denis Kursevicius",
		img: "/images/mc.png",
	},
];

export const education = [
	{
		school: "Brunel University London",
		qualification: "Bsc (Hons) Computer Science (AI) – 1st Class",
		date: "(2020 - 2023)",
		desc: "Brunel is where my dev skills really started to take shape. Having studying modules such as; Algorithms, Cybersecurity, Software Development and Management, Computational Logic, and Networks - I can confidently say that the best practices for being a developer were learnt.",
	},
	{
		school: "City and Islingtion College",
		qualification: "Level 3 Software Developemnt Diploma - Dist* Dist* Dist*",
		date: "(2018 - 2020)",
		desc: "This is where you could say my dev journey began. Whilst at CANDI I excelled in my Course, acheiving a triple Distinction* (equivalent to A*A*A*) and also an A in Level 3 Core Maths.",
	},
];

export const workExperience = [
	{
		role: "Full Stack Developer (Intern)",
		company: "Nethermind",
		date: "(2024 - Present)",
		desc: "During my time here I have contributed to the development, maintenance and code infrastructure of the voyager - a Starknet (Ethereum L2) block explorer. I also was involved in writing tests on the Foundry framework for Netherminds Forta Staking Vault covering over 90% of cases.",
	},
	{
		role: "Front-end Developer",
		company: "Freenlance",
		date: "(2022 - Present)",
		desc: "As a freelancer I have worked on several projects often collaborating with Blockchain Dvelopers. I have prioritised transparent communication with both clients and the Back-end team. Maintaining clarity with the Back-end team involved strong communication. This helped ensure git repositories and code were well structured, in order to facilitate smoother integrations.",
	},
	{
		role: "Junior Software Developer",
		company: "Otermans Institute",
		date: "(2021)",
		desc: "Working here I; searched, collected, and cleaned large amounts of data for Machine Learning projects. I also collaborated on the development and troubleshooting of several chatbots, leveraging Python, and RASA.",
	},
	{
		role: "Software Developer (Intern)",
		company: "ARN.",
		date: "(2020 - 2021)",
		desc: "Whilst working here I contributed to the development of ARN's first app. I demonstrated a collaborative and cooperative work ethic, actively participated in ideation meetings, offered creative solutions and strategies for company growth and developed games for the app using Unity.",
	},
];

export const skills = [
	{ skill: "HTML", level: "90" },
	{ skill: "CSS", level: "80" },
	{ skill: "Webflow", level: "85" },
	{ skill: "CMS", level: "80" },
	{ skill: "Javascript", level: "85" },
	{ skill: "Typescript", level: "80" },
	{ skill: "React JS", level: "90" },
	{ skill: "Next JS", level: "90" },
	{ skill: "Bootstrap CSS", level: "85" },
	{ skill: "Tailwind CSS", level: "95" },
	{ skill: "SQL", level: "70" },
	{ skill: "Solidity", level: "75" },
	{ skill: "Hardhat", level: "75" },
	{ skill: "Foundry", level: "75" },
	{ skill: "Java", level: "85" },
	{ skill: "Python", level: "80" },
	{ skill: "Git & Github", level: "100" },
];

export const projectData = [
	{
		title: "IgniteFi",
		type: "Front-end project",
		description:
			"This is a Contracted Project. I'm working with IgniteFi and providing Front-end solutions for their landing page and also their DEX application in the making.",
		src: "/images/projects/10.png",
		link: "https://www.ignitefi.xyz/",
		tech: [
			{
				title: "Next JS",
				link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
			},
			{
				title: "Typescript",
				link: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
			},
			{
				title: "Tailwind CSS",
				link: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
			},
		],
	},
	{
		title: "Archie Sharpe",
		type: "Front-end project",
		description:
			"This was a Client Project. My job was to revamp Archie's website in order to propose a pitch for him.",
		src: "/images/projects/1.png",
		link: "https://sharpshooter-tau.vercel.app",
		tech: [
			{
				title: "React JS",
				link: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
			},
			{
				title: "Bootstrap CSS",
				link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
			},
		],
	},
	{
		title: "CrepCrypt",
		type: "Full-stack project",
		description:
			"This was a Team Hackathon Project. It's goal was to create a platform that decentralises and secures the selling/re-selling of shoes.",
		src: "/images/projects/3.png",
		link: "https://crepcrypt.vercel.app",
		tech: [
			{
				title: "Next JS",
				link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
			},
			{
				title: "Tailwind CSS",
				link: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
			},
			{
				title: "Solidity",
				link: "https://www.vectorlogo.zone/logos/ethereum/ethereum-icon.svg",
			},
		],
	},
	{
		title: "GeNFT",
		type: "Full-stack project",
		description:
			"This was a personal project. It was created for users to utilise the creatity of AI to generate NFTs and then stake them for rewards.",
		src: "/images/projects/4.png",
		link: "https://ge-nft.vercel.app",
		tech: [
			{
				title: "Next JS",
				link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
			},
			{
				title: "Tailwind CSS",
				link: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
			},
			{
				title: "Solidity",
				link: "https://www.vectorlogo.zone/logos/ethereum/ethereum-icon.svg",
			},
			{
				title: "Hardhat",
				link: "/images/Hardhat.svg",
			},
			{
				title: "Firebase",
				link: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
			},
		],
	},
	{
		title: "Cairocademy",
		type: "Full-stack project",
		description:
			"This was an MVP made during my time at Nethermind. My job was to design and develop a online course learning platform.",
		src: "/images/projects/13.png",
		link: "https://cairocademy.vercel.app/",
		tech: [
			{
				title: "Next JS",
				link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
			},
			{
				title: "Tailwind CSS",
				link: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
			},
			{
				title: "Postgress SQL",
				link: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
			},
			{
				title: "GraphQL",
				link: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
			},
			{
				title: "Figma",
				link: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
			},
		],
	},
	{
		title: "DeCentral Hub",
		type: "Front-end project",
		description:
			"My job was to create a landing page (based on their designs) and contact form to retain clients for their agency.",
		src: "/images/projects/8.png",
		link: "https://decentralhub.co.uk",
		tech: [
			{
				title: "Next JS",
				link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
			},
			{
				title: "Tailwind CSS",
				link: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
			},
		],
	},
	{
		title: "WESH",
		type: "Front-end project",
		description:
			"This was a client project sourced from DeCentral Hub. My job was to develop their website (based on their designs).",
		src: "/images/projects/12.png",
		link: "https://www.weshweshwesh.world",
		tech: [
			{
				title: "Webflow",
				link: "https://www.vectorlogo.zone/logos/webflow/webflow-icon.svg",
			},
		],
	},
	{
		title: "betVEX | ESports Betting",
		type: "Front-end project",
		description:
			"This was a Client Project. My job was to design and develop a waiting list landing page. ",
		src: "/images/projects/14.png",
		link: "https://www.betvex.xyz/",
		tech: [
			{
				title: "Webflow",
				link: "https://www.vectorlogo.zone/logos/webflow/webflow-icon.svg",
			},
			{
				title: "Figma",
				link: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
			},
		],
	},

	{
		title: "My Portfolio (Old)",
		type: "Front-end project",
		description:
			"This was my old portfolio site. Although I liked it, I decided it was time for a change and a site capable of showcasing my newest acheivements.",
		src: "/images/projects/7.png",
		link: "https://jf-portfolio-v1.vercel.app",
		tech: [
			{
				title: "Next JS",
				link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
			},
			{
				title: "Typescript",
				link: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
			},
			{
				title: "Tailwind CSS",
				link: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
			},
		],
	},
	{
		title: "Voyager",
		type: "Front-end project",
		description:
			"I worked on maintaing and improving the Voyager Dashboard during my time at Nethermind. My job included fixing bugs, implementing and testing new features optimising code and building a new design system.",
		src: "/images/projects/15.png",
		link: "https://voyager.online/",
		tech: [
			{
				title: "React JS",
				link: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
			},
			{
				title: "Typescript",
				link: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
			},
			{
				title: "Jest",
				link: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
			},
			{
				title: "Styled Components",
				link: "https://cdn.worldvectorlogo.com/logos/styled-components-1.svg",
			},
			{
				title: "Radix UI",
				link: "https://cdn.worldvectorlogo.com/logos/radix-ui.svg",
			},
			{
				title: "Storybook",
				link: "https://cdn.worldvectorlogo.com/logos/storybook-1.svg",
			},
		],
	},
	{
		title: "OPAL Web Agency",
		type: "Front-end project",
		description:
			"This is my own agency I decided to start up to start providing web solutions at a larger scale.",
		src: "/images/projects/9.png",
		link: "https://opalwebagency.com",
		tech: [
			{
				title: "Next JS",
				link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
			},
			{
				title: "Tailwind CSS",
				link: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
			},
		],
	},
	{
		title: "ZocialFi",
		type: "Front-end project",
		description:
			"This was a Client Project. My job was to create a waiting list landing page (based on their design). ",
		src: "/images/projects/16.png",
		link: "https://zocial-fi-landing-page.vercel.app/",
		tech: [
			{
				title: "Next JS",
				link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
			},
			{
				title: "Tailwind CSS",
				link: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
			},
		],
	},
];
