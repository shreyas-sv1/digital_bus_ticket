# 🚀 DEPLOYMENT.md - Complete Deployment Guide

**BMTC SmartTicket - Digital Bus Ticketing System**

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Quick Deploy (Railway + Vercel)](#quick-deploy-railway--vercel)
3. [Detailed Backend Deployment](#detailed-backend-deployment)
4. [Detailed Frontend Deployment](#detailed-frontend-deployment)
5. [Database Setup](#database-setup)
6. [Environment Configuration](#environment-configuration)
7. [Post-Deployment Verification](#post-deployment-verification)
8. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### Required Accounts
- **Railway** (backend hosting) - https://railway.app
- **Vercel** (frontend hosting) - https://vercel.com
- **PostgreSQL Database** (Railway provides this)
- **Razorpay** (payment gateway) - https://razorpay.com/dashboard
- **GitHub** (code repository)

### Required Knowledge
- Git & GitHub
- Basic terminal/command line
- Understanding of environment variables
- Basic Node.js/npm knowledge

---

## Quick Deploy (Railway + Vercel)

### 1. Deploy Backend to Railway (15 min)

**Step 1: Create Railway Project**
1. Go to https://railway.app
2. Click "New Project"
3. Select "GitHub Repo"
4. Connect your BMTC SmartTicket repository
5. Select branch: `main`

**Step 2: Configure Backend Service**
1. In Railway dashboard, create new service
2. Select "Dockerfile" (if present) OR "Node.js"
3. Configure settings:
   - Root Directory: `backend/`
   - Node command: `npm run start:prod`

**Step 3: Add PostgreSQL Database**
1. In Railway dashboard, add plugin
2. Select "PostgreSQL"
3. Railway creates `DATABASE_URL` automatically

**Step 4: Set Environment Variables**
In Railway dashboard → Variables:
```bash
JWT_SECRET=<generate-with-command-below>
QR_SIGN_SECRET=<generate-with-command-below>
RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxx
RAZORPAY_WEBHOOK_SECRET=whsec_xxxxxxxxxxxx
FRONTEND_URL=https://yourdomain.vercel.app
NODE_ENV=production
PORT=3001
```

**Generate Secrets:**
```bash
# Run in your terminal
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

**Step 5: Deploy**
1. Click "Deploy"
2. Wait for build to complete
3. Copy backend URL (e.g., `https://your-project.up.railway.app`)

---

### 2. Deploy Frontend to Vercel (10 min)

**Step 1: Create Vercel Project**
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Root Directory: `frontend/`
5. Framework: `Next.js`

**Step 2: Set Environment Variables**
In Vercel dashboard → Settings → Environment Variables:
```bash
NEXT_PUBLIC_API_URL=https://your-project.up.railway.app
NEXT_PUBLIC_SOCKET_URL=https://your-project.up.railway.app
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxx
```

**Step 3: Deploy**
1. Click "Deploy"
2. Wait for build to complete
3. Get frontend URL (e.g., `https://your-project.vercel.app`)

**Step 4: Update Backend Frontend URL**
1. Go back to Railway dashboard
2. Update `FRONTEND_URL` variable to your Vercel URL
3. Redeploy backend

---

## Detailed Backend Deployment

### Option A: Railway (Recommended)

See "Quick Deploy" section above. Railway handles:
- Auto-scaling
- SSL/TLS certificates
- Database backups
- Environment variables
- GitHub integration

**Advantages:**
- ✅ Easiest setup
- ✅ Free tier available
- ✅ Includes PostgreSQL
- ✅ Auto-deploy on GitHub push
- ✅ Built-in monitoring

**Costs:** Starting at $5/month (after free tier)

### Option B: Heroku

**Step 1: Setup Heroku CLI**
```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login
```

**Step 2: Create Heroku App**
```bash
heroku create your-app-name
heroku addons:create heroku-postgresql:hobby-dev
```

**Step 3: Set Environment Variables**
```bash
heroku config:set JWT_SECRET=your_secret
heroku config:set QR_SIGN_SECRET=your_secret
heroku config:set RAZORPAY_KEY_ID=your_key
heroku config:set RAZORPAY_KEY_SECRET=your_secret
heroku config:set FRONTEND_URL=https://your-frontend.com
```

**Step 4: Deploy**
```bash
# Add Heroku remote
heroku git:remote -a your-app-name

# Deploy
git push heroku main
```

### Option C: Self-Hosted (VPS)

**Requirements:**
- Linux VPS (Ubuntu 20.04+ recommended)
- Root/sudo access
- Domain name
- Basic Linux knowledge

**Step 1: Server Setup**
```bash
# SSH into your server
ssh root@your_server_ip

# Update system
apt update && apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
apt install -y nodejs

# Install PostgreSQL
apt install -y postgresql postgresql-contrib

# Install Nginx
apt install -y nginx

# Install PM2 (process manager)
npm install -g pm2
```

**Step 2: Clone Repository**
```bash
cd /var/www
git clone https://github.com/yourusername/bmtc-smartticket.git
cd bmtc-smartticket/backend
npm install
```

**Step 3: Configure Database**
```bash
sudo -u postgres psql

# In psql:
CREATE DATABASE bmtc_smartticket;
CREATE USER bmtc_user WITH PASSWORD 'your_secure_password';
ALTER ROLE bmtc_user SET client_encoding TO 'utf8';
ALTER ROLE bmtc_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE bmtc_user SET default_transaction_deferrable TO on;
ALTER ROLE bmtc_user SET default_transaction_read_ahead TO on;
GRANT ALL PRIVILEGES ON DATABASE bmtc_smartticket TO bmtc_user;
\q
```

**Step 4: Setup .env File**
```bash
cd /var/www/bmtc-smartticket/backend
nano .env
```

Add:
```bash
DATABASE_URL="postgresql://bmtc_user:your_secure_password@localhost:5432/bmtc_smartticket"
JWT_SECRET=your_generated_secret
QR_SIGN_SECRET=your_generated_secret
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
FRONTEND_URL=https://your-frontend-domain.com
PORT=3001
NODE_ENV=production
```

**Step 5: Build Backend**
```bash
npm run build
npx prisma migrate deploy
```

**Step 6: Start with PM2**
```bash
pm2 start dist/main.js --name "bmtc-backend"
pm2 startup
pm2 save
```

**Step 7: Configure Nginx Reverse Proxy**
```bash
sudo nano /etc/nginx/sites-available/default
```

Replace with:
```nginx
server {
    listen 80;
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**Step 8: Enable HTTPS**
```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d api.yourdomain.com
```

**Step 9: Restart Nginx**
```bash
systemctl restart nginx
```

**Step 10: Verify**
```bash
curl https://api.yourdomain.com/health
```

---

## Detailed Frontend Deployment

### Option A: Vercel (Recommended)

See "Quick Deploy" section above.

**Advantages:**
- ✅ Easiest for Next.js
- ✅ Free tier available
- ✅ Automatic deployments
- ✅ Built-in CDN
- ✅ Serverless functions

### Option B: Self-Hosted

**Step 1: Build Frontend**
```bash
cd frontend
npm run build
# Creates .next/ directory
```

**Step 2: Deploy to Server**
```bash
# Copy files to server
scp -r .next root@your_server:/var/www/bmtc-frontend/
scp package.json package-lock.json root@your_server:/var/www/bmtc-frontend/
scp next.config.js root@your_server:/var/www/bmtc-frontend/
scp public/ root@your_server:/var/www/bmtc-frontend/  # if exists
```

**Step 3: Install Dependencies**
```bash
ssh root@your_server
cd /var/www/bmtc-frontend
npm install --production
```

**Step 4: Create PM2 Config**
```bash
nano ecosystem.config.js
```

Add:
```javascript
module.exports = {
  apps: [
    {
      name: 'bmtc-frontend',
      script: 'next',
      args: 'start',
      env: {
        PORT: 3000,
        NEXT_PUBLIC_API_URL: 'https://api.yourdomain.com',
        NEXT_PUBLIC_SOCKET_URL: 'https://api.yourdomain.com',
      },
    },
  ],
};
```

**Step 5: Start with PM2**
```bash
pm2 start ecosystem.config.js
pm2 startup
pm2 save
```

**Step 6: Configure Nginx**
```bash
sudo nano /etc/nginx/sites-available/frontend
```

Add:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Database Setup

### PostgreSQL Initialization

**Step 1: Create Database**
```bash
createdb bmtc_smartticket
```

**Step 2: Run Migrations**
```bash
cd backend
npx prisma migrate deploy
```

**Step 3: Verify**
```bash
npx prisma studio
# Opens UI at http://localhost:5555
```

### Database Backup

**Automated Backup (Railway):**
Railway automatically backs up PostgreSQL. Check settings.

**Manual Backup:**
```bash
# Create backup
pg_dump bmtc_smartticket > backup.sql

# Restore
psql bmtc_smartticket < backup.sql
```

---

## Environment Configuration

### Production Variables Checklist

**Backend (.env on server):**
```bash
✅ DATABASE_URL       - PostgreSQL connection string
✅ JWT_SECRET         - 64-char hex string (generated with crypto)
✅ QR_SIGN_SECRET     - 64-char hex string (generated with crypto)
✅ RAZORPAY_KEY_ID    - From Razorpay production dashboard
✅ RAZORPAY_KEY_SECRET - From Razorpay production dashboard
✅ RAZORPAY_WEBHOOK_SECRET - From Razorpay webhooks
✅ FRONTEND_URL       - Your frontend domain (https://...)
✅ PORT               - 3001 (or your custom port)
✅ NODE_ENV           - "production"
```

**Frontend (.env.production):**
```bash
✅ NEXT_PUBLIC_API_URL        - Your backend domain
✅ NEXT_PUBLIC_SOCKET_URL     - Your backend domain (same as API)
✅ NEXT_PUBLIC_RAZORPAY_KEY_ID - From Razorpay (public key)
```

### How to Keep Secrets Secure

1. **Never commit .env files**
   ```bash
   # Verify in .gitignore
   echo ".env" >> backend/.gitignore
   echo ".env.local" >> frontend/.gitignore
   ```

2. **Use platform secrets management:**
   - Railway: Dashboard → Variables (encrypted)
   - Vercel: Settings → Environment Variables (encrypted)
   - Self-hosted: Use .env file (NOT in git)

3. **Rotate secrets periodically:**
   - JWT_SECRET every 90 days
   - Razorpay keys annually

---

## Post-Deployment Verification

### 1. Backend Health Check
```bash
curl https://your-backend.com/health
# Should return: {"status":"ok"}
```

### 2. API Documentation
```
https://your-backend.com/api/docs
# Should show Swagger API documentation
```

### 3. Frontend Load
```
https://your-frontend.com
# Should load login page
```

### 4. Test Authentication Flow
1. Go to register page
2. Create test account
3. Log in
4. Verify token stored in cookies
5. Navigate to role-specific page

### 5. Test Real-time Updates
1. Open two browser windows
2. Log in with same account in both
3. Perform action (update profile)
4. Verify real-time update in other window

### 6. Test Payments (Test Mode)
1. Use Razorpay test keys
2. Go to traveler → buy ticket
3. Amount: ₹1 (test amount)
4. Complete payment with test card: 4111111111111111

### 7. Monitor Logs
- **Railway:** Dashboard → Logs
- **Heroku:** `heroku logs --tail`
- **Self-hosted:** `pm2 logs`

---

## Troubleshooting

### Common Issues

#### 1. "Cannot connect to database"
```
Solution:
1. Verify DATABASE_URL is correct
2. Ensure PostgreSQL is running
3. Check firewall allows connection
4. Verify credentials
5. Check database exists
```

#### 2. "Missing required environment variable"
```
Solution:
1. Check .env file exists in backend/
2. Verify variable name exactly matches
3. Restart backend service
4. Check Railway/Vercel variables are set
```

#### 3. "Socket connection refused"
```
Solution:
1. Verify NEXT_PUBLIC_SOCKET_URL is backend URL
2. Check backend CORS origin matches frontend
3. Verify JWT token is valid
4. Check backend is running and accessible
```

#### 4. "Razorpay payment fails"
```
Solution:
1. Verify you're using test keys in development
2. Verify production keys for live deployment
3. Confirm webhook URL is publicly accessible
4. Test webhook from Razorpay dashboard
```

#### 5. "Build fails on Vercel"
```
Solution:
1. Check build logs on Vercel dashboard
2. Verify root directory is "frontend/"
3. Ensure all environment variables are set
4. Check Next.js version compatibility
5. Verify node_modules doesn't exceed limits
```

#### 6. "High memory usage on backend"
```
Solution:
1. Check for memory leaks in services
2. Verify database connection pool size
3. Monitor active Socket.io connections
4. Check PM2 memory limits
5. Scale up VPS if needed
```

---

## Monitoring & Maintenance

### Health Checks
Set up monitoring to check:
- Backend API health: `GET /health`
- Database connectivity: `GET /health`
- Frontend page load: `GET https://yourdomain.com`

### Log Monitoring
- Daily review of error logs
- Watch for repeated failures
- Monitor database query performance

### Backups
- Daily database backups (automated on Railway)
- Weekly code backups
- Test restore process monthly

### Updates
- Monitor npm package updates
- Test updates in development first
- Apply security patches immediately

---

## Next Steps After Deployment

1. **Configure Domain**
   - Point domain to your server/CDN
   - Wait for DNS propagation (can take 24h)

2. **Enable SSL/TLS**
   - Get certificate from Let's Encrypt (free)
   - Configure HTTPS redirects
   - Update all URLs to use https://

3. **Monitor First 24 Hours**
   - Watch error logs
   - Test all user flows
   - Verify real-time updates
   - Confirm payments work

4. **Setup Notifications**
   - Error alerts to email/Slack
   - Performance alerts
   - Downtime notifications

5. **Announce to Users**
   - Share your website URL
   - Provide feedback mechanism
   - Monitor user issues

---

## Support & Documentation

- **Backend API Docs:** `https://your-backend.com/api/docs` (Swagger)
- **Frontend Deployment:** [Vercel Docs](https://vercel.com/docs)
- **Backend Deployment:** [Railway Docs](https://docs.railway.app)
- **Database:** [Prisma Docs](https://www.prisma.io/docs)
- **Payment Integration:** [Razorpay Docs](https://razorpay.com/docs/)

---

**Deployment Complete! 🎉**

Your BMTC SmartTicket website is now live and ready for users.
