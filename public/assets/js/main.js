const photos = [
  { file: "DJI_0103.jpg", category: "outdoor", categoryLabel: "Aerial exterior", label: "Villa, private pool, and terraces from above" },
  { file: "DJI_0068.jpg", category: "location", categoryLabel: "Pristine Bay", label: "Pristine Bay setting with the Caribbean beyond" },
  { file: "DJI_0053.jpg", category: "outdoor", categoryLabel: "Aerial exterior", label: "Villa and landscaped grounds from above" },
  { file: "P1013238-AI.jpeg", category: "outdoor", categoryLabel: "Exterior", label: "Garden-side exterior and covered patios" },
  { file: "P1013245-AI.jpeg", category: "outdoor", categoryLabel: "Private pool", label: "Pool at garden level" },
  { file: "P1013252-AI.jpeg", category: "outdoor", categoryLabel: "Outdoor living", label: "Shaded garden lounge beside the villa" },
  { file: "P1013259-AI.jpeg", category: "living", categoryLabel: "Living room", label: "Living room opening to the pool terrace" },
  { file: "P1013260-AI.jpeg", category: "outdoor", categoryLabel: "Outdoor living", label: "Covered poolside lounge" },
  { file: "P1013262-AI.jpeg", category: "outdoor", categoryLabel: "Outdoor dining", label: "Dining terrace beside the private pool" },
  { file: "P1013273-AI.jpeg", category: "outdoor", categoryLabel: "Outdoor living", label: "Covered terrace, lounge, and pool" },
  { file: "P1013283-AI.jpeg", category: "living", categoryLabel: "Interior", label: "Entry hall and staircase" },
  { file: "P1013288-AI.jpeg", category: "living", categoryLabel: "Dining", label: "Dining table with doors opening to the garden" },
  { file: "P1013290-AI.jpeg", category: "living", categoryLabel: "Kitchen", label: "Kitchen breakfast bar and full-size refrigerator" },
  { file: "P1013295-AI.jpeg", category: "living", categoryLabel: "Kitchen", label: "Full kitchen with warm wood cabinetry" },
  { file: "P1013296-AI.jpeg", category: "living", categoryLabel: "Kitchen", label: "Kitchen island looking into the dining and living spaces" },
  { file: "P1013306-AI.jpeg", category: "living", categoryLabel: "Open-plan living", label: "Main floor from the dining area" },
  { file: "P1013315-AI.jpeg", category: "living", categoryLabel: "Living room", label: "Living room and dining area" },
  { file: "P1013321-AI.jpeg", category: "bathroom", categoryLabel: "Ensuite bathroom", label: "Ensuite bathroom with a soaking tub" },
  { file: "P1013325-AI.jpeg", category: "bedroom", categoryLabel: "Bedroom", label: "Spacious bedroom with a vaulted wood ceiling" },
  { file: "P1013330-AI.jpeg", category: "bedroom", categoryLabel: "Bedroom", label: "Bedroom with garden and hillside views" },
  { file: "P1013334-AI-2.jpeg", category: "outdoor", categoryLabel: "Upper terrace", label: "Furnished upper terrace overlooking Pristine Bay" },
  { file: "P1013338-AI.jpeg", category: "outdoor", categoryLabel: "Private pool", label: "Private pool and sun terrace from the balcony" },
  { file: "P1013346-AI.jpeg", category: "bedroom", categoryLabel: "Storage", label: "Walk-in wardrobe with built-in wood storage" },
  { file: "P1013349-AI.jpeg", category: "bathroom", categoryLabel: "Bathroom", label: "Private water closet and built-in shelving" },
  { file: "P1013353-AI.jpeg", category: "bathroom", categoryLabel: "Bathroom", label: "Stone-finished vanity and walk-in shower" },
  { file: "P1013357-AI.jpeg", category: "bathroom", categoryLabel: "Bathroom", label: "Walk-in shower and stone-finished bathroom" },
  { file: "P1013359-AI.jpeg", category: "bedroom", categoryLabel: "Upper floor", label: "Upper landing connecting the bedrooms" },
  { file: "P1013361-AI.jpeg", category: "bedroom", categoryLabel: "Bedroom", label: "Guest bedroom with a vaulted ceiling" },
  { file: "P1013365-AI.jpeg", category: "bedroom", categoryLabel: "Bedroom", label: "Guest bedroom with television and ensuite" },
  { file: "P1013370-AI.jpeg", category: "outdoor", categoryLabel: "Private balcony", label: "Private balcony with tropical views" },
  { file: "P1013376-AI.jpeg", category: "bedroom", categoryLabel: "Bedroom", label: "Guest bedroom opening to a private balcony" },
  { file: "P1013378-AI.jpeg", category: "bathroom", categoryLabel: "Bathroom", label: "Bathroom with a tub and shower" },
  { file: "P1013380-AI.jpeg", category: "outdoor", categoryLabel: "Private balcony", label: "Balcony seating overlooking neighbouring villas" },
  { file: "P1013397-AI.jpeg", category: "living", categoryLabel: "Open-plan living", label: "Living room, dining area, and kitchen" },
  { file: "P1013411-AI.jpeg", category: "outdoor", categoryLabel: "Garden entrance", label: "Bougainvillea-covered garden entrance" },
  { file: "P1013431-AI.jpeg", category: "location", categoryLabel: "Pristine Bay", label: "Pristine Bay golf course and rolling fairways" },
  { file: "P1013434-AI.jpeg", category: "location", categoryLabel: "Pristine Bay", label: "Golf course, green hills, and tropical sky" }
];

