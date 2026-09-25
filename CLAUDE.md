# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio website for a Product Manager specializing in AI/ML products. The site is hosted on GitHub Pages and showcases case studies, articles, and professional experience. It uses vanilla HTML, CSS, and JavaScript with no build system or dependencies.

## Architecture

### Core Files
- **Index.html**: Main landing page — hero, AI products, Growth band, teaching, about, contact footer
- **case-studies/**: Directory containing all case study detail pages
  - 7 redesigned pages (`*-detail.html`) share one template built from `css/case-study.css`, no per-page inline `<style>` blocks
  - `wealthsimple.html` is a pre-redesign page kept as-is (out of scope, not on the header/footer nav chain)
  - Navigation with back link to `../Index.html`; each page links to the next in sequence 01→07, and the last links back to the first and to home
  - Use relative paths for assets: `../Images/`, `../css/`, `../js/`
  - Section order: hero → impact → problem → solution/approach → how-it-works (or experiments/iterations) → key learnings → next-case footer
- **css/estilos.css**: Design tokens (`:root`), reset, base styles, fluid type utilities, 12-col grid helpers, header/nav, buttons, and every home-page-only component
- **css/case-study.css**: Loads after `estilos.css` on case study pages only — hero, impact band, problem cards, feature grid, step rows, callouts, badges, key learnings, next-case footer, and the growth-page-specific iteration/experiment blocks
- **js/main.js**: Vanilla JS for the mobile nav toggle, smooth scrolling with header offset, active-link-on-scroll, and an optional scroll fade-in (disabled under `prefers-reduced-motion`)

### Design System — "2026 redesign"
Warm off-white paper, near-black ink, big tightly-set display type. Lime = **AI products** work, magenta = **Growth** work — these two accent colors carry that fixed meaning everywhere and are never used decoratively. Tokens live in `css/estilos.css` `:root`:
- **Surfaces**: `--paper` `#F3F0E8`, `--ink` `#15130F`, `--panel-dark` `#1E1C17` (screenshot stage), `--callout` `#E7E2D6` / `--callout-dark` `#2A2721`
- **Text**: `--text-2` / `--muted` on paper, `--text-2-dark` / `--muted-dark` on ink
- **Accents**: `--ai` `#88EE11`, `--growth` `#C8175F` (on paper), `--growth-dark` `#FF4F93` (on ink)
- **Type**: `--font-display` = Bricolage Grotesque, `--font-body` = Hanken Grotesk. Sizes scale with `clamp()` between a 390px and 1440px reference via the `.fluid` class plus role classes (`.h1-home`, `.h1-case`, `.h2-case`, `.step-num`, `.num`, etc.) — see `css/estilos.css` for the full scale
- **Layout**: 12-col grid (`.grid12`), `24px` gutter, `1280px` max content width, `80px`/`20px` side margin. Grid placement is set with inline `grid-column` per element (mirrors `redesign-handoff/reference/*.html`, the approved visual comps), stacked to one column via the `.gi` class at `≤640px` and via `display:flex` container overrides at `≤767px`
- **Big numerals** (stats, metrics): use the `.num` / `.num-hero` classes with `--fmin` / `--fmax` set inline (unitless px) to match each instance's own desktop size — there's no single fixed scale for these, they vary per section

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
2. `<header class="site-header">` with the logo mark, brand name, nav links and a "Get in touch" pill; `#nav-toggle` / `#nav-menu` for the mobile hamburger overlay
3. Semantic HTML5 `<main>` with `<section>`s (home page sections keep their `id`s for anchor nav)
4. Images from `Images/` (or `../Images/` inside `case-studies/`)
5. Footer with contact links (`<footer id="contact">` on the home page, `<footer class="next-footer">` on case studies)

### Case Study Pages
Detail pages (`*-detail.html`, except `wealthsimple.html`) share one template (`css/case-study.css`, no inline `<style>` blocks) and follow this structure:
- `case-hero`: eyebrow (`AI products` or `Growth` · N of 07), H1, lead paragraph, Company/Role/Product (or Metric) meta list
- `impact-band`: dark full-bleed stat block (or `impact-on-paper` / `metric-strip` on the two Growth pages)
- `case-section` × 2–3: Problem (`problem-grid`, A/B/C cards), Solution (`feature-grid`), and either `steps` (How it works) or, on the Growth pages, `iteration` blocks with `callout`s and `finding-grid`s
- `learnings`: indexed key-learnings rows
- `next-footer`: link to the next case study in the 01→07 chain (Cancellation links back to Platzi Learn and to `../Index.html`)

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
1. Copy `case-studies/platzi-learn-detail.html` as the template (it's the most complete example of the shared components) and rebuild its content
2. Use relative paths in the new file:
   - Back links: `href="../Index.html"`
   - Images: `src="../Images/[filename]"`
   - Favicon: `href="../Images/favicon.png"`
   - Stylesheets: `../css/estilos.css` and `../css/case-study.css`
3. Add a card to `Index.html`'s `#ai` (`.ai-feature`/`.ai-card`) or `#growth` (`.growth-feature`/`.cancel-feature`) section, linking to `case-studies/[project-name]-detail.html`
4. Update the `next-footer` link on the *previous* last page in the chain, and this page's own `next-footer` link
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
- Images: PascalCase or descriptive names (`Hero.jpeg`, `favicon.png`)
- Main entry point is capitalized: `Index.html`

### Code Style
- **HTML**: Semantic elements, 4-space indentation, descriptive class names; grid placement (`grid-column`) is set with inline `style` per element rather than one-off utility classes, matching the approved design comps
- **CSS**: BEM-ish naming (`.ai-card`, `.ai-card-title`, `.step-media`), design-token-driven (no hardcoded colors/sizes outside `:root` and the fluid-type classes), mobile-last overrides in `@media` blocks
- **JavaScript**: ES6+ syntax, descriptive variable names, checks `prefers-reduced-motion` before animating
- **Comments**: Section header comments in CSS (`/* ---- Name ---- */`)

### Responsive Breakpoints
Defined in CSS (`css/estilos.css`, `css/case-study.css`):
- `≤1024px`: layout gets cramped (no dedicated rules yet beyond fluid type shrinking)
- `≤767px`: components stack to a single column (`display:flex;flex-direction:column` overrides)
- `≤640px`: mobile side margins (`--pad: 20px`) and forced grid stacking (`.gi{grid-column:1/-1 !important}`)

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
1. Edit `<nav class="primary-nav" id="nav-menu">` in `Index.html`
2. Add `<a href="#section-id" class="nav-link">Link Text</a>`
3. Ensure the corresponding `<section>` has a matching `id` attribute

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
