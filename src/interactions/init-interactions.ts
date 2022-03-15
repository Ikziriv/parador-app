import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { updateHeaderDisplay, updateScrollTipDisplay } from './scroll-events';

export default async () => {
  window.scrollTo(0, 0);

  gsap.registerPlugin(ScrollTrigger);
  updateHeaderDisplay(0, false);

  const onPageLoadComplete = () => {
    let lastScrollTop: number;

    document.addEventListener('scroll', () => {
      let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      updateScrollTipDisplay(currentScrollTop);
      updateHeaderDisplay(currentScrollTop, currentScrollTop > lastScrollTop);
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    });

    document.body.style.overflow = 'unset';
    document.location.hash &&
      document.querySelector(document.location.hash).scrollIntoView({ behavior: 'smooth' });
  };

  return onPageLoadComplete
};