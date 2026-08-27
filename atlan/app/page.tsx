import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { ImpactStats } from "@/components/ImpactStats";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { caseStudies, profile, projects } from "@/lib/profile";

export default function HomePage() {
	const personJsonLd = {
		"@context": "https://schema.org",
		"@type": "Person",
		"@id": `${profile.website}/#person`,
		name: profile.name,
		url: profile.website,
		email: `mailto:${profile.email}`,
		jobTitle: "Senior Data and Full-Stack Engineer",
		description: profile.shortBio,
		address: {
			"@type": "PostalAddress",
			addressLocality: "Nairobi",
			addressCountry: "KE",
		},
		sameAs: [profile.linkedin, profile.github].filter(Boolean),
		knowsAbout: profile.roleFocus,
		affiliation: {
			"@type": "Organization",
			name: "One Acre Fund",
		},
	};

	const websiteJsonLd = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": `${profile.website}/#website`,
		name: "Fredrick Mandela Portfolio",
		url: profile.website,
		description:
			"Portfolio website for Fredrick Mandela, covering data platforms, backend systems, analytics products, full-stack applications, and technical leadership.",
		publisher: {
			"@id": `${profile.website}/#person`,
		},
	};
	return (
		<div>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify([personJsonLd, websiteJsonLd]),
				}}
			/>
			<section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
				<div className="max-w-4xl">
					<p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
						Data Platforms · Backend Systems · Full-Stack Applications
					</p>

					<h1 className="text-5xl font-bold tracking-tight md:text-4xl">
						{profile.headline}
					</h1>

					<p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
						{profile.intro}
					</p>

					<div className="mt-8 flex flex-col gap-3 sm:flex-row">
						<Link
							href="/case-studies"
							className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white shadow-sm hover:bg-slate-800"
						>
							View case studies <ArrowRight className="ml-2 h-4 w-4" />
						</Link>

						<Link
							href="/resume"
							className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 font-semibold hover:bg-slate-50"
						>
							View resume
						</Link>
						<Link
							href="/contact"
							className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 font-semibold hover:bg-slate-50"
						>
							Let's connect
						</Link>
					</div>
				</div>

				<div className="relative mx-auto w-full max-w-sm">
					<div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-slate-100 shadow-sm">
						<Image
							src="/images/fredrick-mandela-profile.jpg"
							alt="Fredrick Mandela"
							fill
							priority
							sizes="(min-width: 768px) 384px, 100vw"
							className="object-cover"
						/>
					</div>

					<div className="absolute -bottom-6 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-border bg-white/90 p-4 shadow-lg backdrop-blur">
						<p className="text-sm font-semibold text-slate-950">
							Senior data and full-stack engineer based in Nairobi, Kenya
						</p>
						<p className="mt-1 text-sm text-slate-600">
							Snowflake · Airflow · dbt · Python · SQL · APIs
						</p>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-6 pb-16">
				<ImpactStats />
			</section>

			<section className="mx-auto max-w-6xl px-6 py-16">
				<SectionHeader
					eyebrow="Projects"
					title="Products built from practical problems"
					description="Selected work across financial data, analytics engineering, backend systems, full-stack development, and applied AI."
				/>

				<div className="grid gap-5 md:grid-cols-2">
					{projects.slice(0, 2).map((project) => (
						<ProjectCard key={project.title} {...project} />
					))}
				</div>

				<div className="mt-6">
					<Link
						href="/projects"
						className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-900"
					>
						View all projects <ArrowRight className="ml-2 h-4 w-4" />
					</Link>
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-6 py-16">
				<SectionHeader
					eyebrow="Selected work"
					title="Featured case studies"
					description="Deeper writeups that expand the resume into context, technical decisions, constraints, and outcomes."
				/>

				<div className="grid gap-5 md:grid-cols-2">
					{caseStudies.slice(0, 4).map((study) => (
						<CaseStudyCard key={study.href} {...study} />
					))}
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-6 py-16">
				<SectionHeader eyebrow="Strengths" title="Where I create value" />

				<div className="grid gap-5 md:grid-cols-3">
					{[
						"Dependable data platforms",
						"Decision-ready analytics products",
						"Backend services and integrations",
						"Data quality and governance",
						"Technical leadership",
						"Stakeholder-aligned execution",
					].map((item) => (
						<div
							key={item}
							className="rounded-2xl border border-border bg-card p-6 shadow-sm"
						>
							<h3 className="font-semibold">{item}</h3>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
