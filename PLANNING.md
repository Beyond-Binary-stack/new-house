# New House Decoration — Software Planning Document (Revised)

## 1. Project Overview

**New House Decoration** is a premium interior finishing and decoration company. This project transforms the existing "Coming Soon" placeholder into a full, production-ready static company website with a portfolio gallery.

- **Type:** Static Site (SPA)
- **Hosting:** Vercel
- **Backend:** None
- **Data:** Local TypeScript config + data files
- **Status:** Greenfield build on existing project scaffold

---

## 2. Functional Requirements

| ID | Requirement |
|---|---|
| FR1 | Display company branding, logo, and tagline |
| FR2 | Present company story, vision, mission, and values with visual elements |
| FR3 | List all 6 services with individual detail pages |
| FR4 | Showcase completed work in a filterable, lightbox-enabled gallery **(core feature)** |
| FR5 | Provide a contact page with phone, WhatsApp, email, address, map, and EmailJS form |
| FR6 | Navigate via a responsive navbar with mobile hamburger menu |
| FR7 | Include a footer with links, social icons, and copyright |
| FR8 | Every page must have proper SEO meta tags via React Helmet |
| FR9 | Smooth page transitions and scroll-triggered animations |
| FR10 | Fully responsive from 360px to 4K |
| FR11 | Floating WhatsApp button on all pages |
| FR12 | Back to Top button on all pages |
| FR13 | Scroll progress indicator |
| FR14 | Loading screen on initial load |
| FR15 | Beautiful custom 404 page |

---

## 3. Non-Functional Requirements

| ID | Requirement |
|---|---|
| NFR1 | Lighthouse score ≥ 90 for Performance, Accessibility, Best Practices, SEO |
| NFR2 | Total JS bundle < 200 KB (gzipped) |
| NFR3 | All images must be optimized (WebP, lazy-loaded via native `loading="lazy"`) |
| NFR4 | Zero runtime errors in modern browsers (Chrome, Firefox, Safari, Edge) |
| NFR5 | Codebase must be TypeScript strict mode |
| NFR6 | Animations must respect `prefers-reduced-motion` |
| NFR7 | All interactive elements must be keyboard-accessible |
| NFR8 | Architecture must be simple — no unnecessary abstractions |

---

## 4. Complete Sitemap

```
/                          Home
/about                     About Us
/services                  Services (listing)
/services/:slug            Service Detail (painting, plastering, gypsum, tiles-marble, plumbing, metal-wood)
/gallery                   Gallery / Portfolio
/contact                   Contact Us
/*                         404 Not Found
```

No nested service routes — flat `/services/:slug` keeps routing simple.

---

## 5. Page-by-Page Breakdown

### 5.1 Home (`/`)

| Section | Content |
|---|---|
| **Hero** | Full-viewport dark background, animated gradient orbs, company name (display font), tagline "Where Quality Meets Design", gold CTA button "Explore Our Work" → `/gallery` |
| **About Preview** | Compact 2-column layout: short tagline + decorative image with gold accent border. Link → `/about` |
| **Services Preview** | 3-column grid showing first 3 services with icon, title, short description. "View All Services" link → `/services` |
| **Gallery Preview** | 4-image responsive grid from latest work with gold hover overlay. "View Full Gallery" link → `/gallery` |
| **Why Choose Us** | 4 icon cards: Premium Quality, Timely Delivery, Experienced Team, Customer Satisfaction |
| **Contact CTA** | Dark section with heading + gold button "Get in Touch" → `/contact` |

### 5.2 About (`/about`)

| Section | Content |
|---|---|
| **Banner** | Page title with breadcrumb |
| **Company Story** | Short paragraph (3–4 lines max) + large decorative image side-by-side |
| **Vision & Mission** | Two visual cards with icons + short text, side-by-side |
| **Stats Strip** | 4 stat items (Years, Projects, Clients, Team) with icons and animated counters |
| **Values** | 4–5 value cards with icons and short descriptions |

**Emphasis on visuals** — images, icons, and stats carry the page. Minimal text.

### 5.3 Services Listing (`/services`)

