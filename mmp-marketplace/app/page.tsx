import Link from 'next/link';
import { Calendar, CreditCard, MessageSquare, Users } from 'lucide-react';
import { SiteShell } from '@/components/layout/site-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { sampleProviders } from '@/lib/sample-data';

export default function HomePage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-brand-navy pb-24 pt-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="inline-flex rounded-full border border-brand-teal/30 bg-brand-teal/10 px-4 py-1.5 text-sm text-brand-teal">UK-first healthcare services marketplace</div>
            <h1 className="mt-6 text-5xl font-extrabold tracking-tight">Connect your practice with trusted support professionals</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">Hire medical secretaries, assistants, accountants, bookkeepers, billing specialists, coders, and practice managers through one premium healthcare marketplace.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/marketplace?tier=elite"><Button className="px-7 py-6 text-base">Find Elite Support</Button></Link>
              <Link href="/marketplace"><Button variant="outline" className="border-white/20 bg-white/5 px-7 py-6 text-base text-white hover:bg-white/10 hover:text-white">Browse Marketplace</Button></Link>
            </div>
          </div>
          <div className="grid gap-4">
            {sampleProviders.slice(0, 2).map((p) => (
              <Card key={p.id} className="border border-white/10 bg-white/5 text-white shadow-none backdrop-blur">
                <CardContent>
                  <div className="text-sm text-brand-teal">{p.tier}</div>
                  <div className="mt-1 text-2xl font-bold">{p.name}</div>
                  <div className="mt-1 text-white/70">{p.title}</div>
                  <div className="mt-4 text-brand-teal">{p.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            [Users, 'Browse professionals', 'Search by role, specialty, rating, and pricing model.'],
            [MessageSquare, 'Connect directly', 'Discuss scope, timing, and the way you want to work.'],
            [Calendar, 'Book time', 'Hourly sessions, project blocks, or recurring monthly support.'],
            [CreditCard, 'Pay securely', 'Agree rates and manage payments through the platform.'],
          ].map(([Icon, title, desc]) => {
            const C = Icon as any;
            return (
              <Card key={title as string}>
                <CardContent>
                  <div className="mb-4 inline-flex rounded-2xl bg-brand-teal/10 p-3"><C className="h-5 w-5 text-brand-tealDark" /></div>
                  <h3 className="text-lg font-semibold text-brand-navy">{title as string}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{desc as string}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </SiteShell>
  );
}
