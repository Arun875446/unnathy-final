import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import banner1 from "@/assets/banner/Unnathy.gif";
import banner2 from "@/assets/banner/Unnathy (1).gif";
import banner3 from "@/assets/banner/Unnathy (2).gif";
import { prefersReducedMotion } from "@/lib/motion";

const banners = [banner1, banner2, banner3];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(0);
  const topImageRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);

  useEffect(() => {
    banners.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  const animateTransition = useCallback(
    (nextIndex: number) => {
      if (isTransitioning.current || nextIndex === currentSlide) {
        return;
      }

      if (prefersReducedMotion()) {
        setCurrentSlide(nextIndex);
        setNextSlide(nextIndex);
        if (topImageRef.current) {
          topImageRef.current.style.opacity = "0";
        }
        return;
      }

      isTransitioning.current = true;
      setNextSlide(nextIndex);

      const timeline = gsap.timeline({
        onComplete: () => {
          setCurrentSlide(nextIndex);
          setTimeout(() => {
            gsap.set(topImageRef.current, { opacity: 0 });
            isTransitioning.current = false;
          }, 24);
        },
      });

      timeline.fromTo(topImageRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "none" });
    },
    [currentSlide]
  );

  const goToNextSlide = useCallback(
    () => animateTransition((currentSlide + 1) % banners.length),
    [animateTransition, currentSlide]
  );

  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }

    const interval = setInterval(goToNextSlide, 4400);
    return () => clearInterval(interval);
  }, [goToNextSlide]);

  return (
    <section
      className="relative w-full overflow-hidden aspect-[1133/566]"
      aria-label="Hero banner"
    >
      <div className="absolute inset-0 z-0">
        <img
          key={`base-${currentSlide}`}
          src={banners[currentSlide]}
          alt="Unnathy banner"
          className="h-full w-full object-contain object-center"
          loading="eager"
          decoding="async"
        />
      </div>

      <div ref={topImageRef} className="absolute inset-0 z-10 opacity-0">
        <img
          key={`top-${nextSlide}`}
          src={banners[nextSlide]}
          alt="Unnathy banner"
          className="h-full w-full object-contain object-center"
          loading="eager"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default HeroCarousel;
