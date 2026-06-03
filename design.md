# Design System — Black & White Minimal (Vercel-inspired)

## 1. Visual Theme & Atmosphere

A strict black-and-white design system built for clarity, hierarchy, and precision. The visual language strips away all accent colors — no blues, purples, or gradients — leaving only the full tonal range of black and white to carry meaning. Light mode is **white-dominant**: surfaces stay white or near-white, with black used for text, borders, and primary actions. Dark mode inverts the relationship: surfaces go near-black, text and borders stay white or near-white. Depth and hierarchy are expressed entirely through **opacity, weight, and spacing** — not color.

**Key Characteristics**
- Pure black and white only — no accent, semantic, or brand colors
- White-dominant in light mode; near-black dominant in dark mode
- Depth conveyed through opacity layers (`rgba(0,0,0,…)` in light, `rgba(255,255,255,…)` in dark)
- Generous whitespace as the primary visual organizer
- Weight (`400`, `500`, `600`) carries hierarchy instead of color
- Pill-shaped CTAs with high-contrast inversion (black on white ↔ white on black)
- Borders as surface definers, shadows as gentle lifts — both monochromatic
- Fully accessible: WCAG AAA contrast on all text and interactive elements

---

## 2. Color Palette & Roles

> **Rule:** All colors are derived from black (`#000000`) and white (`#FFFFFF`) with opacity.
> Never introduce hues. All values below are resolved hex at those opacities on a white (light) or `#0A0A0A` (dark) background.

### Light Mode

| Token | Value | Role |
|-------|-------|------|
| `--bg-primary` | `#FFFFFF` | Page background, card surfaces |
| `--bg-secondary` | `#FAFAFA` | Subtle surface tint, hover backgrounds |
| `--bg-tertiary` | `#F2F2F2` | Recessed inputs, code blocks, inactive tabs |
| `--bg-inverse` | `#0A0A0A` | Primary button fill, inverted badge backgrounds |
| `--text-primary` | `#0A0A0A` | Headlines, body text, primary labels |
| `--text-secondary` | `#4D4D4D` | Supporting text, card subtitles, captions |
| `--text-tertiary` | `#888888` | Placeholder text, helper text, timestamps |
| `--text-disabled` | `#BBBBBB` | Disabled labels and values |
| `--text-inverse` | `#FFFFFF` | Text on black (inverted) backgrounds |
| `--border-default` | `#E8E8E8` | Standard borders, dividers, card outlines |
| `--border-strong` | `#C8C8C8` | Hover borders, focused inputs, emphasis |
| `--border-inverse` | `#0A0A0A` | Borders on inverted surfaces |
| `--overlay-subtle` | `rgba(0,0,0,0.04)` | Subtle hover fills |
| `--overlay-medium` | `rgba(0,0,0,0.08)` | Active fills, pressed states |
| `--overlay-strong` | `rgba(0,0,0,0.48)` | Modal backdrop scrim |

### Dark Mode

| Token | Value | Role |
|-------|-------|------|
| `--bg-primary` | `#0A0A0A` | Page background |
| `--bg-secondary` | `#141414` | Card surfaces, secondary surfaces |
| `--bg-tertiary` | `#1F1F1F` | Inputs, code blocks, inactive tabs |
| `--bg-inverse` | `#FFFFFF` | Primary button fill (white on black) |
| `--text-primary` | `#EDEDED` | Headlines, body text |
| `--text-secondary` | `#A0A0A0` | Supporting text, subtitles |
| `--text-tertiary` | `#666666` | Placeholders, helper text |
| `--text-disabled` | `#444444` | Disabled states |
| `--text-inverse` | `#0A0A0A` | Text on white (inverted) buttons |
| `--border-default` | `#282828` | Card borders, dividers |
| `--border-strong` | `#404040` | Hover borders, focused inputs |
| `--border-inverse` | `#EDEDED` | Borders on inverted surfaces |
| `--overlay-subtle` | `rgba(255,255,255,0.04)` | Subtle hover fills in dark |
| `--overlay-medium` | `rgba(255,255,255,0.08)` | Active fills in dark |
| `--overlay-strong` | `rgba(0,0,0,0.72)` | Modal backdrop scrim |

