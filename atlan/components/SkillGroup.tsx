export function SkillGroup({ title, items, tools }: { title: string; items: string[]; tools: string[] }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2 text-slate-600">
        {items.map((item) => <li key={item}>• {item}</li>)}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {tools.map((tool) => <span key={tool} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">{tool}</span>)}
      </div>
    </section>
  );
}
