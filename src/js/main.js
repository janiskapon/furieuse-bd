import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const viewportWidth = window.screen.width;
const friseWidth = document.querySelector(".slider-element").offsetWidth;

gsap.to(".slider-container", {
  x: viewportWidth - friseWidth,
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "top top",
    scrub: 1,
    pin: true,
  },
});

gsap.to(".paralax-baron-one", {
  scrollTrigger: {
    trigger: ".paralax-baron-one",
    start: "center bottom",
    end: "+=50%",
    scrub: 1,
    markers: true,
  },
  left: "10%",
});

gsap.to(".paralax-fuite", {
  scrollTrigger: {
    trigger: ".paralax-fuite",
    start: "center bottom",
    end: "+=20%",
    scrub: 1,
    markers: true,
  },
  right: "10%",
});
