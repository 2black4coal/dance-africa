import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


export const fadeUp = (el) => {
gsap.from(el, {
y: 60,
opacity: 0,
duration: 1,
scrollTrigger: el
});
};