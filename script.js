
/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  menuToggle.textContent = isOpen ? "×" : "☰";
});

// Close the mobile menu when a navigation link is clicked.
document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.textContent = "☰";
  });
});


/* =========================================
   TREATMENT CATEGORY FILTERS
========================================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const treatmentCards = document.querySelectorAll(".treatment-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    // Update the active filter button.
    filterButtons.forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    // Display only matching treatments.
    treatmentCards.forEach(card => {
      const matches =
        filter === "all" ||
        card.dataset.category === filter;

      card.classList.toggle("hidden", !matches);
    });
  });
});


/* =========================================
   TREATMENT-SPECIFIC WHATSAPP ENQUIRIES
========================================= */

// WhatsApp number in international format without + or spaces.
const whatsappNumber = "923405225566";

document.querySelectorAll(".treatment-book").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    const treatment = link.dataset.treatment;

    const message =
      `Hello Elysian Skin & Aesthetic Studio, I would like to enquire about ${treatment} and book a consultation. Please share the details.`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );
  });
});


/* =========================================
   FAQ ACCORDION
========================================= */

document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const isOpen = item.classList.toggle("open");

    button.setAttribute("aria-expanded", String(isOpen));

    button.querySelector("span:last-child").textContent =
      isOpen ? "−" : "+";
  });
});


/* =========================================
   AUTOMATIC COPYRIGHT YEAR
========================================= */

document.getElementById("year").textContent =
  new Date().getFullYear();
