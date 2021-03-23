const cursor = document.querySelector(".cursor");
const mobileNavBar = document.querySelector(".active-nb");

function burgerBar() {
  mobileNavBar.style.display = "flex";
}

function closeNb() {
  mobileNavBar.style.display = "none";
}

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

const controller = new ScrollMagic.Controller({
  globalSceneOptions: { duration: 700 },
});

const controller2 = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".about-page",
  triggerHook: 0.2,
})
  .setClassToggle("#about", "active-link")
  .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: ".services-page",
  triggerHook: 0.4,
})
  .setClassToggle("#services", "active-link")
  .addTo(controller);

const scene3 = new ScrollMagic.Scene({
  triggerElement: ".home-page",
  triggerHook: 0,
})
  .setClassToggle("#home-link", "active-link")
  .addTo(controller);

const scene4 = new ScrollMagic.Scene({
  triggerElement: ".portfolio-page",
  triggerHook: 0.6,
})
  .setClassToggle("#portfolio", "active-link")
  .addTo(controller);

const scene5 = new ScrollMagic.Scene({
  triggerElement: ".contact-page",
  triggerHook: 0.6,
})
  .setClassToggle("#contact", "active-link")
  .addTo(controller);

const scene6 = new ScrollMagic.Scene({
  triggerElement: "#top1",
  triggerHook: 0,
})
  .setClassToggle(".nav-bar", "nb-slide")
  .addTo(controller2);

const scene7 = new ScrollMagic.Scene({
  triggerElement: ".news-page",
  triggerHook: 0.6,
})
  .setClassToggle("#news", "active-link")
  .addTo(controller);

const scene9 = new ScrollMagic.Scene({
  triggerElement: "#top1",
  triggerHook: 0,
})
  .setClassToggle(".nav-bar-mobile", "nb-slide")
  .addTo(controller2);
