# 🚌 BMTC SmartTicket — Digital Bus Ticket System

A full-stack digital ticketing platform for bus transport, supporting QR-based ticket issuance, real-time conductor scanning, supervisor verification, and admin management.

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Next.js 16 (App Router), React 19, Tailwind CSS |
| **Backend** | NestJS, Prisma ORM, PostgreSQL |
| **Auth** | JWT (access + refresh tokens) |
| **Real-time** | Socket.IO |
| **QR Scanning** | html5-qrcode |

---

## 👥 Roles

| Role | Capabilities |
|---|---|
| **Traveler** | Search buses, book tickets, view QR, payment |
| **Conductor** | Scan traveler QR, issue tickets (cash/online), view daily summary |
| **Supervisor** | Scan & verify tickets, view history |
| **Admin** | Manage buses, routes, conductors, staff, view analytics |

---

## 📁 Project Structure

```
digital_bus_ticket/
├── frontend/          # Next.js App Router (plain JavaScript)
│   ├── app/           # Pages by role (traveler, conductor, supervisor, admin)
│   ├── components/    # Reusable UI components
│   └── lib/           # API client, auth context, socket helpers
└── backend/           # NestJS API
    ├── src/           # Controllers, services, modules
    └── prisma/        # Schema and seed data
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- npm

### 1. Clone the repo
```bash
git clone https://github.com/shreyas-sv1/digital_bus_ticket.git
cd digital_bus_ticket
```

### 2. Backend setup
```bash
cd backend
npm install
cp .env.example .env       # Fill in DATABASE_URL and JWT_SECRET
npx prisma generate
npx prisma migrate dev
npx prisma db seed         # Seeds demo users
npm run start:dev
```

### 3. Frontend setup
```bash
cd frontend
npm install
cp .env.example .env.local  # Set NEXT_PUBLIC_API_URL
npm run dev
```

Frontend runs at **http://localhost:3000** | Backend runs at **http://localhost:3001**

---

## 🔑 Demo Credentials

| Role | Email | Password |
|---|---|---|
| Admin | admin@bmtc.com | admin123 |
| Conductor | conductor@bmtc.com | conductor123 |
| Supervisor | supervisor@bmtc.com | supervisor123 |
| Traveler | traveler@bmtc.com | traveler123 |

---

## 📜 License

MIT
