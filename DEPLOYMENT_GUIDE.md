# Portfolio Deployment Guide

Since your project has both a **Frontend** (React) and a **Backend** (Node.js), you need to deploy them separately. The best "Free" stack for this is **Vercel** (Frontend) + **Render** (Backend).

## Step 1: Push Code to GitHub
1. Create a new repository on GitHub.
2. Open your terminal in VS Code and run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   # Replace the URL below with your new repository URL
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

## Step 2: Deploy Backend (Render.com)
1. Go to [dashboard.render.com](https://dashboard.render.com/) and sign up.
2. Click **New +** -> **Web Service**.
3. Connect your GitHub repository.
4. Settings:
   - **Name**: `portfolio-backend` (or similar)
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Free Tier**: Select "Free".
5. Click **Create Web Service**.
6. Wait for it to deploy. Once done, copy the **URL** (it will look like `https://portfolio-backend.onrender.com`).
   - *Note: The first deploy might take a few minutes.*

## Step 3: Configure Frontend to talk to Backend
1. Go to your local project.
2. Create a file in the root folder named `.env.production`.
3. Add this line (replace with your ACTUAL Render backend URL from Step 2):
   ```
   VITE_API_URL=https://your-backend-name.onrender.com/api/contact
   ```
4. Commit and push this change:
   ```bash
   git add .
   git commit -m "Add production env var"
   git push
   ```

## Step 4: Deploy Frontend (Vercel)
1. Go to [vercel.com](https://vercel.com) and sign up/login.
2. Click **Add New** -> **Project**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**.
5. **Environment Variables**:
   - Open the "Environment Variables" section.
   - Key: `VITE_API_URL`
   - Value: `https://your-backend-name.onrender.com/api/contact` (Same URL from Step 2).
6. Click **Deploy**.

## Success!
- Your website is now live on Vercel!
- It will send emails using your Render backend.