### Status Colors (Monochromatic)

Because there are no hues, status is communicated through **pattern, weight, and labeling** rather than color.

| Status | Light Mode Treatment | Dark Mode Treatment |
|--------|---------------------|---------------------|
| Success | Border `#C8C8C8`, prefix `✓`, label weight `500` | Border `#404040`, prefix `✓`, label weight `500` |
| Warning | Border `#0A0A0A` (solid, 1.5px), prefix `⚠`, label weight `500` | Border `#EDEDED` (solid, 1.5px), prefix `⚠` |
| Error | Dashed border `1px dashed #0A0A0A`, prefix `✕`, label weight `500` | Dashed border `1px dashed #EDEDED`, prefix `✕` |
| Info | Left accent `2px solid #0A0A0A`, bg `--bg-secondary`, text `--text-secondary` | Left accent `2px solid #EDEDED`, bg `--bg-secondary` |

---

## 3. Typography Rules

### Font Family

**Primary UI:** Geist (sans-serif, geometric, modern)
```
font-family: Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica Neue, sans-serif;
```

**Code / Mono:** Geist Mono
```
font-family: "Geist Mono", "Monaco", "Courier New", monospace;
```

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Color Token |
|------|------|--------|-------------|----------------|-------------|
| Display / Hero | 48px | 600 | 1.1 (53px) | −0.03em | `--text-primary` |
| Heading 1 | 32px | 600 | 1.2 (38px) | −0.02em | `--text-primary` |
| Heading 2 | 22px | 500 | 1.3 (29px) | −0.01em | `--text-primary` |
| Heading 3 | 16px | 500 | 1.5 (24px) | 0 | `--text-primary` |
| Body | 16px | 400 | 1.6 (26px) | 0 | `--text-secondary` |
| Body Small | 14px | 400 | 1.5 (21px) | 0 | `--text-secondary` |
| Caption | 12px | 400 | 1.4 (17px) | 0.01em | `--text-tertiary` |
| Button Label | 14px | 500 | 1.4 (20px) | 0 | (see button tokens) |
| Code Inline | 13px | 500 | 1.5 (20px) | 0 | `--text-primary` |
| Overline / Tag | 11px | 500 | 1.4 | 0.08em | `--text-tertiary` |

### Principles
- **Two weights carry everything:** `400` for body, `500` for emphasis, `600` for display and headings only
- **Letter spacing** does the work that color once did — tighten headlines (−0.03em), loosen overlines (+0.08em)
- **No color emphasis:** never use a hue to highlight a word — use weight (`500`) instead
- **Sentence case always:** "Start deploying" not "Start Deploying"; never ALL CAPS in UI labels
- **Monospace draws technical distinction:** code and tokens in Geist Mono; all other text in Geist

---

## 4. Component Styling

### Buttons

#### Primary Button
- **Background:** `--bg-inverse` (`#0A0A0A` light / `#FFFFFF` dark)
- **Text Color:** `--text-inverse` (`#FFFFFF` light / `#0A0A0A` dark)
- **Padding:** `12px 24px`
- **Border Radius:** `9999px` (pill)
- **Border:** `1px solid transparent`
- **Font Size:** `14px`, Weight `500`
- **Height:** `44px`
- **Box Shadow:** none
- **Hover:** opacity `0.85` on background
- **Active:** opacity `0.72`
- **Focus:** `box-shadow: 0 0 0 3px rgba(0,0,0,0.2)` (light) / `0 0 0 3px rgba(255,255,255,0.25)` (dark)
- **Disabled:** `--bg-tertiary` background, `--text-disabled` text, `cursor: not-allowed`

#### Secondary Button
- **Background:** `--bg-primary` (`#FFFFFF` / `#0A0A0A`)
- **Text Color:** `--text-primary`
- **Border:** `1px solid --border-default`
- **Padding:** `12px 24px`
- **Border Radius:** `9999px`
- **Height:** `44px`
- **Hover:** Background `--bg-secondary`, border `--border-strong`
- **Active:** Background `--bg-tertiary`
- **Focus:** `box-shadow: 0 0 0 3px rgba(0,0,0,0.10)` (light) / `0 0 0 3px rgba(255,255,255,0.15)` (dark)

