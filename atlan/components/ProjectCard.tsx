import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

type ProjectCardProps = {
	title: string;
	status?: string;
	description: string;
	detail: string;
	tools: string[];
	demo?: string;
	github?: string;
};

export function ProjectCard({
	title,
	status,
	description,
	detail,
	tools,
	demo,
	github,
}: ProjectCardProps) {
	return (
		<article className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm">
			{status ? (
				<p className="mb-4 w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
					{status}
				</p>
			) : null}

			<h2 className="text-xl font-semibold tracking-tight text-slate-950">
				{title}
			</h2>
			<p className="mt-3 leading-7 text-slate-600">{description}</p>
			<p className="mt-3 text-sm leading-6 text-slate-500">{detail}</p>

			<div className="mt-5 flex flex-wrap gap-2">
				{tools.map((tool) => (
					<span
						key={tool}
						className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
					>
						{tool}
					</span>
				))}
			</div>

			<div className="mt-auto flex flex-wrap gap-3 pt-7">
				{demo ? (
					<Link
						href={demo}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
					>
						View demo <ExternalLink className="ml-2 h-4 w-4" />
					</Link>
				) : null}
				{github ? (
					<Link
						href={github}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center rounded-xl border border-border bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
					>
						<Github className="mr-2 h-4 w-4" /> GitHub
					</Link>
				) : null}
			</div>
		</article>
	);
}
