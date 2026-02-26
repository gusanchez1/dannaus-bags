const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const links = document.querySelectorAll(".links");

function closeMenu() {
  hamMenu.classList.remove("active");
  offScreenMenu.classList.remove("active");
  document.body.classList.remove("no-scroll");
}

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

links.forEach(link => {
  link.addEventListener("click", closeMenu);
});

let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add("header-hidden");
    } else {
        header.classList.remove("header-hidden");
    }

    lastScroll = currentScroll;
});