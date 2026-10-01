<!-- antislop:start -->
## antislop
For UI, copy, people, mobile layout, or code comments work, load the antislop skill for the task:
- Core filter, always on: `antislop`
- UI / visual: `antislop-ui`
- Copy & text: `antislop-copywriting`
- People: `antislop-human`
- Mobile / responsive: `antislop-layoutmobile`
- Code comments: `antislop-code`
Before starting, ask the user when antislop applies: during the work, or after it is done.
<!-- antislop:end -->

## Typography Defaults (Mandatory)
Always follow the typography standards in `DESIGN.md`:
- Default body copy: 16px (`text-sm` or `text-base` in remapped Tailwind). Never use small 10px-12px text for paragraphs, descriptions, or specs.
- `tailwind.config` across all HTML files has `fontSize` mapped so `text-xs` is 14px, `text-sm` is 16px, and `text-base` is 17px. Always preserve these larger defaults in new pages and edits.

## Styles are prebuilt (no Tailwind CDN)
Pages load `assets/css/site.css`, compiled from the classes used in the HTML. After adding or changing any Tailwind class, run `./tools/build-css.sh` and commit the updated `site.css`, or the new class will have no style on the live site. Theme config lives in `tools/tailwind.config.js`.
Internal files (this file, LOG.md, todo.md, DESIGN.md, tools/, assets/team/) are kept off the public site by `_config.yml`. Add new internal files there too.

## Shared header and footer
The header, footer and head assets are Jekyll includes in `_includes/`, built by GitHub Pages. Pages start with front matter (`root`, `section`); keep it. Edit an include, run `./tools/build-css.sh`, and preview with `./tools/preview.sh` (a plain static server shows raw `{% include %}` tags). Product family pages live in `products/`; the old `products.html#anchor` links redirect to them. Image slots and rules are in `IMAGERY.md`.

## Change cascade (check before every push)
A product family appears in many places. When you add, rename or remove one, update all of these in the same change:
1. The family page in `products/`: title, meta, OG/Twitter tags, canonical, JSON-LD, breadcrumb.
2. Header dropdown and mobile menu (`_includes/header.html`).
3. Footer Products list (`_includes/footer.html`).
4. `products.html`: list row, numbering, spec strip, JSON-LD positions, and the hash-redirect map if an old anchor moved.
5. Home "What we do" grid in `index.html`: tile and image. 9 tiles = 3x3 at `lg`; another count needs the columns rechecked.
6. Previous/Next links on the neighbouring family pages (the chain loops from the last page back to the first).
7. `contact.html` RFQ dropdown option, and every `?product=` link that points to it.
8. Chat topics and per-page topic suggestions in `assets/js/chat.js`.
9. `sitemap.xml` entry and `lastmod`.
10. `linecard.html` and `guides/`, if they mention or link to it.
11. `IMAGERY.md` slot, if the image is new. Each family image is used on its family page, its Home tile and its `products.html` row.

Changing a spec or claim: `grep -rn` the phrase across the repo. Specs repeat on the family page, the `products.html` spec strip, JSON-LD and sometimes the line card. Never delete spec text in a redesign.
