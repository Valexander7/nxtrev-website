# Environment imagery

Internal file (excluded from the site by `_config.yml`). Lists every environment photo slot, where it is used and the rules for replacing it.

## Rules
- Named products (AccoTEST STS8600, STS8300, STS8200 and variants) appear only as the renders in `assets/products/` or files supplied by the principal. Never a generated look-alike.
- Environment photos are AI-generated (Gemini) and illustrative. They must not show a recognizable tester, handler, logo, readable text or a face. The site footer says they are illustrative.
- The headquarters photo (`nxtrev-hq.*`) is a real photograph. Real places stay real photos.
- Each file has a full-size WebP and a smaller variant (`-960` for landscape, `-800` for portrait) for `srcset`.
- Frames use fixed aspect ratios (`.frame` + `aspect-[..]`), so a replacement must keep the same ratio.

## Slots
| Slot | Ratio | Size | Used on |
|---|---|---|---|
| `env-hero` | 16:9 | 1672×941 | Home hero |
| `env-test-cell` | 3:2 | 1536×1024 | Home tile, `products/test-cells.html` |
| `env-handling` | 3:2 | 1536×1024 | Home tile, `products/handling.html` |
| `env-aoi` | 3:2 | 1536×1024 | Home tile, `products/inspection.html` |
| `env-reliability` | 3:2 | 1536×1024 | Home tile, `products/reliability.html` |
| `env-board-repair` | 4:5 | 1122×1402 | Home tile, `products/board-support.html` |
| `env-consumables` | 4:5 | 1122×1402 | Home tile, `products/consumables.html` |
| `env-sourcing` | 3:2 | 1535×1023 | `products/operations.html` (sourcing) |
| `env-operations` | 3:2 | 1536×1024 | Home tile, `products/operations.html` |
| `env-detail-wafer` | 21:9 | 1915×821 | `products.html` header |

## Review checklist for a new image
Check at 100% zoom: contacts and pins form an even grid, no merged or melted parts, chips show plain tops (QFN pads face down), no fake lettering, no Gemini sparkle watermark, colour matches the cool neutral set.
