import { CaseStudyDetail } from "../../../components/CaseStudyDetail";

export default function Page() {
	return (
		<CaseStudyDetail
			title="Large-Scale Data Migration into Fineract and Odoo"
			context="The business needed to migrate operational data from legacy systems into a modern platform while preserving data integrity, aligning with target-system configuration, and ensuring production readiness. The migration involved complex entities such as organizational units, groups, clients, identifiers, loans, repayments, and order data, each with its own validation rules and dependency constraints."
			role="I supported the migration approach, validation process, technical alignment, and leadership communication around readiness, blockers, and trade-offs. My role involved helping the team separate technical migration execution from data readiness, clarify what was blocked by system constraints versus business decisions, and maintain visibility for leadership during a high-pressure operational transition."
			approach={[
				"Prepared and structured source data from legacy systems so it could conform to Fineract and Odoo API requirements.",
				"Validated data against target-system configuration and integrity constraints, including office mappings, group activation dates, client status, loan relationships, repayment rules, and order mappings.",
				"Used iterative QA uploads to identify and resolve data issues before production migration, reducing the risk of introducing invalid records into live systems.",
				"Tracked blockers across clients, groups, loans, repayments, identifiers, and order data so the team could distinguish between engineering issues, source-data cleanup, and business decisions.",
				"Supported API-based migration workflows using reusable scripts and Dataiku automation, while also evaluating alternative methods such as system bulk uploads where appropriate.",
				"Worked with business, product, engineering, and leadership stakeholders to communicate progress, risks, readiness, and the trade-offs involved in migration decisions.",
				"Helped frame production readiness around validated data, clear ownership of outstanding issues, and explicit decisions on what was required for scale-up versus what could follow later.",
			]}
			tools="Python, Dataiku, APIs, Snowflake, SQL, Fineract, Odoo, QA environments, and migration tracking documentation."
			impact="The work supported a reusable migration approach and improved clarity around what was technically blocked, what required business decision-making, and what was ready for production or scale-up. It helped reduce ambiguity in a complex migration by making data readiness, system constraints, validation progress, and outstanding risks visible to both technical and leadership stakeholders."
		/>
	);
}
