# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio website for a Product Manager specializing in AI/ML products. The site is hosted on GitHub Pages and showcases case studies, articles, and professional experience. It uses vanilla HTML, CSS, and JavaScript with no build system or dependencies.

## Architecture

### Core Files
- **Index.html**: Main landing page with hero, work grid, teaching section, about, and contact
- **case-studies/**: Directory containing all case study detail pages
  - Individual case study pages (`*-detail.html`, plus `wealthsimple.html`)
  - Each has inline styles in `<style>` tags for page-specific design
  - Navigation with back link to `../Index.html`
  - Use relative paths for assets: `../Images/`, `../css/`, `../js/`
  - Follow same section structure: hero, overview, challenge, approach, impact, learnings
- **css/estilos.css**: Main stylesheet using CSS custom properties (variables) in `:root`
- **css/estilos_header.css**: Header-specific styles (if applicable)
- **js/main.js**: Vanilla JS for navigation, smooth scrolling, mobile menu, and scroll animations

### Design System
The site uses a centralized design system defined in CSS custom properties:
- **Colors**: `--color-primary`, `--color-text`, `--color-text-muted`, `--color-background`, `--color-accent`
- **Typography**: `--font-family` (Inter), font size scale from `--font-size-sm` to `--font-size-7xl`
- **Spacing**: 8px grid system with `--spacing-xs` through `--spacing-4xl`
- **Layout**: `--container-max-width: 1200px`, `--border-radius`, `--transition-base`

### JavaScript Features
All in `js/main.js`:
- Mobile navigation toggle with hamburger menu
- Smooth scrolling for anchor links with header offset
- Intersection Observer for fade-in animations on scroll
- Active nav link highlighting based on scroll position
- Click-outside-to-close for mobile menu

### HTML Structure Pattern
All pages follow this pattern:
1. Google Tag Manager (GTM-TVDMFNM) in `<head>` and after `<body>`
2. Header/Navigation with logo and menu
3. Semantic HTML5 sections with IDs for navigation
4. Responsive images in `Images/` directory
5. Footer with contact links

### Case Study Pages
Detail pages (`*-detail.html`) have inline styles and follow this structure:
- Fixed navigation with back link
- Hero section with title and description
- Overview cards (role, timeline, tools, team)
- Main content sections (challenge, approach, impact, learnings)
- Footer

## Development Workflow

### Making Changes
Since this is a static site with no build process:
1. Edit HTML, CSS, or JS files directly
2. Test locally by opening `Index.html` in a browser or using a local server
3. Changes are reflected immediately (hard refresh may be needed for CSS/JS changes)

### Testing Locally
```bash
# Option 1: Simple HTTP server (Python)
python3 -m http.server 8000

# Option 2: PHP built-in server
php -S localhost:8000

# Then open: http://localhost:8000
```

### Adding New Case Studies
1. Create new `[project-name]-detail.html` file in the `case-studies/` directory following the pattern of existing detail pages
2. Use relative paths in the new file:
   - Back links: `href="../Index.html"`
   - Images: `src="../Images/[filename]"`
   - Favicon: `href="../Images/favicon.png"`
3. Add work card to Index.html in the `.work-grid` section
4. Link the card using `href="case-studies/[project-name]-detail.html"`
5. Ensure images are added to `Images/` directory

### Git Workflow
- Main branch: `master`
- Create feature branches for changes: `git checkout -b feature-name`
- The repository uses GitHub Actions for Claude Code integration (`.github/workflows/claude.yml`)
- Tag @claude in issues or PR comments to invoke Claude Code automation

### Deployment
The site auto-deploys via GitHub Pages when changes are pushed to `master`. No build step required.

## Key Conventions

### File Naming
- HTML files: lowercase with hyphens (`platzi-learn-detail.html`)
  - Exception: `wealthsimple.html` (no `-detail` suffix)
- Case study pages: stored in `case-studies/` directory
- CSS files: lowercase with underscores (`estilos_header.css`)
- Images: PascalCase or descriptive names (`Hero.jpeg`, `Favicon.PNG`)
- Main entry point is capitalized: `Index.html`

### Code Style
- **HTML**: Semantic elements, proper indentation (4 spaces), descriptive class names
- **CSS**: BEM-like naming (`.work-card`, `.work-card-title`), mobile-first responsive design
- **JavaScript**: ES6+ syntax, descriptive variable names, event delegation where appropriate
- **Comments**: Sections marked with comment headers in CSS

### Responsive Breakpoints
Defined in CSS, typically:
- Mobile: < 768px
- Tablet: 768px - 991px
- Desktop: > 991px

### Analytics
All pages include Google Tag Manager (ID: GTM-TVDMFNM). Preserve GTM snippets when editing HTML.

### Contact Information
Maintained in footer:
- Email: aurregom@gmail.com
- LinkedIn: linkedin.com/in/adriurrego
- Blog: adrianaurrego.substack.com

## Common Tasks

### Update Design System Colors
Edit the CSS custom properties in `css/estilos.css` at the `:root` selector. Changes will cascade throughout the site.

### Add Navigation Link
1. Edit header in `Index.html` (and other pages if needed)
2. Add `<li><a href="#section-id" class="nav-link">Link Text</a></li>`
3. Ensure corresponding section has matching `id` attribute

### Fix Mobile Menu Issues
Mobile menu logic is in `js/main.js`. The hamburger toggle, menu visibility, and click-outside-to-close are all controlled there.

### Modify Footer
Footer is in each HTML file. For site-wide changes, update all pages:
- Update `Index.html`
- Update all files in `case-studies/` directory

### Image Optimization
Images are stored in `Images/` directory. For performance, ensure images are:
- Compressed/optimized before committing
- Using appropriate formats (JPEG for photos, PNG for graphics/logos)
- Reasonably sized (not original camera resolution)
