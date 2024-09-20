// integrate lenis with gsap
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// nav animation

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down - hide the navbar
    gsap.to(navbar, { y: "-100%", duration: 0.5 });
  } else if (scrollTop < lastScrollTop && scrollTop > 0) {
    // Scrolling up - show the navbar
    gsap.to(navbar, {
      y: "0%",
      duration: 0.5,
      backgroundColor: "var(--background)",
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    });
  }

  // If at the top of the page, ensure the navbar stays visible
  if (scrollTop < 100) {
    gsap.to(navbar, {
      y: "0%",
      duration: 0.5,
      backgroundColor: "transparent",
      boxShadow: "none",
    });
  }

  lastScrollTop = scrollTop;
});

// hero animation

const heroTl = gsap.timeline();

heroTl.from(".hero-heading span", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
  stagger: 0.1,
  delay: 0.3,
});

heroTl.from(".fade-up", {
  y: 50,
  opacity: 0,
  ease: "power4.out",
  stagger: 0.1,
});

// section title animation

const sectionTitle = document.querySelectorAll(".section-title");

sectionTitle.forEach((title) => {
  gsap.from(title, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: title,
      start: "top 80%",
    },
  });
});

gsap.from(".service-p", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".service-p",
    start: "top 80%",
  },
});

// service card animation

const serviceCard = document.querySelectorAll(".service-card");

serviceCard.forEach((card, index) => {
  gsap.from(card, {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.1 * index,
    ease: "power4.out",
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
    },
  });
});

// about animation

gsap.from(".about-left", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".about-left",
    start: "top 80%",
    scrub: 0.5,
  },
});

gsap.from(".about-left img", {
  scale: 2,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".about-left",
    start: "top 80%",
    scrub: 0.5,
  },
});

gsap.from(".about-right", {
  y: 100,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".about-right",
    start: "top 80%",
  },
});

gsap.from(".form-item", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".contact",
    start: "top 50%",
  },
});

// mobile nav

const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");
const navLinks = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.add("active");
  overlay.classList.add("active");
});

const navClose = () => {
  mobileNav.classList.remove("active");
  overlay.classList.remove("active");
};

navLinks.forEach((link) => {
  link.addEventListener("click", navClose);
});

overlay.addEventListener("click", navClose);
closeBtn.addEventListener("click", navClose);
