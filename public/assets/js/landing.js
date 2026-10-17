const landingMenuButton = document.querySelector(".menu-toggle");
const landingNavLinks = document.querySelector(".nav-links");
const landingYear = document.getElementById("year");

if (landingYear) landingYear.textContent = String(new Date().getFullYear());

if (landingMenuButton && landingNavLinks) {
  const closeLandingMenu = function () {
    landingNavLinks.classList.remove("open");
    landingMenuButton.setAttribute("aria-expanded", "false");
  };

  landingMenuButton.addEventListener("click", function () {
    const isOpen = landingNavLinks.classList.toggle("open");
    landingMenuButton.setAttribute("aria-expanded", String(isOpen));
  });

  landingNavLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeLandingMenu);
  });

  // Escape or a tap outside the open phone menu closes it.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && landingNavLinks.classList.contains("open")) {
      closeLandingMenu();
      landingMenuButton.focus();
    }
  });
  document.addEventListener("click", function (event) {
    if (landingNavLinks.classList.contains("open") && !event.target.closest(".nav-shell")) closeLandingMenu();
  });
}

function trackLandingEvent(eventName) {
  const safeName = String(eventName).replace(/[^a-z0-9-]/gi, "").toLowerCase();
  if (!safeName) return;
  const frame = document.createElement("iframe");
  frame.hidden = true;
  frame.tabIndex = -1;
  frame.setAttribute("aria-hidden", "true");
  frame.src = "/analytics-events/" + safeName + "/";
  document.body.appendChild(frame);
  window.setTimeout(function () { frame.remove(); }, 15000);
}

document.querySelectorAll("[data-track]").forEach(function (link) {
  link.addEventListener("click", function () {
    // A same-tab link leaves this page before the beacon can send, so the
    // destination page (main.js) records those arrivals instead.
    if (link.target !== "_blank") return;
    trackLandingEvent(link.dataset.track);
  });
});
