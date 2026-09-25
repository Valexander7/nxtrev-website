# Choosing a test handler for your package

Draft 1. Facts come from the Handling page; **[INPUT]** marks what NXTREV needs to supply.
Author: [INPUT] · Technical review: [INPUT] · Target page: `/guides/choosing-a-test-handler.html` · Links to: `products/handling.html`, `products/test-cells.html`

---

**Summary.** The format your device arrives in decides the handler. Small singulated packages go on a rotary turret. Leadframe strips are tested before singulation on a strip handler. Power discretes in tubes use gravity feed. Bare die and chiplets need a KGD sorter or wafer-level burn-in equipment. Start from the package, then check speed, site count and contact.

## Start with the format, not the machine
A handler has one job: present each device to the tester, make reliable contact, and sort the result. How it does that depends on what it is handed. Four formats cover most backend lines:

| Device format | Handler type | Typical packages |
|---|---|---|
| Small packaged units | Rotary turret with taping | QFN, DFN, SOT, SOD, SMA |
| Leadframe strips or matrix | Strip test and pick-and-place | High-density strip before singulation |
| Power discretes | Gravity feed tube system | TO-220, TO-247, D2PAK, bridge |
| Bare die or wafer | KGD sorter, prober, WLBI | Chiplets in gel-pak, waffle pack or tape |

[INPUT: the three questions NXTREV asks first when a customer says "we need a handler".]

## Rotary turret handlers
Turret handlers combine multi-site electrical test, 2D/3D vision, laser marking and automated tape and reel in one machine. Index rates reach up to 35,000 units per hour. They suit high-volume small packages where the output goes straight onto tape.

[INPUT: what drives changeover time between packages with a conversion kit, and one real example.]

## Strip test handlers
Strip handlers test devices while they are still on the leadframe or substrate, before singulation. Many devices are contacted at once, which keeps the tester busy and cuts index dead-time. They dock directly to the ATE.

[INPUT: when strip test beats a turret handler for the same device, and when it doesn't.]

## Gravity feed handlers for power discretes
Power packages such as TO-220, TO-247 and D2PAK are fed by gravity through tubes and sorted into multi-bin sort tubes. Contact uses high-voltage Kelvin isolation, rated up to 3,000V dielectric isolation.

[INPUT: why Kelvin isolation matters in practice, with one example.]

## KGD sorters and wafer-level burn-in
Bare die and chiplets need precision pick-and-place sorters, often with 6-side micro-crack optical inspection, and sort into gel-pak, waffle pack or tape. Wafer-level burn-in (WLBI) contact equipment is used for advanced chiplet screening.

## Mistakes to avoid
[INPUT: the most common mistake NXTREV sees when a plant picks a handler.]

## Before you ask for a quote
Have these ready: [INPUT: sample devices, drawings, UPH target, tester model, anything else].

## Next step
Send your package drawing, target UPH and tester model to sales@nxtrev.org and we will say which handler format fits, and whether a turnkey test cell makes sense for your line.
