import { sampleProviders } from '@/lib/sample-data';
import { SiteShell } from '@/components/layout/site-shell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ProviderCard } from '@/components/marketplace/provider-card';

export default function MarketplacePage({ searchParams }: { searchParams?: { tier?: string; q?: string } }) {
  const tier = searchParams?.tier?.toLowerCase();
  const q = searchParams?.q?.toLowerCase() ?? '';
  const providers = sampleProviders.filter((provider) => {
    const tierMatch = !tier || tier === 'all' || provider.tier.toLowerCase() === tier;
    const qMatch = !q || `${provider.name} ${provider.title} ${provider.specialty}`.toLowerCase().includes(q);
    return tierMatch && qMatch;
  });

  return (
    <SiteShell>
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-brand-navy">Healthcare support marketplace</h1>
          <p className="mt-2 text-sm text-slate-500">Browse Elite providers or the wider open marketplace.</p>
          <div className="mt-5 grid gap-3 lg:grid-cols-[1.2fr,0.8fr]">
            <Input defaultValue={searchParams?.q ?? ''} placeholder="Search secretaries, assistants, billers, accountants..." />
            <Input defaultValue={searchParams?.tier ?? ''} placeholder="Tier: elite or marketplace" />
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[280px,1fr] lg:px-8">
        <aside>
          <Card className="bg-brand-navy text-white">
            <CardHeader><CardTitle className="text-white">Elite marketplace</CardTitle></CardHeader>
            <CardContent>
              Premium providers for consultants and clinics that want stronger trust, experience, and service standards.
            </CardContent>
          </Card>
        </aside>
        <div className="space-y-5">
          {providers.map((provider) => <ProviderCard key={provider.id} provider={provider} />)}
        </div>
      </div>
    </SiteShell>
  );
}