#### Ghost Button
- **Background:** `transparent`
- **Text Color:** `--text-secondary`
- **Border:** none
- **Padding:** `8px 12px`
- **Border Radius:** `9999px`
- **Height:** `32px`
- **Font Size:** `14px`, Weight `400`
- **Hover:** Background `--overlay-subtle`, text `--text-primary`
- **Active:** Background `--overlay-medium`

---

### Cards & Containers

#### Default Card
- **Background:** `--bg-primary`
- **Border:** `1px solid --border-default`
- **Border Radius:** `8px`
- **Padding:** `24px`
- **Box Shadow:** `0px 1px 3px rgba(0,0,0,0.06)`
- **Hover:** Border `--border-strong`, shadow `0px 4px 10px rgba(0,0,0,0.09)`
- **Gap between cards:** `24px`

#### Elevated Card
- **Background:** `--bg-primary`
- **Border:** `1px solid --border-default`
- **Box Shadow:** `0px 0px 0px 1px rgba(0,0,0,0.06), 0px 2px 4px rgba(0,0,0,0.04), 0px 6px 12px rgba(0,0,0,0.06)`
- **Hover:** Shadow `0px 8px 20px rgba(0,0,0,0.10)`

#### Inverse Card (dark fill)
- **Background:** `--bg-inverse`
- **Text Color:** `--text-inverse`
- **Border:** none
- **Border Radius:** `8px`
- **Padding:** `32px`
- Use for pull quotes, featured callouts, and dark-surface CTAs

---

### Inputs & Forms

#### Text Input
- **Background:** `--bg-primary`
- **Text Color:** `--text-primary`
- **Placeholder:** `--text-tertiary`
- **Padding:** `10px 12px`
- **Border Radius:** `6px`
- **Border:** `1px solid --border-default`
- **Height:** `36px`
- **Font Size:** `14px`, Weight `400`
- **Box Shadow:** none
- **Focus:** Border `--border-inverse`, shadow `0 0 0 3px rgba(0,0,0,0.08)` (light) / `0 0 0 3px rgba(255,255,255,0.10)` (dark)
- **Disabled:** Background `--bg-tertiary`, text `--text-disabled`, border `--border-default`
- **Error:** `1px dashed --border-inverse`, helper text weight `500`

#### Form Label
- **Font Size:** `14px`, Weight `500`
- **Color:** `--text-primary`
- **Margin Bottom:** `8px`

#### Helper Text
- **Font Size:** `12px`, Weight `400`
- **Color:** `--text-tertiary`
- **Margin Top:** `4px`

---

### Navigation

#### Top Navigation Bar
- **Light:** `rgba(255,255,255,0.92)` + `backdrop-filter: blur(12px)`
- **Dark:** `rgba(10,10,10,0.92)` + `backdrop-filter: blur(12px)`
- **Height:** `60px`
- **Padding:** `0 24px`
- **Border Bottom:** `1px solid --border-default`
- **Box Shadow:** none

#### Navigation Link
- **Text Color:** `--text-secondary`
- **Font Size:** `14px`, Weight `400`
- **Padding:** `8px 12px`
- **Border Radius:** `6px`
- **Hover:** Background `--overlay-subtle`, text `--text-primary`
- **Active / Current:** Text `--text-primary`, Weight `500`, border-bottom `1.5px solid --text-primary`
- **Focus:** `outline: 2px solid --border-inverse; outline-offset: 2px`

#### Dropdown Menu
- **Background:** `--bg-primary`
- **Border:** `1px solid --border-default`
- **Border Radius:** `8px`
- **Box Shadow:** `0px 6px 20px rgba(0,0,0,0.10)`
- **Padding:** `6px 0`
- **Item Padding:** `8px 16px`
- **Item Hover:** Background `--bg-secondary`

---

### Links

#### Inline Link
- **Color:** `--text-primary`
- **Text Decoration:** `underline` (always visible)
- **Text Decoration Color:** `--border-strong`
- **Text Underline Offset:** `3px`
- **Hover:** `text-decoration-color: --text-primary`
- **Focus:** `outline: 2px solid --border-inverse; border-radius: 2px`

> No blue links. Underline alone carries the affordance in a colorless system.

---

### Badges

