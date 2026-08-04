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
  { file: "main-level-flex-nook.jpg", category: "living", categoryLabel: "Main-level work nook", label: "Desk nook within the open-plan main level" },
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

const routeNames = ["home", "gallery", "activities", "explore", "book"];
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
const lightboxMedia = document.getElementById("lightboxMedia");
const lightboxPicture = document.getElementById("lightboxPicture");
const lightboxZoomLabel = document.getElementById("lightboxZoomLabel");
let currentIndex = 0;
let activeFilter = "all";
let filteredIndexes = photos.map(function (_, index) { return index; });
let lastFocusedElement = null;
let pointerStartX = null;
let pointerStartY = null;
let pointerId = null;
let lightboxScale = 1;
let lightboxTranslateX = 0;
let lightboxTranslateY = 0;
let lightboxDragStart = null;
let lightboxPinchStart = null;
let lightboxHadPinch = false;
let lastLightboxTap = 0;
const lightboxPointers = new Map();
let pristineBayMap = null;
const pristineBayMarkers = {};
const pristineBayLocations = [
  { id: "villa", number: 1, label: "1111 Pearl Court", detail: "Villa and private pool", coordinates: [16.373745, -86.464218] },
  { id: "golf", number: 2, label: "Black Pearl Golf Course", detail: "18-hole course", coordinates: [16.3723, -86.458] },
  { id: "beach", number: 3, label: "Pristine Bay Beach Club", detail: "Pools and Caribbean shoreline", coordinates: [16.37545, -86.46532] },
  { id: "scuba", number: 4, label: "Pristine Bay Scuba Shop", detail: "Dive experiences and equipment", coordinates: [16.3761, -86.4639] }
];
let activitiesMap = null;
const activityMarkers = {};
const activityLocations = [
  { id: "golf", number: 1, label: "Black Pearl Golf Course", detail: "Golf", coordinates: [16.3723, -86.458] },
  { id: "scuba", number: 2, label: "Pristine Bay Scuba Shop", detail: "Diving", coordinates: [16.3761, -86.4639] },
  { id: "beachclub", number: 3, label: "Pristine Bay Beach Club", detail: "Beach club", coordinates: [16.37545, -86.46532] },
  { id: "westbay", number: 4, label: "West Bay Beach", detail: "Beach", coordinates: [16.2734, -86.5991] },
  { id: "westend", number: 5, label: "West End Dining", detail: "Dining", coordinates: [16.3054, -86.5936] },
  { id: "brewery", number: 6, label: "Roatán Island Brewing Company", detail: "Brewery", coordinates: [16.3517, -86.5238] },
  { id: "carambola", number: 7, label: "Carambola Botanical Gardens", detail: "Attraction", coordinates: [16.3371, -86.5682] },
  { id: "iguana", number: 8, label: "Arch’s Iguana & Marine Park", detail: "Family stop", coordinates: [16.3554, -86.4408] }
];

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

function setActiveMapLocation(locationId, moveMap) {
  document.querySelectorAll(".map-location-link").forEach(function (link) {
    link.classList.toggle("is-active", link.dataset.mapLocation === locationId);
  });
  pristineBayLocations.forEach(function (location) {
    const marker = pristineBayMarkers[location.id];
    if (!marker) return;
    const markerElement = marker.getElement();
    if (markerElement) markerElement.classList.toggle("is-active", location.id === locationId);
    marker.setZIndexOffset(location.id === locationId ? 1000 : 0);
  });
  if (moveMap && pristineBayMap) {
    const location = pristineBayLocations.find(function (item) { return item.id === locationId; });
    if (location) pristineBayMap.panTo(location.coordinates, { animate: true, duration: .35 });
  }
}

function initializePristineBayMap() {
  const mapElement = document.getElementById("pristineBayMap");
  if (!mapElement || !window.L) return;
  if (pristineBayMap) {
    pristineBayMap.invalidateSize();
    return;
  }

  mapElement.innerHTML = "";
  pristineBayMap = window.L.map(mapElement, {
    scrollWheelZoom: false,
    tap: true
  });
  window.L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    subdomains: "abcd",
    maxZoom: 20,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
  }).addTo(pristineBayMap);

  pristineBayLocations.forEach(function (location) {
    const icon = window.L.divIcon({
      className: "map-pin",
      html: '<span class="map-pin-shape"><b>' + location.number + "</b></span>",
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -22]
    });
    const marker = window.L.marker(location.coordinates, {
      icon: icon,
      keyboard: true,
      title: location.label
    }).addTo(pristineBayMap);
    marker.bindPopup("<strong>" + location.label + "</strong><br>" + location.detail);
    marker.on("mouseover", function () { setActiveMapLocation(location.id, false); });
    marker.on("mouseout", function () { setActiveMapLocation(null, false); });
    marker.on("click", function () {
      setActiveMapLocation(location.id, true);
      marker.openPopup();
    });
    pristineBayMarkers[location.id] = marker;
  });

  const bounds = window.L.latLngBounds(pristineBayLocations.map(function (location) { return location.coordinates; }));
  pristineBayMap.fitBounds(bounds, { padding: [28, 28], maxZoom: 15 });

  document.querySelectorAll(".map-location-link").forEach(function (link) {
    link.addEventListener("mouseenter", function () { setActiveMapLocation(link.dataset.mapLocation, true); });
    link.addEventListener("mouseleave", function () { setActiveMapLocation(null, false); });
    link.addEventListener("focus", function () { setActiveMapLocation(link.dataset.mapLocation, true); });
    link.addEventListener("blur", function () { setActiveMapLocation(null, false); });
  });
}

