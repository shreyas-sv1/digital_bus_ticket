# BMTC SmartTicket Deployment Guide

## Architecture
- Frontend: Next.js on Vercel
- Backend: NestJS on Railway
- Database: Railway PostgreSQL

## 1. Deploy Backend (Railway)
1. Create Railway project.
2. Add PostgreSQL service and copy `DATABASE_URL`.
3. Add backend service from GitHub (`backend` folder as root service directory).
4. Set environment variables from [backend/.env.example](backend/.env.example).
5. Deploy backend.
6. Run migrations and seed:

```bash
railway run npx prisma migrate deploy
railway run npx prisma db seed
```

7. Save backend public URL (for example: `https://bmtc-backend.up.railway.app`).

## 2. Deploy Frontend (Vercel)
1. Import repository in Vercel.
2. Set root directory to `frontend`.
3. Set environment variables from [frontend/.env.example](frontend/.env.example):
   - `NEXT_PUBLIC_API_URL`
   - `NEXT_PUBLIC_SOCKET_URL`
   - `NEXT_PUBLIC_RAZORPAY_KEY_ID`
4. Deploy and save frontend URL (for example: `https://bmtc-smartticket.vercel.app`).
5. Update Railway `FRONTEND_URL` with this Vercel URL.

## 3. Razorpay Webhook
1. In Razorpay dashboard, add webhook URL:
   - `https://<backend-domain>/tickets/webhook/razorpay`
2. Subscribe to event `payment.captured`.
3. Copy webhook secret and set `RAZORPAY_WEBHOOK_SECRET` in Railway.

## 4. Production Notes
- `socket.gateway.ts` is configured to use only `process.env.FRONTEND_URL` for CORS.
- Ensure HTTPS URLs are used for both frontend and backend.
- Ensure all 4 roles can log in before go-live.

## 5. Go-live Checklist
- Traveler flow works end to end (session to ticket issued).
- Conductor cash and online payment flow works.
- Supervisor verification scan works.
- Admin stats, buses, routes, conductors, and fraud views work.
- Webhook receives captured payment events.
- Environment variables are set in both Vercel and Railway.

## 6. Switch Razorpay to Live
1. Change keys in Railway:
   - `RAZORPAY_KEY_ID`
   - `RAZORPAY_KEY_SECRET`
2. Change frontend key in Vercel:
   - `NEXT_PUBLIC_RAZORPAY_KEY_ID`
3. Recreate/update webhook secret in Railway with live secret.
