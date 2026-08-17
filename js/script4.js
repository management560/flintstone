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
const form = document.getElementById("accountForm");
const status = document.getElementById("formStatus");

async function handleSubmit(event) {

event.preventDefault();

const data = new FormData(event.target);

fetch(event.target.action, {

method: form.method,
body: data,
headers: {
'Accept': 'application/json'
}

}).then(response => {

if (response.ok) {

status.innerHTML = "Application submitted successfully.";
form.reset();

} else {

status.innerHTML = "Oops! There was a problem submitting the form.";

}

}).catch(error => {

status.innerHTML = "Network error.";

});

}

form.addEventListener("submit", handleSubmit);

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
  });


  /* ================= HERO TEXT (ONLY HOMEPAGE) ================= */

  if (document.querySelector(".heading")) {

    gsap.timeline()

    .fromTo(".heading",
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

    .fromTo(".lime-banner-content h2",
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

  }

});
