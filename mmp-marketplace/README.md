# Manage My Practice Marketplace

A Next.js 14 App Router scaffold for a dual-layer healthcare services marketplace connecting private practices with medical secretaries, assistants, billing specialists, coders, bookkeepers, and accountants.

## Stack
- Next.js 14 + TypeScript
- Tailwind CSS
- PostgreSQL + Prisma ORM
- NextAuth.js credentials auth with JWT sessions

## Included
- Marketing homepage
- Marketplace listing page
- Provider profile page
- Practice dashboard
- Provider dashboard
- Admin panel
- Prisma schema for users, practices, providers, services, bookings, messages, reviews, payments, and audit logs
- Protected booking API route
- Seed data and sample login accounts

## Setup
1. Install dependencies
   ```bash
   npm install
   ```
2. Copy environment file
   ```bash
   cp .env.example .env
   ```
3. Set your PostgreSQL connection in `.env`
4. Generate Prisma client and run migration
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```
5. Seed the database
   ```bash
   npm run prisma:seed
   ```
6. Start the app
   ```bash
   npm run dev
   ```

## Sample users
- Admin: `admin@mmp.local` / `Admin123!`
- Practice: `practice@mmp.local` / `Practice123!`
- Provider: `sarah@mmp.local` / `Provider123!`

## Next build steps
- Replace sample frontend data with live Prisma queries everywhere
- Add real sign-in form using NextAuth client helpers
- Add Stripe Connect onboarding and escrow-style payment flows
- Add messaging UI and file attachments
- Add provider onboarding and credential verification workflow
- Add search filters, saved providers, and reviews persistence
- Deploy on Vercel with managed Postgres
