# Formspree Setup Guide

## Overview
Your website is now configured to use **Formspree** for form submissions. Formspree handles all the backend form processing, so you don't need a server.

## How It Works
1. When a user fills out the demo booking form, it's validated client-side
2. If validation passes, the form data is sent to Formspree
3. Formspree emails you the submission and stores it
4. User sees a success message

## Setup Instructions

### Step 1: Create a Formspree Account
1. Go to https://formspree.io
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Create a Form Project
1. Log in to Formspree dashboard
2. Click "Create" to create a new form
3. Name it "MashaAI Connect Demo Booking"
4. Copy the **Form ID** (looks like: `f_xxxxxxxxxx`)

### Step 3: Update Your Website
1. Open `demo.html` in your code editor
2. Find this line (around line 38):
   ```html
   <form id="demoForm" class="demo-form" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
   ```
3. Replace `YOUR_FORMSPREE_ID` with your actual Form ID from Step 2
4. Save the file

### Step 4: Test the Form
1. Open your website in a browser
2. Go to "Book Demo" page
3. Fill out the form completely
4. Submit the form
5. You should see a success message
6. Check your email - Formspree will send you the submission

## Example
If your Form ID is `f_abc123def456`:

**Before:**
```html
<form id="demoForm" class="demo-form" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
```

**After:**
```html
<form id="demoForm" class="demo-form" action="https://formspree.io/f_abc123def456" method="POST">
```

## Email Settings in Formspree
1. Go to your form settings in Formspree dashboard
2. Set up email notifications to your email address
3. Optionally customize the thank-you page redirect

## What Fields Are Captured
- Full Name
- Email Address
- Company Name
- Industry
- Company Size
- Monthly Call Volume (optional)
- Interests (checkboxes)
- Message (optional)
- Terms Acceptance

## Local Testing (Development)
When testing locally (without Formspree configured):
- Form data is validated
- Data is saved to browser's localStorage
- Success message is displayed
- This allows testing before Formspree setup

## Troubleshooting

### Form not submitting?
- Make sure Form ID is correct
- Check browser console for errors (F12)
- Verify all required fields are filled

### Not receiving emails?
- Check Formspree spam folder
- Verify email was confirmed in Formspree account
- Check form settings in Formspree dashboard

### Want to see submissions?
1. Log in to Formspree
2. Go to your form
3. Click "Submissions" tab
4. All form submissions will be listed there

## Security Notes
- Formspree handles all data securely (HTTPS encrypted)
- Your email is never shown to website visitors
- Spam protection is built-in
- GDPR compliant

## Support
- Formspree Help: https://help.formspree.io
- Website Issues: Check browser console (F12) for errors

---

**Your website is now ready to receive demo booking requests!** 🚀
