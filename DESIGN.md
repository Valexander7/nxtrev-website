# NXTREV Website — Design Guidelines & Direction

This file provides positive design direction for coding agents. Use in tandem with `antislop`.

## Brand Identity & Aesthetic
* **Core Positioning:** B2B semiconductor and electronics manufacturing equipment distributor & engineering solutions in the Philippines.
* **Tagline:** *"Global technology. Local follow-through."*
* **Aesthetic:** Clean, high-contrast, technical industrial engineering. Utilitarian, precise, and authoritative. Avoid generic crypto/SaaS gradients, floating glassmorphism, or decorative pulsing dots.

## Palette
* **Brand Primary Blue:** `#3058a6`
* **Deep Navy / Slate:** `#1e3a8a` / `#0b132b`
* **Neutral Backgrounds:** `#ffffff` and subtle slate tint `#f8fafc` / `#f1f5f9`
* **Text / Headings:** High contrast dark charcoal/navy (`#0f172a` / `#1e293b`)
* **Borders / Accents:** `#e2e8f0` (clean, crisp 1px borders)

## Typography (Defaults & Scale Standards)
* **Headings:** `Montserrat`, sans-serif (bold, structured, industrial)
* **Body:** `Plus Jakarta Sans`, sans-serif (legible, technical, clean)
* **Default Font Size Scale (STRICTLY ENFORCED):**
  - **Base Body Text:** `16px` (`text-sm` or `text-base` in remapped Tailwind). Never default to 12px or 10px for paragraph descriptions or equipment specs.
  - **Cards & Bullet Points:** `14px–16px` (`text-xs` or `text-sm` in remapped Tailwind).
  - **Captions & Micro-Badges:** Minimum `13px–14px`. Never use `text-[10px]` or `text-[11px]`.
  - **Tailwind Config Default Mapping:** `tailwind.config` is configured with `fontSize` overrides (`xs`: 14px, `sm`: 16px, `base`: 17px). Always preserve this configuration in all HTML files so new edits automatically inherit readable sizing.

## Layout & Components
* **Structure:** High-density, well-organized technical specs, capability grids, and clear inquiry paths.
* **Icons:** Clean vector SVGs relevant to electronics/semiconductor engineering.
* **Forms & CTAs:** Clear, direct quotation request and consultation CTAs. No vague marketing fluff ("Unlock the future").

## Craft Layer (additive — the technical-density rule stays)
Density lives inside components; air lives between them. Whitespace comes from structure, never from deleting spec text.

* **Type scale (six steps, in `tools/tailwind.config.js`):** display 40px mobile / 64px desktop (`.h-display`), section heading 30 / 40px (`.h-section`), sub-heading 22 / 24px (`.h-sub`), lead 19px (`.lead`), body 16–17px, meta 14px. Headings above 28px use −0.02em tracking or tighter and line-height 1.1 or less. No arbitrary `text-[..]` sizes; nothing below 14px except the 12px `text-2xs` badge size.
* **Rhythm:** section padding comes only from `.section` (64 / 96px) or `.section-lg` (96 / 128px). One container, `.wrap` (`max-w-7xl`). Prose is capped at 68ch (`.prose-w`); tables are exempt.
* **One idea per section:** one heading, one lead line, one proof element (table, diagram, render, photo or list), at most one primary button.
* **Specs go in tables** (`.spec-table`). Secondary detail goes in `<details class="disclose">`. A headline spec is never collapsed.
* **Color:** blue marks actions and links. Sections alternate white and `#f8fafc`; dark navy is kept for the hero, the AccoTEST stage and the footer. No decorative gradients or glows.
* **Imagery:** named products appear only as renders from `assets/products/` or supplied by the principal. Environment photos live in `assets/imagery/env-*.webp`, sit in fixed-ratio `.frame` boxes (3:2, 4:5, 16:9, 21:9) and never show a recognizable product or brand.
* **Icons:** SVG only, never emoji.
* **Motion:** one easing, `cubic-bezier(0.16, 1, 0.3, 1)`; fade and rise of 16px or less, 500ms or less, once per element; one hero entrance per page; at most one pinned scroll sequence per page (the AccoTEST stage). Everything is off under `prefers-reduced-motion`.
* **Buttons:** pill-shaped `.btn-primary` for the single main action, `.btn-secondary` or a text link for the rest.
* **Shared header and footer** are Jekyll includes in `_includes/` (GitHub Pages builds them). Each page sets `root` and `section` in its front matter. Preview with `./tools/preview.sh`.
* **Dial:** ENERGY 2 / RHYTHM 2 / MOTION 2. Confident but calm; sections vary in composition around a steady grid; motion is a hero entrance, scroll reveals and the one pinned AccoTEST stage.

### Why these choices (one line each)
* **Eyebrow labels** (small uppercase, 0.14em tracking) are the site's one typographic motif: they name the section in the buyer's vocabulary before the heading makes the claim. Use one per section, never two.
* **Arrows** appear only on text links that lead to another page or site, so a reader can tell "goes somewhere" from "does something". Buttons carry no arrows.
* **Pill shape** is reserved for buttons and status tags; tabs, jump links and cards use 8–16px radii.
* **How we work has three steps** because the method really has three stages (fit, integrate, support), not because of a template.
* **Product tiles are identical** because the families are parallel choices for the buyer; the flagship is marked by position (first) and on the products index.
* **Light theme only:** DESIGN.md defines a light palette for a B2B reference site that is printed and read in offices; dark navy is used as a stage colour, not a theme.