#### Default Badge
- **Background:** `--bg-secondary`
- **Text Color:** `--text-secondary`
- **Border:** `1px solid --border-default`
- **Padding:** `4px 10px`
- **Border Radius:** `9999px`
- **Font Size:** `12px`, Weight `500`

#### Inverse Badge
- **Background:** `--bg-inverse`
- **Text Color:** `--text-inverse`
- **Border:** none
- Use sparingly for "New", "Beta", or featured labels

#### Outline Badge
- **Background:** transparent
- **Text Color:** `--text-primary`
- **Border:** `1px solid --border-strong`
- Use for status labels requiring no fill

---

## 5. Layout Principles

### Spacing System

**Base Unit:** `4px`

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | `4px` | Icon-to-text gap, micro nudge |
| `space-2` | `8px` | Tight grouping, label-input gap |
| `space-3` | `12px` | Button internal padding, list item margin |
| `space-4` | `16px` | Standard content padding, small gaps |
| `space-6` | `24px` | Card padding, section-internal gaps |
| `space-8` | `32px` | Between major components |
| `space-12` | `48px` | Section vertical padding |
| `space-16` | `64px` | Page-level section separation |

**Rule:** Only use values from this scale. Never `18px`, `28px`, or arbitrary values.

---

### Grid & Container

- **Content max-width:** `1200px`
- **Wide max-width:** `1400px`
- **Full-bleed:** no max-width (hero backgrounds only)
- **Column grid:** 1 col (mobile) → 2 col (tablet) → 3–4 col (desktop)
- **Gutter:** `24px` mobile, `32px` desktop

---

### Whitespace Philosophy

Whitespace is the primary design element in a black-and-white system — more important than borders or shadows. Empty space separates sections, creates focal points, and communicates hierarchy without color. Minimum `24px` internal padding on all cards. Section gaps of `64px` on desktop. Treat whitespace as a structural element, never as wasted area to fill.

---

### Border Radius Scale

| Value | Use |
|-------|-----|
| `9999px` | Buttons, badges, pill UI elements |
| `12px` | Large cards, modals, featured containers |
| `8px` | Standard cards, dropdowns, tooltips |
| `6px` | Inputs, small components |
| `4px` | Tags, secondary small elements |
| `0px` | Dividers, full-width separators |

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (L0) | `box-shadow: none; border: 1px solid --border-default` | Base surfaces, inputs, default cards |
| Subtle (L1) | `box-shadow: 0px 1px 3px rgba(0,0,0,0.06)` | Default cards |
| Raised (L2) | `box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.06), 0px 4px 10px rgba(0,0,0,0.08)` | Hover cards, elevated panels |
| Floating (L3) | `box-shadow: 0px 8px 24px rgba(0,0,0,0.12)` | Dropdowns, modals, popovers |
| Focus (L4) | `box-shadow: 0 0 0 3px rgba(0,0,0,0.15)` light / `0 0 0 3px rgba(255,255,255,0.2)` dark | Keyboard focus rings |

**Dark mode note:** Shadow values stay black-based (`rgba(0,0,0,…)`) even in dark mode. Borders (`--border-default`) do the heavy lifting for surface separation in dark mode — shadows add little visual lift on dark backgrounds.

---

## 7. Do's and Don'ts

### Do
- **Stay within black and white** — every color decision is a shade of `#000` or `#FFF` with opacity
- **Use weight as the primary emphasis tool** — `500` for mild emphasis, `600` for display only
- **Let whitespace separate sections** — 64px between major sections on desktop
- **Invert for contrast** — black button on white page (light), white button on black page (dark)
- **Keep shadows subtle** — L0–L2 range for most UI; L3 reserved for overlays only
- **Keep borders at `1px`** — `2px` only for active nav underlines or left-accent info rules
- **Use patterns for semantic status** — dashed border for error, solid for default, left accent for info
- **Apply `backdrop-filter: blur` on sticky nav** — 92% opacity + blur keeps nav legible over content
- **Scale typography responsively** — 48px → 36px → 28px across breakpoints
- **Focus rings are non-negotiable** — always a visible `box-shadow` or `outline` on interactive elements

