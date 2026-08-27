import Link from 'next/link';

export function CaseStudyCard({ title, summary, href }: { title: string; summary: string; href: string }) {
  return (
    <Link href={href} className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-xl font-semibold tracking-tight group-hover:text-blue-600">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{summary}</p>
      <p className="mt-5 text-sm font-semibold text-blue-600">Read case study →</p>
    </Link>
  );
}
