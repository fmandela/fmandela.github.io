import { CaseStudyDetail } from "../../../components/CaseStudyDetail";

export default function Page() {
	return (
		<CaseStudyDetail
			title="Scaling a Multi-Country Data Platform"
			context="Multi-country operations needed reliable, trusted, and scalable data systems to support reporting, operational decisions, and strategic planning. The data landscape included multiple source systems, country-specific reporting needs, and increasing demand for self-service analytics, which made consistency, reliability, and governance increasingly important."
			role="I worked as a hands-on data engineering lead and manager, helping design, build, and operate the data platform while coordinating delivery across engineers, analysts, business stakeholders, and leadership. My role combined technical architecture, pipeline development, data modeling, delivery planning, team support, and stakeholder communication."
			approach={[
				"Standardized ingestion patterns across operational systems so data could be brought into the warehouse in a more consistent and maintainable way.",
				"Used Snowflake as a centralized warehouse layer for storing, transforming, and serving data across reporting and analytics use cases.",
				"Built and supported transformations using SQL, dbt, Dataiku, and warehouse-native patterns to move data from raw ingestion layers toward trusted reporting models.",
				"Orchestrated key workflows using Airflow and Dataiku automation, improving visibility into pipeline execution, scheduling, and failures.",
				"Introduced and scaled data quality practices using Soda checks, Airflow tasks, and Slack alerts to catch issues earlier and improve confidence in production datasets.",
				"Enabled reporting and self-service analytics through Superset and Power BI by creating cleaner data layers and supporting dashboard-ready datasets.",
				"Improved platform documentation, ownership clarity, and delivery tracking so both technical and business teams had better visibility into how data products were built and maintained.",
			]}
			tools="Snowflake, Airflow, dbt, Dataiku, Python, SQL, Superset, Power BI, Soda, Airbyte, Slack alerts, and technical documentation tools."
			impact="The work improved platform reliability, data trust, analytics adoption, and delivery visibility across multi-country reporting needs. It helped move the organization toward a more centralized and governed data platform, reducing reliance on fragmented reporting workflows and making it easier for teams to build on shared, trusted data foundations."
		/>
	);
}
