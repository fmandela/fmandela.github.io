import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { profile } from "@/lib/profile";

const opportunities = [
	"Senior Data Engineer",
	"Data Platform Engineer",
	"Analytics Engineer",
	"Backend/Data Engineer",
	"Data Engineering Lead",
	"Engineering Team Lead",
];

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Contact Fredrick Mandela for data engineering, full-stack engineering, backend engineering, data platform, analytics engineering, and technical leadership opportunities.",
};
export default function ContactPage() {
	return (
		<section className="mx-auto max-w-6xl px-6 py-16">
			<SectionHeader
				eyebrow="Contact"
				title="Let’s connect"
				description="Open to senior data engineering, backend and full-stack development, data-platform, analytics engineering, and technical leadership opportunities."
			/>

			<div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
				<div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
					<h2 className="text-2xl font-semibold tracking-tight text-slate-950">
						Interested in working together?
					</h2>

					<p className="mt-4 max-w-3xl leading-7 text-slate-600">
						I’m currently exploring opportunities where I can help teams build
						reliable data platforms, improve analytics foundations, design
						backend data workflows, and lead practical engineering delivery.
					</p>

					<div className="mt-8 grid gap-4">
						<Link
							href={`mailto:${profile.email}`}
							className="group flex items-center justify-between rounded-2xl border border-border bg-white p-5 transition hover:border-slate-300 hover:bg-slate-50"
						>
							<div className="flex items-center gap-4">
								<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50">
									<Mail className="h-5 w-5 text-blue-700" />
								</div>

								<div>
									<p className="font-semibold text-slate-950">Email</p>
									<p className="mt-1 text-sm text-slate-600">{profile.email}</p>
								</div>
							</div>

							<ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-700" />
						</Link>

						<Link
							href={profile.linkedin}
							target="_blank"
							rel="noreferrer"
							className="group flex items-center justify-between rounded-2xl border border-border bg-white p-5 transition hover:border-slate-300 hover:bg-slate-50"
						>
							<div className="flex items-center gap-4">
								<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50">
									<Linkedin className="h-5 w-5 text-blue-700" />
								</div>

								<div>
									<p className="font-semibold text-slate-950">LinkedIn</p>
									<p className="mt-1 text-sm text-slate-600">
										{profile.linkedin}
									</p>
								</div>
							</div>

							<ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-700" />
						</Link>

						<Link
							href={profile.github}
							target="_blank"
							rel="noreferrer"
							className="group flex items-center justify-between rounded-2xl border border-border bg-white p-5 transition hover:border-slate-300 hover:bg-slate-50"
						>
							<div className="flex items-center gap-4">
								<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100">
									<Github className="h-5 w-5 text-slate-700" />
								</div>

								<div>
									<p className="font-semibold text-slate-950">GitHub</p>
									<p className="mt-1 text-sm text-slate-600">
										github.com/fmandela
									</p>
								</div>
							</div>

							<ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-700" />
						</Link>

						<div className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5">
							<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100">
								<MapPin className="h-5 w-5 text-slate-700" />
							</div>

							<div>
								<p className="font-semibold text-slate-950">Location</p>
								<p className="mt-1 text-sm text-slate-600">
									{profile.location}
								</p>
							</div>
						</div>
					</div>
				</div>

				<aside className="space-y-6">
					<div className="rounded-3xl border border-border bg-slate-950 p-6 text-white shadow-sm">
						<h3 className="font-semibold">What I’m open to</h3>

						<p className="mt-4 text-sm leading-7 text-slate-300">
							I’m most interested in roles where I can combine hands-on
							engineering with ownership of platforms, systems, data quality,
							analytics enablement, and technical delivery.
						</p>
					</div>

					<div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
						<h3 className="font-semibold text-slate-950">Role interests</h3>

						<div className="mt-4 flex flex-wrap gap-2">
							{opportunities.map((role) => (
								<span
									key={role}
									className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
								>
									{role}
								</span>
							))}
						</div>
					</div>

					<div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
						<h3 className="font-semibold text-slate-950">
							Useful pages before reaching out
						</h3>

						<div className="mt-4 space-y-3 text-sm">
							<Link
								href="/resume"
								className="block text-slate-600 hover:text-slate-950"
							>
								Resume and role positioning
							</Link>

							<Link
								href="/case-studies"
								className="block text-slate-600 hover:text-slate-950"
							>
								Case studies
							</Link>

							<Link
								href="/skills"
								className="block text-slate-600 hover:text-slate-950"
							>
								Skills and capability map
							</Link>
						</div>
					</div>
				</aside>
			</div>
		</section>
	);
}
