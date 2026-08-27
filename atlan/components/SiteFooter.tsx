import { profile } from '@/lib/profile';

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}.</p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
