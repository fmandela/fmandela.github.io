import { CaseStudyDetail } from "../../../components/CaseStudyDetail";

export default function Page() {
	return (
		<CaseStudyDetail
			title="Building Data Quality and Pipeline Observability"
			context="As data usage grew across reporting, analytics, and operational workflows, the team needed stronger visibility into pipeline failures, data quality issues, and production dataset reliability. Many data issues were previously discovered through manual checks, delayed stakeholder escalation, or downstream dashboard inconsistencies, which made it harder to respond early and maintain trust."
			role="I helped establish monitoring and data quality practices that made production issues more visible, easier to diagnose, and easier for the team to act on. My role included identifying critical datasets, shaping quality-check patterns, integrating checks into orchestration workflows, and connecting alerts to team operating routines."
			approach={[
				"Added data quality checks for critical datasets so issues could be detected closer to the source rather than after they appeared in reports.",
				"Used Airflow orchestration to run validation checks consistently as part of scheduled data workflows.",
				"Implemented Soda checks to validate expectations such as completeness, freshness, accepted values, and other dataset-specific rules.",
				"Sent failed check alerts to Slack channels to improve visibility and reduce reliance on manual discovery or stakeholder escalation.",
				"Connected pipeline and data quality alerts to team operating routines so engineers had clearer ownership of investigation and resolution.",
				"Improved incident awareness across engineering and stakeholder groups by making reliability issues more transparent and easier to communicate.",
				"Supported the shift toward data quality contracts by making expectations around important datasets more explicit and reviewable.",
			]}
			tools="Soda, Airflow, Slack, Snowflake, SQL, Superset, dbt, and pipeline documentation practices."
			impact="The work moved the team toward proactive monitoring instead of relying only on manual checks, dashboard inconsistencies, or stakeholder escalation. It improved visibility into production data issues, strengthened confidence in critical datasets, and created a stronger foundation for data quality ownership, alerting, and operational reliability."
		/>
	);
}
