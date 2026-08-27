import { CaseStudyDetail } from "../../../components/CaseStudyDetail";

export default function Page() {
	return (
		<CaseStudyDetail
			title="Analytics Enablement Through Trusted Reporting Layers"
			context="Business and operations teams needed reliable datasets and dashboards to support recurring decision-making. In many cases, reporting depended on ad hoc data pulls, unclear metric definitions, or fragmented source data, which made it harder for teams to trust the numbers and act quickly."
			role="I worked across data engineering, analytics, and business teams to transform raw operational data into governed reporting layers, dashboard-ready datasets, and usable analytics products. My role included designing data models, clarifying metric logic, supporting BI adoption, and making sure the outputs were reliable enough for regular stakeholder use."
			approach={[
				"Modeled raw operational data into structured warehouse layers that could support reporting and analytics use cases.",
				"Created and maintained dashboard-ready datasets to reduce repeated ad hoc SQL/data requests.",
				"Partnered with business teams to clarify metric definitions, reporting logic, and ownership of key data products.",
				"Supported BI adoption through Superset and Power BI by making trusted datasets easier to discover and use.",
				"Improved documentation around data products, including source logic, transformation assumptions, and intended usage.",
				"Worked with engineers and analysts to improve reliability, refresh patterns, and issue resolution for reporting datasets.",
			]}
			tools="SQL, Snowflake, dbt, Superset, Power BI, Dataiku, and documentation tools."
			impact="The work improved trust in reporting, reduced ambiguity around key metrics, and made analytics more accessible to business users. It also helped shift reporting work away from one-off requests toward reusable, governed data products that could support recurring decisions."
		/>
	);
}
