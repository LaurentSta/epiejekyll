(function () {
  const grid = document.getElementById("glossary-grid");
  const countNode = document.getElementById("glossary-results-count");
  const emptyNode = document.getElementById("glossary-empty");
  const searchInput = document.getElementById("glossary-search");
  const categorySelect = document.getElementById("glossary-category");
  const letterButtons = Array.from(document.querySelectorAll(".glossary-alpha-btn"));
  const dataNode = document.getElementById("glossary-index-data");

  if (!grid || !countNode || !searchInput || !categorySelect || !dataNode) {
    return;
  }

  let currentLetter = "all";
  let currentCategory = "all";

  let terms = [];
  try {
    terms = JSON.parse(dataNode.textContent || "[]");
  } catch (error) {
    terms = [];
  }

  const cards = Array.from(grid.querySelectorAll("[data-term-card]"));
  const fuse = typeof Fuse !== "undefined"
    ? new Fuse(terms, {
      includeScore: true,
      threshold: 0.32,
      keys: ["title", "definition", "aliases"]
    })
    : null;

  function matchSearch(term, query) {
    if (!query) return true;
    if (fuse) return true;

    const haystack = [term.title, term.definition]
      .concat(Array.isArray(term.aliases) ? term.aliases : [])
      .join(" ")
      .toLowerCase();

    return haystack.indexOf(query.toLowerCase()) !== -1;
  }

  function getVisibleUrls() {
    const query = searchInput.value.trim();

    if (!query || !fuse) {
      return new Set(
        terms
          .filter(function (term) {
            const categoryOk = currentCategory === "all" || term.category === currentCategory;
            const letterOk = currentLetter === "all" || term.letter === currentLetter;
            const searchOk = matchSearch(term, query);
            return categoryOk && letterOk && searchOk;
          })
          .map(function (term) {
            return term.url;
          })
      );
    }

    const searchMatches = new Set(
      fuse.search(query).map(function (result) {
        return result.item.url;
      })
    );

    return new Set(
      terms
        .filter(function (term) {
          const categoryOk = currentCategory === "all" || term.category === currentCategory;
          const letterOk = currentLetter === "all" || term.letter === currentLetter;
          return categoryOk && letterOk && searchMatches.has(term.url);
        })
        .map(function (term) {
          return term.url;
        })
    );
  }

  function render() {
    const visibleUrls = getVisibleUrls();
    let visibleCount = 0;

    cards.forEach(function (card) {
      const link = card.querySelector("h2 a");
      if (!link) {
        card.hidden = true;
        return;
      }

      const isVisible = visibleUrls.has(link.getAttribute("href"));
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    countNode.textContent = visibleCount + " terme" + (visibleCount > 1 ? "s" : "");
    emptyNode.hidden = visibleCount !== 0;
  }

  letterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      currentLetter = button.getAttribute("data-letter") || "all";
      letterButtons.forEach(function (candidate) {
        candidate.classList.toggle("is-active", candidate === button);
      });
      render();
    });
  });

  categorySelect.addEventListener("change", function () {
    currentCategory = categorySelect.value;
    render();
  });

  searchInput.addEventListener("input", render);

  render();
})();