| Section | Content |
|---|---|
| **Banner** | Page title with breadcrumb |
| **Service Cards** | 2/3-column responsive grid. Each card: icon, title, short description, "Learn More" → `/services/:slug` |

### 5.4 Service Detail (`/services/:slug`)

| Section | Content |
|---|---|
| **Banner** | Service title with overlay gradient |
| **Description** | 1–2 paragraph description of the service |
| **Features/Process** | Optional 3–4 step process with icons |
| **Image Gallery** | 2–3 related images in a row |
| **CTA** | "Need this service?" with button → `/contact` |

### 5.5 Gallery (`/gallery`) — Core Feature

| Section | Content |
|---|---|
| **Banner** | Page title with breadcrumb |
| **Stats Bar** | Small bar showing total images count and current category count |
| **Filter Bar** | Horizontal category pills: All, Painting, Plastering, Gypsum, Tiles & Marble, Plumbing, Metal & Wood |
| **Grid** | Responsive masonry grid (1 col mobile, 2 col tablet, 3 col desktop). CSS `columns` approach for true masonry |
| **Image Card** | Each image has a gold overlay on hover with category label + subtle scale(1.02) |
| **Lightbox** | Click any image → `react-photo-view` full-screen viewer with zoom, pan, navigation, counter, caption |
| **Empty State** | "No images in this category yet" with icon |
| **Load More** | Optional paginated load (if images exceed 12) |

### 5.6 Contact (`/contact`)

| Section | Content |
|---|---|
| **Banner** | Page title with breadcrumb |
| **Contact Info** | 4 compact cards: Phone, WhatsApp, Email, Address — each with icon + value |
| **Contact Form** | Fields: Name, Phone, Email, Service (dropdown), Message. Submits via **EmailJS**. Toast notification on success/error. |
| **Google Map** | Embedded iframe showing company location |
| **Social Follow** | Social icons with "Follow us" heading |

---

## 6. Global Features (All Pages)

| Feature | Description |
|---|---|
| **Floating WhatsApp Button** | Fixed bottom-right corner, green/gold themed, opens WhatsApp in new tab |
| **Back to Top Button** | Appears after scrolling past 300px, smooth scroll to top |
| **Loading Screen** | Full-screen overlay with logo + gold spinner on initial app load |
| **Scroll Progress Bar** | Thin gold line at the very top of the viewport indicating scroll progress |
| **SEO** | `react-helmet-async` on every page for title + meta |
| **Page Transitions** | Framer Motion `AnimatePresence` fade transition between routes |

---

## 7. Components Required

### Layout Shell
- `Navbar` — logo, nav links, mobile hamburger menu, active link
- `Footer` — logo, quick links, social icons, copyright

### Global Overlays
- `FloatingWhatsApp` — fixed WhatsApp button
- `BackToTop` — scroll-to-top button
- `LoadingScreen` — initial loading overlay
- `ScrollProgress` — thin progress bar at top

### Common Page Sections
- `PageBanner` — title + breadcrumb + optional background
- `SectionHeader` — section title + optional subtitle + gold divider
- `GoldButton` — reusable gold-outlined and gold-filled button (supports `to` for routing)
- `AnimatedSection` — Framer Motion `whileInView` wrapper
- `Breadcrumbs` — auto-generated from route

### Home Page
- `HeroSection`
- `AboutPreview`
- `ServicesPreview`
- `GalleryPreview`
- `WhyChooseUs`
- `HomeCTA`

### About Page
- `CompanyStory`
- `VisionMission`
- `StatsStrip`
- `CompanyValues`

### Services Pages
- `ServiceCard`
- `ServiceDetailImages`

### Gallery Page
- `GalleryFilter` — category pills
- `GalleryGrid` — masonry grid
- `GalleryCard` — single image with hover overlay
- `GalleryStats` — image count bar

### Contact Page
- `ContactInfoCard`
- `ContactForm` — EmailJS integration

### NotFound Page
- `NotFoundContent` — full page 404 with illustration + home link

---

