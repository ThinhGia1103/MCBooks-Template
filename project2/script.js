const body = document.body;
const headerTop = document.querySelector(".header .topbar");
const headerBottom = document.querySelector(".header .nav-bar");
const menu = document.querySelector(".header .nav-bar .menu");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  const headerTopHeight = headerTop.offsetHeight;
  const headerBottomHeight = headerBottom.offsetHeight;

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
    headerBottom.style.transform = "none";
  }
  lastScroll = currentScroll;
});


// $("#carousel-1").carousel({
//   interval: 3000
// });

// $("#carousel-1.carousel .carousel-item").each(function() {
//   const total = 3;
//   let next = $(this).next();

//   for (var i = 0; i < total - 1; i++) {
//     if (!next.length) {
//       next = $(this).siblings(":first");
//     }
//     next
//       .children(":first-child")
//       .clone()
//       .appendTo($(this));
//     next = next.next();
//   }
// });
