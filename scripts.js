document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIconContainer = document.getElementById("theme-icon-container");
  let themeStore = window.localStorage.getItem("theme");

  const loadSvg = (url) => {
    fetch(url)
      .then(response => response.text())
      .then(svg => {
        themeIconContainer.innerHTML = svg;
      });
  };

  if (!themeStore) {
    loadSvg("assets/icons/sun.svg");
  }

  if (themeStore === "dark") {
    themeToggle.checked = true;
    document.body.classList.add("dark");
    loadSvg("assets/icons/sun.svg");
  }
  
  themeToggle.addEventListener("change", function() {
    themeStore = this.checked ? "dark" : "light";
    window.localStorage.setItem("theme", themeStore);

    if (this.checked) {
      loadSvg("assets/icons/moon.svg");
      document.body.classList.add("dark");
    } else {
      loadSvg("assets/icons/sun.svg");
      document.body.classList.remove("dark");
    }
  });
});