import { Calendar, MessageSquare, Users, Wallet } from 'lucide-react';
import { SiteShell } from '@/components/layout/site-shell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function Metric({ icon: Icon, title, value, hint }: any) {
  return <Card><CardContent><div className="flex items-start justify-between"><div><div className="text-sm text-slate-500">{title}</div><div className="mt-2 text-3xl font-bold text-brand-navy">{value}</div><div className="mt-1 text-sm text-slate-400">{hint}</div></div><div className="rounded-2xl bg-brand-teal/10 p-3"><Icon className="h-5 w-5 text-brand-tealDark" /></div></div></CardContent></Card>;
}

export default function DashboardPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6"><div className="text-3xl font-bold text-brand-navy">Practice dashboard</div><div className="mt-1 text-sm text-slate-500">Manage bookings, providers, messages, and spending.</div></div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Metric icon={Calendar} title="Active bookings" value="12" hint="3 awaiting confirmation" />
          <Metric icon={MessageSquare} title="Unread messages" value="8" hint="2 urgent replies" />
          <Metric icon={Wallet} title="Monthly spend" value="£4,820" hint="Across 6 providers" />
          <Metric icon={Users} title="Saved providers" value="19" hint="7 Elite" />
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card><CardHeader><CardTitle>Current bookings</CardTitle></CardHeader><CardContent className="space-y-3">{['Sarah Mitchell · 20 Apr · Confirmed','Amir Patel · Monthly retainer · In progress','Emma Clarke · Project support · Awaiting reply'].map((r) => <div key={r} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">{r}</div>)}</CardContent></Card>
          <Card><CardHeader><CardTitle>Recent messages</CardTitle></CardHeader><CardContent className="space-y-3">{['I can cover Thursday clinic admin.','Please send the insurer remittance files.','Happy to take on the monthly bookkeeping.'].map((m) => <div key={m} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">{m}</div>)}</CardContent></Card>
        </div>
      </div>
    </SiteShell>
  );
}
