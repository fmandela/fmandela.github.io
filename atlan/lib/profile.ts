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
		"I build reliable data products and software for operational teams.",

	intro:
		"I’m Fredrick Mandela, a senior data and full-stack engineer based in Nairobi, Kenya. I turn complex operational needs into dependable data platforms, backend services, analytics products, and applications. My experience spans hands-on engineering and technical leadership across multi-country environments.",

	shortBio:
		"Fredrick Mandela is a senior data and full-stack engineer based in Nairobi, Kenya, building reliable data platforms, backend systems, analytics products, and production-ready applications.",

	email: "fredricardomandela@gmail.com",
	location: "Nairobi, Kenya",

	website: "https://fredrickmandela.netlify.app",
	linkedin: "https://www.linkedin.com/in/fmandela",
	github: "https://github.com/fmandela",

	currentPositioning:
		"Senior Data & Full-Stack Engineer working across data platforms, backend systems, analytics products, and production-ready applications.",

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
		"Financial Data Engineering",
		"Web Scraping",
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
	{ label: "Experience", value: "8+ years" },
];

export const projects = [
	{
		title: "Investar Companion",
		status: "Featured · In development",
		description:
			"A financial-data platform that collects Kenyan unit-trust rates from provider websites and documents, then standardizes them into auditable, analysis-ready records in Supabase.",
		detail:
			"It combines provider-specific scrapers with AI-assisted extraction, preserves source evidence and confidence, tracks rate history and freshness, and exposes an API-ready market snapshot for fund comparison, advisor tools, and automated publishing.",
		tools: ["Python", "Playwright", "Supabase", "PostgreSQL", "AI extraction"],
		github: "https://github.com/fmandela/investar-companion",
	},
	{
		title: "AI SQL Analyst",
		description:
			"A local-first Streamlit analytics assistant that turns plain-English business questions into safe SQL, runs queries against sample data, and explains the results clearly.",
		detail:
			"The architecture is designed to extend to Snowflake or another production database.",
		tools: ["Python", "Streamlit", "SQL", "Applied AI"],
		demo: "https://ai-sql-analyst-demo.streamlit.app/",
		github: "https://github.com/fmandela/ai-sql-analyst",
	},
	{
		title: "AI Career Assistant",
		description:
			"A local-first Streamlit assistant that helps users create professional resumes and assess their fit for roles using job descriptions.",
		detail:
			"It has a future path to integrate with LinkedIn or other job platforms.",
		tools: ["Python", "Streamlit", "Applied AI"],
		demo: "https://resume-builder-ai-agent.streamlit.app/",
		github: "https://github.com/fmandela/resume-builder-agent",
	},
	{
		title: "Dairy Farm Records",
		description:
			"A full-stack farm management product for capturing animal records, milk production, feeding logs, health events, heat cycles, and insemination records from a Flutter Android application.",
		detail:
			"A FastAPI backend provides authenticated endpoints while the mobile app gives farmers a straightforward record-management workflow.",
		tools: ["Flutter", "FastAPI", "Python", "REST APIs"],
		demo: "https://farmer-app-backend-roq4.onrender.com/",
	},
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
