import * as React from 'react';
import { cn } from '@/lib/utils';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'ghost' | 'secondary';
};

export function Button({ className, variant = 'default', ...props }: Props) {
  const styles = {
    default: 'bg-brand-teal text-brand-navy hover:bg-brand-tealDark',
    outline: 'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50',
    ghost: 'bg-transparent text-slate-700 hover:bg-slate-100',
    secondary: 'bg-slate-100 text-slate-800 hover:bg-slate-200',
  }[variant];

  return <button className={cn('inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition', styles, className)} {...props} />;
}
