const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const script = fs.readFileSync(path.join(__dirname, "..", "public", "assets", "js", "language.js"), "utf8");

function runScenario({ pageLanguage = "en", browserLanguage = "en-US", savedLanguage = null } = {}) {
  let redirectedTo = null;
  let domReady = null;
  let clickHandler = null;
  const writes = [];
  const languageLink = {
    dataset: { languageSwitch: pageLanguage === "en" ? "es" : "en" },
    addEventListener(eventName, handler) {
      if (eventName === "click") clickHandler = handler;
    }
  };
  const alternate = { href: "https://staypristinebay.com/es/villa-and-amenities/" };
  const location = {
    href: "https://staypristinebay.com/villa-and-amenities/#book",
    hash: "#book",
    replace(url) { redirectedTo = url; }
  };
  const document = {
    documentElement: { lang: pageLanguage },
    querySelector(selector) { return selector.includes('hreflang="es"') ? alternate : null; },
    querySelectorAll() { return [languageLink]; },
    addEventListener(eventName, handler) {
      if (eventName === "DOMContentLoaded") domReady = handler;
    }
  };
  const localStorage = {
    getItem() { return savedLanguage; },
    setItem(key, value) { writes.push([key, value]); }
  };
  const window = { location, localStorage };

  vm.runInNewContext(script, { URL, document, navigator: { language: browserLanguage }, window });
  if (domReady) domReady();
  if (clickHandler) clickHandler();
  return { redirectedTo, writes };
}

assert.equal(
  runScenario({ browserLanguage: "es-HN" }).redirectedTo,
  "https://staypristinebay.com/es/villa-and-amenities/#book",
  "Spanish browser language should select the equivalent Spanish URL and preserve the hash"
);
assert.equal(runScenario({ browserLanguage: "en-CA" }).redirectedTo, null, "English must remain the default");
assert.equal(runScenario({ browserLanguage: "en-CA", savedLanguage: "es" }).redirectedTo?.includes("/es/"), true, "Saved Spanish choice must override detection");
assert.equal(runScenario({ browserLanguage: "es-HN", savedLanguage: "en" }).redirectedTo, null, "Saved English choice must override detection");
assert.equal(runScenario({ pageLanguage: "es-HN", browserLanguage: "es-HN" }).redirectedTo, null, "Spanish pages must not redirect recursively");
assert.deepEqual(runScenario({ browserLanguage: "en-CA" }).writes.at(-1), ["stay-pristine-bay-language", "es"], "Manual toggle must save the selected language");

console.log("Language routing tests passed.");
