# Adriana Urrego - Product Manager Portfolio

A modern, responsive portfolio website showcasing AI-powered product development, case studies, and thought leadership in product management.

## 🌟 About

This portfolio highlights 7+ years of experience in product management, specializing in AI/ML integration and growth optimization. The site features detailed case studies of shipped products, technical articles, and insights into building products that balance user needs with business impact.

**Live Site:** [adrianaurrego.github.io](https://adrianaurrego.github.io)

## ✨ Features

- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **AI Product Showcases**: Detailed case studies of 5+ AI-powered products
- **Interactive Navigation**: Sticky header with smooth scrolling to sections
- **Resource Library**: Curated articles and classes on AI, product management, and tech
- **SEO Optimized**: Meta tags, semantic HTML, and optimized content structure
- **Performance**: Fast loading with optimized assets and minimal dependencies
- **Analytics**: Google Tag Manager integration for tracking and insights

## 🛠 Tech Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Custom properties, Grid, Flexbox, `clamp()`-based fluid type
- **JavaScript**: Vanilla JS for interactive navigation
- **Fonts**: Bricolage Grotesque (display) + Hanken Grotesk (body) from Google Fonts
- **Analytics**: Google Tag Manager (GTM-TVDMFNM)
- **Hosting**: GitHub Pages

## 📁 Project Structure

```
adrianaurrego.github.io/
├── Index.html                    # Main landing page
├── css/
│   ├── estilos.css              # Design tokens, base styles, home-page components
│   └── case-study.css           # Shared components for the 7 case study pages
├── js/
│   └── main.js                  # Nav toggle, smooth scroll, active-link + fade-in
├── Images/                       # Project images and assets
│   ├── Hero.jpeg                # Profile photo
│   └── favicon.png              # Site favicon
├── fonts/                        # Legacy font files (unused by the current design)
├── case-studies/
│   ├── platzi-learn-detail.html
│   ├── placement-test-detail.html
│   ├── search-detail.html
│   ├── exams-detail.html
│   ├── explainer-detail.html
│   ├── onboarding-experiments-detail.html
│   ├── cancellation-flow-detail.html
│   └── wealthsimple.html        # Out of scope for the redesign; untouched
└── README.md                    # Project documentation
```

## 🎯 Featured Products

### Platzi Learn V1
AI-powered course generator that transforms company documentation into structured courses with AI-narrated lessons and assessments.

### Placement Test
Adaptive English proficiency test using AI to evaluate skills and provide personalized learning recommendations.

### AI Search
Personalized course search using vector databases to surface the most relevant learning content.

### Exams System
Auto-generates question banks and evaluates open responses with real-time gamified feedback.

### Explainer V1 & V2
AI assistant providing immediate answers to student questions within the learning interface.

## 📝 Recent Articles & Classes

- **Mathematical Foundations of AI**: Deep dive into how language models work
- **Starting Your First AI Project**: Practical guide to becoming AI Native
- **DeepSeek R1 Analysis**: Why it outperforms GPT-o1
- **The Non-Traditional Path**: Personal blog on product management and lifestyle

## 🎨 Design System

"2026 redesign" — warm off-white paper, near-black ink, big tightly-set display type, an acid-lime accent for **AI products** work and a magenta accent for **Growth** work. Tokens live in `css/estilos.css` under `:root`.

### Colors
- `--paper` `#F3F0E8` page background · `--ink` `#15130F` primary text / dark bands
- `--panel-dark` `#1E1C17` screenshot stage · `--callout` `#E7E2D6` / `--callout-dark` `#2A2721`
- `--text-2` / `--muted` on paper · `--text-2-dark` / `--muted-dark` on ink
- `--ai` `#88EE11` (lime — **only** for AI product accents) · `--growth` `#C8175F` / `--growth-dark` `#FF4F93` (magenta — **only** for Growth accents)

### Typography
- Display: **Bricolage Grotesque** · Body: **Hanken Grotesk**
- Type scales fluidly with `clamp()` between a 390px and a 1440px reference size via the `.fluid` utility class plus per-role classes (`.h1-home`, `.h2-case`, `.step-num`, `.num`, etc. — see `css/estilos.css`)

### Layout
- 12-column grid, `24px` gutter, `1280px` max content width, `80px` side margin at desktop (`20px` on mobile)
- Grid placement (`grid-column`) is set inline per element, mirroring the approved design comps in `redesign-handoff/reference/`
- Breakpoints: `≤1024px` cramped/6-col, `≤767px` stacked single column, `≤640px` mobile margins/spacing

### Components
Header/nav, buttons, section headers, AI product cards, the Growth band, the teaching list, and the case-study template (hero, impact band, problem cards, feature grid, step rows, callouts, key learnings, next-case footer) are all documented inline in `css/estilos.css` and `css/case-study.css`.

## 🧪 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Analytics

The site uses Google Tag Manager for tracking:
- Page views
- User interactions
- Conversion events
- Custom dimensions

## 📄 License

© 2026 Adriana Urrego. All rights reserved.

This project is for portfolio demonstration purposes. Content and design are proprietary.

## 📫 Contact

- **Email**: aurregom@gmail.com
- **LinkedIn**: [linkedin.com/in/adriurrego](https://www.linkedin.com/in/adriurrego/)
- **Blog**: [adrianaurrego.substack.com](https://adrianaurrego.substack.com/)
- **Portfolio**: [adrianaurrego.github.io](https://adrianaurrego.github.io)

## 🙏 Acknowledgments

- Designed and developed with [Claude Code](https://claude.com/claude-code)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Icons: Custom SVG design
- Hosted on [GitHub Pages](https://pages.github.com/)

---

**Built with dedication in Vancouver, Canada** 🇨🇦
