# MashaAI Connect - Website

A modern, responsive multi-page website for MashaAI Connect featuring AI calling agents and automation solutions.

## 📁 Project Structure

```
website/
├── index.html           # Home page with features overview
├── pricing.html         # Pricing page with AI agent pricing details
├── calculator.html      # ROI calculator for cost comparison
├── demo.html            # Demo booking form with data collection
├── styles.css           # Global styling with dark tech theme
├── calculator.js        # Calculator functionality and Chart.js integration
├── form.js              # Form validation and handling
└── README.md            # This file
```

## 🚀 Features

### Pages

1. **Home (index.html)**
   - Hero section with main value proposition
   - Feature cards for all services
   - Benefits section with metrics
   - Call-to-action buttons

2. **Pricing (pricing.html)**
   - AI Calling Agents pricing: $2,000 setup + $0.05/min usage
   - WhatsApp Automation pricing
   - Email Automation pricing
   - FAQ section
   - Link to calculator

3. **Calculator (calculator.html)**
   - Interactive cost comparison tool
   - Real-time calculations
   - Chart visualization of savings over time
   - Customizable inputs for accurate ROI
   - Benefits breakdown

4. **Demo Booking (demo.html)**
   - Comprehensive form with validation
   - Fields: Name, Email, Phone, Company, Position, Industry, Company Size, Monthly Volume, Interests, Message
   - Real-time form validation
   - Success confirmation message
   - Info section with what to expect

## 🎨 Design Features

- **Dark Tech Theme**: Professional black background with cyan/blue accents
- **Gradient Text**: Eye-catching gradient typography
- **Responsive Design**: Mobile-first approach, works on all devices
- **Smooth Animations**: Hover effects and transitions throughout
- **Background Effects**: Subtle star animations
- **Modern Components**: Cards, buttons, forms with contemporary styling

## 📱 Responsive Breakpoints

- Desktop: Full layout with multi-column grids
- Tablet (768px): Adjusted layouts for medium screens
- Mobile (480px): Single column layouts optimized for touch

## 🛠 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, flexbox, and grid
- **JavaScript (Vanilla)**: No dependencies required
- **Chart.js**: Optional for calculator visualizations (CDN)

## ⚙️ Setup & Deployment to GitHub Pages

### Local Testing

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js with http-server
   npx http-server
   ```

### Deploy to GitHub Pages

#### Method 1: Upload files directly to GitHub

1. Create a new repository named `yourusername.github.io` (for user pages) or any repository for project pages
2. Clone the repository locally
3. Copy all website files into the repository folder
4. Commit and push:
   ```bash
   git add .
   git commit -m "Initial commit: MashaAI Connect website"
   git push origin main
   ```
5. Your website will be live at:
   - User pages: `https://yourusername.github.io`
   - Project pages: `https://yourusername.github.io/repository-name`

#### Method 2: Use Git

1. Initialize git in your project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Add remote and push to GitHub:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

3. Go to repository Settings → Pages → Select main branch as source

#### Method 3: Using GitHub Desktop

1. Open GitHub Desktop
2. Click "File" → "Clone Repository"
3. Use your custom domain in CNAME file (optional):
   ```
   # Create a CNAME file in the root with:
   yourdomain.com
   ```

### Custom Domain Setup

To use a custom domain (e.g., mashaiconnect.com):

1. Create a `CNAME` file in the root of your repository with your domain name:
   ```
   mashaiconnect.com
   ```

2. Configure DNS records at your domain provider:
   - For user pages, add A records pointing to GitHub Pages IPs
   - Or use CNAME record pointing to `yourusername.github.io`

3. Wait for DNS propagation (up to 24 hours)

4. Enable HTTPS in repository Settings → Pages

## 🔧 Customization

### Colors & Theme

Edit `styles.css` to change:
- Primary color: `#00d4ff` (cyan)
- Secondary color: `#64c8ff` (light blue)
- Background: Linear gradients from `#0a0e27` to `#1a1f3a`

### Pricing

Update pricing values in `pricing.html`:
```html
<span class="price-amount">$2,000</span>  <!-- Setup fee -->
<span class="price-amount">$0.05<span class="price-unit">/min</span></span>  <!-- Usage fee -->
```

### Calculator Values

Modify constants in `calculator.js`:
```javascript
const SETUP_FEE = 2000;
const COST_PER_MINUTE = 0.05;
```

### Form Fields

Edit fields in `demo.html` and corresponding validators in `form.js`

## 📊 Form Data Storage

Since GitHub Pages hosts static content, form submissions are stored in browser's localStorage. For production:

1. **Option 1**: Use Formspree (https://formspree.io/)
   - Free form backend
   - Sends submissions to email
   - No code changes needed

2. **Option 2**: Use AWS Lambda + API Gateway
   - Serverless form handler
   - Low cost at scale

3. **Option 3**: Use Services like Netlify Forms
   - Deploy to Netlify instead of GitHub Pages
   - Built-in form handling

### Implement Formspree Integration

```html
<!-- In demo.html, change form action to: -->
<form id="demoForm" class="demo-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Get your form ID from formspree.io after creating a form.

## 📈 SEO Optimization

Add meta tags in HTML head for better SEO:
```html
<meta name="description" content="AI Calling Agents & Automation Solutions by MashaAI Connect">
<meta name="keywords" content="AI, calling agents, automation, WhatsApp, email">
<meta property="og:title" content="MashaAI Connect">
<meta property="og:description" content="Transform your customer communication">
<meta property="og:image" content="https://yoursite.com/image.jpg">
```

## 🔒 Security Notes

- All JavaScript is client-side
- No sensitive data is transmitted without HTTPS
- Forms currently store data locally (implement backend for production)
- Use Content Security Policy headers on your server

## 📞 Contact Information

Update in `demo.html`:
```html
<p>Email us at: <strong>hello@mashaiconnect.com</strong></p>
<p>Call us at: <strong>+1 (800) MASHAII</strong></p>
```

## 🐛 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

© 2026 MashaAI Connect. All rights reserved.

## ✨ Future Enhancements

- [ ] Blog section with case studies
- [ ] Live chat integration
- [ ] Appointment scheduling system
- [ ] CMS integration
- [ ] Analytics integration (Google Analytics)
- [ ] Video testimonials
- [ ] Chatbot for support
- [ ] Multi-language support

## 🤝 Support

For help or questions:
1. Check the README sections above
2. Review inline code comments
3. Check browser console for errors (F12)
4. Validate HTML/CSS at W3C validators

---

**Ready to launch?** Push to GitHub and your website will be live!
