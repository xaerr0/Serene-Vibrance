# Client Feedback Checklist

Source: Client email 1 of 2 (revisions round).

## Home page

- [x] Change hero subtitle "A Spa Experience Like No Other" → "An Oasis from the Demands of Life"
- [x] Change hero H1 "Radiant Skin Starts Here" → "Inner and Outer Glow Starts Here"
- [ ] Swap hero background image (pending — waiting on client's Dropbox photo folder)
- [x] Change "Book a Treatment" button → "Book a Service"
- [x] Replace single "Explore Services" button with 3 options: Explore Facials, Explore Coaching, Explore Retreats
- [x] Rewrite "Beauty Comes from Within" section copy to make clear facials and coaching are separate experiences
- [x] Remove the waxing slide from the "Our Services" carousel
- [x] Ooo La La Facial section: change duration to 2 hours (updated on index.html and facials.html)
- [x] "Professional microdermabrasion" → "Zemits Hydro Facial AHA microdermabrasion" (both pages)
- [x] "Deep extractions" → "Gentle extractions" (both pages)
- [x] "Oxygen mist" → "Oxygen Serum Infusion" (both pages)
- [x] "Luxe moisturizing mask" → "Luxe mask" (both pages)

Note: the Ooo La La facial content also appears on facials.html — update in both places for consistency.

## Pending from client

- [ ] Dropbox folder to be set up for image sharing

## Home page — email 2

- [x] Ooo La La featured section: replaced last line (index.html and facials.html)
- [x] Removed Waxing from the top navigation bar (site-wide, all 5 pages)
- [x] Added hover tooltip with mini description to each facial in the facial menu list (index.html and facials.html)
- [x] Replaced "Intuitive Coaching" section copy on home page with new client-provided text
- [x] Elevate section: removed "yoga," from the description
- [x] Replaced "Meet Kristen Irene" bio with new client-provided text

## Coaching page — email 2

- [x] Replaced hero description paragraph with new client-provided text
- [x] Replaced "What Is Intuitive Coaching?" section with new client-provided text (includes Reiki/meditation mention and updated credentials line)

## Email 3

- [x] Home: Facials carousel slide now shows a woman (TEMP Pexels stock #3738349 → `Images/service-facials-woman.jpg`)
- [x] Home: Elevate section 3-month → 6-month
- [x] Home: About bio replaced with new text; heading "Meet Kristen"
- [x] Coaching: "Free Introductory Session", 1 hour; single session 3rd bullet replaced; "choose the option"
- [x] Waxing page deleted (plus footer links, meta mentions, unused service-waxes.jpg)
- [x] Elevate: 3-month → 6-month everywhere (incl. "12 weeks" → "6 months"); dates → May – December 2027
- [x] Elevate: Start Your Journey + Apply Now → Google Form
- [x] Elevate: added "Two in-person women's circles" (What's Included + overview)
- [x] Elevate: Kristen Diaz; 18 yrs interpersonal work / 13 yrs women's circles
- [x] Elevate: Email Us lists Kristen Diaz + Assiyah Rouhani
- [x] Contact: waxing → retreat; phone removed; email → serenevibrance@gmail.com; Discovery Call (Vagaro) added
- [ ] prosperity.html is a DRAFT (noindex, not linked) — needs description, location, price, sign-up link
- [ ] Testimonials still say "Kristen Irene"/"Irene" (client quotes, left as-is) — confirm with Kristen

## Color palette

- [x] Applied "B — Blush Plum & Gold" palette site-wide (all 5 pages): coral family → plum (`#b5688c`/`#7a3b58`/`#5c2a42`), sage family → gold (`#b08a3e`/`#7a5e2a`), cream background → `#f4eef0`, ink → `#2a2024`. Also updated hardcoded rgba() shadows/tints that referenced the old hex values directly, so nothing reverted to the old coral/sage tones.
- Bonus fixes found while touching every color token: `facials.html`, `coaching.html`, and `waxing.html` were missing a `--sage-strong` variable (and `elevate.html` was missing `--coral-strong`/`--coral-strong-dark`) that earlier contrast fixes referenced — those gradients were silently rendering blank. Also fixed `index.html`'s logo, which referenced an undefined `--sky` variable.

## Needs client review

- [ ] **Facial tooltip copy was written by me, not the client** — each facial name now has a one-line hover description (e.g. "A firming, lifting facial for a more sculpted, youthful look." for Ultra Lift Treatment). These are reasonable placeholder descriptions based on the service name, but Kristen should review/edit them for accuracy since I don't know the actual treatment details.

## Design flaws / "AI slop" cleanup (site-wide, index/facials/coaching/elevate/waxing)

- [x] Mobile nav underline and dropdown menu animated `width`/`max-height` (layout-thrashing) → switched to `transform`/`opacity`/`visibility`
- [x] Elevate page hero photo was buried under a `background-blend-mode: overlay` + duplicate gradient + 50% black scrim, making it nearly invisible → simplified to a plain photo with a light scrim, matching the other pages' heroes
- [x] Body/UI font swapped from Montserrat (an overused, generic AI-default sans) to Urbanist, paired with the existing Lora serif for headings
- [x] Fixed several real WCAG contrast failures uncovered while auditing (white text on light coral/sage gradient sections, sage/coral heading text on white or cream backgrounds, and a broken hover state on Elevate's primary button that turned white text nearly invisible)
- [ ] Cream/beige page background flagged as a generic "default AI palette" choice — **left as-is**, since the client explicitly praised the current look ("really so good as is... outstanding job") and this is a base brand color, not a copy fix; flag to client before changing
- Note: one "low-contrast" hover finding on 4 pages was a detector false positive (paired two unrelated selectors that both reference `var(--coral)`) — left alone, no real bug
