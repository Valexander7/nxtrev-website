# STS8600, STS8300 or STS8200 CROSS? Matching AccoTEST platforms to your device

Draft 1. Facts come from the AccoTEST page; **[INPUT]** marks what NXTREV needs to supply.
Author: [INPUT] · Technical review: [INPUT] · Target page: `/guides/choosing-an-accotest-platform.html` · Links to: `products/accotest.html`

---

**Summary.** AccoTEST, made by Beijing Huafeng Test & Control Technology (STAR: 688200), has three platform families. The STS8600 is for SoC and high-speed digital devices. The STS8300 is for PMIC and mixed-signal devices tested many sites at a time. The STS8200 CROSS is for power discretes and modules, including SiC and GaN. NXTREV is the authorized sales representative in the Philippines.

## The short version
| If your device is… | Look at | Why |
|---|---|---|
| An SoC, MCU, FPGA or wireless device with many high-speed pins | STS8600 | Over 2,000 analog channels, digital speed over 4,000 @ 1.6 Gbps, power delivery over 2,000A, 20 / 8 slot configurations |
| A PMIC, smart power stage, IPD or battery-management device | STS8300 | All-in-one test head with 300–500+ analog channels and up to 32 parallel sites with hard docking |
| A MOSFET, IGBT, SiC or GaN device, a power module or known good die | STS8200 CROSS | Up to 26 slots; the AXE-PLUS reaches 2000V / 2000A DC and 1200V / 18,000A short-circuit |

## STS8600: SoC and high-speed digital
The STS8600 uses a liquid-cooled test head for complex analog and high-speed digital pins, aimed at data centre, automotive and IoT devices. AccoTEST describes it as "One Platform for All" for high-pin-count processors, automotive microcontrollers and high-speed digital devices.

[INPUT: device types seen evaluated on the STS8600 in the Philippines.]

## STS8300: PMIC and mixed-signal
The STS8300 is built for parallel test. Its all-in-one test head runs up to 32 sites for PMICs, smart power stages, integrated passive devices and battery management devices.

[INPUT: how many sites PMIC customers actually run, and what limits it.]

## STS8200 CROSS: power discretes and modules
The STS8200 CROSS is a universal power discrete and module tester for wide-bandgap SiC and GaN, MOSFETs, IGBTs, known good die and automotive power bricks. It comes in three configurations:
- **AXE-PM** for power modules
- **AXE-FET** for GaN and SiC FETs
- **AXE-PLUS**, the universal configuration with the highest power envelope

Test programs are developed in open C++.

[INPUT: when a device needs the AXE-PLUS rather than AXE-PM or AXE-FET.]

## How an evaluation works
[INPUT: what the customer provides, how long it takes, what decides pass or fail. NXTREV has placed an AccoTEST evaluation tester at a Philippine OSAT, handling principal coordination, PEZA free-zone shipment and on-site setup.]

## Moving a device from another tester
[INPUT: what test program conversion involves and the typical effort.]

## Local support after installation
NXTREV provides factory-certified applications support for all three platforms, including test program conversion, pin-count feasibility and prober or handler docking integration.
[INPUT: spares, training and response arrangements.]

## Next step
Send your device type, pin count, voltage and current range, and target site count to sales@nxtrev.org, and we will recommend a platform and configuration.
