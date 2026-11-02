# Sunrise Bakery Website

## Student Information

- Full name: Okuhle Nyama
- Student number: ST10496900
- Module: WEDE5020

## Project Overview

Sunrise Bakery is a fictional small, neighbourhood bakery with collection points in Rosebank and Sandton, Johannesburg. It offers freshly baked bread, pastries, cupcakes, coffee and made-to-order celebration cakes. This project creates the initial HTML foundation for a simple, informative bakery website.

## Website Goals and Objectives

- Increase awareness of Sunrise Bakery among local customers.
- Present bakery products, collection points and opening hours clearly.
- Encourage visitors to make custom-cake and product enquiries.
- Provide clear contact details and two collection-point locations.
- Establish a well-organised website foundation for later project parts.

## Key Features and Functionality

- Five linked HTML pages with a consistent navigation menu.
- Home, About Us, Products, Enquiry and Contact content.
- Bakery product categories and allergen-information content.
- A custom-order/product enquiry form.
- A separate general contact-message form.
- Two collection-point addresses with static map images and an interactive Leaflet map.
- Semantic HTML structure, explanatory code comments and descriptive image filenames/alt text.
- One external stylesheet linked to every page.
- Responsive layouts using CSS Flexbox, Grid, relative units and media queries.
- Consistent typography, colour palette, form controls, navigation states and footer styling.
- JavaScript client-side validation and user feedback for both forms.
- Product search, category filter and price/name sorting.
- Accessible image lightbox gallery and FAQ disclosure sections.
- SEO metadata, canonical URLs, `robots.txt` and `sitemap.xml`.

## Timeline and Milestones

| Milestone | Planned work |
| --- | --- |
| Week 1 | Confirm approved organisation, research content and plan pages. |
| Week 2 | Create sitemap, folder structure and five HTML pages. |
| Week 3 | Test page links and HTML structure; prepare Part 1 submission. |
| Part 2 | Added external CSS styling, responsive desktop/tablet/mobile layouts, and visual testing. |
| Part 3 | Added JavaScript interactions, client-side form validation, interactive map, SEO files and final testing. Deployment remains pending repository/hosting access. |

## Part 1 Details

At the conclusion of Part 1, this project contained the HTML foundation only. Part 2 added the external CSS stylesheet. The original visual assets have now been added to the `Images` folder and their sources are recorded in the image-source register and references below.

## Part 2 Details

Part 2 adds `css/style.css`, which is linked to all five HTML pages. The stylesheet applies the Sunrise Bakery visual identity: cream, sunrise gold, warm orange and deep brown; readable system typography; consistent cards, forms, buttons, images, navigation and footer styling. Flexbox is used for the header, navigation and footer. CSS Grid is used for the products and contact-location layouts.

Responsive breakpoints are included for desktop, tablet (at 62rem) and mobile (at 45rem). Product cards change from three columns to two and then one column; the two contact locations stack into one column on mobile. Images use `max-width: 100%` and `height: auto`. Hover, keyboard-focus and active states are included for links, navigation and buttons.

### Responsive Testing Record

The website was checked in a browser at the following viewport sizes:

| Viewport | Page checked | Result |
| --- | --- | --- |
| 1440 × 900 | Products | Desktop navigation and three-column product-card layout displayed correctly. |
| 768 × 900 | Contact | Tablet navigation and two-column collection-point layout displayed correctly. |
| 390 × 844 | Enquiry | Mobile navigation wrapped cleanly; form controls remained within the viewport. |

## Part 3 Details

### JavaScript Functionality

- `js/app.js` adds client-side validation and clear success/error feedback to the enquiry and contact forms.
- The enquiry form checks names, email addresses, telephone-number format, a future collection date, collection point and a meaningful message. A successful enquiry displays a preliminary availability or pricing response without submitting personal data to a server.
- The contact form validates the message and then generates a `mailto:` link containing the visitor's details, message type and message for `riseandbake@sunrisebakery.co.za`. The visitor chooses whether to open their email application.
- The products page provides keyword search, category filtering and sorting by featured order, name or price.
- The homepage provides a keyboard-accessible native-dialog image gallery, FAQ disclosure sections and reduced-motion-aware reveal effects.
- The contact page uses Leaflet and OpenStreetMap tiles to display interactive markers for the fictional Rosebank and Sandton collection points. The existing static location images remain available if JavaScript or the external map service is unavailable.
- When the project is opened directly as a local `file:///` page, the interactive map is intentionally not started because OpenStreetMap blocks tile requests without a normal web-page referrer. The two static location images remain visible; the interactive map starts after HTTP/HTTPS deployment.

### SEO and Performance

- Each HTML page has a unique title, meta description, keyword list, canonical URL and robots instruction.
- Descriptive `alt` text has replaced image-placeholder text.
- Semantic heading order, internal links, responsive layouts and local image files support usability and on-page SEO.
- `robots.txt` allows indexing and points crawlers to `sitemap.xml`.
- `sitemap.xml` lists the five public HTML pages. Update the `https://www.sunrisebakery.co.za/` example URL in the canonicals, robots file and sitemap after choosing an actual deployment domain.
- No external CSS framework or JavaScript framework was used. Leaflet is the only external JavaScript library, used for the interactive map.