function setActiveActivityLocation(locationId, moveMap) {
  document.querySelectorAll(".activity-map-link").forEach(function (link) {
    link.classList.toggle("is-active", link.dataset.activityLocation === locationId);
  });
  activityLocations.forEach(function (location) {
    const marker = activityMarkers[location.id];
    if (!marker) return;
    const markerElement = marker.getElement();
    if (markerElement) markerElement.classList.toggle("is-active", location.id === locationId);
    marker.setZIndexOffset(location.id === locationId ? 1000 : 0);
  });
  if (moveMap && activitiesMap) {
    const location = activityLocations.find(function (item) { return item.id === locationId; });
    if (location) activitiesMap.panTo(location.coordinates, { animate: true, duration: .35 });
  }
}

function initializeActivitiesMap() {
  const mapElement = document.getElementById("activitiesMap");
  if (!mapElement || !window.L) return;
  if (activitiesMap) {
    activitiesMap.invalidateSize();
    return;
  }

  mapElement.innerHTML = "";
  activitiesMap = window.L.map(mapElement, { scrollWheelZoom: false, tap: true });
  window.L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    subdomains: "abcd",
    maxZoom: 20,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
  }).addTo(activitiesMap);

  activityLocations.forEach(function (location) {
    const icon = window.L.divIcon({
      className: "map-pin activity-pin activity-pin-" + location.number,
      html: '<span class="map-pin-shape"><b>' + location.number + "</b></span>",
      iconSize: [40, 40], iconAnchor: [20, 20], popupAnchor: [0, -22]
    });
    const marker = window.L.marker(location.coordinates, { icon: icon, keyboard: true, title: location.label }).addTo(activitiesMap);
    marker.bindPopup("<strong>" + location.label + "</strong><br>" + location.detail);
    marker.on("mouseover", function () { setActiveActivityLocation(location.id, false); });
    marker.on("mouseout", function () { setActiveActivityLocation(null, false); });
    marker.on("click", function () { setActiveActivityLocation(location.id, true); marker.openPopup(); });
    activityMarkers[location.id] = marker;
  });

  activitiesMap.fitBounds(window.L.latLngBounds(activityLocations.map(function (location) { return location.coordinates; })), { padding: [34, 34], maxZoom: 11 });
  document.querySelectorAll(".activity-map-link").forEach(function (link) {
    link.addEventListener("mouseenter", function () { setActiveActivityLocation(link.dataset.activityLocation, true); });
    link.addEventListener("mouseleave", function () { setActiveActivityLocation(null, false); });
    link.addEventListener("focus", function () { setActiveActivityLocation(link.dataset.activityLocation, true); });
    link.addEventListener("blur", function () { setActiveActivityLocation(null, false); });
  });
}

/* Lodgix serves the availability calendar cross-origin, so its own layout cannot be
   restyled. Give it the narrowest complete seven-column viewport, then scale that
   fixed canvas only when the available width is smaller. This keeps Edge from
   shrinking the iframe box and its contents twice through the non-standard `zoom`
   property, while preserving a usable calendar on phones. */
const CALENDAR_WIDTH = 500;
const CALENDAR_HEIGHT = 840;

/* Keep interaction measurement first-party and invisible. Each event loads a
   no-index page carrying the same Cloudflare Web Analytics beacon, which makes
   named interactions filterable by path without collecting personal details. */
function trackSiteEvent(eventName) {
  const safeName = String(eventName).replace(/[^a-z0-9-]/gi, "").toLowerCase();
  if (!safeName) return;

  const beaconFrame = document.createElement("iframe");
  beaconFrame.hidden = true;
  beaconFrame.tabIndex = -1;
  beaconFrame.setAttribute("aria-hidden", "true");
  beaconFrame.src = "/analytics-events/" + safeName + "/";
  document.body.appendChild(beaconFrame);
  window.setTimeout(function () { beaconFrame.remove(); }, 5000);
}

