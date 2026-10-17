const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const script = fs.readFileSync(path.join(__dirname, "..", "public", "assets", "js", "language.js"), "utf8");

function runScenario({ pageLanguage = "en", browserLanguage = "en-US", savedLanguage = null, pageHref = "https://staypristinebay.com/villa-and-amenities/#book" } = {}) {
  let redirectedTo = null;
  const domReadyHandlers = [];
  let clickHandler = null;
  const writes = [];
  const fontRequests = [];
  const languageLink = {
    dataset: { languageSwitch: pageLanguage === "en" ? "es" : "en" },
    addEventListener(eventName, handler) {
      if (eventName === "click") clickHandler = handler;
    }
  };
  const alternate = { href: "https://staypristinebay.com/es/villa-and-amenities/" };
  const pageUrl = new URL(pageHref);
  const location = {
    href: pageUrl.href,
    hash: pageUrl.hash,
    search: pageUrl.search,
    replace(url) { redirectedTo = url; }
  };
  const classes = new Set();
  const document = {
    documentElement: {
      lang: pageLanguage,
      classList: { add: (name) => classes.add(name), remove: (name) => classes.delete(name) }
    },
    fonts: {
      load(font, text) {
        fontRequests.push([font, text]);
        return Promise.resolve([{}]);
      }
    },
    querySelector(selector) { return selector.includes('hreflang="es"') ? alternate : null; },
    querySelectorAll() { return [languageLink]; },
    addEventListener(eventName, handler) {
      if (eventName === "DOMContentLoaded") domReadyHandlers.push(handler);
    }
  };
  const localStorage = {
    getItem() { return savedLanguage; },
    setItem(key, value) { writes.push([key, value]); }
  };
  const window = { location, localStorage };

  vm.runInNewContext(script, { URL, document, navigator: { language: browserLanguage }, window });
  domReadyHandlers.forEach((handler) => handler());
  if (clickHandler) clickHandler();
  return { redirectedTo, writes, fontRequests, classes };
}

assert.equal(
  runScenario({ browserLanguage: "es-HN" }).redirectedTo,
  "https://staypristinebay.com/es/villa-and-amenities/#book",
  "Spanish browser language should select the equivalent Spanish URL and preserve the hash"
);
assert.equal(
  runScenario({ browserLanguage: "es-HN", pageHref: "https://staypristinebay.com/villa-and-amenities/?utm_source=ad&utm_medium=social#book" }).redirectedTo,
  "https://staypristinebay.com/es/villa-and-amenities/?utm_source=ad&utm_medium=social#book",
  "The redirect must keep the query string so campaign parameters survive"
);
assert.equal(
  runScenario({ browserLanguage: "es-HN", pageHref: "http://localhost:8787/villa-and-amenities/" }).redirectedTo,
  "http://localhost:8787/es/villa-and-amenities/",
  "The redirect must stay on the current origin rather than jumping to production"
);
assert.equal(runScenario({ browserLanguage: "en-CA" }).redirectedTo, null, "English must remain the default");
assert.equal(runScenario({ browserLanguage: "en-CA", savedLanguage: "es" }).redirectedTo?.includes("/es/"), true, "Saved Spanish choice must override detection");
assert.equal(runScenario({ browserLanguage: "es-HN", savedLanguage: "en" }).redirectedTo, null, "Saved English choice must override detection");
assert.equal(runScenario({ pageLanguage: "es-HN", browserLanguage: "es-HN" }).redirectedTo, null, "Spanish pages must not redirect recursively");
assert.deepEqual(runScenario({ browserLanguage: "en-CA" }).writes.at(-1), ["stay-pristine-bay-language", "es"], "Manual toggle must save the selected language");

const icons = runScenario({ browserLanguage: "en-CA" });
assert.deepEqual(icons.fontRequests, [['24px "Material Symbols Rounded"', "lock"]], "The icon font must be requested once the document has parsed");
setTimeout(() => {
  assert.equal(icons.classes.has("icons-pending"), false, "icons-pending must clear once the icon font resolves");
  console.log("Language routing tests passed.");
}, 0);