### Deployment Status

The project is ready to deploy to GitHub Pages or Netlify, but it is not currently a Git repository and no remote/hosting account is connected. Deployment therefore remains a manual final step once the lecturer’s private repository or your selected hosting platform is available.

### Part 3 Testing Record

- JavaScript syntax was checked with Node.js.
- All five HTML pages were checked for their stylesheet, JavaScript file, SEO metadata and canonical links.
- The site was checked for `robots.txt`, `sitemap.xml`, the single intended local JavaScript file and no repository deployment connection.
- A final browser interaction test is still required after opening the project in a normal browser: test a failed and successful enquiry, a failed and successful contact message, product search/filter/sort, gallery open/close, FAQ disclosure and both map markers.

## Sitemap

```text
Sunrise Bakery
|
|- Home (index.html)
|- About Us (about.html)
|- Products (products.html)
|- Enquiry (enquiry.html)
`- Contact (contact.html)
   |- Rosebank collection point
   `- Sandton collection point

Supporting SEO files: robots.txt, sitemap.xml
```

## File Structure

```text
SunriseBakery/
|- index.html
|- about.html
|- products.html
|- enquiry.html
|- contact.html
|- README.md
|- css/
|  `- style.css
|- js/
|  `- app.js
|- robots.txt
|- sitemap.xml
`- Images/
```

## Changelog

### 2026-08-13

- Created the SunriseBakery project folder and Part 1 folder structure.
- Added five semantic HTML pages with linked navigation.
- Added original fictional content for Sunrise Bakery.
- Added enquiry and general contact form structures without form processing or JavaScript.
- Added two collection-point addresses and static map-image placeholders.
- Created this README with Part 1 documentation.

### 2026-09-17

- Confirmed Okuhle Nyama as the student name displayed in this README and the website footer.
- Added a Part 1 content-research pack, including an image requirements/source register and original-content register.
- Prepared the Part 1 content-research pack for ZIP submission; no external images were downloaded or added.
- Created and linked `css/style.css` on all five HTML pages for Part 2.
- Added consistent responsive styling for desktop, tablet and mobile layouts using Flexbox, Grid and media queries.
- Styled navigation, content areas, forms, buttons, images and footer; added hover, focus and active states.
- Kept JavaScript, interactive maps, search, galleries/lightboxes, SEO files and deployment out of scope for Part 2.

### 2026-11-02

- Implemented `js/app.js` for Part 3 functionality: product search/filter/sort, form validation, enquiry response, email-draft preparation, gallery lightbox, FAQ behaviour, interactive Leaflet map and reduced-motion-aware reveal effects.
- Added HTML validation attributes, form status messages and accessible live regions to the enquiry and contact forms.
- Added page-specific title tags, meta descriptions, keyword metadata, canonical URLs and updated descriptive image alt text.
- Added `robots.txt` and `sitemap.xml` for search-engine crawling and site discovery.
- Updated the image source register and Harvard-style references to reflect the supplied bakery, team and location-map images.
- Confirmed that no backend, payment flow, user account system, search service, deployment or external JavaScript framework was added.
- Updated the contact-map behaviour so local `file:///` viewing uses static map images instead of producing blocked OpenStreetMap tile errors; interactive mapping is reserved for HTTP/HTTPS deployment.

## References

- Creative Commons 2026, *Public Domain*, viewed 17 September 2026, <https://creativecommons.org/public-domain/>.
- Hunt, J. 2023, *A display case filled with pastries in a bakery*, [online image], Unsplash, viewed 13 August 2026, <https://unsplash.com/photos/a-display-case-filled-with-pastries-in-a-bakery-Qbbx1z7qilA>.
- Leaflet 2026, *Leaflet 1.9.4 documentation and download*, viewed 2 November 2026, <https://leafletjs.com/download>.
- Mfuphi, L. 2026, *WEDE5020 Project Brief: Website Development PoE*, course brief supplied to the student.
- Mozilla Developer Network 2026, *The dialog element*, viewed 2 November 2026, <https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog>.
- OpenAI 2026, *Rosebank location map for Sunrise Bakery*, [AI-generated image], ChatGPT, created 13 August 2026.
- OpenAI 2026, *Sandton location map for Sunrise Bakery*, [AI-generated image], ChatGPT, created 13 August 2026.
- OpenStreetMap Foundation 2026, *Tile Usage Policy*, viewed 2 November 2026, <https://operations.osmfoundation.org/policies/tiles/>.
- Tarazevich, A. n.d., *Chefs having fun with bread and bagels in a bright kitchen setting*, [online image], Pexels, viewed 13 August 2026, <https://www.pexels.com/photo/man-in-blue-crew-neck-t-shirt-holding-brown-bread-6937487/>.
- Thamy, N. 2026, *Pastries displayed on a shelf in a bakery*, [online image], Unsplash, viewed 13 August 2026, <https://unsplash.com/photos/pastries-displayed-0n-a-shelf-in-a-bakery-GAineoqNbbl>.

The CSS and JavaScript written for this project are original work by Okuhle Nyama. No external CSS framework, template or JavaScript framework was used. The site depends on Leaflet only for the interactive map.
