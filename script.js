const body = document.body;
const headerTop = document.querySelector(".header .topbar");
const headerBottom = document.querySelector(".header .menu");
const menu = document.querySelector(".header .menu ");
const toggleMenu = document.querySelector(".header .menu ");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("resize", () => {});

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  const headerTopHeight = headerTop.offsetHeight;

  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }
  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
    headerBottom.style.transform = `translateY(-${headerTopHeight}px)`;
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollDown)
  ) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
    headerBottom.style.transform = `none`;
  }
  lastScroll = currentScroll;
});

toggleMenu.addEventListener("click", () => {
  menu.classList.toggle("is-visible");
});
