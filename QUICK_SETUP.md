# Quick EmailJS Setup (5 Minutes)

## Current Status
❌ EmailJS is not configured yet. The `.env` file has placeholder values.

## Quick Fix - 3 Steps:

### Step 1: Sign Up for EmailJS (2 minutes)
1. Go to: https://www.emailjs.com/
2. Click "Sign Up" (free account - 200 emails/month)
3. Verify your email

### Step 2: Get Your 3 Credentials (2 minutes)

**A. Service ID:**
- Dashboard → Email Services → Add New Service
- Choose Gmail (or your email provider)
- Follow setup → Copy the **Service ID**

**B. Template ID:**
- Dashboard → Email Templates → Create New Template
- Use this template:
```
Subject: New Message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```
- Save → Copy the **Template ID**

**C. Public Key:**
- Dashboard → Account → General
- Copy your **Public Key**

### Step 3: Update .env File (1 minute)

Open `myapp/.env` and replace:

```
VITE_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID        ← Replace with your Service ID
VITE_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID       ← Replace with your Template ID  
VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY         ← Replace with your Public Key
```

**Example:**
```
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

### Step 4: Restart Server

```bash
# Stop server (Ctrl+C)
npm run dev
```

### Step 5: Test!

Fill out the contact form and submit. Check your email inbox!

---

## Alternative: Email Directly

If you don't want to set up EmailJS right now, users can click your email address in the contact section to email you directly.

---

## Need Help?

See `EMAILJS_SETUP.md` for detailed instructions with screenshots.

