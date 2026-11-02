/* Sunrise Bakery Part 3: accessible interactions, client-side validation and dynamic content. */

document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.classList.add("js-enhanced");
    setupEnquiryForm();
    setupContactForm();
    setupProductCatalog();
    setupGallery();
    setupLocationMap();
    setupRevealAnimation();
});

function setStatus(element, message, type = "success") {
    if (!element) return;
    element.textContent = message;
    element.className = `form-status ${type}`;
    element.hidden = false;
}

function getFirstInvalidField(form) {
    return Array.from(form.elements).find((field) => field.willValidate && !field.checkValidity());
}

function setupEnquiryForm() {
    const form = document.querySelector("#enquiry-form");
    if (!form) return;

    const dateField = form.querySelector("#collection-date");
    const status = form.querySelector("#enquiry-status");
    const today = new Date();
    const todayValue = today.toISOString().split("T")[0];
    dateField.min = todayValue;

    dateField.addEventListener("input", () => {
        dateField.setCustomValidity(dateField.value && dateField.value < todayValue ? "Please select today or a future collection date." : "");
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        dateField.dispatchEvent(new Event("input"));
        const firstInvalid = getFirstInvalidField(form);

        if (firstInvalid) {
            setStatus(status, "Please correct the highlighted fields before sending your enquiry.", "error");
            firstInvalid.focus();
            firstInvalid.reportValidity();
            return;
        }

        const name = form.querySelector("#enquiry-name").value.trim();
        const type = form.elements["enquiry-type"].value;
        const point = form.elements["collection-point"].value === "rosebank" ? "Rosebank" : "Sandton";
        const date = new Date(`${dateField.value}T00:00:00`).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" });
        const estimates = {
            "custom-cake": "Custom cakes start from R350 and normally need at least three days' notice.",
            "large-order": "Large bakery orders are priced from R20 per item; our team will confirm the final quote.",
            "product-availability": "Our team will check current stock and confirm availability.",
            "dietary-question": "Our team will review your dietary question before confirming a suitable option."
        };

        setStatus(status, `Thank you, ${name}. Your preliminary ${type.replace(/-/g, " ")} enquiry is recorded for ${date} at ${point}. ${estimates[type]} This is not a confirmed order.`, "success");
        form.reset();
        dateField.min = todayValue;
    });
}

function setupContactForm() {
    const form = document.querySelector("#contact-form");
    if (!form) return;

    const status = form.querySelector("#contact-status");
    const draftLink = form.querySelector("#email-draft-link");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const firstInvalid = getFirstInvalidField(form);

        if (firstInvalid) {
            setStatus(status, "Please correct the highlighted fields before preparing your email.", "error");
            firstInvalid.focus();
            firstInvalid.reportValidity();
            return;
        }

        const name = form.querySelector("#contact-name").value.trim();
        const email = form.querySelector("#contact-email").value.trim();
        const messageType = form.elements["message-type"].value;
        const message = form.querySelector("#contact-message").value.trim();
        const subject = `Sunrise Bakery website message: ${messageType}`;
        const body = `Name: ${name}\nEmail: ${email}\nMessage type: ${messageType}\n\nMessage:\n${message}`;
        draftLink.href = `mailto:riseandbake@sunrisebakery.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        draftLink.hidden = false;
        setStatus(status, "Your message has passed validation. Select the link below to open a prepared email in your email application.", "success");
    });
}

function setupProductCatalog() {
    const grid = document.querySelector("#product-grid");
    if (!grid) return;

    const search = document.querySelector("#product-search");
    const category = document.querySelector("#product-category");
    const sort = document.querySelector("#product-sort");
    const count = document.querySelector("#product-results");
    const noProducts = document.querySelector("#no-products");
    const cards = Array.from(grid.querySelectorAll(".product-card"));

    const updateCatalog = () => {
        const query = search.value.trim().toLowerCase();
        const selectedCategory = category.value;
        const visibleCards = cards.filter((card) => {
            const matchesText = card.textContent.toLowerCase().includes(query);
            const matchesCategory = selectedCategory === "all" || card.dataset.category === selectedCategory;
            return matchesText && matchesCategory;
        });

        const orderedCards = [...cards].sort((a, b) => {
            if (sort.value === "name") return a.dataset.name.localeCompare(b.dataset.name);
            if (sort.value === "price-low") return Number(a.dataset.price) - Number(b.dataset.price);
            if (sort.value === "price-high") return Number(b.dataset.price) - Number(a.dataset.price);
            return cards.indexOf(a) - cards.indexOf(b);
        });

        orderedCards.forEach((card) => {
            const isVisible = visibleCards.includes(card);
            card.hidden = !isVisible;
            grid.append(card);
        });

        count.textContent = `Showing ${visibleCards.length} ${visibleCards.length === 1 ? "product" : "products"}.`;
        noProducts.hidden = visibleCards.length !== 0;
    };

    search.addEventListener("input", updateCatalog);
    category.addEventListener("change", updateCatalog);
    sort.addEventListener("change", updateCatalog);
}

function setupGallery() {
    const dialog = document.querySelector("#gallery-lightbox");
    if (!dialog) return;

    const dialogImage = dialog.querySelector("#lightbox-image");
    const caption = dialog.querySelector("#gallery-caption");
    const closeButton = dialog.querySelector(".dialog-close");

    document.querySelectorAll(".gallery-item").forEach((item) => {
        item.addEventListener("click", () => {
            const image = item.querySelector("img");
            dialogImage.src = item.dataset.fullImage;
            dialogImage.alt = image.alt;
            caption.textContent = item.dataset.caption;
            dialog.showModal();
        });
    });

    closeButton.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
        const bounds = dialog.getBoundingClientRect();
        const clickedBackdrop = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
        if (clickedBackdrop) dialog.close();
    });
}

function setupLocationMap() {
    const mapElement = document.querySelector("#location-map");
    const isWebServer = window.location.protocol === "http:" || window.location.protocol === "https:";

    // OpenStreetMap tiles require a normal web-page referrer. When this project
    // is opened as a local file, leave the existing static map images visible.
    if (!mapElement || !isWebServer || typeof window.L === "undefined") return;

    mapElement.classList.add("map-ready");
    const map = window.L.map("location-map", { scrollWheelZoom: false }).setView([-26.105, 28.075], 12);
    window.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap contributors</a>"
    }).addTo(map);

    const locations = [
        { coordinates: [-26.146, 28.041], name: "Rosebank collection point", details: "12 Baker Street, Rosebank" },
        { coordinates: [-26.107, 28.067], name: "Sandton collection point", details: "45 Sunrise Avenue, Sandton" }
    ];

    locations.forEach((location) => {
        window.L.marker(location.coordinates).addTo(map).bindPopup(`<strong>${location.name}</strong><br>${location.details}`);
    });
}

function setupRevealAnimation() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const elements = document.querySelectorAll("main > section, main > form");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    elements.forEach((element) => {
        element.classList.add("reveal-on-scroll");
        observer.observe(element);
    });
}
