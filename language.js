(() => {
  const storageKey = "egg-island-language";
  const supported = new Set(["en", "vi"]);

  function setLanguage(language) {
    const selected = supported.has(language) ? language : "en";
    document.documentElement.lang = selected;

    document.querySelectorAll("[data-language]").forEach((panel) => {
      panel.hidden = panel.dataset.language !== selected;
    });
    document.querySelectorAll("[data-language-button]").forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.languageButton === selected),
      );
    });
    document.querySelectorAll("[data-en][data-vi]").forEach((element) => {
      element.textContent = element.dataset[selected];
    });

    try {
      localStorage.setItem(storageKey, selected);
    } catch (_error) {
      // The language switch still works when storage is unavailable.
    }
  }

  let initialLanguage = "en";
  try {
    const stored = localStorage.getItem(storageKey);
    if (supported.has(stored)) initialLanguage = stored;
  } catch (_error) {
    // English remains the deterministic default.
  }

  document.querySelectorAll("[data-language-button]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.languageButton));
  });
  setLanguage(initialLanguage);
})();
