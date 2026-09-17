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
