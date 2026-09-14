# NXTREV Website — Project To-Do & Deployment Roadmap

**Project:** NXTREV Technology Inc. Corporate Website  
**Domain:** `nxtrev.org`  
**Hosting Target:** GitHub Pages ($0 recurring cost, automatic free SSL)  
**Status:** **Parked — Awaiting GoDaddy Access via ebaladj1@yahoo.com**  
**Last Updated:** September 14, 2026  

---

## 1. Pending Deployment Steps (To Resume)

- [x] **Step 1: Set Up GitHub Account** (`Valexander7`)
  - Create or log into John's / NXTREV's GitHub account at [github.com](https://github.com).
  - Note the GitHub username or organization name.

- [x] **Step 2: Initialize Git Repository & Push** (pushed to `https://github.com/Valexander7/nxtrev-website.git` with `CNAME` for `nxtrev.org`)
  - Open terminal or run via agent:
    ```bash
    cd "/Users/johnelielbaladjay/Documents/1 Projects/NXTREV Website"
    git init
    git add .
    git commit -m "feat: complete initial build of NXTREV corporate website"
    ```
  - Create a new public repository on GitHub (e.g. `nxtrev-website` or `<username>.github.io`).
  - Add remote and push:
    ```bash
    git remote add origin https://github.com/<username>/nxtrev-website.git
    git branch -M main
    git push -u origin main
    ```

- [ ] **Step 3: Enable GitHub Pages & Custom Domain**
  - Navigate to Repository **Settings** → **Pages**.
  - Source: Deploy from branch `main` / `(root)`.
  - Under **Custom domain**, enter: `nxtrev.org` (this creates a `CNAME` file in the repo root).
  - Save settings.

- [ ] **Step 4: Configure GoDaddy DNS Records** *(BLOCKED: Waiting for access to Elmer's email `ebaladj1@yahoo.com` for GoDaddy login / 2FA)*
  - Log in to [GoDaddy DNS Management](https://dcc.godaddy.com/manage/dns) for `nxtrev.org`.
  - Add or update the following **4 `A` Records** for host `@`:
    | Type | Name / Host | Value | TTL |
    | :--- | :--- | :--- | :--- |
    | `A` | `@` | `185.199.108.153` | 1 Hour / 3600s |
    | `A` | `@` | `185.199.109.153` | 1 Hour / 3600s |
    | `A` | `@` | `185.199.110.153` | 1 Hour / 3600s |
    | `A` | `@` | `185.199.111.153` | 1 Hour / 3600s |
  - Add or update the **1 `CNAME` Record** for `www`:
    | Type | Name / Host | Value | TTL |
    | :--- | :--- | :--- | :--- |
    | `CNAME` | `www` | `<username>.github.io` | 1 Hour / 3600s |
  - Remove any legacy Google Sites DNS records (`ghs.googlehosted.com` CNAME if present).

- [ ] **Step 5: Enforce HTTPS & Verify SSL**
  - In GitHub Pages settings, wait for DNS check to succeed.
  - Check the box for **"Enforce HTTPS"** once the Let's Encrypt certificate is provisioned.

---

## 2. Post-Launch Verification & External Updates

- [ ] **Verify Live Site Functionality:**
  - Test apex domain `https://nxtrev.org` and subdomain `https://www.nxtrev.org`.
  - Test navigation bar dropdown and mobile menu.
  - Test category filter dropdown and pills on `products.html`.
  - Test RFQ form submission to confirm `mailto:sales@nxtrev.org` triggers correctly with prepopulated specs.
  - Test Google Maps embed and 1-click direction button on `contact.html`.

- [ ] **Update Google Business Profile:**
  - Open Google Business Profile for **NXTREV Technology Inc.**.
  - Change website URL from legacy Google Sites (`https://sites.google.com/view/nxtrev/home`) to `https://www.nxtrev.org`.

- [ ] **SEO & Webmaster Tools:**
  - Submit `https://www.nxtrev.org` to Google Search Console for re-indexing.

---

## 3. Completed Milestones (Reference)

- [x] Comprehensive B2B procurement audit of legacy Google Sites.
- [x] Complete removal of abandoned Biñan office (`Avida Shophouse Technopark`).
- [x] Consolidation to Muntinlupa City Corporate HQ (`Posadas Village, 107 Mayor J. Posadas Ave.`) with Google Business Profile landmark (`Jesus Is Alive Community - Alabang`) and office hours (`Mon–Fri: 9AM – 6PM`).
- [x] Master brand palette configured: `#3058a6`, `#1e3a8a`, Montserrat, Plus Jakarta Sans, authentic SVG vector logos.
- [x] Integrated AccoTEST STAR Market 688200 data, ~10,000 tester shipment milestone, and official product imagery (`STS8600.png`, `STS8300.png`, `STS8200EX.png`, etc.).
- [x] Extracted real employee face photos from `NXTREV_Company_Profile_202607.pdf` and added to `about.html` (Elmer, Vernie, Francis, John Eliel, John Edric).
- [x] Applied strategic positioning charter: *"Global technology. Local follow-through."*, purpose, mission, vision, and 5 core operating values.
- [x] Applied commercial protection guardrail: Exclusively branded AccoTEST while categorizing all other non-exclusive equipment by technical capability without displaying third-party brand names.
- [x] Streamlined text wordiness and added interactive Products & Solutions navigation dropdown + sticky category filter on `products.html`.
- [x] Created `LOG.md` recording full project history, specifications, and file manifest.
- [x] Synchronized all files to OneDrive Projects (`01_NXTREV/01_Projects/NXTREV Website/`).
