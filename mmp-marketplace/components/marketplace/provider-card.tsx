import Link from 'next/link';
import { MapPin, Star, Stethoscope } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function ProviderCard({ provider }: { provider: any }) {
  return (
    <Card className="overflow-hidden border-0">
      <div className={`h-2 w-full ${provider.tier === 'Elite' ? 'bg-brand-teal' : 'bg-slate-200'}`} />
      <CardContent>
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xl font-semibold text-brand-navy">{provider.name}</h3>
              <Badge className={provider.tier === 'Elite' ? 'bg-brand-teal/15 text-brand-navy' : ''}>{provider.tier}</Badge>
            </div>
            <p className="mt-1 text-sm font-medium text-slate-700">{provider.title}</p>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1"><Stethoscope className="h-4 w-4" /> {provider.specialty}</span>
              <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {provider.location}</span>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">{provider.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {provider.services.map((service: string) => <Badge key={service}>{service}</Badge>)}
            </div>
          </div>
          <div className="min-w-44 text-left md:text-right">
            <div className="text-xl font-semibold text-brand-navy">{provider.price}</div>
            <div className="mt-1 inline-flex items-center gap-1 text-sm text-amber-500"><Star className="h-4 w-4 fill-current" /> {provider.rating} <span className="text-slate-400">({provider.reviews})</span></div>
            <div className="mt-2 text-sm text-slate-500">{provider.delivery}</div>
            <div className="mt-5 flex gap-2 md:justify-end">
              <Link href={`/provider/${provider.id}`}><Button variant="outline">View profile</Button></Link>
              <Button>Book</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
