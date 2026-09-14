# NXTREV Website — Project Development & Revision Log

**Project:** NXTREV Technology Inc. Corporate Website (`nxtrev.org`)  
**Repository Path:** `/Users/johnelielbaladjay/Documents/1 Projects/NXTREV Website/`  
**OneDrive Sync Path:** `/Users/johnelielbaladjay/Library/CloudStorage/OneDrive-nxtrev.org/01_NXTREV/01_Projects/NXTREV Website/`  
**Current Domain:** `nxtrev.org` (GoDaddy DNS, to be deployed via GitHub Pages)  
**Initial Baseline Date:** September 13, 2026  
**Last Updated:** September 13, 2026, 23:35 PHT  

---

## 1. Executive Summary & Strategic Objective

The objective of this project is to replace NXTREV Technology Inc.'s legacy Google Sites website with an enterprise-grade, high-performance static website that establishes credible B2B procurement positioning for semiconductor IDMs, OSATs, and electronics facilities in the Philippines and global technology principals.

### Core Strategic Constraints & Directives:
1. **Hosting & Maintenance Cost:** $0 recurring monthly infrastructure cost (static HTML5 + Tailwind CSS on GitHub Pages with free automatic SSL).
2. **Facility Compliance:** Complete removal of the abandoned Biñan office. All operations anchored strictly at Corporate Headquarters in Posadas Village, Muntinlupa City.
3. **Exclusive Representation:** **AccoTEST** (Beijing Huafeng Test & Control Technology Co., Ltd. — STAR: 688200) is the sole branded exclusive partner in the Philippines.
4. **Commercial Disintermediation Protection:** All other non-exclusive principal products (handlers, AOI, burn-in boards, trim & form, ASL repair) are categorized by **technical capability and application** without displaying overseas third-party brand names, ensuring prospective buyers must consult NXTREV directly.
5. **Brand Foundation:** Brand Blue `#3058a6`, Navy `#1e3a8a` / `#0b132b`, Montserrat (headings) + Plus Jakarta Sans (body), official vector SVGs.
6. **Corporate Philosophy:** Anchored in the *NXTREV Corporate Identity & Strategic Positioning* charter: *"Global technology. Local follow-through."*

---

## 2. Comprehensive Changelog

### Phase 1: Procurement & Credibility Audit of Legacy Google Sites
* **Issues Identified on `https://www.nxtrev.org/`:**
  * Outdated Google Sites template lacking B2B industrial credibility.
  * Dead / placeholder subpages (`/products/nexustest` was empty).
  * Conflicting facility addresses (Biñan vs. Muntinlupa).
  * Outdated equipment numbers (still citing legacy "3,000 systems" instead of approaching 10,000 units).
  * Absence of a structured Request for Quotation (RFQ) intake mechanism for engineering evaluations.

### Phase 2: Architecture Setup & Brand Foundation
* **Stack:** Static HTML5, Tailwind CSS via CDN, Google Fonts (Montserrat & Plus Jakarta Sans), native SVG assets.
* **Master Brand Extraction from OneDrive (`01_NXTREV/03_Resources/Marketing/`):**
  * Official Brand Blue: `#3058a6` (`rgb(48, 88, 166)`).
  * Official Brand Dark Navy: `#1e3a8a` / `#0b132b`.
  * Generated cropped, tight-viewBox SVGs in `assets/logos/`:
    * `nxtrev_icon_blue.svg`
    * `nxtrev_icon_white.svg`
    * `nxtrev_wordmark_blue.svg`
    * `nxtrev_wordmark_white.svg`
  * High-resolution principal logo: `assets/logos/accotest.png`.

### Phase 3: Total Elimination of Abandoned Biñan Facility
* Removed all mentions of:
  * *"Operations & Technical Center (Laguna Technopark Corridor) Block 1 Lot 21, Avida Shophouse Technopark, Brgy. Biñan, Biñan City 4024, Laguna, Philippines"*
* Unified all contact headers, contact cards, and footers strictly to:
  * **107 Mayor J. Posadas Avenue, Posadas Village, Sucat, Muntinlupa City 1770, Metro Manila, Philippines.**
* Regional presence framed accurately as on-site field engineering dispatch across PEZA economic zones in CALABARZON and NCR.

