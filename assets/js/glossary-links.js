(function () {
  if (document.querySelector(".glossary-term-page")) {
    return;
  }

  const dataNode = document.getElementById("glossary-terms-data");
  const postRoots = Array.from(document.querySelectorAll(".post-content"));

  if (!dataNode || postRoots.length === 0) {
    return;
  }

  let glossaryItems = [];
  try {
    glossaryItems = JSON.parse(dataNode.textContent || "[]");
  } catch (error) {
    glossaryItems = [];
  }

  const candidates = [];
  const seen = new Set();

  glossaryItems.forEach(function (item) {
    if (!item || !item.term || !item.url) return;

    const labels = [item.term].concat(Array.isArray(item.aliases) ? item.aliases : []);
    labels.forEach(function (label) {
      const cleaned = String(label || "").trim();
      if (!cleaned || cleaned.length < 3) return;

      const key = cleaned.toLowerCase();
      if (seen.has(key)) return;
      seen.add(key);

      candidates.push({
        label: cleaned,
        url: item.url
      });
    });
  });

  if (candidates.length === 0) {
    return;
  }

  candidates.sort(function (a, b) {
    return b.label.length - a.label.length;
  });

  const escaped = candidates.map(function (candidate) {
    return candidate.label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  });

  const labelToUrl = new Map(
    candidates.map(function (candidate) {
      return [candidate.label.toLowerCase(), candidate.url];
    })
  );

  const pattern = new RegExp(
    "(^|[^\\p{L}\\p{N}_])(" + escaped.join("|") + ")(?=$|[^\\p{L}\\p{N}_])",
    "giu"
  );

  const blockedTags = new Set(["A", "SCRIPT", "STYLE", "CODE", "PRE", "TEXTAREA", "BUTTON", "INPUT", "SELECT", "OPTION"]);
  let replacedCount = 0;
  const maxReplacements = 12;

  function isBlocked(node) {
    let current = node.parentElement;
    while (current) {
      if (blockedTags.has(current.tagName)) return true;
      current = current.parentElement;
    }
    return false;
  }

  function replaceInTextNode(textNode) {
    if (replacedCount >= maxReplacements) return;
    if (isBlocked(textNode)) return;

    const text = textNode.nodeValue;
    if (!text || text.trim().length < 3) return;

    let matched = false;
    const html = text.replace(pattern, function (_, prefix, rawLabel) {
      if (replacedCount >= maxReplacements) return _;

      const url = labelToUrl.get(String(rawLabel).toLowerCase());
      if (!url) return _;

      matched = true;
      replacedCount += 1;
      return prefix + '<a class="glossary-inline-link" href="' + url + '" title="Voir la definition">' + rawLabel + "</a>";
    });

    if (!matched || html === text) {
      return;
    }

    const fragment = document.createElement("span");
    fragment.innerHTML = html;

    const parent = textNode.parentNode;
    while (fragment.firstChild) {
      parent.insertBefore(fragment.firstChild, textNode);
    }
    parent.removeChild(textNode);
  }

  postRoots.forEach(function (root) {
    if (replacedCount >= maxReplacements) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const textNodes = [];

    let node = walker.nextNode();
    while (node) {
      textNodes.push(node);
      node = walker.nextNode();
    }

    textNodes.forEach(replaceInTextNode);
  });
})();
