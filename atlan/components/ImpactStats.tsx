import { impactStats } from "@/lib/profile";

export function ImpactStats() {
	return (
		<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{impactStats.map((stat) => (
				<div
					key={stat.label}
					className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm"
				>
					<div className="flex min-h-20 items-center justify-center">
						<p className="max-w-[12rem] text-3xl font-bold tracking-tight text-slate-950">
							{stat.value}
						</p>
					</div>

					<p className="mt-2 text-sm leading-snug text-slate-500">
						{stat.label}
					</p>
				</div>
			))}
		</div>
	);
}
