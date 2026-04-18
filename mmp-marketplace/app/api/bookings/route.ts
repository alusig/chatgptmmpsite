import { NextResponse } from 'next/server';
import { z } from 'zod';
import { BookingType, UserRole } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import { requireRole } from '@/lib/rbac';

const bookingSchema = z.object({
  serviceId: z.string().min(1),
  providerUserId: z.string().min(1),
  brief: z.string().min(10),
  bookingType: z.nativeEnum(BookingType),
});

export async function POST(request: Request) {
  try {
    const session = await requireRole([UserRole.PRACTICE, UserRole.ADMIN]);
    const body = bookingSchema.parse(await request.json());

    const booking = await prisma.booking.create({
      data: {
        serviceId: body.serviceId,
        providerUserId: body.providerUserId,
        practiceUserId: session.user.id,
        brief: body.brief,
        bookingType: body.bookingType,
      },
    });

    await prisma.auditLog.create({
      data: {
        actorId: session.user.id,
        action: 'CREATE_BOOKING',
        entityType: 'Booking',
        entityId: booking.id,
      },
    });

    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Unable to create booking' }, { status: 400 });
  }
}
