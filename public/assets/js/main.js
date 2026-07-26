const photos = [
  { file: "villa-aerial-front.jpg", category: "outdoor", categoryLabel: "Aerial exterior", label: "Villa and private pool from the fairway side" },
  { file: "villa-aerial-caribbean.jpg", category: "outdoor", categoryLabel: "Aerial exterior", label: "1111 Pearl Court with the Caribbean beyond" },
  { file: "villa-aerial-pool.jpg", category: "outdoor", categoryLabel: "Aerial exterior", label: "Villa, private infinity pool, and terraces from above" },
  { file: "garden-entrance.jpg", category: "outdoor", categoryLabel: "Garden entrance", label: "Bougainvillea-framed entrance to the villa" },
  { file: "garden-exterior.jpg", category: "outdoor", categoryLabel: "Garden exterior", label: "Landscaped garden and covered outdoor living areas" },
  { file: "rear-garden.jpg", category: "outdoor", categoryLabel: "Garden exterior", label: "Walk-out garden beside the pool terrace" },
  { file: "pool-patio-overview.jpg", category: "outdoor", categoryLabel: "Pool terrace", label: "Private pool terrace with dining and lounge areas" },
  { file: "private-infinity-pool.jpg", category: "outdoor", categoryLabel: "Private infinity pool", label: "Infinity pool at garden level" },
  { file: "pergola-lounge.jpg", category: "outdoor", categoryLabel: "Patio lounge", label: "Shaded lounge beneath the garden pergola" },
  { file: "poolside-lounge.jpg", category: "outdoor", categoryLabel: "Poolside lounge", label: "Covered lounge beside the infinity pool" },
  { file: "poolside-dining.jpg", category: "outdoor", categoryLabel: "Outdoor dining", label: "Dining table overlooking the private pool" },
  { file: "infinity-edge.jpg", category: "outdoor", categoryLabel: "Private infinity pool", label: "Sun loungers beside the infinity edge" },
  { file: "covered-pool-patio.jpg", category: "outdoor", categoryLabel: "Covered patio", label: "Covered patio with lounge and dining seating" },
  { file: "main-living-wide.jpg", category: "living", categoryLabel: "Living room", label: "Bright main-level living room with pool access" },
  { file: "living-pool-doors.jpg", category: "living", categoryLabel: "Living room", label: "Living room opening directly to the pool terrace" },
  { file: "main-level-flex-nook.jpg", category: "living", categoryLabel: "Flexible main-level area", label: "Desk nook within the flexible main-level living area" },
  { file: "dining-open-plan.jpg", category: "living", categoryLabel: "Dining area", label: "Dining area connected to the living room and kitchen" },
  { file: "entry-staircase.jpg", category: "living", categoryLabel: "Entry hall", label: "Main entry and staircase to the two king suites" },
  { file: "dining-garden.jpg", category: "living", categoryLabel: "Dining area", label: "Dining area with garden doors and tropical light" },
  { file: "kitchen-island.jpg", category: "living", categoryLabel: "Kitchen", label: "Granite island and full-size stainless appliances" },
  { file: "kitchen-range.jpg", category: "living", categoryLabel: "Kitchen", label: "Range, refrigerator, and warm wood cabinetry" },
  { file: "kitchen-cabinetry.jpg", category: "living", categoryLabel: "Kitchen", label: "Fully equipped kitchen with generous storage" },
  { file: "kitchen-open-plan.jpg", category: "living", categoryLabel: "Kitchen", label: "Kitchen island looking into the dining and living areas" },
  { file: "main-floor-open-plan.jpg", category: "living", categoryLabel: "Open-plan main level", label: "Open-plan kitchen, dining, and living spaces" },
  { file: "living-seating.jpg", category: "living", categoryLabel: "Living room", label: "Comfortable lounge seating facing the pool terrace" },
  { file: "main-level-powder-room.jpg", category: "living", categoryLabel: "Main-level powder room", label: "Convenient powder room on the main level" },
  { file: "primary-bedroom-wide.jpg", category: "primary", categoryLabel: "Primary bedroom", label: "Primary king bedroom with vaulted wood ceiling" },
  { file: "primary-bedroom-bed.jpg", category: "primary", categoryLabel: "Primary bedroom", label: "King bed framed by warm wood furnishings" },
  { file: "primary-bedroom-balcony.jpg", category: "primary", categoryLabel: "Primary bedroom", label: "Primary bedroom with doors to its private terrace" },
  { file: "primary-terrace.jpg", category: "primary", categoryLabel: "Primary bedroom terrace", label: "Furnished private terrace overlooking Pristine Bay" },
  { file: "primary-terrace-villa.jpg", category: "primary", categoryLabel: "Primary bedroom terrace", label: "Private terrace outside the primary king suite" },
  { file: "primary-terrace-pool-view.jpg", category: "primary", categoryLabel: "Primary bedroom terrace", label: "Infinity pool and hillside view from the primary terrace" },
  { file: "primary-closet.jpg", category: "primary", categoryLabel: "Primary bedroom closet", label: "Walk-in closet with built-in wood storage" },
  { file: "primary-ensuite-water-closet.jpg", category: "primary", categoryLabel: "Primary ensuite", label: "Private water closet in the primary ensuite" },
  { file: "primary-ensuite-vanity.jpg", category: "primary", categoryLabel: "Primary ensuite", label: "Stone-finished vanity in the primary ensuite" },
  { file: "primary-ensuite-shower.jpg", category: "primary", categoryLabel: "Primary ensuite", label: "Walk-in shower in the primary ensuite" },
  { file: "guest-bedroom.jpg", category: "guest", categoryLabel: "Guest bedroom", label: "Guest king bedroom with vaulted wood ceiling" },
  { file: "guest-closet.jpg", category: "guest", categoryLabel: "Guest bedroom closet", label: "Walk-in storage adjoining the guest bedroom" },
  { file: "guest-bedroom-tv.jpg", category: "guest", categoryLabel: "Guest bedroom", label: "Guest king bedroom with television and ensuite" },
  { file: "guest-terrace.jpg", category: "guest", categoryLabel: "Guest bedroom terrace", label: "Private guest terrace with tropical views" },
  { file: "guest-bedroom-terrace.jpg", category: "guest", categoryLabel: "Guest bedroom", label: "Guest bedroom opening to its private terrace" },
  { file: "guest-ensuite.jpg", category: "guest", categoryLabel: "Guest bedroom bathroom", label: "Guest ensuite with tub and shower" },
  { file: "guest-terrace-seating.jpg", category: "guest", categoryLabel: "Guest bedroom terrace", label: "Intimate seating on the guest terrace" },
  { file: "guest-ensuite-vanity.jpg", category: "guest", categoryLabel: "Guest bedroom bathroom", label: "Vanity and shower in the guest ensuite" },
  { file: "pristine-bay-aerial-golf.jpg", category: "location", categoryLabel: "Pristine Bay", label: "Pristine Bay golf course, shoreline, and Caribbean water" },
  { file: "pristine-bay-aerial-coast.jpg", category: "location", categoryLabel: "Pristine Bay", label: "Pristine Bay community along the Caribbean coast" },
  { file: "pristine-bay-villas-golf.jpg", category: "location", categoryLabel: "Black Pearl Golf Course", label: "Villas set among the rolling golf fairways" },
  { file: "pristine-bay-sports-courts.jpg", category: "location", categoryLabel: "Sports courts", label: "Tennis and pickleball courts within Pristine Bay" },
  { file: "pristine-bay-beach-club.jpg", category: "location", categoryLabel: "Pristine Bay Beach Club", label: "Beach Club pools beside the Caribbean shoreline" },
  { file: "beach-club-pool-aerial.jpg", category: "location", categoryLabel: "Pristine Bay Beach Club", label: "Beach Club pools and landscaped grounds from above" },
  { file: "villa-street-entrance.jpg", category: "location", categoryLabel: "1111 Pearl Court", label: "The villa's garden entrance on Pearl Court" },
  { file: "beach-club-entrance.jpg", category: "location", categoryLabel: "Pristine Bay Beach Club", label: "Entrance to the Pristine Bay Beach Club" },
  { file: "beach-club-lawn.jpg", category: "location", categoryLabel: "Pristine Bay Beach Club", label: "Palm-lined lawn leading toward the water" },
  { file: "beach-club-pool.jpg", category: "location", categoryLabel: "Pristine Bay Beach Club", label: "Beach Club infinity pool facing the Caribbean" },
  { file: "beach-club-shore.jpg", category: "location", categoryLabel: "Beach access", label: "Sandy shoreline and calm Caribbean water" },
  { file: "black-pearl-fairway.jpg", category: "location", categoryLabel: "Black Pearl Golf Course", label: "Tropical fairway at the Black Pearl Golf Course" },
  { file: "black-pearl-fairway-hills.jpg", category: "location", categoryLabel: "Black Pearl Golf Course", label: "Rolling fairways and green hills of Pristine Bay" }
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
const filterSelect = document.getElementById("galleryFilterSelect");
const galleryResultCount = document.getElementById("galleryResultCount");
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
let pointerStartY = null;
let pointerId = null;

document.getElementById("year").textContent = new Date().getFullYear();

function webpPath(file) {
  return "assets/media/enhanced/" + file.replace(/\.(jpe?g)$/i, ".webp");
}

function originalPath(file) {
  return "assets/media/gallery/" + file;
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
  thumbnailRail.innerHTML = filteredIndexes.map(function (photoIndex, filteredPosition) {
    const photo = photos[photoIndex];
    return [
      '<button class="thumb', photoIndex === currentIndex ? " is-active" : "",
      '" type="button" data-index="', photoIndex,
      '" aria-label="Show photo ', filteredPosition + 1, " of ", filteredIndexes.length, ": ", photo.label, '">',
      '<img src="', thumbPath(photo.file), '" alt="" loading="lazy" decoding="async" />',
      '<span>', String(filteredPosition + 1).padStart(2, "0"), "</span></button>"
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
  const filteredPosition = filteredIndexes.indexOf(currentIndex);
  galleryCount.textContent = String(filteredPosition + 1).padStart(2, "0") + " / " + String(filteredIndexes.length).padStart(2, "0");
  Array.from(thumbnailRail.querySelectorAll(".thumb")).forEach(function (thumb) {
    const active = Number(thumb.dataset.index) === currentIndex;
    thumb.classList.toggle("is-active", active);
    if (active) thumb.setAttribute("aria-current", "true");
    else thumb.removeAttribute("aria-current");
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
  if (!filterButtons.some(function (button) { return button.dataset.filter === filter; })) filter = "all";
  activeFilter = filter;
  filteredIndexes = photos.map(function (photo, index) {
    return filter === "all" || photo.category === filter ? index : -1;
  }).filter(function (index) { return index >= 0; });
  filterButtons.forEach(function (button) {
    const active = button.dataset.filter === filter;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  filterSelect.value = filter;
  galleryResultCount.textContent = filteredIndexes.length + (filteredIndexes.length === 1 ? " photo" : " photos");
  currentIndex = filteredIndexes[0];
  renderThumbnails();
  updateGallery(currentIndex, false);
}

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    applyFilter(button.dataset.filter);
  });
});

filterSelect.addEventListener("change", function () {
  applyFilter(filterSelect.value);
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
  const filteredPosition = filteredIndexes.indexOf(currentIndex);
  lightboxCount.textContent = String(filteredPosition + 1).padStart(2, "0") + " / " + String(filteredIndexes.length).padStart(2, "0");
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
  if (!event.isPrimary) return;
  pointerStartX = event.clientX;
  pointerStartY = event.clientY;
  pointerId = event.pointerId;
});
galleryStage.addEventListener("pointerup", function (event) {
  if (pointerStartX === null || event.pointerId !== pointerId) return;
  const distanceX = event.clientX - pointerStartX;
  const distanceY = event.clientY - pointerStartY;
  if (Math.abs(distanceX) > 55 && Math.abs(distanceX) > Math.abs(distanceY)) moveGallery(distanceX > 0 ? -1 : 1);
  pointerStartX = null;
  pointerStartY = null;
  pointerId = null;
});
galleryStage.addEventListener("pointercancel", function () {
  pointerStartX = null;
  pointerStartY = null;
  pointerId = null;
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
