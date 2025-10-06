# Maria Sarbu - Portfolio Website

Professional resume website for Maria Sarbu, Commis de Cuisine based in Nivelles, Belgium.

## 🚀 Features

- **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- **Accessible** - WCAG 2.1 AA compliant with ARIA labels and keyboard navigation
- **SEO Optimized** - Structured data, meta tags, and semantic HTML
- **Dark/Light Theme** - Toggle with localStorage persistence
- **Smooth Animations** - Respects `prefers-reduced-motion`
- **Contact Form** - Integrated with Formspree
- **Scroll Progress Bar** - Visual feedback as users scroll
- **Performance Optimized** - Fast load times and efficient animations

## 📁 Project Structure

```markdowm
/
├── index.html              # Main HTML file
├── robots.txt              # Search engine instructions
├── sitemap.xml             # XML sitemap for SEO
├── css/
│   ├── variables.css       # CSS custom properties
│   ├── reset.css           # Reset and base styles
│   ├── layout.css          # Layout and structure
│   ├── navigation.css      # Navigation styles
│   ├── sections.css        # All section styles
│   ├── theme.css           # Theme and accessibility
│   └── responsive.css      # Media queries
├── js/
│   └── main.js             # All JavaScript functionality
└── assets/
    ├── maria-sarbu-portrait.jpg    # Profile photo
    ├── maria-sarbu-cv.pdf          # Downloadable CV
    ├── favicon-32x32.png           # Favicon 32x32
    ├── favicon-16x16.png           # Favicon 16x16
    └── apple-touch-icon.png        # Apple touch icon
```

## 🛠️ Setup Instructions

### 1. Add Your Files

Place the following files in the `assets/` folder:

- `maria-sarbu-portrait.jpg` - Professional portrait photo (minimum 400x400px)
- `maria-sarbu-cv.pdf` - Downloadable CV in PDF format
- `favicon-32x32.png` - Favicon 32x32 pixels
- `favicon-16x16.png` - Favicon 16x16 pixels
- `apple-touch-icon.png` - Apple touch icon 180x180 pixels

### 2. Configure Formspree

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form endpoint
4. In `index.html`, replace `YOUR_FORM_ID` on line 249:

   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### 3. Update Domain References

Replace `https://mariasarbu.com/` with your actual domain in:

- `index.html` - meta tags and JSON-LD
- `sitemap.xml` - all URL entries

### 4. Generate Favicons

Use a favicon generator like [favicon.io](https://favicon.io/) to create:

- favicon-32x32.png
- favicon-16x16.png
- apple-touch-icon.png

## 🚢 Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Push all files to the repository
3. Go to Settings > Pages
4. Select your branch (usually `main`) and root folder
5. Save and wait for deployment

### Netlify

1. Drag and drop the entire folder to [app.netlify.com](https://app.netlify.com)
2. Or connect your GitHub repository for automatic deployments
3. Configure custom domain if desired

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project folder
3. Follow the prompts

## 🎨 Customization

### Colors

Edit `css/variables.css` to change the color scheme:

```css
:root {
    --cream: #F5F1E8;
    --terracotta: #C97C5D;
    --olive: #8B9474;
    --warm-beige: #D4C4B0;
    --deep-brown: #4A3F35;
    --gold: #B8935E;
}
```

### Content

Edit `index.html` to update:

- Work experience
- Skills
- Education
- Languages
- Contact information

### Fonts

Current fonts from Google Fonts:

- **Playfair Display** - Headings (serif)
- **Inter** - Body text (sans-serif)

To change fonts, edit the Google Fonts link in `index.html` head section and update `--font-serif` and `--font-sans` in `css/variables.css`.

## ♿ Accessibility Features

- Semantic HTML5 landmarks (`<main>`, `<nav>`, `<footer>`)
- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus indicators for keyboard users
- Skip-to-content link
- `prefers-reduced-motion` support
- High contrast mode support
- Screen reader friendly

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- JSON-LD structured data (Person schema)
- XML sitemap
- robots.txt
- Canonical URL
- Alt text for images
- Descriptive link text

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Copyright © 2025 Maria Sarbu. All rights reserved.

## 🤝 Support

For questions or issues, contact: <maria_sarbu67@yahoo.com>

## 📊 Performance Tips

- Optimize images before uploading (use WebP format if possible)
- Keep the portrait image under 200KB
- Minify CSS and JavaScript for production
- Enable compression on your hosting platform
- Consider adding a Content Delivery Network (CDN)

## 🔧 Maintenance

### Updating Content

1. Edit `index.html` for content changes
2. Update `lastmod` date in `sitemap.xml`
3. Test locally before deploying
4. Deploy changes to your hosting platform

### Testing Checklist

- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Test contact form submission
- [ ] Check dark mode toggle
- [ ] Validate HTML (<https://validator.w3.org/>)
- [ ] Test keyboard navigation
- [ ] Run Lighthouse audit in Chrome DevTools
- [ ] Verify meta tags with social media debuggers

## 🎯 Lighthouse Score Goals

Aim for these scores:

- **Performance**: 90+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

Run audit: Chrome DevTools > Lighthouse tab

---

Built with ❤️ for Maria Sarbu