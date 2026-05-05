const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const overlay = document.querySelector(".overlay");

// pega TODOS os links (nav + menu mobile)
const links = document.querySelectorAll(".nav-links a, .off-screen-menu a");

const nav = document.querySelector("nav");

let lastScroll = 0;
let scrollPosition = 0;

// FUNÇÃO PARA FECHAR MENU
function closeMenu() {
  hamMenu.classList.remove("active");
  offScreenMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("no-scroll");

  // restaura scroll
  window.scrollTo(0, scrollPosition);
}

// ABRIR / FECHAR MENU
hamMenu.addEventListener("click", () => {
  const isActive = offScreenMenu.classList.contains("active");

  if (!isActive) {
    scrollPosition = window.pageYOffset;
  }

  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("no-scroll");

  // garante que a nav não suma
  nav.classList.remove("header-hidden");
});

// FECHAR AO CLICAR NOS LINKS
links.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// FECHAR AO CLICAR NO OVERLAY
overlay.addEventListener("click", closeMenu);

// ESC PARA FECHAR (extra UX)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});

// ESCONDER NAV AO SCROLL
window.addEventListener("scroll", () => {
  if (offScreenMenu.classList.contains("active")) return;

  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    nav.classList.add("header-hidden");
  } else {
    nav.classList.remove("header-hidden");
  }

  lastScroll = currentScroll;
});
