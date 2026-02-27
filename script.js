const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const links = document.querySelectorAll(".links");
const header = document.querySelector("header");

let lastScroll = 0;
let scrollPosition = 0;

// FUNÇÃO PARA FECHAR MENU
function closeMenu() {
  hamMenu.classList.remove("active");
  offScreenMenu.classList.remove("active");
  document.body.classList.remove("no-scroll");

  // Restaura posição do scroll
  window.scrollTo(0, scrollPosition);
}

// ABRIR / FECHAR MENU
hamMenu.addEventListener("click", () => {

  const isActive = offScreenMenu.classList.contains("active");

  if (!isActive) {
    // SALVA posição atual antes de travar scroll
    scrollPosition = window.pageYOffset;
  }

  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");

  // Sempre mostra o header quando menu abre
  header.classList.remove("header-hidden");
});

// FECHAR MENU AO CLICAR LINK

links.forEach(link => {
  link.addEventListener("click", closeMenu);
});

// HEADER HIDE ON SCROLL
window.addEventListener("scroll", () => {

  // Se menu estiver aberto, ignora comportamento de scroll
  if (offScreenMenu.classList.contains("active")) return;

  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add("header-hidden");
  } else {
    header.classList.remove("header-hidden");
  }

  lastScroll = currentScroll;
});