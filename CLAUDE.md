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
