import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // ── Clear existing data ──────────────────────────────────────────────────
  await prisma.verificationLog.deleteMany();
  await prisma.ticket.deleteMany();
  await prisma.travelSession.deleteMany();
  await prisma.fare.deleteMany();
  await prisma.stop.deleteMany();
  await prisma.bus.deleteMany();
  await prisma.route.deleteMany();
  await prisma.user.deleteMany();

  // ── Seed Users ───────────────────────────────────────────────────────────
  const admin = await prisma.user.create({
    data: {
      name: 'BMTC Admin',
      email: 'admin@bmtc.com',
      phone: '9000000001',
      password: await bcrypt.hash('admin123', 12),
      role: 'ADMIN',
    },
  });

  const conductor = await prisma.user.create({
    data: {
      name: 'Raju Conductor',
      email: 'conductor@bmtc.com',
      phone: '9000000002',
      password: await bcrypt.hash('conductor123', 12),
      role: 'CONDUCTOR',
    },
  });

  const supervisor = await prisma.user.create({
    data: {
      name: 'Suresh Supervisor',
      email: 'supervisor@bmtc.com',
      phone: '9000000003',
      password: await bcrypt.hash('supervisor123', 12),
      role: 'SUPERVISOR',
    },
  });

  const traveler = await prisma.user.create({
    data: {
      name: 'Arun Traveler',
      email: 'traveler@bmtc.com',
      phone: '9000000004',
      password: await bcrypt.hash('traveler123', 12),
      role: 'TRAVELER',
    },
  });

  // ── Seed Route with 3 Stops: A, B, C ─────────────────────────────────────
  const route = await prisma.route.create({
    data: {
      id: 'route-demo-1',
      routeName: 'Route 1 — Majestic → Hebbal → Yelahanka',
      totalStops: 3,
    },
  });

  const stopA = await prisma.stop.create({
    data: {
      id: 'stop-A',
      routeId: route.id,
      stopName: 'Majestic (Stop A)',
      stopOrder: 1,
      distanceFromStart: 0,
    },
  });

  const stopB = await prisma.stop.create({
    data: {
      id: 'stop-B',
      routeId: route.id,
      stopName: 'Hebbal (Stop B)',
      stopOrder: 2,
      distanceFromStart: 8,
    },
  });

  const stopC = await prisma.stop.create({
    data: {
      id: 'stop-C',
      routeId: route.id,
      stopName: 'Yelahanka (Stop C)',
      stopOrder: 3,
      distanceFromStart: 15,
    },
  });

  // ── Seed Fixed Fares (Admin-defined) ─────────────────────────────────────
  // A → B  = ₹15
  await prisma.fare.create({
    data: { routeId: route.id, fromStopOrder: 1, toStopOrder: 2, amount: 15 },
  });
  // A → C  = ₹30
  await prisma.fare.create({
    data: { routeId: route.id, fromStopOrder: 1, toStopOrder: 3, amount: 30 },
  });
  // B → C  = ₹20
  await prisma.fare.create({
    data: { routeId: route.id, fromStopOrder: 2, toStopOrder: 3, amount: 20 },
  });

  // ── Seed Bus (assigned to conductor) ─────────────────────────────────────
  const bus = await prisma.bus.create({
    data: {
      busNumber: 'KA-01-F-1234',
      routeId: route.id,
      conductorId: conductor.id,
      isActive: true,
    },
  });

  console.log('');
  console.log('╔══════════════════════════════════════════════════════╗');
  console.log('║          ✅  BMTC SmartTicket — Seed Complete       ║');
  console.log('╠══════════════════════════════════════════════════════╣');
  console.log('║                                                      ║');
  console.log('║  🔐 Demo Login Credentials                           ║');
  console.log('║  ──────────────────────────────────────               ║');
  console.log(`║  👤 Traveler:   traveler@bmtc.com / traveler123       ║`);
  console.log(`║  🎫 Conductor:  conductor@bmtc.com / conductor123     ║`);
  console.log(`║  🔍 Supervisor: supervisor@bmtc.com / supervisor123   ║`);
  console.log(`║  ⚙️  Admin:      admin@bmtc.com / admin123             ║`);
  console.log('║                                                      ║');
  console.log('║  🚌 Bus: KA-01-F-1234                                ║');
  console.log('║  🛣️  Route: Majestic → Hebbal → Yelahanka             ║');
  console.log('║                                                      ║');
  console.log('║  💰 Fixed Fares                                       ║');
  console.log('║  ──────────────────────────────────────               ║');
  console.log('║  Stop A → Stop B  =  ₹15                             ║');
  console.log('║  Stop A → Stop C  =  ₹30                             ║');
  console.log('║  Stop B → Stop C  =  ₹20                             ║');
  console.log('║                                                      ║');
  console.log('╚══════════════════════════════════════════════════════╝');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