function fitBookingCalendar() {
  const frame = document.getElementById("bookingCalendar");
  const frameWidth = frame.clientWidth;
  if (!frameWidth) return;

  const scale = Math.min(frameWidth / CALENDAR_WIDTH, 1);
  frame.style.setProperty("--cal-scale", String(scale));
  frame.style.setProperty("--cal-frame-h", Math.round(CALENDAR_HEIGHT * scale) + "px");
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
  if (updateHistory) {
    history.pushState({ route: safeRoute }, "", "#" + safeRoute);
    trackSiteEvent("section-" + safeRoute);
  }
  window.scrollTo({ top: 0, behavior: "instant" });
  if (safeRoute === "gallery") updateGallery(currentIndex, false);
  if (safeRoute === "book") fitBookingCalendar();
  if (safeRoute === "activities") {
    window.setTimeout(function () {
      initializeActivitiesMap();
      if (activitiesMap) activitiesMap.invalidateSize();
    }, 0);
  }
  if (safeRoute === "explore") {
    window.setTimeout(function () {
      initializePristineBayMap();
      if (pristineBayMap) pristineBayMap.invalidateSize();
    }, 0);
  }
}

routeButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    if (button.tagName === "A") event.preventDefault();
    setRoute(button.dataset.route, true);
    if (button.dataset.galleryFilter) applyFilter(button.dataset.galleryFilter);
  });
});

document.querySelectorAll(".booking-cta").forEach(function (link) {
  link.addEventListener("click", function () {
    trackSiteEvent("booking-page-open");
  });
});

