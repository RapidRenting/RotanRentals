const photos = [
  { file: "DJI_0103.jpg", label: "The home and private pool from above" },
  { file: "P1013260-AI.jpeg", label: "Shaded outdoor lounge overlooking the pool" },
  { file: "P1013397-AI.jpeg", label: "Bright open-plan living and dining space" },
  { file: "P1013365-AI.jpeg", label: "Comfortable bedroom with vaulted ceiling" },
  { file: "P1013338-AI.jpeg", label: "Private pool and sunny terrace" },
  { file: "P1013296-AI.jpeg", label: "Full kitchen opening to the dining and living area" },
  { file: "P1013370-AI.jpeg", label: "Private balcony with tropical views" },
  { file: "DJI_0068.jpg", label: "The home, coastline, and tropical hillside nearby" },
  { file: "DJI_0053.jpg", label: "Aerial view of the home and landscaped grounds" },
  { file: "P1013325-AI.jpeg", label: "Poolside living in the Roatán sunshine" },
  { file: "P1013238-AI.jpeg", label: "Exterior view of the home and gardens" },
  { file: "P1013434-AI.jpeg", label: "Green island surroundings" },
  { file: "P1013245-AI.jpeg", label: "A closer look at the home" },
  { file: "P1013252-AI.jpeg", label: "A closer look at the home" },
  { file: "P1013259-AI.jpeg", label: "A closer look at the home" },
  { file: "P1013262-AI.jpeg", label: "A closer look at the home" },
  { file: "P1013273-AI.jpeg", label: "A closer look at the home" },
  { file: "P1013283-AI.jpeg", label: "A closer look at the home" },
  { file: "P1013288-AI.jpeg", label: "A closer look at the home" },
  { file: "P1013290-AI.jpeg", label: "A closer look at the home" },
  { file: "P1013295-AI.jpeg", label: "A closer look at the home" },
  { file: "P1013306-AI.jpeg", label: "A closer look at the home" },
  { file: "P1013315-AI.jpeg", label: "A closer look at the home" },
  { file: "P1013321-AI.jpeg", label: "A closer look at the home" },
  { file: "P1013330-AI.jpeg", label: "A closer look at the home" },
  { file: "P1013334-AI-2.jpeg", label: "A closer look at the home" },
  { file: "P1013346-AI.jpeg", label: "A closer look at the home" },
  { file: "P1013349-AI.jpeg", label: "A closer look at the home" },
  { file: "P1013353-AI.jpeg", label: "A closer look at the home" },
  { file: "P1013357-AI.jpeg", label: "A closer look at the home" },
  { file: "P1013359-AI.jpeg", label: "A closer look at the home" },
  { file: "P1013361-AI.jpeg", label: "A closer look at the home" },
  { file: "P1013376-AI.jpeg", label: "A closer look at the home" },
  { file: "P1013378-AI.jpeg", label: "A closer look at the home" },
  { file: "P1013380-AI.jpeg", label: "A closer look at the home" },
  { file: "P1013411-AI.jpeg", label: "A closer look at the home" },
  { file: "P1013431-AI.jpeg", label: "A closer look at the home" }
];

const initialPhotoCount = 12;
const galleryGrid = document.getElementById("galleryGrid");
const showAllButton = document.getElementById("showAllPhotos");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxCount = document.getElementById("lightboxCount");
const closeButton = document.getElementById("lightboxClose");
const previousButton = document.getElementById("lightboxPrev");
const nextButton = document.getElementById("lightboxNext");
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("navLinks");
const bookingCalendar = document.getElementById("bookingCalendar");
let currentIndex = 0;
let lastFocusedElement = null;

document.getElementById("year").textContent = new Date().getFullYear();

function photoMarkup(photo, index) {
  return [
    '<figure class="gallery-card">',
    '<button class="gallery-open" type="button" data-index="', index,
    '" aria-label="Open photo: ', photo.label, '">',
    '<img src="assets/media/', photo.file, '" alt="', photo.label,
    '" loading="lazy" decoding="async" />',
    '</button><figcaption><span>', photo.label,
    '</span><span>', String(index + 1).padStart(2, "0"), '</span></figcaption>',
    '</figure>'
  ].join("");
}

function renderPhotos(start, end) {
  const markup = photos.slice(start, end).map(function (photo, offset) {
    return photoMarkup(photo, start + offset);
  }).join("");
  galleryGrid.insertAdjacentHTML("beforeend", markup);
}

function showPhoto(index) {
  currentIndex = (index + photos.length) % photos.length;
  const photo = photos[currentIndex];
  lightboxImage.src = "assets/media/" + photo.file;
  lightboxImage.alt = photo.label;
  lightboxCaption.textContent = photo.label;
  lightboxCount.textContent = (currentIndex + 1) + " / " + photos.length;
}

function openLightbox(index) {
  lastFocusedElement = document.activeElement;
  showPhoto(index);
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  closeButton.focus();
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  lightboxImage.src = "";
  if (lastFocusedElement) lastFocusedElement.focus();
}

renderPhotos(0, initialPhotoCount);

showAllButton.addEventListener("click", function () {
  renderPhotos(initialPhotoCount, photos.length);
  showAllButton.parentElement.remove();
});

galleryGrid.addEventListener("click", function (event) {
  const button = event.target.closest(".gallery-open");
  if (button) openLightbox(Number(button.dataset.index));
});

closeButton.addEventListener("click", closeLightbox);
previousButton.addEventListener("click", function () { showPhoto(currentIndex - 1); });
nextButton.addEventListener("click", function () { showPhoto(currentIndex + 1); });
lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", function (event) {
  if (!lightbox.classList.contains("open")) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") showPhoto(currentIndex - 1);
  if (event.key === "ArrowRight") showPhoto(currentIndex + 1);
  if (event.key === "Tab") {
    const controls = [closeButton, previousButton, nextButton];
    const index = controls.indexOf(document.activeElement);
    if (event.shiftKey && index === 0) {
      event.preventDefault();
      nextButton.focus();
    } else if (!event.shiftKey && index === controls.length - 1) {
      event.preventDefault();
      closeButton.focus();
    }
  }
});

menuButton.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", function (event) {
  if (event.target.closest("a")) {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

bookingCalendar.querySelector("iframe").addEventListener("load", function () {
  bookingCalendar.classList.add("is-loaded");
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(function (item) { observer.observe(item); });
} else {
  revealItems.forEach(function (item) { item.classList.add("is-visible"); });
}
