import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/lib/profile";

export const metadata: Metadata = {
	title: "Projects",
	description:
		"Selected projects by Fredrick Mandela spanning financial data, analytics engineering, backend systems, full-stack development, and applied AI.",
};

export default function ProjectsPage() {
	return (
		<section className="mx-auto max-w-6xl px-6 py-16">
			<SectionHeader
				eyebrow="Selected work"
				title="Projects and technical products"
				description="Practical products and technical demos spanning financial data, analytics engineering, backend systems, full-stack development, and applied AI."
			/>

			<div className="mt-10 grid gap-6 md:grid-cols-2">
				{projects.map((project) => (
					<ProjectCard key={project.title} {...project} />
				))}
			</div>
		</section>
	);
}
