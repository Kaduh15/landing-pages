document.addEventListener("DOMContentLoaded", function () {
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

  themeToggle.addEventListener("change", function () {
    themeStore = themeToggle.checked ? "dark" : "light";
    window.localStorage.setItem("theme", themeStore);

    if (themeToggle.checked) {
      loadSvg("assets/icons/moon.svg");
      document.body.classList.add("dark");
    } else {
      loadSvg("assets/icons/sun.svg");
      document.body.classList.remove("dark");
    }
  });

  validateForm();
});

function validateForm() {
  const form = document.querySelector("#login-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputPassword = document.getElementById("password");

    if (inputPassword.value.length < 8) {
      const passwordInputDiv = document.querySelector('div > input[type="password"]').parentElement;

      passwordInputDiv.insertAdjacentHTML('beforeend', '<p class="error-message">Senha deve ter no mínimo 8 caracteres</p>');

      inputPassword.classList.add("input-error");

      inputPassword.addEventListener('input', function (event) {
        console.log(event.target.value);

        if (event.target.value.length >= 8) {
          inputPassword.classList.remove("input-error");
          passwordInputDiv.querySelector('.error-message').remove()
        }
      })
    }
  });

}