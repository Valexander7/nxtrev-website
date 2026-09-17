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
