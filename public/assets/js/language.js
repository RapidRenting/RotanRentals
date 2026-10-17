(function () {
  "use strict";

  /* Hide icon ligature text until the icon font is really available. If the font
     is blocked, the icons simply stay blank rather than showing their names.
     This script runs before the stylesheets, so the @font-face rule is not
     known yet; ask for the font once the document (and its stylesheets) has
     finished parsing. */
  var root = document.documentElement;
  if (document.fonts && document.fonts.load) {
    root.classList.add("icons-pending");
    document.addEventListener("DOMContentLoaded", function () {
      document.fonts.load('24px "Material Symbols Rounded"', "lock").then(function (faces) {
        if (faces.length) root.classList.remove("icons-pending");
      }, function () {});
    });
  }
}());

(function () {
  "use strict";

  var alternate = document.querySelector('link[rel="alternate"][hreflang="es"]');
  var pageLanguage = document.documentElement.lang.toLowerCase().split("-")[0];
  var savedLanguage = null;

  try {
    savedLanguage = window.localStorage.getItem("stay-pristine-bay-language");
  } catch (error) {
    savedLanguage = null;
  }

  if (pageLanguage === "en" && alternate) {
    var browserLanguage = String(navigator.language || "").toLowerCase();
    var shouldUseSpanish = savedLanguage === "es" || (!savedLanguage && /^es(?:-|$)/.test(browserLanguage));

    if (shouldUseSpanish) {
      /* Use the alternate's path on the current origin (so previews stay on
         their own host) and keep the query string and section hash. */
      var spanishUrl = new URL(new URL(alternate.href, window.location.href).pathname, window.location.href);
      spanishUrl.search = window.location.search;
      spanishUrl.hash = window.location.hash;
      window.location.replace(spanishUrl.href);
      return;
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-language-switch]").forEach(function (link) {
      link.addEventListener("click", function () {
        try {
          window.localStorage.setItem("stay-pristine-bay-language", link.dataset.languageSwitch);
        } catch (error) {
          // The link still works when storage is unavailable.
        }
      });
    });
  });
}());
