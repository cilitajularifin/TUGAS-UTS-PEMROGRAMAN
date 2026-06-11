const themeButton = document.querySelector("#themeButton");
const navLinks = document.querySelectorAll(".nav-link");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  themeButton.textContent = isDark ? "Mode Terang" : "Mode Gelap";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.querySelector("#menuCv");
    const collapse = window.bootstrap ? bootstrap.Collapse.getInstance(menu) : null;

    if (collapse) {
      collapse.hide();
    }
  });
});
