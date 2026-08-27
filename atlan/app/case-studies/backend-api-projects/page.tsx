import { CaseStudyDetail } from "@/components/CaseStudyDetail";

export default function Page() {
	return (
		<CaseStudyDetail
			title="Backend and API Engineering Projects"
			context="My engineering experience extends beyond data pipelines into backend services, API integrations, cloud deployments, and full-stack applications. This has been especially useful in environments where data workflows depend on operational systems, internal tools, APIs, and user-facing applications rather than only warehouse-based pipelines."
			role="I have built and supported systems using backend, frontend, database, and cloud technologies. This gives me a practical software engineering foundation that complements my data engineering work, especially when building integrations, automations, internal tools, and operational data products."
			approach={[
				"Built API-driven applications and integrations to connect systems, automate workflows, and expose data or functionality to users.",
				"Worked with database-backed services where application logic, data modeling, validation, and persistence needed to work together reliably.",
				"Used containerized and cloud-based deployment patterns to make applications easier to run, test, and deploy across environments.",
				"Developed frontend interfaces where needed, especially for portfolio, dashboard, admin, or workflow-facing use cases.",
				"Applied backend engineering practices such as modular service design, validation, error handling, authentication awareness, and API contract thinking.",
				"Brought software engineering thinking into data platform problems, especially around maintainability, observability, reliability, and clear ownership boundaries.",
			]}
			tools="Python, FastAPI, C#/.NET, Node.js, React, Material UI, Docker, REST APIs, SQL databases, Azure, and cloud deployment workflows."
			impact="This broader engineering background helps me work across data platforms, backend services, product workflows, and stakeholder-facing systems. It also makes me effective in hybrid roles where the work involves both data infrastructure and application engineering, such as platform engineering, backend data products, internal tools, and API-driven operational workflows."
		/>
	);
}
