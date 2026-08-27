import { SectionHeader } from "@/components/SectionHeader";
import {
	Briefcase,
	Database,
	LineChart,
	ShieldCheck,
	Users,
	Workflow,
} from "lucide-react";

import { impactStats } from "@/lib/profile";
import { ownershipAreas } from "@/lib/profile";
import { achievements } from "@/lib/profile";
import { tools } from "@/lib/profile";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Experience",
	description:
		"Expanded professional experience for Fredrick Mandela, covering data engineering, full-stack engineering, backend systems, data platforms, analytics engineering, technical leadership, and production data workflows.",
};
export default function ExperiencePage() {
	return (
		<section className="mx-auto max-w-6xl px-6 py-16">
			<SectionHeader
				eyebrow="Experience"
				title="A deeper look at my professional experience"
				description="Beyond the resume summary: the systems I have owned, the teams I have supported, and the kind of engineering problems I have worked on."
			/>

			<div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
				<div className="space-y-8">
					<article className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
						<div className="border-b border-border bg-slate-50 px-8 py-6">
							<div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
								<div>
									<div className="mb-3 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
										<Briefcase className="mr-2 h-4 w-4" />
										Most recent role
									</div>

									<h3 className="text-2xl font-semibold tracking-tight text-slate-950">
										One Acre Fund
									</h3>

									<p className="mt-2 text-lg font-medium text-slate-700">
										Data Engineering Manager / Lead Data Engineer
									</p>

									<p className="mt-1 text-sm text-slate-500">
										January 2021 – March 2026 · Nairobi, Kenya
									</p>
								</div>
							</div>
						</div>

						<div className="px-8 py-8">
							<p className="max-w-3xl text-lg leading-8 text-slate-600">
								At One Acre Fund, I led data engineering work across
								multi-country operations, combining hands-on engineering with
								team leadership, stakeholder engagement, platform ownership, and
								delivery management. My work focused on building reliable data
								pipelines, improving data quality, enabling analytics, and
								supporting operational systems that teams depended on for
								reporting and decision-making.
							</p>

							<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
								{impactStats.map((stat) => (
									<div
										key={stat.label}
										className="rounded-2xl border border-border bg-white p-5 text-center"
									>
										<div className="flex min-h-14 items-center justify-center">
											<p className="max-w-[12rem] text-lg font-semibold leading-snug text-slate-950">
												{stat.value}
											</p>
										</div>

										<p className="mt-2 text-sm leading-snug text-slate-500">
											{stat.label}
										</p>
									</div>
								))}
							</div>
						</div>
					</article>

					<section className="rounded-3xl border border-border bg-card p-8 shadow-sm">
						<h3 className="text-xl font-semibold tracking-tight">
							Areas of ownership
						</h3>

						<p className="mt-3 max-w-3xl leading-7 text-slate-600">
							My role covered both platform-level engineering and people
							leadership. I worked across the full data lifecycle, from source
							system integration to warehouse modeling, quality checks,
							analytics enablement, and stakeholder-facing delivery.
						</p>

						<div className="mt-8 grid gap-5 md:grid-cols-2">
							{ownershipAreas.map((area) => {
								const Icon = area.icon;

								return (
									<div
										key={area.title}
										className="rounded-2xl border border-border bg-white p-5"
									>
										<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
											<Icon className="h-5 w-5 text-slate-700" />
										</div>

										<h4 className="font-semibold text-slate-950">
											{area.title}
										</h4>

										<p className="mt-2 text-sm leading-6 text-slate-600">
											{area.description}
										</p>
									</div>
								);
							})}
						</div>
					</section>

					<section className="rounded-3xl border border-border bg-card p-8 shadow-sm">
						<h3 className="text-xl font-semibold tracking-tight">
							Selected achievements
						</h3>

						<div className="mt-6 space-y-4">
							{achievements.map((achievement) => (
								<div key={achievement} className="flex gap-3">
									<div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
									<p className="leading-7 text-slate-600">{achievement}</p>
								</div>
							))}
						</div>
					</section>
				</div>

				<aside className="space-y-6">
					<div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
						<h3 className="font-semibold text-slate-950">Core tools</h3>

						<div className="mt-4 flex flex-wrap gap-2">
							{tools.map((tool) => (
								<span
									key={tool}
									className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
								>
									{tool}
								</span>
							))}
						</div>
					</div>

					<div className="rounded-3xl border border-border bg-slate-950 p-6 text-white shadow-sm">
						<h3 className="font-semibold">How I describe my experience</h3>

						<p className="mt-4 text-sm leading-7 text-slate-300">
							I sit at the intersection of data engineering, analytics
							engineering, backend systems, and technical leadership. I enjoy
							building systems that make messy operational data reliable,
							accessible, and useful for teams making real decisions.
						</p>
					</div>

					<div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
						<h3 className="font-semibold text-slate-950">Role fit</h3>

						<div className="mt-4 space-y-3 text-sm text-slate-600">
							<p>Data Engineering Lead</p>
							<p>Senior Data Engineer</p>
							<p>Analytics Engineer</p>
							<p>Backend/Data Platform Engineer</p>
							<p>Engineering Team Lead</p>
						</div>
					</div>
				</aside>
			</div>
		</section>
	);
}
