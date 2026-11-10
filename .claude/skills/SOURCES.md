# Skill sources

Copied unchanged. Update by copying a newer version, never by editing these files here.

| Skill | Source | Commit | License | Added |
|---|---|---|---|---|
| hallmark (v2.0.0), also in `.codex/skills/` | github.com/Nutlope/hallmark `skills/hallmark` | `407fa68` | MIT (`hallmark/LICENSE`) | 2026-11-10 (John) |
| antislop, antislop-* | Source repo not recorded | - | - | 2026-09-14 |

- Hallmark's browser checks (`sloplint.mjs --render`) need the global `puppeteer-core` and Chrome.
- Its photo picker downloads from Wikimedia Commons; `imagegen.mjs` calls Together AI only when `TOGETHER_API_KEY` is set.