## 8. Folder Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Breadcrumbs.tsx
│   │
│   ├── global/
│   │   ├── FloatingWhatsApp.tsx
│   │   ├── BackToTop.tsx
│   │   ├── LoadingScreen.tsx
│   │   └── ScrollProgress.tsx
│   │
│   ├── ui/
│   │   ├── GoldButton.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── PageBanner.tsx
│   │   └── AnimatedSection.tsx
│   │
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── AboutPreview.tsx
│   │   ├── ServicesPreview.tsx
│   │   ├── GalleryPreview.tsx
│   │   ├── WhyChooseUs.tsx
│   │   └── HomeCTA.tsx
│   │
│   ├── about/
│   │   ├── CompanyStory.tsx
│   │   ├── VisionMission.tsx
│   │   ├── StatsStrip.tsx
│   │   └── CompanyValues.tsx
│   │
│   ├── services/
│   │   ├── ServiceCard.tsx
│   │   └── ServiceDetailImages.tsx
│   │
│   ├── gallery/
│   │   ├── GalleryFilter.tsx
│   │   ├── GalleryGrid.tsx
│   │   ├── GalleryCard.tsx
│   │   └── GalleryStats.tsx
│   │
│   └── contact/
│       ├── ContactInfoCard.tsx
│       └── ContactForm.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── ServiceDetail.tsx
│   ├── Gallery.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
│
├── config/
│   ├── company.ts
│   ├── contact.ts
│   ├── navigation.ts
│   ├── social.ts
│   └── site.ts
│
├── data/
│   ├── services.ts
│   ├── values.ts
│   ├── whyChooseUs.ts
│   └── gallery/
│       ├── index.ts
│       ├── painting.ts
│       ├── plastering.ts
│       ├── gypsum.ts
│       ├── tiles-marble.ts
│       ├── plumbing.ts
│       └── metal-wood.ts
│
├── types/
│   ├── service.ts
│   ├── gallery.ts
│   └── company.ts
│
├── utils/
│   ├── cn.ts
│   ├── format.ts
│   └── helpers.ts
│
├── hooks/
│   └── useScrollProgress.ts
│
├── styles/
│   └── index.css
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## 9. Routing Structure

```tsx
<BrowserRouter>
  <HelmetProvider>
    <ScrollProgress />
    <LoadingScreen />
    <Navbar />
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
    <Footer />
    <FloatingWhatsApp />
    <BackToTop />
  </HelmetProvider>
</BrowserRouter>
```

---

## 10. Data & Config Architecture

### Config files (`src/config/`) — static site-wide info

| File | Exports |
|---|---|
| `company.ts` | `COMPANY` — name, tagline, description, story, vision, mission |
| `contact.ts` | `CONTACT` — phone, whatsapp, email, address, mapSrc |
| `navigation.ts` | `NAV_LINKS` — array of `{ label, href }` |
| `social.ts` | `SOCIAL_LINKS` — array of `{ platform, url, icon }` |
| `site.ts` | `SITE_CONFIG` — site URL, default SEO title/description, emailjs keys |

### Data files (`src/data/`) — content that may grow

| File | Exports |
|---|---|
| `services.ts` | `SERVICES: Service[]` — all 6 services with full content |
| `values.ts` | `VALUES: CompanyValue[]` |
| `whyChooseUs.ts` | `WHY_CHOOSE_US: WhyChooseUsItem[]` |
| `gallery/*.ts` | Per-category image arrays |
| `gallery/index.ts` | Aggregated `ALL_GALLERY` + `getGalleryByCategory()` |

---

## 11. Type Definitions

```ts
// types/service.ts
interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  bannerImage: string;
  images: string[];
  features?: { title: string; description: string }[];
}

// types/gallery.ts
type GalleryCategory = 'painting' | 'plastering' | 'gypsum' | 'tiles-marble' | 'plumbing' | 'metal-wood';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
}

// types/company.ts
interface CompanyValue {
  title: string;
  description: string;
  icon: string;
}

interface NavLink {
  label: string;
  href: string;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
```

---

## 12. Asset Organization

```
public/
├── favicon.ico
├── favicon.svg
├── og-image.png
├── logo.png
└── gallery/
    ├── painting/
    ├── plastering/
    ├── gypsum/
    ├── tiles-marble/
    ├── plumbing/
    └── metal-wood/
```

- Images stored as WebP with `loading="lazy"` (native — no custom LazyImage component needed)
- Each gallery image under 300 KB

