# Eventually Aerospace Landing Site

A static, mobile-friendly landing site for Eventually Aerospace built with Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional aerospace-themed design
- **Static Site**: No dependencies, ready for hosting
- **Cloudflare Pages Ready**: Optimized for easy deployment

## Structure

- **Hero Section**: Main value proposition
- **Solutions Gallery**: Four service cards highlighting current offerings
- **About Section**: Company information (placeholder content)
- **Contact Section**: Placeholder for future contact form
- **Navigation**: Smooth scrolling between sections

## Local Development

Simply open `index.html` in your browser to view the site locally.

## Deployment to Cloudflare Pages

1. **Connect Repository**: 
   - Go to Cloudflare Pages dashboard
   - Click "Create a project"
   - Connect your Git repository

2. **Build Settings**:
   - **Framework preset**: None (static site)
   - **Build command**: (leave empty)
   - **Build output directory**: `/` (root directory)
   - **Root directory**: `/` (root directory)

3. **Environment Variables**: None required

4. **Custom Domain** (optional):
   - Add your custom domain in the Cloudflare Pages settings
   - Update DNS records as instructed

## Site Sections

### Hero
- Main headline: "Eventually Aerospace will eventually provide solutions for aerospace."
- Call-to-action button leading to solutions section

### Solutions
Four service cards:
1. **Forgetting to remember what matters most**
2. **Uncrashing product companies** 
3. **Go-to-market for AI businesses**
4. **Due Diligence on AI-enabled businesses for Private Equity**

### About
- Lorem ipsum placeholder content
- Ready for real company information

### Contact
- Placeholder section for future contact form
- Visual indication that form is "coming soon"

## Customization

### Colors
The site uses a custom "aerospace" color palette defined in the Tailwind config:
- Primary blues from aerospace-50 to aerospace-900
- Easy to modify in the `<script>` section

### Content
- All text content can be easily updated in the HTML
- Images can be added to the cards or hero section as needed
- Contact form can be integrated when ready

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive on all screen sizes
- Progressive enhancement with smooth scrolling

## Performance

- Lightweight: Uses Tailwind CSS via CDN
- Fast loading: Minimal JavaScript
- SEO friendly: Semantic HTML structure with proper meta tags
