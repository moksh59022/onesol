# Deployment Guide for RecruiterAI Landing Page

This guide will help you deploy your RecruiterAI landing page to various platforms.

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and connect your GitHub repository
4. Vercel will auto-detect the configuration and deploy
5. Your site will be live at `your-project.vercel.app`

### Option 2: Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git" and connect your repository
4. Use these build settings:
   - Build command: `cd client && npm run build`
   - Publish directory: `client/build`
5. Deploy and get your live URL

### Option 3: GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Source: Deploy from a branch
4. Branch: `main` and folder: `/root`
5. GitHub will build and deploy your site

## 📋 Pre-Deployment Checklist

- [ ] All components are working correctly
- [ ] Responsive design tested on mobile, tablet, desktop
- [ ] No console errors
- [ ] Links and buttons are functional
- [ ] Animations are smooth
- [ ] SEO meta tags are properly set
- [ ] Build process completes successfully

## 🔧 Manual Deployment

### Building for Production
```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Build the project
npm run build
```

The build will be created in `client/build` directory.

### Deploying to Static Hosting
Upload the entire `client/build` folder to any static hosting service:
- AWS S3 + CloudFront
- Google Cloud Storage
- DigitalOcean App Platform
- Heroku (static build)
- Any shared hosting

## 🌐 Environment Variables

For production deployment, you may need these environment variables:

```bash
NODE_ENV=production
REACT_APP_API_URL=https://your-api-domain.com
```

## 📊 Monitoring and Analytics

### Google Analytics
Add your Google Analytics tracking ID to `client/public/index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Hotjar/Clarity
Add heatmapping scripts to track user behavior on your landing page.

## 🔍 SEO Optimization

### Meta Tags
Your landing page already includes:
- Proper title and description
- Open Graph tags for social sharing
- Mobile-friendly viewport

### Sitemap
Generate and submit sitemap to Google Search Console:
```bash
npm install -g sitemap-generator-cli
sitemap-generator https://your-domain.com
```

## 🚨 Troubleshooting

### Common Issues

1. **Build fails with module not found**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Tailwind CSS not working**
   - Check PostCSS configuration
   - Ensure `@tailwind` directives are in CSS
   - Verify build process includes CSS

3. **Images not loading**
   - Use correct relative paths
   - Check file names (case-sensitive)
   - Ensure images are in `public` folder

4. **Deployment fails on Vercel/Netlify**
   - Check build logs for specific errors
   - Verify `package.json` scripts
   - Ensure all dependencies are listed

### Performance Optimization

1. **Image Optimization**
   - Use WebP format when possible
   - Compress images before upload
   - Implement lazy loading

2. **Bundle Size**
   - Analyze bundle with `npm run build -- --analyze`
   - Remove unused dependencies
   - Code split if necessary

## 📧 Submission Requirements

For the OneSol Founder Intern Assessment, submit:

1. **Figma Design Link**
   - Share your Figma file with view/comment access
   - Include all screens and components

2. **Live Website URL**
   - Deploy to Vercel, Netlify, or GitHub Pages
   - Test the live URL thoroughly

3. **GitHub Repository Link**
   - Push all code to GitHub
   - Ensure README is complete
   - Include deployment instructions

### Email Format
Send to: piyush@onesol.in and ahan@onesol.in  
Subject: "Founder Intern Assessment - [Your Name]"

Include:
- Figma Design Link
- Live Website URL  
- GitHub Repository Link
- Brief note about any challenges or features you're proud of

## 🎯 Success Metrics

After deployment, monitor:
- Page load speed (< 3 seconds)
- Mobile responsiveness
- Conversion rate on CTAs
- User engagement time
- Bounce rate

Good luck with your assessment! 🚀