### Phase 4: AccoTEST ATE Equipment Upgrades (from `accotest.com`)
* Updated tester volume across all pages to **approaching 10,000 testers shipped worldwide** (October 2026 milestone).
* Integrated public STAR Market listing credentials: **Stock Code 688200** (listed 2020), manufacturing facilities in Tianjin and Penang, and audited **91.1% customer satisfaction rating**.
* Added Flagship **STS8600 System-on-Chip (SoC)** Test Platform:
  * Liquid-cooled next-generation test head.
  * >2,000 analog channels, >4,000 digital channels up to 1.6 Gbps.
  * >2,000A total current delivery capacity.
  * ±2000V/600A static DC, 1200V/3000A dynamic test capability, ±1 nA low-leakage sensitivity, 18-bit voltmeter.
  * Available in 20-slot (STS8600) and 8-slot (STS8600A) configurations.
* Updated **STS8300 PMIC Platform**:
  * 36-slot all-in-one universal test head.
  * Device coverage: PMIC, SPS (Smart Power Stages), IPD, BMS (Battery Management Systems).
  * Highlighted **Zero Recurring License Fee** software policy.
* Updated **STS8200 CROSS Series**:
  * 26 universal slots (11 high-power slots) with open C++ programming.
  * Model variants: **AXE-PM** (Modules & KGD), **AXE-FET** (16-site wafer sort), **AXE-PLUS** (high power up to 2000V/200A).
* Downloaded and linked official AccoTEST product imagery in `assets/products/`:
  * `STS8600.png`
  * `STS8300.png`
  * `STS8200EX.png`
  * `STS8200-AXE-PM.png`
  * `STS8200-AXE-FET.png`
  * `STS8200-AXE-PLUS.png`

### Phase 5: Leadership Team Expansion & Real Photo Extraction
* Extracted authentic high-resolution employee portrait photos with transparency from `NXTREV_Company_Profile_202607.pdf` and placed in `assets/team/`:
  * **Elmer A. Baladjay** (`elmer_baladjay.png`): General Manager (15+ yrs IR/Infineon ops leadership)
  * **Vernie B. Flavier** (`vernie_flavier.png`): Sales Operations Manager
  * **Francis A. Malabanan** (`francis_malabanan.png`): Technical Sales Engineer
  * **John Eliel C. Baladjay** (`john_eliel_baladjay.png`): Business Operations Manager
  * **John Edric C. Baladjay** (`john_edric_baladjay.png`): Marketing Operations Manager
* Replaced text avatar initials with circular employee portrait photos on `about.html`.

### Phase 6: Strategic Identity Charter & Counterpart Analysis
* Reviewed counterpart **Accurex Solutions Pvt. Ltd.** (`accurexsolutions.com` in India):
  * Identified pitfalls of an outdated Web 2.0 interface and catalog overload (unfocused sourcing desk).
* Incorporated strategic direction from `NXTREV Corporate Identity and Strategic Positioning.docx`:
  * **Tagline:** *"Global technology. Local follow-through."*
  * **Brand Promise:** *"Clear commitments. Follow-through to completion."*
  * **Purpose:** *"To help Philippine manufacturers put suitable technology to productive use."*
  * **Mission:** *"We help Philippine semiconductor manufacturers evaluate, acquire, and support specialized production technologies."*
  * **Vision:** *"To become the Philippines' preferred partner for specialized semiconductor equipment and technology."*
  * **Two-Sided Value Proposition:** Philippine Manufacturers vs. Overseas Principals.
  * **5 Core Values & Observable Standards:** Fit before sale, Commit with clarity, Own the follow-through, Tell the truth early, Build beyond the transaction.
  * **Strategic Sequence:** *Concentrate, prove, repeat, deepen, then expand.*
  * **Anti-Vision:** Strict avoidance of unfocused sourcing, logo-collecting, and passive forwarding layers.

### Phase 7: Commercial Disintermediation Protection & Catalog Expansion
* Added non-exclusive equipment capabilities across 6 pillars on `products.html` **without revealing third-party supplier brand names**:
  * Pillar 01: Semiconductor ATE Systems (*AccoTEST exclusive*)
  * Pillar 02: Device Handling & Packaging Automation (Turret handlers, KGD / WLBI, Trim & Form)
  * Pillar 03: Automated Optical Inspection (Strip-to-Strip AOI, Bulk AOI, 3D Warpage)
  * Pillar 04: Reliability & Burn-In Hardware (HAST/HTOL boards, ESD fixtures, automated IC programmers)
  * Pillar 05: Board-Level Support & Engineering (ASL1000 module conversions, Caldut diagnostics, pre-owned spares)
  * Pillar 06: ESD Protective Packaging & Consumables (carrier tapes, MBB, BeCu contact fingers, static ionizers)
