import { PrismaClient, UserRole, ProviderTier, VerificationStatus, BookingType, BookingStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  await prisma.review.deleteMany();
  await prisma.message.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.service.deleteMany();
  await prisma.providerProfile.deleteMany();
  await prisma.practiceProfile.deleteMany();
  await prisma.auditLog.deleteMany();
  await prisma.session.deleteMany();
  await prisma.account.deleteMany();
  await prisma.user.deleteMany();

  const passwordHash = await bcrypt.hash('Admin123!', 10);
  const providerHash = await bcrypt.hash('Provider123!', 10);
  const practiceHash = await bcrypt.hash('Practice123!', 10);

  const admin = await prisma.user.create({
    data: { name: 'Admin User', email: 'admin@mmp.local', passwordHash, role: UserRole.ADMIN }
  });

  const practice = await prisma.user.create({
    data: {
      name: 'Harley ENT Clinic',
      email: 'practice@mmp.local',
      passwordHash: practiceHash,
      role: UserRole.PRACTICE,
      practiceProfile: {
        create: {
          displayName: 'Harley ENT Clinic',
          specialty: 'ENT',
          location: 'London, UK',
          description: 'Specialist private ENT clinic in London.',
        }
      }
    },
    include: { practiceProfile: true }
  });

  const sarah = await prisma.user.create({
    data: {
      name: 'Sarah Mitchell',
      email: 'sarah@mmp.local',
      passwordHash: providerHash,
      role: UserRole.PROVIDER,
      providerProfile: {
        create: {
          displayName: 'Sarah Mitchell',
          headline: 'Private Practice Medical Secretary',
          bio: 'Harley Street-level clinic coordination, diaries, letters, and patient liaison.',
          category: 'Medical Secretaries',
          specialty: 'ENT / Head & Neck',
          location: 'London, UK',
          tier: ProviderTier.PREMIUM,
          verificationStatus: VerificationStatus.VERIFIED,
          hourlyRatePence: 4500,
          featured: true,
          ratingAverage: 4.9,
          reviewCount: 128,
        }
      }
    },
    include: { providerProfile: true }
  });

  const amir = await prisma.user.create({
    data: {
      name: 'Amir Patel',
      email: 'amir@mmp.local',
      passwordHash: providerHash,
      role: UserRole.PROVIDER,
      providerProfile: {
        create: {
          displayName: 'Amir Patel',
          headline: 'Medical Billing & Insurance Specialist',
          bio: 'Insurer billing, shortfalls, reconciliation, and revenue tracking for consultants.',
          category: 'Billing Specialists',
          specialty: 'Private Billing',
          location: 'Manchester, UK',
          tier: ProviderTier.PREMIUM,
          verificationStatus: VerificationStatus.VERIFIED,
          hourlyRatePence: 6500,
          featured: true,
          ratingAverage: 4.8,
          reviewCount: 86,
        }
      }
    },
    include: { providerProfile: true }
  });

  const emma = await prisma.user.create({
    data: {
      name: 'Emma Clarke',
      email: 'emma@mmp.local',
      passwordHash: providerHash,
      role: UserRole.PROVIDER,
      providerProfile: {
        create: {
          displayName: 'Emma Clarke',
          headline: 'Medical PA & Clinic Administrator',
          bio: 'Flexible admin support for consultants needing part-time clinic help.',
          category: 'Assistants & PAs',
          specialty: 'General Private Practice',
          location: 'Bristol, UK',
          tier: ProviderTier.OPEN,
          verificationStatus: VerificationStatus.VERIFIED,
          hourlyRatePence: 2800,
          featured: false,
          ratingAverage: 4.7,
          reviewCount: 42,
        }
      }
    },
    include: { providerProfile: true }
  });

  const sarahService = await prisma.service.create({
    data: {
      providerProfileId: sarah.providerProfile!.id,
      title: 'Clinic diary and patient liaison',
      description: 'Flexible hourly support for private clinics needing diary and patient coordination.',
      bookingType: BookingType.HOURLY,
      pricePence: 4500,
    }
  });

  const amirService = await prisma.service.create({
    data: {
      providerProfileId: amir.providerProfile!.id,
      title: 'Monthly private billing management',
      description: 'Ongoing revenue cycle support and insurer reconciliation.',
      bookingType: BookingType.RETAINER,
      pricePence: 65000,
    }
  });

  await prisma.service.create({
    data: {
      providerProfileId: emma.providerProfile!.id,
      title: 'Flexible clinic admin support',
      description: 'Inbox triage, bookings, and admin support.',
      bookingType: BookingType.PROJECT,
      pricePence: 28000,
    }
  });

  const booking = await prisma.booking.create({
    data: {
      serviceId: sarahService.id,
      practiceUserId: practice.id,
      providerUserId: sarah.id,
      brief: 'Need support for weekly consultant clinic, letters, and managing follow-up bookings.',
      bookingType: BookingType.HOURLY,
      status: BookingStatus.CONFIRMED,
      agreedPricePence: 9000,
      scheduledStart: new Date('2026-04-20T09:00:00Z'),
      scheduledEnd: new Date('2026-04-20T11:00:00Z'),
    }
  });

  await prisma.payment.create({
    data: {
      bookingId: booking.id,
      amountPence: 9000,
      platformFeePence: 1350,
      status: 'PAID',
    }
  });

  await prisma.message.createMany({
    data: [
      { bookingId: booking.id, senderId: practice.id, body: 'We need support for Thursday clinic admin and patient communication.' },
      { bookingId: booking.id, senderId: sarah.id, body: 'Happy to help. I can cover the diary and coordinate all follow-ups.' },
    ]
  });

  await prisma.auditLog.create({
    data: { actorId: admin.id, action: 'SEED_DATABASE', entityType: 'System', entityId: 'seed', metadata: { seeded: true } }
  });
}

main().finally(async () => prisma.$disconnect());
