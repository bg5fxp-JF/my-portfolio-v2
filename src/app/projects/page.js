import { projectData } from "@/constants";
import ProjectCard from "./components/ProjectCard";

export default function Projects() {
	return (
		<div className="flex flex-col w-full gap-16 p-7 rounded-md shadow-md bg-foreground">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{projectData.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>
		</div>
	);
}
