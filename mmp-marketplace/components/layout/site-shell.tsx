import Link from 'next/link';
import { Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-slate text-slate-900">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-brand-navy text-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-teal text-brand-navy">
              <Stethoscope className="h-5 w-5" />
            </div>
            <div className="text-lg font-semibold"><span className="text-brand-teal">M</span>anageMyPractice</div>
          </Link>
          <nav className="hidden gap-5 md:flex">
            <Link href="/marketplace" className="text-sm text-white/80 hover:text-white">Marketplace</Link>
            <Link href="/dashboard" className="text-sm text-white/80 hover:text-white">Practice Dashboard</Link>
            <Link href="/provider-dashboard" className="text-sm text-white/80 hover:text-white">Provider Dashboard</Link>
            <Link href="/admin" className="text-sm text-white/80 hover:text-white">Admin</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden text-white hover:bg-white/10 hover:text-white sm:inline-flex">Sign in</Button>
            <Link href="/marketplace"><Button>Browse talent</Button></Link>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
