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
- Two collection-point addresses with static map-image placeholders.
- Semantic HTML structure, explanatory code comments and placeholder image filenames.
- One external stylesheet linked to every page.
- Responsive layouts using CSS Flexbox, Grid, relative units and media queries.
- Consistent typography, colour palette, form controls, navigation states and footer styling.

## Timeline and Milestones

| Milestone | Planned work |
| --- | --- |
| Week 1 | Confirm approved organisation, research content and plan pages. |
| Week 2 | Create sitemap, folder structure and five HTML pages. |
| Week 3 | Test page links and HTML structure; prepare Part 1 submission. |
| Part 2 | Added external CSS styling, responsive desktop/tablet/mobile layouts, and visual testing. |
| Part 3 | Add JavaScript, form handling, SEO and deployment after Part 2 feedback. |

## Part 1 Details

At the conclusion of Part 1, this project contained the HTML foundation only. Part 2 now adds one external CSS stylesheet; no JavaScript file, framework, animation, interactive map, gallery, search tool, SEO configuration or form-processing logic has been added. The `js` and `Images` folders remain organised for later work. Image references are intentionally placeholders until approved, properly licensed or original images are available.

## Part 2 Details

Part 2 adds `css/style.css`, which is linked to all five HTML pages. The stylesheet applies the Sunrise Bakery visual identity: cream, sunrise gold, warm orange and deep brown; readable system typography; consistent cards, forms, buttons, images, navigation and footer styling. Flexbox is used for the header, navigation and footer. CSS Grid is used for the products and contact-location layouts.

Responsive breakpoints are included for desktop, tablet (at 62rem) and mobile (at 45rem). Product cards change from three columns to two and then one column; the two contact locations stack into one column on mobile. Images use `max-width: 100%` and `height: auto`. Hover, keyboard-focus and active states are included for links, navigation and buttons. No JavaScript or Part 3 functionality has been added.

### Responsive Testing Record

The website was checked in a browser at the following viewport sizes:

| Viewport | Page checked | Result |
| --- | --- | --- |
| 1440 × 900 | Products | Desktop navigation and three-column product-card layout displayed correctly. |
| 768 × 900 | Contact | Tablet navigation and two-column collection-point layout displayed correctly. |
| 390 × 844 | Enquiry | Mobile navigation wrapped cleanly; form controls remained within the viewport. |


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
|- js/
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

## References

- Creative Commons 2026, *Public Domain*, viewed 17 September 2026, <https://creativecommons.org/public-domain/>.

- OpenAI (2026) Rosebank location map for Sunrise Bakery [AI-generated image]. ChatGPT. Available at: https//chatgpt.com/(accessed: 13 August 2026)
- OpenAI (2026) Sandton location map for Sunrise Bakery [AI-generated image]. ChatGPT. Available at: https//chatgpt.com/(accessed: 13 August 2026)
- Thamy N. (2026) Pastries displayed on a shelf in a bakery. Unsplash. Available at: https://unsplash.com/photos/pastries-displayed-0n-a-shelf-in-a-bakery-GAineoqNbbl (Accessed: 13 August 2026)
- Hunt, J. (2023) A display case filled with pastries in a bakery. Unsplash. Available at: https://unsplash.com/photos/a-display-case-filled-with-pastries-in-a-bakery-Qbbx1z7qilA (Accessed: 13 August 2026).
- Tarazevich, A. (n.d.) Chefs having fun with bread and bagels in a bright kitchen setting. Pexels. Available at: https://www.pexels.com/photo/man-in-blue-crew-neck-t-shirt-holding-brown-bread-6937487/ (Accessed: 13 August 2026) 

No external images are currently used in this website. Each image placeholder must be replaced only with an original image, a CC0/public-domain image, or an image used under terms that allow this educational website use. Record every final image in `content-research/images/image-source-register.md` and add its Harvard-style reference to this list.

The Part 2 stylesheet is original work created for this student project. No external CSS framework, library, font, template or code snippet was used.
