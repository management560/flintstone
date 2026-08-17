/* =============================
   NAV TOGGLE
============================= */

document.addEventListener("DOMContentLoaded", function(){

  const toggleBtn = document.getElementById("menuToggle");
  const closeBtn = document.getElementById("menuClose");
  const nav = document.getElementById("navLinks");

  if(toggleBtn && nav){

    toggleBtn.addEventListener("click", function(){
      nav.classList.add("active");
      document.body.classList.add("menu-open");
    });

  }

  if(closeBtn){
    closeBtn.addEventListener("click", function(){
      nav.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  }

  document.querySelectorAll(".nav-links a").forEach(link=>{
    link.addEventListener("click", ()=>{
      nav.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });

});


/* =============================
   GSAP INIT
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


/* =============================
   CONTACT FORM SUBMIT
============================= */

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contact-form");

  if (!form) return;

  const submitBtn = form.querySelector(".submit-btn");
  const originalText = submitBtn ? submitBtn.textContent : "Submit";
  const appsScriptUrl =
    "https://script.google.com/macros/s/AKfycbwLuQMDqp9ozi69_gRAXa8hy4SYvoSVpL3nL4fNxmlcZIujw64jjdYgEM2IRVOGut-rtA/exec";

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (!submitBtn) return;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    const formData = new FormData(form);
    const payload = {
      name: formData.get("name") || "",
      email: formData.get("email") || "",
      company: formData.get("company") || "",
      message: formData.get("message") || ""
    };

    try {
      await fetch(appsScriptUrl, {
        method: "POST",
        body: new URLSearchParams(payload).toString(),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        mode: "no-cors"
      });

      form.reset();
      submitBtn.textContent = "Submitted";
      submitBtn.classList.add("success");

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove("success");
      }, 2200);

    } catch (error) {
      console.error("Contact form submission failed:", error);
      submitBtn.textContent = "Try Again";
      submitBtn.disabled = false;
    }
  });

});


/* =============================
   CARDS (NO ANIMATION)
============================= */

document.querySelectorAll(".card").forEach(card => {
  card.style.opacity = "1";
  card.style.transform = "none";
});


/* =============================
   BG TEXT INITIAL STATE FIX
============================= */

/* Prevent overlap bug on fast scroll */

gsap.set(".bg-text", {
  autoAlpha: 0
});


/* =============================
   BG TEXT APPEAR
============================= */

ScrollTrigger.create({

  trigger: ".purpose-section",
  start: "top 75%",

  onEnter: () => {
    gsap.to(".bg-text", {
      autoAlpha: 1,
      duration: 1.2,
      ease: "power2.out"
    });
  },

  onLeaveBack: () => {
    gsap.to(".bg-text", {
      autoAlpha: 0,
      duration: 0.3
    });
  }

});


/* =============================
   BG TEXT BLUR WHEN CARDS START
============================= */

ScrollTrigger.create({

  trigger: ".cards-wrapper",
  start: "top 40%",
  end: "bottom 30%",

  onEnter: () => {
    gsap.to(".bg-text", {
      filter: "blur(6px)",
      opacity: 0.35,
      duration: 0.6,
      ease: "power2.out"
    });
  },

  onLeaveBack: () => {
    gsap.to(".bg-text", {
      filter: "blur(0px)",
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    });
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


/* =============================
   PRELOADER ANIMATION
============================= */

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

  .fromTo(".products-hero-inner h1",
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



});


/* =============================
   FINAL SCROLLTRIGGER REFRESH FIX
============================= */

window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});