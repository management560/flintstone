/* =============================
   NAV TOGGLE
============================= */

document.addEventListener("DOMContentLoaded", function(){

  const toggleBtn = document.getElementById("menuToggle");
  const closeBtn = document.getElementById("menuClose");
  const nav = document.getElementById("navLinks");

  if(toggleBtn && nav){

    /* OPEN MENU */
    toggleBtn.addEventListener("click", function(){

      nav.classList.add("active");
      document.body.classList.add("menu-open");

    });

  }

  /* CLOSE MENU (CROSS BUTTON) */
  if(closeBtn){
    closeBtn.addEventListener("click", function(){

      nav.classList.remove("active");
      document.body.classList.remove("menu-open");

    });
  }

  /* CLOSE MENU WHEN LINK CLICKED */
  document.querySelectorAll(".nav-links a").forEach(link=>{
    link.addEventListener("click", ()=>{
      nav.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });

});

/* =============================
   GSAP INIT (REGISTER ONCE)
============================= */
gsap.registerPlugin(ScrollTrigger);

/* =============================
   CONTACT SLIDER
============================= */

document.addEventListener("DOMContentLoaded", function () {

  const panel = document.querySelector(".contact-panel");
  const overlay = document.querySelector(".contact-overlay");
  const openBtns = document.querySelectorAll(".open-slider");
  const closeBtn = document.querySelector(".close-btn");

  // Safety check
  if (!panel || !overlay || openBtns.length === 0) return;

  openBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      panel.style.right = "0";
      overlay.style.opacity = "1";
      overlay.style.visibility = "visible";
      document.body.style.overflow = "hidden";
    });
  });

  function closeSlider() {
    panel.style.right = "-100%";
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
    document.body.style.overflow = "auto";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeSlider);
  overlay.addEventListener("click", closeSlider);

});
// gsap.registerPlugin(ScrollTrigger);

// const cards = gsap.utils.toArray(".stack-card");

// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".stack-section",
//     start: "top top",
//     end: () => "+=" + (window.innerHeight * (cards.length - 1)), // 🔥 dynamic height
//     scrub: true,
//     pin: true,
//     anticipatePin: 1
//   }
// });

// cards.forEach((card, i) => {

//   // Initially blur all except first
//   if (i !== 0) {
//     gsap.set(card, {
//       filter: "blur(12px)",
//       scale: 0.98
//     });
//   }

//   if (i !== cards.length - 1) {

//     tl.to(card, {
//       yPercent: -100,
//       ease: "none"
//     })

//     .to(cards[i + 1], {
//       filter: "blur(0px)",
//       scale: 1,
//       ease: "none"
//     }, "<");

//   }

// });

// gsap.registerPlugin(ScrollTrigger);

// const cards = gsap.utils.toArray(".stack-card");

// /* INITIAL STATE */
// cards.forEach((card, i) => {

//   if (i !== 0) {
//     gsap.set(card, {
//       y: window.innerHeight,   // start just below screen
//       opacity: 1
//     });
//   }

// });

// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".stack-section",
//     start: "top top",
//     end: () => "+=" + (window.innerHeight * (cards.length - 1)),
//     scrub: true,
//     pin: true,
//     anticipatePin: 1
//   }
// });

// cards.forEach((card, i) => {

//   if (i !== cards.length - 1) {

//     tl.to(cards[i + 1], {
//       y: 0,              // next card slides up
//       ease: "none"
//     })

//     .to(card, {
//       y: -150,           // previous card moves slightly up
//       ease: "none"
//     }, "<");

//   }

// });
gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray(".stack-card");

/* INITIAL POSITION */

cards.forEach((card, i) => {

  if (i !== 0) {
    gsap.set(card, {
      y: window.innerHeight
    });
  }

});


let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".stack-section",
    start: "top top",
    end: () => "+=" + (window.innerHeight * (cards.length - 1)),
    scrub: true,
    pin: true,
    anticipatePin: 1
  }
});


cards.forEach((card, i) => {

  if (i !== cards.length - 1) {

    tl.to(cards[i + 1], {
      y: 0,
      ease: "none"
    })

    .to(card, {
      y: -100,
      filter: "blur(8px)",   // 🔥 blur previous card
      opacity: 0.4,
      scale: 0.97,
      ease: "none"
    }, "<");

  }

});
/* =============================
   NAVBAR SCROLL EFFECT
============================= */

window.addEventListener("scroll", function(){

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});

window.addEventListener("load", () => {

  const tl = gsap.timeline();

  /* ================= PRELOADER TEXT ================= */

  tl.to(".brand-title", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out"
  })

  .to(".brand-divider h1", {
    opacity: 1,
    y: 0,
    duration: 0.4
  }, "-=0.3")

  .to(".line.left", {
    scaleX: 1,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.2")

  .to(".line.right", {
    scaleX: 1,
    duration: 0.8,
    ease: "power2.out"
  }, "<")

  /* ================= PRELOADER EXIT ================= */

  .to("#preloader", {
    y: "-100%",
    duration: 0.5,
    ease: "power4.inOut"
  })

  /* ================= HERO TEXT ANIMATION ================= */

  .fromTo(".service-hero-inner h1",
  {
    opacity: 0,
    scale: 0.92,
    y: 80
  },
  {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 1.2,
    ease: "power4.out"
  })

  .fromTo(".service-hero-inner p",
  {
    opacity: 0,
    y: 40
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
  }, "-=0.6");

});