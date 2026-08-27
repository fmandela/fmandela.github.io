import {
	ArrowRight,
	BookOpen,
	BriefcaseBusiness,
	Layers,
	Target,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { SectionHeader } from "@/components/SectionHeader";
import { caseStudies } from "@/lib/profile";

const studyPrinciples = [
	{
		title: "Business context",
		description:
			"Each writeup starts with the operational or organizational problem the work was meant to solve.",
		icon: Target,
	},
	{
		title: "Technical approach",
		description:
			"I explain the architecture, tools, tradeoffs, constraints, and implementation choices behind the solution.",
		icon: Layers,
	},
	{
		title: "Ownership and impact",
		description:
			"The goal is to show not only what was built, but what I owned and how the work helped teams make progress.",
		icon: BriefcaseBusiness,
	},
];

export const metadata: Metadata = {
	title: "Case Studies",
	description:
		"Case studies from Fredrick Mandela covering data platform scaling, large-scale data migration, data quality, pipeline observability, analytics enablement, backend systems, APIs, and full-stack engineering projects.",
};

export default function CaseStudiesPage() {
	return (
		<section className="mx-auto max-w-6xl px-6 py-16">
			<div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
				<div>
					<SectionHeader
						eyebrow="Case studies"
						title="Project stories that expand the resume"
						description="These writeups give more context behind the systems I have worked on: the problem, my role, the technical approach, the constraints, and the outcomes."
					/>

					<div className="mt-8 rounded-3xl border border-border bg-card p-8 shadow-sm">
						<div className="flex items-start gap-4">
							<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50">
								<BookOpen className="h-6 w-6 text-blue-700" />
							</div>

							<div>
								<h2 className="text-xl font-semibold tracking-tight text-slate-950">
									Why these case studies matter
								</h2>

								<p className="mt-3 max-w-3xl leading-7 text-slate-600">
									A resume can summarize tools and achievements, but it does not
									always show how decisions were made. These case studies are
									intended to show how I think through engineering problems,
									balance technical constraints with business needs, and deliver
									systems that teams can actually rely on.
								</p>

								<div className="mt-6 flex flex-col gap-3 sm:flex-row">
									<Link
										href="/resume"
										className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
									>
										View resume <ArrowRight className="ml-2 h-4 w-4" />
									</Link>

									<Link
										href="/contact"
										className="inline-flex items-center justify-center rounded-xl border border-border bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
									>
										Get in touch
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-10 grid gap-5 md:grid-cols-2">
						{caseStudies.map((study) => (
							<CaseStudyCard key={study.href} {...study} />
						))}
					</div>
				</div>

				<aside className="space-y-6 lg:sticky lg:top-24">
					<div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
						<h3 className="font-semibold text-slate-950">
							How each story is structured
						</h3>

						<div className="mt-5 space-y-5">
							{studyPrinciples.map((principle) => {
								const Icon = principle.icon;

								return (
									<div key={principle.title} className="flex gap-3">
										<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100">
											<Icon className="h-4 w-4 text-slate-700" />
										</div>

										<div>
											<h4 className="text-sm font-semibold text-slate-950">
												{principle.title}
											</h4>
											<p className="mt-1 text-sm leading-6 text-slate-600">
												{principle.description}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					<div className="rounded-3xl border border-border bg-slate-950 p-6 text-white shadow-sm">
						<h3 className="font-semibold">Main themes</h3>

						<div className="mt-4 flex flex-wrap gap-2">
							{[
								"Data platforms",
								"Migration",
								"Data quality",
								"Analytics",
								"Backend systems",
								"Leadership",
							].map((theme) => (
								<span
									key={theme}
									className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200"
								>
									{theme}
								</span>
							))}
						</div>
					</div>
				</aside>
			</div>
		</section>
	);
}
