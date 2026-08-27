import {
	Database,
	LineChart,
	ShieldCheck,
	Users,
	Workflow,
} from "lucide-react";

export const profile = {
	name: "Fredrick Mandela",

	title: "Senior Data & Full-Stack Engineer | Data Platforms | Backend Systems",

	headline:
		"Building reliable data platforms, backend systems, and full-stack applications for operational teams.",

	intro:
		"I’m Fredrick Mandela, a senior data and software engineering professional based in Nairobi, Kenya. My recent work has focused on data engineering and data platforms, but my broader experience spans full-stack development, backend systems, APIs, cloud deployments, analytics engineering, and data quality practices across multi-country operational environments.",

	shortBio:
		"Fredrick Mandela is a senior data and software engineering professional based in Nairobi, Kenya, with experience across data platforms, analytics engineering, backend systems, APIs, cloud deployments, and full-stack applications.",

	email: "fredricardomandela@gmail.com",
	location: "Nairobi, Kenya",

	website: "https://fredrickmandela.netlify.app", // replace if you add a custom domain
	linkedin: "https://www.linkedin.com/in/fmandela",
	github: "https://github.com/YOUR_GITHUB_USERNAME",

	currentPositioning:
		"Senior Data & Full-Stack Engineer focused on data platforms, backend systems, analytics engineering, and production-ready applications.",

	recentRole:
		"Previously Data Engineering Manager / Lead Data Engineer at One Acre Fund",

	roleFocus: [
		"Data Engineering",
		"Full-Stack Engineering",
		"Backend Engineering",
		"Data Platforms",
		"Analytics Engineering",
		"API Development",
		"Cloud Deployments",
		"Data Quality",
		"Pipeline Observability",
		"Snowflake",
		"Airflow",
		"dbt",
		"Python",
		"SQL",
		"C#/.NET",
		"Node.js",
		"React",
		"Docker",
	],
};

export const achievements = [
	"Led data engineering work supporting operations across multiple countries and business functions.",
	"Helped scale data infrastructure from fragmented reporting workflows toward centralized, trusted data platforms.",
	"Delivered and supported pipelines for key operational systems including Fineract, Odoo, KoboToolbox, SAP, Jira, FieldPro, and other source systems.",
	"Supported large-scale data migration work involving client, loan, repayment, group, and order data across legacy and target systems.",
	"Implemented data quality and monitoring practices using Soda, Airflow alerts, and Slack notifications to improve visibility into data issues.",
	"Managed a small data engineering team while remaining hands-on across architecture, SQL, Python, pipeline design, and stakeholder communication.",
];

export const impactStats = [
	{ label: "Leadership scope", value: "Team leadership" },
	{ label: "Primary focus", value: "Data platforms" },
	{ label: "Technical range", value: "Full-stack engineering" },
	{ label: "Experience", value: "7+ years" },
];

export const caseStudies = [
	{
		title: "Scaling a Multi-Country Data Platform",
		href: "/case-studies/data-platform-modernization",
		summary:
			"Snowflake, Airflow, dbt, Dataiku, Superset, monitoring, governance, and platform adoption.",
	},
	{
		title: "Large-Scale Data Migration into Fineract and Odoo",
		href: "/case-studies/kenya-data-migration",
		summary:
			"API-based migration, data validation, production readiness, business alignment, and operational constraints.",
	},
	{
		title: "Building Data Quality and Pipeline Observability",
		href: "/case-studies/data-quality-observability",
		summary:
			"Soda checks, Airflow orchestration, Slack alerts, incident visibility, and stakeholder confidence.",
	},
	{
		title: "Analytics Enablement Through Trusted Reporting Layers",
		href: "/case-studies/analytics-enablement",
		summary:
			"Semantic datasets, BI enablement, Superset/Power BI adoption, and trusted business metrics.",
	},
	{
		title: "Backend and API Engineering Projects",
		href: "/case-studies/backend-api-projects",
		summary:
			"Backend APIs, integrations, cloud deployments, and full-stack/product-facing engineering experience.",
	},
];

export const ownershipAreas = [
	{
		title: "Data platform ownership",
		description:
			"Led the development and operation of data platforms supporting ingestion, transformation, reporting, and analytics across multi-country operations.",
		icon: Database,
	},
	{
		title: "Pipeline reliability and orchestration",
		description:
			"Built and managed batch pipelines, workflow orchestration, monitoring, and alerting practices using tools such as Airflow, Dataiku, dbt, and Snowflake.",
		icon: Workflow,
	},
	{
		title: "Analytics enablement",
		description:
			"Partnered with business and analytics teams to convert operational data into trusted datasets, dashboards, and reporting layers for decision-making.",
		icon: LineChart,
	},
	{
		title: "Data quality and governance",
		description:
			"Implemented data quality checks, documentation practices, access controls, and governance processes to improve trust and reliability.",
		icon: ShieldCheck,
	},
	{
		title: "Technical leadership",
		description:
			"Managed and mentored data engineers, supported prioritization, reviewed technical approaches, and translated business needs into engineering delivery.",
		icon: Users,
	},
];

export const tools = [
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
	"APIs",
	"Postgres",
	"SQL Server",
];
