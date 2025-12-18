# EmailJS Setup Guide

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Create an Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy your Service ID** (you'll need this)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Copy your Template ID** (you'll need this)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. **Copy your Public Key**

## Step 5: Update Your .env File

✅ **The `.env` file is already created!** 

Open `myapp/.env` and replace the placeholder values with your actual EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_actual_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
```

**Note:** The Contact component is already configured to use these environment variables automatically!

## Step 6: Restart Your Dev Server

After updating the `.env` file, restart your development server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

**Important:** Environment variables are only loaded when the server starts, so you must restart after changing `.env`.

## Step 7: Test the Form

1. Start your dev server: `npm run dev`
2. Fill out the contact form
3. Submit and check your email inbox
4. You should receive the message!

## Troubleshooting

- **Not receiving emails?** Check your spam folder
- **Error sending?** Verify all three IDs are correct
- **Rate limit?** Free plan allows 200 emails/month

## ✅ Already Set Up!

The following is already configured:
- ✅ `.env` file created in `myapp` folder
- ✅ Contact component uses environment variables
- ✅ `.env` is in `.gitignore` (your keys are safe)

You just need to:
1. Get your EmailJS credentials (Steps 1-4 above)
2. Update the `.env` file with your actual values
3. Restart your dev server
4. Test the form!

