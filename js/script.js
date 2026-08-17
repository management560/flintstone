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
   FULL PAGE PANEL SCROLL
============================= */

/* =============================
   STACKED PANEL SCROLL EFFECT
============================= */


/* =============================
   LIME VIDEO SCROLL EFFECT
============================= */

ScrollTrigger.create({
  trigger: ".lime-video-section",
  start: "top 40%",   // trigger much earlier
  end: "bottom top",

  onEnter: () => {

    gsap.to(".lime-video", {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    });

    gsap.to(".lime-banner", {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    });

  },

  onLeaveBack: () => {

    gsap.to(".lime-video", {
      opacity: 1,
      duration: 0.4
    });

    gsap.to(".lime-banner", {
      opacity: 0,
      duration: 0.4
    });

  }
});

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("in-view");
    }
  });
},{threshold:0.4});

// observer.observe(document.querySelector(".quote-cta-section"));

/* =============================
   MINIMAL SECTION ANIMATION
============================= */
gsap.utils.toArray(".minimal-item").forEach((item) => {

  const heading = item.querySelector("h3");
  const paragraph = item.querySelector("p");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });

  tl.fromTo(heading,
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
  )
  .fromTo(paragraph,
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
    "-=0.5"
  );

});

window.addEventListener("scroll", () => {

  const banner = document.querySelector(".lime-banner");
  const trigger = document.querySelector(".lime-video-section").offsetTop;

  if(window.scrollY > trigger){
    banner.classList.add("show");
  }

});
/* =============================
   MINIMAL SECTION - WHOLE ENTRY
============================= */

gsap.fromTo(".minimal-wrapper",
  {
    x: -200,
    opacity: 0
  },
  {
    x: 0,
    opacity: 1,
    duration: 5.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".minimal-section",
      start: "top 75%",
      toggleActions: "play none none none"
    }
  }
);

/* =============================
   SERVICES SECTION ANIMATION
============================= */

gsap.fromTo(".upside-left small",
  { y: 30, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".upside-section",
      start: "top 80%"
    }
  }
);

gsap.fromTo(".upside-left h2",
  { y: 40, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1.2,
    delay: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".upside-section",
      start: "top 80%"
    }
  }
);

gsap.fromTo(".upside-left p",
  { y: 40, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1.2,
    delay: 0.4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".upside-section",
      start: "top 80%"
    }
  }
);

gsap.fromTo(".upside-left a",
  { y: 40, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1.2,
    delay: 0.4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".upside-section",
      start: "top 80%"
    }
  }
);

gsap.fromTo(".upside-item",
  { y: 50, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".upside-right",
      start: "top 85%"
    }
  }
);


/* =============================
   TRADINGVIEW CHART
============================= */

let widget;

function loadChart(symbol = "OANDA:XAUUSD") {
  document.getElementById("tradingview_chart").innerHTML = "";

  widget = new TradingView.widget({
    container_id: "tradingview_chart",
    autosize: true,
    symbol: symbol,
    interval: "60",
    timezone: "Asia/Kolkata",
    theme: "dark",
    style: "1",
    locale: "en",
    toolbar_bg: "#000000",
    enable_publishing: false,
    hide_side_toolbar: false,
    allow_symbol_change: false,
  });
}

function changeSymbol(symbol) {
  loadChart(symbol);
}

loadChart();


/* =============================
   QUOTE SECTION
============================= */

// gsap.to(".quote-text", {
//   scrollTrigger: {
//     trigger: ".quote-cta-section",
//     start: "top 80%",
//   },
//   scale: 1,
//   opacity: 1,
//   duration: 1.8,
//   ease: "power3.out"
// });

gsap.to(".quote-buttons", {
  scrollTrigger: {
    trigger: ".quote-cta-section",
    start: "top 75%",
  },
  scale: 1,
  opacity: 1,
  duration: 1.6,
  delay: 0.4,
  ease: "power3.out"
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
    duration: 2,
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
    duration: 1.2,
    ease: "power3.out"
  }, "-=0.6");

});

// const quoteSection = document.querySelector('.quote-cta-section');

// const quoteObserver = new IntersectionObserver((entries)=>{
//   entries.forEach(entry=>{
//     if(entry.isIntersecting){
//       entry.target.classList.add('in-view');
//     }
//   });
// },{
//   threshold:0.35
// });

// quoteObserver.observe(quoteSection);
// window.addEventListener("load", function() {
//   const quoteSection = document.querySelector(".quote-cta-section");
//   quoteSection.classList.add("in-view");
// });
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
Mobile ScrollTrigger Refresh
============================= */
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});



// document.addEventListener("DOMContentLoaded", () => {

//   const items = document.querySelectorAll(".minimal-item");

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.style.opacity = "1";
//         entry.target.style.transform = "translateY(0)";
//       }
//     });
//   }, { threshold: 0.3 });

//   items.forEach((item) => {
//     observer.observe(item);
//   });

// });
// window.addEventListener("scroll", () => {
//   const banner = document.querySelector(".banner-img");
//   let offset = window.scrollY * 0.4;

//   banner.style.transform = `translateY(${offset}px)`;
// });

window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});