# AstroLive Design System & UI Inventory

> **Mandatory Rule for All Agents**: Read this document before writing any UI code. Do not introduce new colors, fonts, spacing scales, border radii, shadows, or component styles. All new features must reuse existing styles and components.

---

## 1. Design Tokens & Styling Architecture

The project uses **Tailwind CSS v4** configured with `@import "tailwindcss";` and `@theme inline` in `src/app/globals.css`, alongside CSS custom properties (`var(--...)`) supporting Dark (default) and Light mode themes via `data-theme`.

### 1.1 Theme Color Palette

#### Dark Theme (Default: `[data-theme="dark"]` / `:root`)
| Token / Variable Name | Hex / Value | Usage & Context |
| :--- | :--- | :--- |
| `--bg-primary` | `#0d0a14` | Main page background (deep cosmic navy/black) |
| `--bg-secondary` | `#1a1025` | Section background, card background |
| `--bg-header` | `rgba(17, 13, 26, 0.85)` | Sticky header / navbar glassmorphism background |
| `--text-primary` | `#f0edf5` | Primary body and heading text |
| `--text-secondary` | `#b8b0c8` | Subtitles, captions, supporting text |
| `--text-muted` | `#8a7fa0` | Disabled states, metadata, placeholder text |
| `--border-color` | `rgba(255, 255, 255, 0.08)` | Standard card/divider border |
| `--card-bg` | `rgba(26, 16, 37, 0.85)` | Card background color |
| `--card-border` | `rgba(255, 255, 255, 0.06)` | Subtle card outline |
| `--accent-purple` | `#c9a0ff` | Primary purple accent, badges, icons, active highlights |
| `--accent-pink` | `#e8a0c8` | Secondary pink accent |
| `--hero-badge-bg` | `rgba(200, 160, 255, 0.15)` | Hero pill badge fill |
| `--hero-badge-text` | `#c9a0ff` | Hero pill badge text |
| `--btn-primary-bg` | `#c9a0ff` | Primary action button fill |
| `--btn-primary-text` | `#1a1025` | Primary action button label color |
| `--btn-outline-border`| `rgba(200, 160, 255, 0.5)` | Outline button border |
| `--btn-outline-text` | `#e0d0f0` | Outline button text |
| `--dropdown-bg` | `#1e1530` | Dropdown menus, popovers |

#### Light Theme (`[data-theme="light"]`)
| Token / Variable Name | Hex / Value | Usage & Context |
| :--- | :--- | :--- |
| `--bg-primary` | `#ffffff` | Page background |
| `--bg-secondary` | `#f8f7fc` | Section / container background |
| `--bg-header` | `#ffffff` | Header fill |
| `--text-primary` | `#1a1025` | Main text |
| `--text-secondary` | `#4a4158` | Subtitle text |
| `--text-muted` | `#7a7088` | Muted text |
| `--accent-purple` | `#7c3aed` | Brand purple accent |
| `--accent-pink` | `#db2777` | Brand pink accent |

#### In-Page Gradient Presets
- **Hero/Banner Banner Gradient**: `bg-gradient-to-r from-[#9282eb] via-[#ac83f1] to-[#ba8af8]`
- **Primary CTA Button Gradient**: `bg-gradient-to-r from-[#ffa767] to-[#eb468b]` (Orange-pink CTA gradient)
- **Secondary CTA / Glow Accent**: `from-purple-600/20 to-pink-600/20`

---

## 2. Typography

- **Primary Font Family**: `'Poppins', Arial, Helvetica, sans-serif` (`--font-sans`)
- **Monospace Font Family**: `Courier New, Courier, monospace` (`--font-mono`)
- **Google Fonts Imported**: Poppins (weights 300, 400, 500, 600, 700, 800, 900)

### Heading Hierarchy
- `h1`: `text-2xl` to `text-4xl sm:text-5xl font-black uppercase tracking-wide`
- `h2`: `text-xl` to `text-2xl font-extrabold text-slate-900` or `var(--text-primary)`
- `h3`: `text-lg font-extrabold`
- `body`: `text-xs` to `text-sm font-medium`

---

## 3. Spacing & Layout Constraints

- **Container Widths**:
  - Full width wrapper: `max-w-[1440px] w-[90%] lg:w-[75%] mx-auto`
  - Content sections: `py-8 space-y-8`
- **Border Radii**:
  - Cards: `rounded-3xl` (24px)
  - Buttons & Form Inputs: `rounded-2xl` (16px) or `rounded-full` for pill badges
- **Grid Layouts**:
  - 1-column mobile to 2/3-column desktop (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`)

---

## 4. Reusable Component Inventory

| Component File Path | Component Name | Props / API | Description |
| :--- | :--- | :--- | :--- |
| `src/components/Navbar.tsx` | `Navbar` | None | Global navigation bar with links, search bar, language toggle, theme toggle, and mobile menu drawer. |
| `src/components/Footer.tsx` | `Footer` | None | Main site footer featuring categories, quick links, trust badges, and social media icons. |
| `src/components/LayoutShell.tsx` | `LayoutShell` | `{ children: ReactNode }` | Outer shell rendering `Navbar`, main children container, `Footer`, and `GlobalBackground`. |
| `src/components/GlobalBackground.tsx` | `GlobalBackground` | None | Fixed background canvas rendering starry space background and constellation lines. |
| `src/components/ZodiacWheel.tsx` | `ZodiacWheel` | `{ activeSign?: string, onSelectSign?: (sign: string) => void }` | Interactive 12-sign zodiac wheel with SVG rendering and sign selection callbacks. |
| `src/components/ThemeProvider.tsx` | `ThemeProvider` | `{ children: ReactNode }` | React Context provider managing dark/light theme toggle and state persistence in `localStorage`. |
| `src/components/LanguageProvider.tsx`| `LanguageProvider` | `{ children: ReactNode }` | React Context provider handling language selection (English, Hindi, etc.) and translation layer. |

---

## 5. Navigation & Routing Structure

- `/` -> Homepage (`src/components/Home.tsx` via `src/app/page.tsx`)
- `/free-kundli` -> Janam Kundli Generator (`src/app/free-kundli/page.tsx`)
- `/kundli-matching` -> Compatibility Matching (`src/app/kundli-matching/page.tsx`)
- `/panchang` -> Today's Panchang (`src/app/panchang/page.tsx`)
- `/horoscope` -> Daily/Weekly Horoscope (`src/app/horoscope/page.tsx`)
- `/chat` -> Talk to Astrologers Chat (`src/app/chat/page.tsx`)
- `/call` -> Call Astrologers (`src/app/call/page.tsx`)
- `/astrologer/[id]` -> Astrologer Profile page
- `/store` -> Astro Mall / Store (`src/app/store/page.tsx`)
- `/wallet` -> Recharge / Wallet (`src/app/wallet/page.tsx`)

---

## 6. Screenshots & Visual Baselines

Visual consistency verification must compare new components against existing elements in `FreeKundliPage` and `Home.tsx`.
