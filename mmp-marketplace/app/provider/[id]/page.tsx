import { notFound } from 'next/navigation';
import { MapPin, Star, Stethoscope } from 'lucide-react';
import { SiteShell } from '@/components/layout/site-shell';
import { sampleProviders } from '@/lib/sample-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProviderProfilePage({ params }: { params: { id: string } }) {
  const provider = sampleProviders.find((p) => p.id === params.id);
  if (!provider) notFound();

  return (
    <SiteShell>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <Card>
            <CardContent>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-3xl font-bold text-brand-navy">{provider.name}</h1>
                    <Badge className={provider.tier === 'Elite' ? 'bg-brand-teal/15 text-brand-navy' : ''}>{provider.tier}</Badge>
                  </div>
                  <div className="mt-2 text-lg text-slate-700">{provider.title}</div>
                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {provider.location}</span>
                    <span className="inline-flex items-center gap-1"><Stethoscope className="h-4 w-4" /> {provider.specialty}</span>
                    <span className="inline-flex items-center gap-1"><Star className="h-4 w-4 fill-current text-amber-500" /> {provider.rating} ({provider.reviews} reviews)</span>
                  </div>
                </div>
                <div className="rounded-3xl bg-slate-50 px-5 py-4 text-right">
                  <div className="text-sm text-slate-500">Starting at</div>
                  <div className="text-2xl font-bold text-brand-navy">{provider.price}</div>
                </div>
              </div>
              <p className="mt-8 max-w-3xl text-sm leading-7 text-slate-600">{provider.tagline}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {provider.services.map((s) => <Badge key={s}>{s}</Badge>)}
              </div>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <Card>
              <CardHeader><CardTitle>Book this provider</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['Hourly support', 'Fixed project', 'Monthly retainer'].map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm">{item}</div>
                  ))}
                </div>
                <Button className="mt-5 w-full">Continue to booking</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
