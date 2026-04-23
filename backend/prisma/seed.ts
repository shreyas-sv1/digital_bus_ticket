import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Seed Admin
  const admin = await prisma.user.upsert({
    where: { email: 'admin@bmtc.com' },
    update: {},
    create: {
      name: 'BMTC Admin',
      email: 'admin@bmtc.com',
      phone: '9000000001',
      password: await bcrypt.hash('admin123', 12),
      role: 'ADMIN',
    },
  });

  // Seed Conductor
  const conductor = await prisma.user.upsert({
    where: { email: 'conductor@bmtc.com' },
    update: {},
    create: {
      name: 'Raju Conductor',
      email: 'conductor@bmtc.com',
      phone: '9000000002',
      password: await bcrypt.hash('conductor123', 12),
      role: 'CONDUCTOR',
    },
  });

  // Seed Supervisor
  await prisma.user.upsert({
    where: { email: 'supervisor@bmtc.com' },
    update: {},
    create: {
      name: 'Suresh Supervisor',
      email: 'supervisor@bmtc.com',
      phone: '9000000003',
      password: await bcrypt.hash('supervisor123', 12),
      role: 'SUPERVISOR',
    },
  });

  // Seed Route: 500C Majestic → Electronic City
  const route = await prisma.route.upsert({
    where: { id: 'route-500c' },
    update: {},
    create: {
      id: 'route-500c',
      routeName: '500C - Majestic → Electronic City',
      totalStops: 12,
    },
  });

  // Seed Stops
  const stops = [
    { stopName: 'Majestic', stopOrder: 1, distanceFromStart: 0 },
    { stopName: 'K.R Market', stopOrder: 2, distanceFromStart: 2.1 },
    { stopName: 'Lalbagh', stopOrder: 3, distanceFromStart: 4.3 },
    { stopName: 'Jayanagar 4th Block', stopOrder: 4, distanceFromStart: 6.8 },
    { stopName: 'JP Nagar', stopOrder: 5, distanceFromStart: 9.2 },
    { stopName: 'Bannerghatta Road', stopOrder: 6, distanceFromStart: 11.5 },
    { stopName: 'Arekere', stopOrder: 7, distanceFromStart: 13.8 },
    { stopName: 'Singasandra', stopOrder: 8, distanceFromStart: 15.6 },
    { stopName: 'Hebbagodi', stopOrder: 9, distanceFromStart: 17.4 },
    { stopName: 'Electronic City Phase 2', stopOrder: 10, distanceFromStart: 19.1 },
    { stopName: 'Electronic City Phase 1', stopOrder: 11, distanceFromStart: 20.3 },
    { stopName: 'Infosys Gate', stopOrder: 12, distanceFromStart: 21.5 },
  ];

  for (const stop of stops) {
    await prisma.stop.upsert({
      where: { id: `stop-500c-${stop.stopOrder}` },
      update: {},
      create: { id: `stop-500c-${stop.stopOrder}`, routeId: route.id, ...stop },
    });
  }

  // Seed Bus
  const bus = await prisma.bus.upsert({
    where: { busNumber: 'KA-01-F-1234' },
    update: {},
    create: {
      busNumber: 'KA-01-F-1234',
      routeId: route.id,
      conductorId: conductor.id,
      isActive: true,
    },
  });

  console.log('✅ Seed complete');
  console.log('Admin:', admin.email, '/ admin123');
  console.log('Conductor:', conductor.email, '/ conductor123');
  console.log('Bus:', bus.busNumber);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
