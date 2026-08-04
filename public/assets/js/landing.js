const landingMenuButton = document.querySelector(".menu-toggle");
const landingNavLinks = document.querySelector(".nav-links");
const landingYear = document.getElementById("year");

if (landingYear) landingYear.textContent = String(new Date().getFullYear());

if (landingMenuButton && landingNavLinks) {
  landingMenuButton.addEventListener("click", function () {
    const isOpen = landingNavLinks.classList.toggle("open");
    landingMenuButton.setAttribute("aria-expanded", String(isOpen));
  });

  landingNavLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      landingNavLinks.classList.remove("open");
      landingMenuButton.setAttribute("aria-expanded", "false");
    });
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
  window.setTimeout(function () { frame.remove(); }, 5000);
}

document.querySelectorAll("[data-track]").forEach(function (link) {
  link.addEventListener("click", function () {
    trackLandingEvent(link.dataset.track);
  });
});
