import Link from "next/link";
import {
	ArrowRight,
	Download,
	FileText,
	Layers,
	LineChart,
	ServerCog,
} from "lucide-react";
import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";

const rolePositions = [
	{
		title: "Data Engineering / Data Platform",
		description:
			"Best fit for roles focused on building scalable pipelines, warehouse layers, orchestration, data quality, governance, and reliable analytics foundations.",
		strengths: [
			"Snowflake-based data platform development",
			"Airflow, dbt, Dataiku, and pipeline orchestration",
			"Data quality checks, monitoring, and alerting",
			"Source system integration and operational reporting",
		],
		icon: Layers,
	},
	{
		title: "Analytics Engineering",
		description:
			"Best fit for roles that need someone who can turn raw operational data into trusted models, metrics, semantic layers, and dashboard-ready datasets.",
		strengths: [
			"Business metric definition and reporting logic",
			"Dimensional modeling and analytics-ready datasets",
			"Dashboard enablement using Superset and Power BI",
			"Collaboration with business and analytics stakeholders",
		],
		icon: LineChart,
	},
	{
		title: "Backend / Data Product Engineering",
		description:
			"Best fit for roles that combine backend systems, APIs, data workflows, integrations, and practical product-facing engineering.",
		strengths: [
			"API development and systems integration",
			"Python, C#/.NET, Node.js, and database-backed services",
			"Docker-based development and deployment workflows",
			"Experience bridging data systems with user-facing tools",
		],
		icon: ServerCog,
	},
];

const resumeHighlights = [
	"6+ years building data platforms, pipelines, analytics systems, and backend data products.",
	"Led data engineering work across multi-country operational environments.",
	"Managed and mentored data engineers while remaining hands-on technically.",
	"Strong experience with Python, SQL, Snowflake, Airflow, dbt, Dataiku, Soda, Superset, Power BI, APIs, and Docker.",
];

export const metadata: Metadata = {
	title: "Resume",
	description:
		"Resume and role positioning for Fredrick Mandela, a senior data and full-stack engineering professional focused on data platforms, backend systems, analytics engineering, APIs, and production-ready applications.",
};

export default function ResumePage() {
	return (
		<section className="mx-auto max-w-6xl px-6 py-16">
			<SectionHeader
				eyebrow="Resume"
				title="Resume and role positioning"
				description="A formal CV download, supported by short summaries of the roles where my experience is strongest."
			/>

			<div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
				<div className="space-y-8">
					<section className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
						<div className="border-b border-border bg-slate-50 px-8 py-6">
							<div className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
								<FileText className="mr-2 h-4 w-4" />
								Primary resume
							</div>

							<h3 className="text-2xl font-semibold tracking-tight text-slate-950">
								Data Engineering / Data Platform Resume
							</h3>

							<p className="mt-4 max-w-3xl leading-7 text-slate-600">
								My resume is currently positioned around data engineering, data
								platforms, analytics engineering, and reliable data systems. It
								highlights both hands-on technical delivery and leadership
								experience across multi-country operational environments.
							</p>
						</div>

						<div className="px-8 py-8">
							<div className="grid gap-4 sm:grid-cols-2">
								{resumeHighlights.map((highlight) => (
									<div
										key={highlight}
										className="rounded-2xl border border-border bg-white p-5"
									>
										<p className="text-sm leading-6 text-slate-600">
											{highlight}
										</p>
									</div>
								))}
							</div>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Link
									href="/Fredrick-Mandela-Resume.pdf"
									className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white shadow-sm hover:bg-slate-800"
								>
									<Download className="mr-2 h-4 w-4" />
									Download resume
								</Link>

								<Link
									href="/case-studies"
									className="inline-flex items-center justify-center rounded-xl border border-border bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50"
								>
									View case studies
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						</div>
					</section>

					<section className="rounded-3xl border border-border bg-card p-8 shadow-sm">
						<h3 className="text-xl font-semibold tracking-tight text-slate-950">
							Role-specific positioning
						</h3>

						<p className="mt-3 max-w-3xl leading-7 text-slate-600">
							I usually tailor my resume depending on the role. The same core
							experience can be framed differently depending on whether the
							position emphasizes data platforms, analytics engineering, backend
							engineering, or technical leadership.
						</p>

						<div className="mt-8 grid gap-5">
							{rolePositions.map((role) => {
								const Icon = role.icon;

								return (
									<div
										key={role.title}
										className="rounded-2xl border border-border bg-white p-6"
									>
										<div className="flex flex-col gap-4 md:flex-row md:items-start">
											<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100">
												<Icon className="h-5 w-5 text-slate-700" />
											</div>

											<div>
												<h4 className="font-semibold text-slate-950">
													{role.title}
												</h4>

												<p className="mt-2 leading-7 text-slate-600">
													{role.description}
												</p>

												<div className="mt-4 grid gap-2 sm:grid-cols-2">
													{role.strengths.map((strength) => (
														<div key={strength} className="flex gap-2">
															<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
															<p className="text-sm leading-6 text-slate-600">
																{strength}
															</p>
														</div>
													))}
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</section>
				</div>

				<aside className="space-y-6 lg:sticky lg:top-24">
					<div className="rounded-3xl border border-border bg-slate-950 p-6 text-white shadow-sm">
						<h3 className="font-semibold">Current positioning</h3>

						<p className="mt-4 text-sm leading-7 text-slate-300">
							Data Engineering Manager and Data Platform Lead with experience
							building scalable pipelines, warehouses, analytics platforms, data
							quality systems, and backend data workflows across multi-country
							operational environments.
						</p>
					</div>

					<div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
						<h3 className="font-semibold text-slate-950">Best-fit roles</h3>

						<div className="mt-4 space-y-3 text-sm text-slate-600">
							<p>Senior Data Engineer</p>
							<p>Data Platform Engineer</p>
							<p>Analytics Engineer</p>
							<p>Backend/Data Engineer</p>
							<p>Data Engineering Lead</p>
							<p>Engineering Team Lead</p>
						</div>
					</div>
				</aside>
			</div>
		</section>
	);
}
