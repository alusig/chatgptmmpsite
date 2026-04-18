import { Building2, CreditCard, ShieldCheck, Users } from 'lucide-react';
import { SiteShell } from '@/components/layout/site-shell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

function Metric({ icon: Icon, title, value, hint }: any) {
  return <Card><CardContent><div className="flex items-start justify-between"><div><div className="text-sm text-slate-500">{title}</div><div className="mt-2 text-3xl font-bold text-brand-navy">{value}</div><div className="mt-1 text-sm text-slate-400">{hint}</div></div><div className="rounded-2xl bg-brand-teal/10 p-3"><Icon className="h-5 w-5 text-brand-tealDark" /></div></div></CardContent></Card>;
}

export default function AdminPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6"><div className="text-3xl font-bold text-brand-navy">Admin panel</div><div className="mt-1 text-sm text-slate-500">Moderate providers, verify credentials, and manage the marketplace.</div></div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Metric icon={ShieldCheck} title="Pending verifications" value="23" hint="8 Elite applications" />
          <Metric icon={Users} title="Total providers" value="486" hint="UK launch cohort" />
          <Metric icon={Building2} title="Practice accounts" value="112" hint="Growing month-on-month" />
          <Metric icon={CreditCard} title="GMV this month" value="£82k" hint="Before platform fees" />
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card><CardHeader><CardTitle>Verification queue</CardTitle></CardHeader><CardContent className="space-y-3">{['Medical secretary – London','Billing specialist – Manchester','Bookkeeper – Leeds'].map((v) => <div key={v} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4 text-sm text-slate-700"><span>{v}</span><Button variant="outline">Review</Button></div>)}</CardContent></Card>
          <Card><CardHeader><CardTitle>Disputes & flags</CardTitle></CardHeader><CardContent className="space-y-3">{['Late delivery complaint','Refund request','Profile authenticity check'].map((d) => <div key={d} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">{d}</div>)}</CardContent></Card>
        </div>
      </div>
    </SiteShell>
  );
}
