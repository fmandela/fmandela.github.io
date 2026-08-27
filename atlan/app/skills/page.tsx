import {
	BrainCircuit,
	Code2,
	Database,
	LineChart,
	ServerCog,
	ShieldCheck,
	Users,
} from "lucide-react";
import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillGroup } from "@/components/SkillGroup";

const groups = [
	{
		title: "Data Engineering",
		items: [
			"Batch and scheduled pipeline development",
			"ETL/ELT implementation across operational systems",
			"Warehouse modeling for analytics and reporting",
			"Workflow orchestration, monitoring, and recovery",
			"Source system integration using APIs and extraction tools",
		],
		tools: [
			"Python",
			"SQL",
			"Snowflake",
			"Airflow",
			"dbt",
			"Dataiku",
			"Airbyte",
		],
	},
	{
		title: "Analytics Engineering",
		items: [
			"Dimensional modeling and analytics-ready datasets",
			"Business metric definitions and reporting logic",
			"Semantic reporting layers for self-service analytics",
			"Dashboard enablement and stakeholder-facing data products",
			"Translation of business questions into reliable data models",
		],
		tools: ["dbt", "SQL", "Superset", "Power BI", "Metabase"],
	},
	{
		title: "Backend Engineering",
		items: [
			"API development and integration workflows",
			"Database-backed services and operational tools",
			"Authentication-aware backend design",
			"Cloud deployment and containerized applications",
			"Practical full-stack delivery across web and data products",
		],
		tools: [
			"Python/FastAPI",
			"C#/.NET",
			"Node.js",
			"REST APIs",
			"Docker",
			"React",
		],
	},
	{
		title: "Governance & Reliability",
		items: [
			"Row-level security and access control design",
			"Data quality checks and validation frameworks",
			"Pipeline and dataset incident visibility",
			"Documentation, ownership, and data governance practices",
			"Monitoring and alerting for business-critical datasets",
		],
		tools: [
			"Snowflake policies",
			"Soda",
			"Slack alerts",
			"Superset roles",
			"Confluence",
			"DataHub-style docs",
		],
	},
	{
		title: "Engineering Leadership",
		items: [
			"Team management, mentorship, and technical coaching",
			"Technical prioritization and roadmap planning",
			"Stakeholder communication and delivery alignment",
			"Cross-functional project execution",
			"Balancing hands-on engineering with team leadership",
		],
		tools: [
			"Jira",
			"Notion",
			"Confluence",
			"Agile delivery",
			"Technical planning",
		],
	},
];

const capabilityHighlights = [
	{
		title: "Build reliable data platforms",
		description:
			"Designing pipelines, warehouse layers, orchestration patterns, and monitoring practices that teams can depend on.",
		icon: Database,
	},
	{
		title: "Turn data into decision systems",
		description:
			"Creating trusted analytics layers, dashboards, and business metrics that support operational and strategic decisions.",
		icon: LineChart,
	},
	{
		title: "Bridge data and backend engineering",
		description:
			"Working across APIs, databases, cloud services, and product-facing systems where data engineering meets software delivery.",
		icon: ServerCog,
	},
	{
		title: "Lead technical delivery",
		description:
			"Managing engineering work, aligning stakeholders, mentoring engineers, and keeping delivery grounded in business value.",
		icon: Users,
	},
];

const roleFit = [
	"Senior Data Engineer",
	"Analytics Engineer",
	"Data Platform Engineer",
	"Backend/Data Engineer",
	"Data Engineering Lead",
	"Engineering Team Lead",
];

const toolCoverage = [
	"Python",
	"SQL",
	"Snowflake",
	"Airflow",
	"dbt",
	"Dataiku",
	"Soda",
	"Superset",
	"Power BI",
	"Docker",
	"C#/.NET",
	"Node.js",
	"React",
];

export const metadata: Metadata = {
	title: "Skills",
	description:
		"Technical and leadership skills for Fredrick Mandela across data engineering, full-stack engineering, backend systems, data platforms, analytics engineering, governance, reliability, and technical delivery.",
};

export default function SkillsPage() {
	return (
		<section className="mx-auto max-w-6xl px-6 py-16">
			<SectionHeader
				eyebrow="Skills"
				title="Technical and leadership strengths"
				description="A capability map of how I create value across data engineering, analytics engineering, backend systems, reliability, and technical leadership."
			/>

			<div className="mt-10 rounded-3xl border border-border bg-card p-8 shadow-sm">
				<div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
					<div>
						<div className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
							<BrainCircuit className="mr-2 h-4 w-4" />
							Capability map
						</div>

						<h2 className="max-w-3xl text-2xl font-semibold tracking-tight text-slate-950">
							My strongest work happens where data platforms, backend systems,
							analytics, and business operations meet.
						</h2>

						<p className="mt-4 max-w-3xl leading-7 text-slate-600">
							I bring a mix of hands-on engineering, systems thinking, and
							stakeholder-facing delivery. That has allowed me to work across
							pipelines, warehouses, APIs, reporting layers, governance, and
							team leadership without losing sight of the operational problems
							the technology is meant to solve.
						</p>
					</div>
				</div>
			</div>

			<div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
				{capabilityHighlights.map((capability) => {
					const Icon = capability.icon;

					return (
						<div
							key={capability.title}
							className="rounded-3xl border border-border bg-card p-6 shadow-sm"
						>
							<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100">
								<Icon className="h-5 w-5 text-slate-700" />
							</div>

							<h3 className="font-semibold text-slate-950">
								{capability.title}
							</h3>

							<p className="mt-3 text-sm leading-6 text-slate-600">
								{capability.description}
							</p>
						</div>
					);
				})}
			</div>

			<div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
				<div className="grid gap-5 md:grid-cols-2">
					{groups.map((group) => (
						<SkillGroup key={group.title} {...group} />
					))}
				</div>

				<aside className="space-y-6">
					<div className="rounded-3xl border border-border bg-slate-950 p-6 text-white shadow-sm">
						<h3 className="font-semibold">How I position this mix</h3>

						<p className="mt-4 text-sm leading-7 text-slate-300">
							I am strongest in roles that need someone who can design reliable
							data systems, understand backend integration patterns, support
							analytics users, and lead technical delivery across ambiguous
							problem spaces.
						</p>
					</div>

					<div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
						<h3 className="font-semibold text-slate-950">Role fit</h3>

						<div className="mt-4 space-y-3 text-sm text-slate-600">
							{roleFit.map((role) => (
								<p key={role}>{role}</p>
							))}
						</div>
					</div>

					<div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
						<h3 className="font-semibold text-slate-950">Tool coverage</h3>

						<div className="mt-4 flex flex-wrap gap-2">
							{toolCoverage.map((tool) => (
								<span
									key={tool}
									className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
								>
									{tool}
								</span>
							))}
						</div>
					</div>
				</aside>
			</div>
		</section>
	);
}