const routeNames = ["home", "gallery", "explore", "book"];
const views = Array.from(document.querySelectorAll("[data-view]"));
const routeButtons = Array.from(document.querySelectorAll(".route-button"));
const navButtons = Array.from(document.querySelectorAll(".nav-button"));
const navLinks = document.getElementById("navLinks");
const menuButton = document.querySelector(".menu-toggle");
const galleryImage = document.getElementById("galleryImage");
const gallerySource = document.getElementById("gallerySource");
const galleryCaption = document.getElementById("galleryCaption");
const galleryCategory = document.getElementById("galleryCategory");
const galleryCount = document.getElementById("galleryCount");
const thumbnailRail = document.getElementById("thumbnailRail");
const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const galleryStage = document.getElementById("galleryStage");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxSource = document.getElementById("lightboxSource");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxCount = document.getElementById("lightboxCount");
const lightboxClose = document.getElementById("lightboxClose");
let currentIndex = 0;
let activeFilter = "all";
let filteredIndexes = photos.map(function (_, index) { return index; });
let lastFocusedElement = null;
let pointerStartX = null;

document.getElementById("year").textContent = new Date().getFullYear();

function webpPath(file) {
  return "assets/media/enhanced/" + file.replace(/\.(jpe?g)$/i, ".webp");
}

function originalPath(file) {
  return "assets/media/" + file;
}

function thumbPath(file) {
  return "assets/media/thumbs/" + file.replace(/\.(jpe?g)$/i, ".webp");
}

function setRoute(route, updateHistory) {
  const safeRoute = routeNames.includes(route) ? route : "home";
  views.forEach(function (view) {
    const active = view.dataset.view === safeRoute;
    view.hidden = !active;
    view.classList.toggle("is-active", active);
  });
  navButtons.forEach(function (button) {
    const active = button.dataset.route === safeRoute;
    button.classList.toggle("is-active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  navLinks.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  if (updateHistory) history.pushState({ route: safeRoute }, "", "#" + safeRoute);
  window.scrollTo({ top: 0, behavior: "instant" });
  if (safeRoute === "gallery") updateGallery(currentIndex, false);
}

routeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    setRoute(button.dataset.route, true);
  });
});

menuButton.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

window.addEventListener("popstate", function () {
  setRoute(location.hash.slice(1), false);
});

function renderThumbnails() {
  thumbnailRail.innerHTML = filteredIndexes.map(function (photoIndex) {
    const photo = photos[photoIndex];
    return [
      '<button class="thumb', photoIndex === currentIndex ? " is-active" : "",
      '" type="button" data-index="', photoIndex,
      '" aria-label="Show photo: ', photo.label, '">',
      '<img src="', thumbPath(photo.file), '" alt="" loading="lazy" decoding="async" />',
      '<span>', String(photoIndex + 1).padStart(2, "0"), "</span></button>"
    ].join("");
  }).join("");
}