### Don't
- **Never introduce a hue** — no blue, green, orange, not even warm white (`#FFFDF0`). Pure neutral only
- **Don't use gradients** — a gradient is a color decision. Flat fills and solid borders only
- **Don't exceed `rgba(0,0,0,0.12)` on shadows** — heavier shadows break the light, airy feel
- **Don't color status with hue** — use pattern (dashed border), weight, and symbol prefixes instead
- **Don't underline links only on hover** — in a colorless system, underlines must always be visible
- **Don't use ALL CAPS** — sentence case always; `letter-spacing: 0.08em` on overlines is enough
- **Don't nest more than two button styles per CTA zone** — primary + secondary, or primary + ghost only
- **Don't use pure black (`#000000`) for dark surfaces** — use `#0A0A0A` for perceptual softness
- **Don't omit focus rings** — keyboard users depend on the monochromatic ring; never `outline: none` without replacement

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Hero | Body | Padding | Cards |
|------|-------|------|------|---------|-------|
| Mobile | 320–639px | 28px | 14px | 16px | 1 col, full-width |
| Tablet | 640–1023px | 36px | 14px | 24px | 2 col |
| Desktop | 1024–1399px | 48px | 16px | 32px | 3 col, max 1200px |
| Large Desktop | 1400px+ | 48px | 16px | 48px | 3–4 col, max 1400px |

### Touch Targets
- Minimum: `44px × 44px`
- Recommended (mobile primary CTA): `48px × 48px`
- Min spacing between targets: `8px`
- Button padding: `12px 24px`

### Collapsing Strategy
- **Nav:** Desktop horizontal → tablet icon row → mobile hamburger drawer
- **Hero:** Full-bleed centered → scaled text + stacked buttons
- **Cards:** 3 col → 2 col → 1 col full-width
- **Section padding:** 64px → 48px → 32px
- **Modals:** max-width `600px` centered → full-screen with `16px` safe margin

---

## 9. Agent Prompt Guide

### Quick Token Reference

```
Light mode
  Text primary:    #0A0A0A
  Text secondary:  #4D4D4D
  Text tertiary:   #888888
  Text disabled:   #BBBBBB
  BG primary:      #FFFFFF
  BG secondary:    #FAFAFA
  BG tertiary:     #F2F2F2
  BG inverse:      #0A0A0A
  Border default:  #E8E8E8
  Border strong:   #C8C8C8

Dark mode
  Text primary:    #EDEDED
  Text secondary:  #A0A0A0
  Text tertiary:   #666666
  Text disabled:   #444444
  BG primary:      #0A0A0A
  BG secondary:    #141414
  BG tertiary:     #1F1F1F
  BG inverse:      #FFFFFF
  Border default:  #282828
  Border strong:   #404040
```

### Iteration Guide

1. **No hues, ever** — if you reach for a color, replace it with a weight, spacing, or border-pattern decision.

2. **Button contrast is always inverse** — primary button is always the opposite of the page background: light page → black button; dark page → white button.

3. **Typographic hierarchy uses size + weight only** — 48/600 display → 32/600 h1 → 22/500 h2 → 16/500 h3 → 16/400 body → 12/400 caption. No color differences between levels.

4. **Borders define surfaces; shadows add depth** — every card gets `1px solid border-default` plus L1 shadow. Hover promotes to L2. No card skips the border.

5. **Dark mode is role-inversion, not just color-swap** — white bg ↔ near-black bg, dark text ↔ light text, black button ↔ white button. All opacity values stay the same; only the base color flips.

6. **Status without color** — use prefix symbols (`✓`, `⚠`, `✕`), dashed vs solid vs left-accent borders, and font-weight `500` for labels. Never introduce green, red, or yellow.

7. **Spacing is multiples of 4** — 4, 8, 12, 16, 24, 32, 48, 64. No arbitrary values.

8. **Shadow opacity ceiling is `0.12`** — anything heavier is too aggressive for this aesthetic. L3 (modals) is the permitted maximum.

9. **Whitespace is structural** — treat 64px section gaps like load-bearing architecture. Never compress them for density.

10. **Focus rings use opacity, not hue** — `box-shadow: 0 0 0 3px rgba(0,0,0,0.15)` light / `rgba(255,255,255,0.2)` dark. Always visible, never colored.