* Updated RFQ select dropdown on `contact.html` with optgroups for all 6 equipment families.

### Phase 8: Google Business Profile Location Card & Directions
* Extracted verified Google Business Profile metadata:
  * Category: *Semiconductor supplier in Muntinlupa*
  * Address: *Posadas Village, 107 Mayor J. Posadas Ave., Brgy. Sucat, Muntinlupa City, 1770 Metro Manila*
  * Landmark: *Located in: Jesus Is Alive Community - Alabang*
  * Office Hours: *Monday – Friday: 9:00 AM – 6:00 PM (Closed Weekends)*
  * Phone: *(+63) 908-885-6022*
* Embedded live interactive Google Map on `contact.html` with 1-click directions.
* Added location reference cards on `index.html` and `about.html`.

### Phase 9: Readability Refinement & Interactive Dropdown Architecture
* **Addressed Wordiness:**
  * Replaced dense paragraphs with structured, scannable bullet points.
  * Standardized equipment cards (1 headline, 1-sentence description, 3 bullet specs, 1 inquiry button).
* **Interactive Navigation Dropdown:**
  * Replaced static "Products" link across all headers with an interactive **Products & Solutions** hover/click dropdown linking to all 6 equipment categories.
* **Category Filter on `products.html`:**
  * Added a sticky category dropdown selector and quick-filter pills (`All`, `ATE Systems`, `Handling`, `AOI`, `Reliability`, `Board Support`, `ESD / Parts`).
  * Implemented client-side filtering so users can inspect individual categories without endless vertical scrolling.

---

## 3. Current Directory & File Manifest

```text
NXTREV Website/
├── index.html                 # Homepage (Hero, value props, AccoTEST showcase, values, HQ)
├── products.html              # Equipment catalog (Interactive dropdown filter, 6 categories)
├── about.html                 # Corporate identity, operating principles, leadership team with photos
├── contact.html               # Technical RFQ form, direct contacts, embedded Google Map
├── LOG.md                     # Project history, technical specifications, and revision log
└── assets/
    ├── logos/
    │   ├── nxtrev_icon_blue.svg       # Brand blue iconmark (tight viewBox)
    │   ├── nxtrev_icon_white.svg      # White iconmark for dark surfaces
    │   ├── nxtrev_wordmark_blue.svg   # Brand blue wordmark
    │   ├── nxtrev_wordmark_white.svg  # White wordmark
    │   └── accotest.png               # High-resolution principal logo
    ├── products/
    │   ├── STS8600.png                # AccoTEST STS8600 SoC test tower
    │   ├── STS8300.png                # AccoTEST STS8300 36-slot PMIC tester
    │   ├── STS8200EX.png              # AccoTEST STS8200 CROSS Series platform
    │   ├── STS8200-AXE-PM.png         # STS8200 AXE-PM power modules tester
    │   ├── STS8200-AXE-FET.png        # STS8200 AXE-FET wafer sort tester
    │   └── STS8200-AXE-PLUS.png       # STS8200 AXE-PLUS high-power tester
    └── team/
        ├── elmer_baladjay.png         # Elmer A. Baladjay portrait (transparent)
        ├── vernie_flavier.png         # Vernie B. Flavier portrait (transparent)
        ├── francis_malabanan.png      # Francis A. Malabanan portrait (transparent)
        ├── john_eliel_baladjay.png    # John Eliel C. Baladjay portrait (transparent)
        └── john_edric_baladjay.png    # John Edric C. Baladjay portrait (transparent)
```

---

## 4. Pending / Next Action Items

When John is ready to deploy live to `nxtrev.org`:
1. **GitHub Account:** Obtain John's GitHub account username (or create a dedicated organization repository).
2. **Git Initialization:** Initialize git in the website directory, commit all assets, and push to GitHub.
3. **GitHub Pages Configuration:** Enable GitHub Pages on `main` branch with Custom Domain `nxtrev.org`.
4. **GoDaddy DNS Records Setup:**
   * **4 `A` Records** for apex `nxtrev.org`:
     * `185.199.108.153`
     * `185.199.109.153`
     * `185.199.110.153`
     * `185.199.111.153`
   * **1 `CNAME` Record** for `www.nxtrev.org`:
     * Points to `<username>.github.io`
   * Check "Enforce HTTPS" once DNS propagates.