function updateGallery(index, moveThumbnail) {
  if (!filteredIndexes.includes(index)) index = filteredIndexes[0];
  currentIndex = index;
  const photo = photos[currentIndex];
  gallerySource.srcset = webpPath(photo.file);
  galleryImage.src = originalPath(photo.file);
  galleryImage.alt = photo.label;
  galleryCategory.textContent = photo.categoryLabel;
  galleryCaption.textContent = photo.label;
  galleryCount.textContent = String(currentIndex + 1).padStart(2, "0") + " / " + photos.length;
  Array.from(thumbnailRail.querySelectorAll(".thumb")).forEach(function (thumb) {
    thumb.classList.toggle("is-active", Number(thumb.dataset.index) === currentIndex);
  });
  if (moveThumbnail) {
    const activeThumb = thumbnailRail.querySelector('[data-index="' + currentIndex + '"]');
    if (activeThumb) activeThumb.scrollIntoView({ block: "nearest", inline: "center" });
  }
  if (lightbox.classList.contains("open")) updateLightbox();
}

function moveGallery(direction) {
  const position = filteredIndexes.indexOf(currentIndex);
  const nextPosition = (position + direction + filteredIndexes.length) % filteredIndexes.length;
  updateGallery(filteredIndexes[nextPosition], true);
}

function applyFilter(filter) {
  activeFilter = filter;
  filteredIndexes = photos.map(function (photo, index) {
    return filter === "all" || photo.category === filter ? index : -1;
  }).filter(function (index) { return index >= 0; });
  filterButtons.forEach(function (button) {
    const active = button.dataset.filter === filter;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  currentIndex = filteredIndexes[0];
  renderThumbnails();
  updateGallery(currentIndex, false);
}

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    applyFilter(button.dataset.filter);
  });
});

thumbnailRail.addEventListener("click", function (event) {
  const thumb = event.target.closest(".thumb");
  if (thumb) updateGallery(Number(thumb.dataset.index), false);
});

document.getElementById("galleryPrev").addEventListener("click", function () { moveGallery(-1); });
document.getElementById("galleryNext").addEventListener("click", function () { moveGallery(1); });

function updateLightbox() {
  const photo = photos[currentIndex];
  lightboxSource.srcset = webpPath(photo.file);
  lightboxImage.src = originalPath(photo.file);
  lightboxImage.alt = photo.label;
  lightboxCaption.textContent = photo.label;
  lightboxCount.textContent = String(currentIndex + 1).padStart(2, "0") + " / " + photos.length;
}

function openLightbox() {
  lastFocusedElement = document.activeElement;
  updateLightbox();
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  lightboxImage.src = "";
  lightboxSource.srcset = "";
  if (lastFocusedElement) lastFocusedElement.focus();
}

document.getElementById("galleryExpand").addEventListener("click", openLightbox);
lightboxClose.addEventListener("click", closeLightbox);
document.getElementById("lightboxPrev").addEventListener("click", function () { moveGallery(-1); });
document.getElementById("lightboxNext").addEventListener("click", function () { moveGallery(1); });
lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) closeLightbox();
});

galleryStage.addEventListener("pointerdown", function (event) {
  pointerStartX = event.clientX;
});
galleryStage.addEventListener("pointerup", function (event) {
  if (pointerStartX === null) return;
  const distance = event.clientX - pointerStartX;
  if (Math.abs(distance) > 55) moveGallery(distance > 0 ? -1 : 1);
  pointerStartX = null;
});

document.addEventListener("keydown", function (event) {
  if (lightbox.classList.contains("open")) {
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") moveGallery(-1);
    if (event.key === "ArrowRight") moveGallery(1);
    return;
  }
  if (!document.getElementById("galleryView").hidden) {
    if (event.key === "ArrowLeft") moveGallery(-1);
    if (event.key === "ArrowRight") moveGallery(1);
  }
});

document.querySelector("#bookingCalendar iframe").addEventListener("load", function () {
  document.getElementById("bookingCalendar").classList.add("is-loaded");
});

document.querySelectorAll(".video-fullscreen").forEach(function (button) {
  button.addEventListener("click", function () {
    const videos = document.querySelectorAll("#exploreView video");
    const video = videos[Number(button.dataset.video)];
    if (!video) return;
    if (video.requestFullscreen) video.requestFullscreen();
    else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
  });
});

renderThumbnails();
updateGallery(0, false);
const initialRoute = routeNames.includes(location.hash.slice(1)) ? location.hash.slice(1) : "home";
setRoute(initialRoute, false);