document.querySelectorAll('a[href*="roatanpropertymanagement.com"]').forEach(function (link) {
  link.addEventListener("click", function () {
    trackSiteEvent("property-manager-click");
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
  resetLightboxZoom(false);
  const photo = photos[currentIndex];
  lightboxSource.srcset = webpPath(photo.file);
  lightboxImage.src = originalPath(photo.file);
  lightboxImage.alt = photo.label;
  lightboxCaption.textContent = photo.label;
  const filteredPosition = filteredIndexes.indexOf(currentIndex);
  lightboxCount.textContent = String(filteredPosition + 1).padStart(2, "0") + " / " + String(filteredIndexes.length).padStart(2, "0");
}

function applyLightboxTransform(animate) {
  if (lightboxScale <= 1) {
    lightboxScale = 1;
    lightboxTranslateX = 0;
    lightboxTranslateY = 0;
  } else {
    const maxX = lightboxMedia.clientWidth * (lightboxScale - 1) / 2;
    const maxY = lightboxMedia.clientHeight * (lightboxScale - 1) / 2;
    lightboxTranslateX = Math.max(-maxX, Math.min(maxX, lightboxTranslateX));
    lightboxTranslateY = Math.max(-maxY, Math.min(maxY, lightboxTranslateY));
  }
  lightboxPicture.style.transition = animate ? "transform .18s ease" : "none";
  lightboxPicture.style.transform = "translate3d(" + lightboxTranslateX + "px," + lightboxTranslateY + "px,0) scale(" + lightboxScale + ")";
  lightboxZoomLabel.textContent = Math.round(lightboxScale * 100) + "%";
  lightboxMedia.classList.toggle("is-zoomed", lightboxScale > 1);
}

function setLightboxZoom(nextScale, animate) {
  lightboxScale = Math.max(1, Math.min(4, nextScale));
  if (lightboxScale < 1.02) lightboxScale = 1;
  applyLightboxTransform(animate);
}

function resetLightboxZoom(animate) {
  lightboxPointers.clear();
  lightboxDragStart = null;
  lightboxPinchStart = null;
  lightboxHadPinch = false;
  lightboxTranslateX = 0;
  lightboxTranslateY = 0;
  lightboxScale = 1;
  lightboxMedia.classList.remove("is-dragging");
  applyLightboxTransform(animate);
}

function pointerDistance(pointerValues) {
  const first = pointerValues[0];
  const second = pointerValues[1];
  return Math.hypot(second.x - first.x, second.y - first.y);
}

function openLightbox() {
  lastFocusedElement = document.activeElement;
  updateLightbox();
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  resetLightboxZoom(false);
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  resetLightboxZoom(false);
  lightboxImage.src = "";
  lightboxSource.srcset = "";
  if (lastFocusedElement) lastFocusedElement.focus();
}

document.getElementById("galleryExpand").addEventListener("click", openLightbox);
lightboxClose.addEventListener("click", closeLightbox);
document.getElementById("lightboxPrev").addEventListener("click", function () { moveGallery(-1); });
document.getElementById("lightboxNext").addEventListener("click", function () { moveGallery(1); });
document.getElementById("lightboxZoomIn").addEventListener("click", function () { setLightboxZoom(lightboxScale + .5, true); });
document.getElementById("lightboxZoomOut").addEventListener("click", function () { setLightboxZoom(lightboxScale - .5, true); });
document.getElementById("lightboxZoomReset").addEventListener("click", function () { resetLightboxZoom(true); });
lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) closeLightbox();
});
lightboxMedia.addEventListener("wheel", function (event) {
  event.preventDefault();
  setLightboxZoom(lightboxScale + (event.deltaY < 0 ? .35 : -.35), false);
}, { passive: false });
lightboxMedia.addEventListener("dblclick", function () {
  if (lightboxScale > 1) resetLightboxZoom(true);
  else setLightboxZoom(2, true);
});
lightboxMedia.addEventListener("pointerdown", function (event) {
  event.preventDefault();
  lightboxMedia.setPointerCapture(event.pointerId);
  lightboxPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  if (lightboxPointers.size === 1) {
    lightboxDragStart = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      translateX: lightboxTranslateX,
      translateY: lightboxTranslateY,
      time: Date.now(),
      pointerType: event.pointerType
    };
    if (lightboxScale > 1) lightboxMedia.classList.add("is-dragging");
  } else if (lightboxPointers.size === 2) {
    lightboxHadPinch = true;
    lightboxPinchStart = {
      distance: pointerDistance(Array.from(lightboxPointers.values())),
      scale: lightboxScale
    };
  }
});
lightboxMedia.addEventListener("pointermove", function (event) {
  if (!lightboxPointers.has(event.pointerId)) return;
  lightboxPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  if (lightboxPointers.size === 2 && lightboxPinchStart) {
    const distance = pointerDistance(Array.from(lightboxPointers.values()));
    setLightboxZoom(lightboxPinchStart.scale * distance / lightboxPinchStart.distance, false);
  } else if (lightboxPointers.size === 1 && lightboxScale > 1 && lightboxDragStart) {
    lightboxTranslateX = lightboxDragStart.translateX + event.clientX - lightboxDragStart.x;
    lightboxTranslateY = lightboxDragStart.translateY + event.clientY - lightboxDragStart.y;
    applyLightboxTransform(false);
  }
});
function finishLightboxPointer(event) {
  if (!lightboxPointers.has(event.pointerId)) return;
  const dragStart = lightboxDragStart;
  lightboxPointers.delete(event.pointerId);
  if (lightboxPointers.size === 1) {
    const remaining = Array.from(lightboxPointers.entries())[0];
    lightboxDragStart = {
      pointerId: remaining[0],
      x: remaining[1].x,
      y: remaining[1].y,
      translateX: lightboxTranslateX,
      translateY: lightboxTranslateY,
      time: Date.now(),
      pointerType: event.pointerType
    };
  }
  if (lightboxPointers.size > 0) return;

  lightboxMedia.classList.remove("is-dragging");
  lightboxPinchStart = null;
  if (dragStart && !lightboxHadPinch) {
    const distanceX = event.clientX - dragStart.x;
    const distanceY = event.clientY - dragStart.y;
    const isTap = Math.abs(distanceX) < 10 && Math.abs(distanceY) < 10 && Date.now() - dragStart.time < 320;
    if (lightboxScale === 1 && Math.abs(distanceX) > 55 && Math.abs(distanceX) > Math.abs(distanceY)) {
      moveGallery(distanceX > 0 ? -1 : 1);
    } else if (isTap && dragStart.pointerType === "touch") {
      const now = Date.now();
      if (now - lastLightboxTap < 320) {
        if (lightboxScale > 1) resetLightboxZoom(true);
        else setLightboxZoom(2, true);
        lastLightboxTap = 0;
      } else {
        lastLightboxTap = now;
      }
    }
  }
  lightboxHadPinch = false;
  lightboxDragStart = null;
  applyLightboxTransform(true);
}
lightboxMedia.addEventListener("pointerup", finishLightboxPointer);
lightboxMedia.addEventListener("pointercancel", finishLightboxPointer);

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

const bookingUrl = "https://www.lodgix.com/23844/?rental_property=82207";
const bookingIframe = document.querySelector("#bookingCalendar iframe");
bookingIframe.addEventListener("load", function () {
  document.getElementById("bookingCalendar").classList.add("is-loaded");
});
document.getElementById("bookingReset").addEventListener("click", function () {
  const resetButton = this;
  document.getElementById("bookingCalendar").classList.remove("is-loaded");
  bookingIframe.src = bookingUrl;
  resetButton.textContent = "Calendar restored";
  window.setTimeout(function () { resetButton.textContent = "Return to calendar"; }, 1800);
});

window.addEventListener("resize", function () {
  if (pristineBayMap) pristineBayMap.invalidateSize();
  fitBookingCalendar();
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
