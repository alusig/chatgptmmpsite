import { UserRole } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function requireRole(allowed: UserRole[]) {
  const session = await getServerSession(authOptions);
  if (!session?.user || !allowed.includes(session.user.role)) {
    throw new Error('Unauthorized');
  }
  return session;
}