---

## 13. UI Design System

### Colors

| Token | Hex | Usage |
|---|---|---|
| `dark-950` | `#0a0a0a` | Deepest background |
| `dark-900` | `#111111` | Page background |
| `dark-800` | `#1a1a1a` | Card/section backgrounds |
| `dark-700` | `#222222` | Navbar, footer |
| `dark-600` | `#2a2a2a` | Subtle hover/border |
| `gold-500` | `#C8A15A` | Primary accent, buttons, links |
| `gold-400` | `#D4B06A` | Lighter accent, hover states |
| `gold-600` | `#B08A45` | Darker accent, active states |
| `gold-300` | `#E5C982` | Text gradients, glowing effects |
| `white` | `#FFFFFF` | Primary text |
| `gray-300` | `#D1D5DB` | Secondary text |
| `gray-500` | `#6B7280` | Muted text, metadata |

### Typography

| Usage | Font | Size (responsive) |
|---|---|---|
| h1 | Playfair Display 700 | `text-4xl` → `text-6xl` |
| h2 | Playfair Display 600 | `text-3xl` → `text-5xl` |
| h3 | Playfair Display 500 | `text-2xl` → `text-3xl` |
| Body | Inter 300/400 | `text-base` → `text-lg` |
| Nav | Inter 400 | `text-sm` uppercase |
| Button | Inter 500 | `text-sm` uppercase |
| Caption | Inter 300 | `text-xs` → `text-sm` |

### Buttons

| Variant | Style |
|---|---|
| **Gold Outlined** | `border border-gold-500 text-gold-500` → hover: `bg-gold-500 text-dark-900 shadow-gold` |
| **Gold Filled** | `bg-gold-500 text-dark-900` → hover: `bg-gold-400 shadow-gold-lg` |
| Size | `px-8 py-3` (default), `px-10 py-4` (large) |
| Border Radius | `none` — sharp, elegant edges |

### Spacing

