import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting BMTC SmartTicket Database Seed...');

  const passwordHash = await bcrypt.hash('conductor123', 12);
  const adminPasswordHash = await bcrypt.hash('admin123', 12);
  const supervisorPasswordHash = await bcrypt.hash('supervisor123', 12);
  const travelerPasswordHash = await bcrypt.hash('traveler123', 12);

  // 1. Core Users (Admin, Supervisor, Traveler)
  await prisma.user.upsert({
    where: { email: 'admin@bmtc.com' },
    update: { name: 'BMTC Admin', role: Role.ADMIN, phone: '9000000001' },
    create: {
      name: 'BMTC Admin',
      email: 'admin@bmtc.com',
      phone: '9000000001',
      password: adminPasswordHash,
      role: Role.ADMIN,
    },
  });

  await prisma.user.upsert({
    where: { email: 'supervisor@bmtc.com' },
    update: { name: 'Suresh Supervisor', role: Role.SUPERVISOR, phone: '9000000003' },
    create: {
      name: 'Suresh Supervisor',
      email: 'supervisor@bmtc.com',
      phone: '9000000003',
      password: supervisorPasswordHash,
      role: Role.SUPERVISOR,
    },
  });

  await prisma.user.upsert({
    where: { email: 'traveler@bmtc.com' },
    update: { name: 'Arun Traveler', role: Role.TRAVELER, phone: '9000000004' },
    create: {
      name: 'Arun Traveler',
      email: 'traveler@bmtc.com',
      phone: '9000000004',
      password: travelerPasswordHash,
      role: Role.TRAVELER,
    },
  });

  // 2. Conductors Data
  const conductorsData = [
    { name: 'Raju Conductor', email: 'conductor@bmtc.com', phone: '9000000002' },
    { name: 'Ramesh Kumar', email: 'conductor.ramesh@bmtc.com', phone: '9000000010' },
    { name: 'Manjunath V', email: 'conductor.manjunath@bmtc.com', phone: '9000000011' },
    { name: 'Venkatesh R', email: 'conductor.venkatesh@bmtc.com', phone: '9000000012' },
    { name: 'Ganesh Naik', email: 'conductor.ganesh@bmtc.com', phone: '9000000013' },
    { name: 'Shivakumar B', email: 'conductor.shiva@bmtc.com', phone: '9000000014' },
    { name: 'Nagaraj P', email: 'conductor.nagaraj@bmtc.com', phone: '9000000015' },
    { name: 'Basavaraj M', email: 'conductor.basavaraj@bmtc.com', phone: '9000000016' },
    { name: 'Anand Gowda', email: 'conductor.anand@bmtc.com', phone: '9000000017' },
    { name: 'Siddaraju K', email: 'conductor.siddaraju@bmtc.com', phone: '9000000018' },
  ];

  const conductors: Record<string, any> = {};

  for (const cond of conductorsData) {
    const user = await prisma.user.upsert({
      where: { email: cond.email },
      update: { name: cond.name, phone: cond.phone, role: Role.CONDUCTOR },
      create: {
        name: cond.name,
        email: cond.email,
        phone: cond.phone,
        password: passwordHash,
        role: Role.CONDUCTOR,
      },
    });
    conductors[cond.email] = user;
  }

  // 3. Realistic BMTC Routes Definition
  const routesSeed = [
    {
      id: 'route-1',
      routeName: 'Route 1 — Majestic → Hebbal → Yelahanka',
      conductorEmail: 'conductor@bmtc.com',
      busNumber: 'KA-01-F-1234',
      stops: [
        { name: 'Majestic (Stop A)', distance: 0 },
        { name: 'Hebbal (Stop B)', distance: 8 },
        { name: 'Yelahanka (Stop C)', distance: 15 },
      ],
      fares: [
        { from: 1, to: 2, amount: 15 },
        { from: 1, to: 3, amount: 30 },
        { from: 2, to: 3, amount: 20 },
      ],
    },
    {
      id: 'route-500d',
      routeName: 'Route 500-D — Silk Board → Marathahalli → Hebbal',
      conductorEmail: 'conductor.ramesh@bmtc.com',
      busNumber: 'KA-01-F-5001',
      stops: [
        { name: 'Silk Board TTMC', distance: 0 },
        { name: 'HSR Layout 14th Main', distance: 2.5 },
        { name: 'Bellandur EcoSpace', distance: 6.0 },
        { name: 'Marathahalli Multiplex', distance: 10.0 },
        { name: 'KR Puram / Tin Factory', distance: 14.5 },
        { name: 'Banaswadi Outer Ring Rd', distance: 18.0 },
        { name: 'Hebbal Flyover', distance: 24.0 },
      ],
      fares: [
        { from: 1, to: 2, amount: 10 },
        { from: 1, to: 3, amount: 15 },
        { from: 1, to: 4, amount: 20 },
        { from: 1, to: 7, amount: 35 },
        { from: 3, to: 7, amount: 25 },
      ],
    },
    {
      id: 'route-335e',
      routeName: 'Route 335-E — Majestic → Domlur → ITPL Whitefield',
      conductorEmail: 'conductor.manjunath@bmtc.com',
      busNumber: 'KA-01-F-3351',
      stops: [
        { name: 'Majestic Bus Stand', distance: 0 },
        { name: 'MG Road Metro Station', distance: 4.0 },
        { name: 'Domlur TTMC', distance: 8.5 },
        { name: 'HAL Old Airport Rd', distance: 12.0 },
        { name: 'Marathahalli Bridge', distance: 16.0 },
        { name: 'Kundalahalli Gate', distance: 19.0 },
        { name: 'ITPL Main Gate Whitefield', distance: 23.0 },
      ],
      fares: [
        { from: 1, to: 2, amount: 12 },
        { from: 1, to: 3, amount: 18 },
        { from: 1, to: 7, amount: 35 },
        { from: 3, to: 7, amount: 25 },
      ],
    },
    {
      id: 'route-201',
      routeName: 'Route 201 — Banashankari → Koramangala → Indiranagar',
      conductorEmail: 'conductor.venkatesh@bmtc.com',
      busNumber: 'KA-05-FA-2010',
      stops: [
        { name: 'Banashankari TTMC', distance: 0 },
        { name: 'Jayanagar 4th Block', distance: 3.0 },
        { name: 'Dairy Circle', distance: 6.0 },
        { name: 'Koramangala 5th Block', distance: 8.5 },
        { name: 'Sony World Signal', distance: 10.0 },
        { name: 'Domlur Flyover', distance: 13.0 },
        { name: 'Indiranagar 100ft Road', distance: 15.5 },
      ],
      fares: [
        { from: 1, to: 2, amount: 10 },
        { from: 1, to: 4, amount: 18 },
        { from: 1, to: 7, amount: 28 },
        { from: 4, to: 7, amount: 15 },
      ],
    },
    {
      id: 'route-401k',
      routeName: 'Route 401-K — Kengeri → Yeshwanthpur → Yelahanka',
      conductorEmail: 'conductor.ganesh@bmtc.com',
      busNumber: 'KA-41-F-4010',
      stops: [
        { name: 'Kengeri TTMC', distance: 0 },
        { name: 'Nayandahalli Metro', distance: 5.0 },
        { name: 'Vijayanagar TTMC', distance: 9.0 },
        { name: 'Rajajinagar 1st Block', distance: 13.0 },
        { name: 'Yeshwanthpur TTMC', distance: 16.5 },
        { name: 'BEL Circle', distance: 20.0 },
        { name: 'Yelahanka NES', distance: 27.0 },
      ],
      fares: [
        { from: 1, to: 3, amount: 18 },
        { from: 1, to: 5, amount: 30 },
        { from: 1, to: 7, amount: 45 },
        { from: 5, to: 7, amount: 20 },
      ],
    },
    {
      id: 'route-365',
      routeName: 'Route 365 — Majestic → Silk Board → Electronic City',
      conductorEmail: 'conductor.shiva@bmtc.com',
      busNumber: 'KA-01-F-3650',
      stops: [
        { name: 'Majestic KBS', distance: 0 },
        { name: 'Shanthi Nagar TTMC', distance: 3.5 },
        { name: 'Dairy Circle', distance: 6.5 },
        { name: 'Silk Board Junction', distance: 11.0 },
        { name: 'Bommanahalli', distance: 13.5 },
        { name: 'Electronic City Wipro Gate', distance: 20.0 },
      ],
      fares: [
        { from: 1, to: 2, amount: 10 },
        { from: 1, to: 4, amount: 22 },
        { from: 1, to: 6, amount: 35 },
        { from: 4, to: 6, amount: 18 },
      ],
    },
    {
      id: 'route-276',
      routeName: 'Route 276 — Majestic → Malleshwaram → Vidyaranyapura',
      conductorEmail: 'conductor.nagaraj@bmtc.com',
      busNumber: 'KA-04-F-2760',
      stops: [
        { name: 'Majestic Bus Terminal', distance: 0 },
        { name: 'Malleshwaram 8th Cross', distance: 3.5 },
        { name: 'IISc / Tata Institute', distance: 5.5 },
        { name: 'Mathikere', distance: 7.5 },
        { name: 'BEL Market', distance: 10.0 },
        { name: 'Vidyaranyapura Bus Stand', distance: 14.0 },
      ],
      fares: [
        { from: 1, to: 3, amount: 14 },
        { from: 1, to: 6, amount: 25 },
        { from: 3, to: 6, amount: 18 },
      ],
    },
    {
      id: 'route-600f',
      routeName: 'Route 600-F — Banashankari → Electronic City → Attibele',
      conductorEmail: 'conductor.basavaraj@bmtc.com',
      busNumber: 'KA-51-F-6000',
      stops: [
        { name: 'Banashankari TTMC', distance: 0 },
        { name: 'BTM Layout 16th Main', distance: 5.0 },
        { name: 'Silk Board', distance: 7.5 },
        { name: 'Electronic City Phase 1', distance: 16.5 },
        { name: 'Chandapura Circle', distance: 24.0 },
        { name: 'Attibele Bus Stand', distance: 31.0 },
      ],
      fares: [
        { from: 1, to: 3, amount: 16 },
        { from: 1, to: 4, amount: 30 },
        { from: 1, to: 6, amount: 50 },
        { from: 3, to: 6, amount: 38 },
      ],
    },
    {
      id: 'route-v333p',
      routeName: 'Route V-333P (Vayu Vajra) — KIA Airport → MG Road → HSR Layout',
      conductorEmail: 'conductor.anand@bmtc.com',
      busNumber: 'KA-53-F-3330',
      stops: [
        { name: 'Kempegowda Int. Airport (KIA)', distance: 0 },
        { name: 'Trumpet Flyover', distance: 5.0 },
        { name: 'Yelahanka Bypass', distance: 17.0 },
        { name: 'Hebbal Flyover', distance: 25.0 },
        { name: 'Mekhri Circle', distance: 29.0 },
        { name: 'MG Road Metro', distance: 34.0 },
        { name: 'HSR Layout BDA Complex', distance: 42.0 },
      ],
      fares: [
        { from: 1, to: 4, amount: 150 },
        { from: 1, to: 6, amount: 220 },
        { from: 1, to: 7, amount: 260 },
        { from: 4, to: 7, amount: 70 },
      ],
    },
    {
      id: 'route-176',
      routeName: 'Route 176 — KR Market → Vijayanagar → BHEL Layout',
      conductorEmail: 'conductor.siddaraju@bmtc.com',
      busNumber: 'KA-02-F-1760',
      stops: [
        { name: 'KR Market Terminal', distance: 0 },
        { name: 'City Railway Station', distance: 2.5 },
        { name: 'Magadi Road Metro', distance: 5.0 },
        { name: 'Vijayanagar TTMC', distance: 8.0 },
        { name: 'Nagarabhavi Circle', distance: 11.5 },
        { name: 'BHEL Layout', distance: 14.0 },
      ],
      fares: [
        { from: 1, to: 2, amount: 8 },
        { from: 1, to: 4, amount: 18 },
        { from: 1, to: 6, amount: 26 },
        { from: 4, to: 6, amount: 14 },
      ],
    },
  ];

  for (const rData of routesSeed) {
    // Upsert Route
    const route = await prisma.route.upsert({
      where: { id: rData.id },
      update: {
        routeName: rData.routeName,
        totalStops: rData.stops.length,
      },
      create: {
        id: rData.id,
        routeName: rData.routeName,
        totalStops: rData.stops.length,
      },
    });

    // Clean old stops and fares for clean re-population
    await prisma.fare.deleteMany({ where: { routeId: route.id } });
    await prisma.stop.deleteMany({ where: { routeId: route.id } });

    // Insert Stops
    for (let i = 0; i < rData.stops.length; i++) {
      const stopInfo = rData.stops[i];
      await prisma.stop.create({
        data: {
          id: `stop-${rData.id}-${i + 1}`,
          routeId: route.id,
          stopName: stopInfo.name,
          stopOrder: i + 1,
          distanceFromStart: stopInfo.distance,
        },
      });
    }

    // Insert Fares
    for (const f of rData.fares) {
      await prisma.fare.create({
        data: {
          routeId: route.id,
          fromStopOrder: f.from,
          toStopOrder: f.to,
          amount: f.amount,
        },
      });
    }

    // Upsert Bus
    const conductorUser = conductors[rData.conductorEmail];
    await prisma.bus.upsert({
      where: { busNumber: rData.busNumber },
      update: {
        routeId: route.id,
        conductorId: conductorUser?.id || null,
        isActive: true,
      },
      create: {
        busNumber: rData.busNumber,
        routeId: route.id,
        conductorId: conductorUser?.id || null,
        isActive: true,
      },
    });
  }

  console.log('');
  console.log('╔══════════════════════════════════════════════════════════════════╗');
  console.log('║               ✅  BMTC SmartTicket — Seed Complete              ║');
  console.log('╠══════════════════════════════════════════════════════════════════╣');
  console.log('║                                                                  ║');
  console.log('║  🔐 Core Demo Login Credentials                                 ║');
  console.log('║  ──────────────────────────────────────                          ║');
  console.log('║  👤 Traveler:   traveler@bmtc.com / traveler123                  ║');
  console.log('║  🎫 Lead Conductor: conductor@bmtc.com / conductor123             ║');
  console.log('║  🔍 Supervisor: supervisor@bmtc.com / supervisor123              ║');
  console.log('║  ⚙️  Admin:      admin@bmtc.com / admin123                        ║');
  console.log('║                                                                  ║');
  console.log('║  🚌 10 Routes & Assigned Conductors Seeded:                       ║');
  console.log('║  ──────────────────────────────────────                          ║');
  for (const r of routesSeed) {
    const padRoute = r.routeName.padEnd(52, ' ');
    console.log(`║  • ${padRoute.slice(0, 52)} ║`);
  }
  console.log('║                                                                  ║');
  console.log('╚══════════════════════════════════════════════════════════════════╝');
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
