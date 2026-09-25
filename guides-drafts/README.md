# Guides: plan

Internal folder, kept off the public site by `_config.yml`. Drafts here become pages under `/guides/` once NXTREV's team has filled the gaps and checked the facts.

## Why
The site has product pages but nothing that explains or compares. Buyers, and AI search tools such as ChatGPT and Google's AI answers, need pages that answer real questions before they can recommend a supplier. Each guide answers one question a Philippine test or equipment engineer actually asks, using NXTREV's own experience.

## The five guides
| # | Working title | Question it answers | Draft status |
|---|---|---|---|
| 1 | Choosing a test handler for your package | Turret, strip, gravity feed or KGD sorter: which one fits my device? | Draft written from site specs; needs field examples |
| 2 | STS8600, STS8300 or STS8200 CROSS? | Which AccoTEST platform matches my SoC, PMIC or power device? | Draft written from site specs; needs evaluation and conversion experience |
| 3 | Bringing test equipment into a PEZA zone | Who does what, which documents, how long? | Outline only; needs the process from NXTREV |
| 4 | From delivery to buy-off: turnkey test cell acceptance | What happens between the crate arriving and production release? | Outline plus site facts; needs the real steps and timings |
| 5 | Keeping an ASL1000 fleet running | Conversions, repair or pre-owned spares: what are the options? | Outline plus site facts; needs turnaround and failure patterns |

## Rules for every guide
- Only facts that are on the site today or supplied by NXTREV. Anything missing is marked **[INPUT]** and stays out of the published page until answered.
- No customer names unless the customer agreed in writing. "A Philippine OSAT" is fine.
- A named author and a technical reviewer on each page (a real person at NXTREV).
- Plain English at about grade 11–12; technical terms stay.
- End with one specific next step (send device and package details for a fit check), not a generic "contact us".

## How to gather the input
1. Pick who answers each guide (see `questions.md`). Elmer for 3 and 4; the ATE applications engineer for 1, 2 and 5 is a suggestion only.
2. Answer by voice note, email or bullet points. Rough is fine; 10 to 20 minutes per guide.
3. Paste the answers into the matching draft under **[INPUT]**, or send them and the draft gets updated.
4. The named reviewer checks the finished draft for technical accuracy.

## Publishing (after drafts are approved)
- New pages at `/guides/<slug>.html` on the Craft Layer, each with structured data (Article, author, reviewer, date).
- A Guides index page and a "Guides" link in the footer; the header link only once there are at least three.
- Each guide links to the matching product page, and each product page links back to its guide.
- Add the guides to `sitemap.xml`.

## Order
Guides 1 and 2 first: they are mostly drafted and tie directly to the products that generate RFQs. Then 4, 3, 5 as answers come in.
