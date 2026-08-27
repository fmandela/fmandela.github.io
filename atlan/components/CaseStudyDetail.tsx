type CaseStudyDetailProps = {
	title: string;
	context: string;
	role: string;
	approach: string[];
	tools: string;
	impact: string;
};

export function CaseStudyDetail({
	title,
	context,
	role,
	approach,
	tools,
	impact,
}: CaseStudyDetailProps) {
	return (
		<article className="mx-auto max-w-4xl px-6 py-16">
			<p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
				Case study
			</p>
			<h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>

			<div className="prose mt-10 max-w-none">
				<h2>Context</h2>
				<p>{context}</p>

				<h2>My role</h2>
				<p>{role}</p>

				<h2>Technical approach</h2>
				<ul>
					{approach.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>

				<h2>Tools</h2>
				<p>{tools}</p>

				<h2>Impact</h2>
				<p>{impact}</p>
			</div>
		</article>
	);
}