- Section padding: `py-16 md:py-24`
- Section gap: `gap-8 md:gap-12`
- Card padding: `p-6 md:p-8`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`

### Border Radius

- Cards: `rounded-none` (sharp edges fit the luxury aesthetic)
- Images: `rounded-none`
- Buttons: `rounded-none`
- Social icon circles: `rounded-full`
- Filter pills: `rounded-full` or `rounded-none` — TBD during implementation

### Shadows

| Name | Value | Usage |
|---|---|---|
| `shadow-gold` | `0 0 20px rgba(200,161,90,0.3)` | Button hover, card hover |
| `shadow-gold-lg` | `0 0 40px rgba(200,161,90,0.4)` | Hero CTA, featured elements |
| `shadow-card` | `0 4px 20px rgba(0,0,0,0.3)` | Default card shadow |

### Hover & Focus States

- **Buttons:** Gold glow expansion + background fill transition (500ms)
- **Cards:** `translateY(-4px)` + `shadow-gold` transition (400ms)
- **Gallery images:** `scale(1.03)` + gold overlay with category label (300ms)
- **Nav links:** Gold underline slide-in on hover
- **Social icons:** Gold border glow + background tint
- **Focus:** `ring-2 ring-gold-500 ring-offset-2 ring-offset-dark-900` on all interactive elements

### Image Guidelines

- Format: WebP (with JPEG fallback where needed)
- Max size: 300 KB per image
- Loading: Native `loading="lazy"` everywhere
- Aspect ratio: Maintain consistent ratios per section (e.g., 4:3 for gallery)
- Alt text: Required on every image

### Animation Guidelines

| Type | Method | Details |
|---|---|---|
| Page transitions | Framer Motion `AnimatePresence` | Fade 0.98→1 + opacity, 400ms |
| Scroll reveal | `AnimatedSection` (Framer Motion) | fade-up 30px, 600ms, `once: true` |
| Stagger children | `variants` with `staggerChildren: 0.15` | 150ms delay between items |
| Hover | CSS transitions | 300–500ms, `ease-out` |
| Loading screen | Logo + spinner | Fades out after app mount, 800ms exit |
| Scroll progress | `useScrollProgress` hook | Thin gold bar, 1px height |
| `prefers-reduced-motion` | Framer Motion `useReducedMotion()` | Disable all motion if true |

---

## 14. Responsive Design Strategy

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | < 640px | Single column, stacked sections |
| Tablet | 640–1023px | 2-column grids |
| Desktop | 1024–1279px | 3-column grids, side-by-side |
| Wide | ≥ 1280px | Max 1280px centered container |

**Key decisions:**
- Navbar: hamburger menu on mobile (< 1024px), horizontal on desktop
- Gallery grid: 1 → 2 → 3 columns at breakpoints
- Service cards: 1 → 2 → 3 columns
- Contact info: 2×2 → 4 in a row
- PageBanner: reduced height + smaller text on mobile
- All touch targets ≥ 44px

---

## 15. Development Roadmap

### Phase 1 — Project Foundation
- [ ] Install all dependencies
- [ ] Add `tsconfig.json` with strict mode
- [ ] Rename all `.jsx` → `.tsx`
- [ ] Create `src/types/` with all type definitions
- [ ] Create `src/config/` with company, contact, navigation, social, site
- [ ] Create `src/data/` with services, values, whyChooseUs, gallery stubs
- [ ] Create `src/utils/` with cn, format, helpers
- [ ] Create `src/hooks/` with useScrollProgress
- [ ] Set up routing in `App.tsx`

### Phase 2 — Layout + Global Features
- [ ] Build `Navbar` with mobile hamburger
- [ ] Build `Footer`
- [ ] Build `Breadcrumbs`
- [ ] Build `FloatingWhatsApp`
- [ ] Build `BackToTop`
- [ ] Build `LoadingScreen`
- [ ] Build `ScrollProgress`
- [ ] Wire layout + globals in `App.tsx`

### Phase 3 — Reusable UI Components
- [ ] `GoldButton` — both outlined + filled variants, Link support
- [ ] `SectionHeader` — title + gold diamond divider
- [ ] `PageBanner` — with breadcrumbs + gradient overlay
- [ ] `AnimatedSection` — Framer Motion scroll wrapper

### Phase 4 — Home Page
- [ ] `HeroSection`
- [ ] `AboutPreview`
- [ ] `ServicesPreview`
- [ ] `GalleryPreview`
- [ ] `WhyChooseUs`
- [ ] `HomeCTA`
- [ ] Compose `pages/Home.tsx`

### Phase 5 — About Page
- [ ] `CompanyStory` (short text + image)
- [ ] `VisionMission` (icon cards)
- [ ] `StatsStrip` (animated counters)
- [ ] `CompanyValues` (icon cards)
- [ ] Compose `pages/About.tsx`

### Phase 6 — Services Pages
- [ ] `ServiceCard`
- [ ] Compose `pages/Services.tsx`
- [ ] Compose `pages/ServiceDetail.tsx` with dynamic slug routing
- [ ] `ServiceDetailImages` component

### Phase 7 — Gallery Page (Core Feature)
- [ ] `GalleryFilter` — category pills with active state + count
- [ ] `GalleryCard` — image with gold hover overlay
- [ ] `GalleryGrid` — CSS columns masonry layout
- [ ] `GalleryStats` — total/category count bar
- [ ] Integrate `react-photo-view` for lightbox
- [ ] Compose `pages/Gallery.tsx` with filter logic

### Phase 8 — Contact Page
- [ ] `ContactInfoCard`
- [ ] `ContactForm` with EmailJS integration + toast
- [ ] Google Map embed
- [ ] Compose `pages/Contact.tsx`

### Phase 9 — 404 + Polish
- [ ] `pages/NotFound.tsx` with illustration + home button
- [ ] Page transition animations (AnimatePresence)
- [ ] `prefers-reduced-motion` support
- [ ] SEO meta tags on every page via react-helmet-async

### Phase 10 — Performance & Deployment
- [ ] Build test: `npm run build`
- [ ] Create `vercel.json` for SPA routing
- [ ] Deploy to Vercel
- [ ] Verify Lighthouse score ≥ 90

---

## 16. Dependencies

```bash
npm install react-router-dom framer-motion react-helmet-async react-photo-view swiper @emailjs/browser
```
