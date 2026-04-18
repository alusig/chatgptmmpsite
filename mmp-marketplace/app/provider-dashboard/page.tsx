import { Briefcase, Calendar, Star, TrendingUp } from 'lucide-react';
import { SiteShell } from '@/components/layout/site-shell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

function Metric({ icon: Icon, title, value, hint }: any) {
  return <Card><CardContent><div className="flex items-start justify-between"><div><div className="text-sm text-slate-500">{title}</div><div className="mt-2 text-3xl font-bold text-brand-navy">{value}</div><div className="mt-1 text-sm text-slate-400">{hint}</div></div><div className="rounded-2xl bg-brand-teal/10 p-3"><Icon className="h-5 w-5 text-brand-tealDark" /></div></div></CardContent></Card>;
}

export default function ProviderDashboardPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6"><div className="text-3xl font-bold text-brand-navy">Provider dashboard</div><div className="mt-1 text-sm text-slate-500">Manage your profile, bookings, earnings, and availability.</div></div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Metric icon={Briefcase} title="Open enquiries" value="14" hint="5 new today" />
          <Metric icon={Calendar} title="Upcoming sessions" value="9" hint="This week" />
          <Metric icon={TrendingUp} title="This month" value="£3,240" hint="Estimated earnings" />
          <Metric icon={Star} title="Rating" value="4.9" hint="Across 128 reviews" />
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card><CardHeader><CardTitle>Availability</CardTitle></CardHeader><CardContent className="space-y-3">{['Monday · 09:00–13:00','Tuesday · 10:00–16:00','Thursday · 09:00–17:00'].map((a) => <div key={a} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">{a}</div>)}</CardContent></Card>
          <Card><CardHeader><CardTitle>Profile completion</CardTitle></CardHeader><CardContent><div className="rounded-3xl bg-brand-navy p-6 text-white"><div className="text-4xl font-bold">84%</div><div className="mt-2 text-sm text-white/70">Add credentials, more reviews, and portfolio samples to improve visibility.</div><Button className="mt-5">Complete profile</Button></div></CardContent></Card>
        </div>
      </div>
    </SiteShell>
  );
}
