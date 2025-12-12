import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "@/assets/hero-banner-1.jpg";
import banner2 from "@/assets/hero-banner-2.jpg";
import banner3 from "@/assets/hero-banner-3.jpg";
import gsap from "gsap";

const banners = [
  {
    id: 1,
    image: banner1,
    title: "Discover Elegance",
    subtitle: "Explore our curated collection",
  },
  {
    id: 2,
    image: banner2,
    title: "Timeless Style",
    subtitle: "Fashion that speaks volumes",
  },
  {
    id: 3,
    image: banner3,
    title: "Luxury Redefined",
    subtitle: "Premium products for you",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  const currentImageRef = useRef<HTMLDivElement>(null);
  const nextImageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToNextSlide = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    const next = (currentSlide + 1) % banners.length;
    setNextSlide(next);

    // Crossfade animation
    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSlide(next);
        isTransitioning.current = false;
      },
    });

    // Fade out current with zoom
    if (currentImageRef.current) {
      tl.to(currentImageRef.current, {
        opacity: 0,
        scale: 1.1,
        duration: 1.2,
        ease: "power2.inOut",
      }, 0);
    }

    // Fade in next with zoom
    if (nextImageRef.current) {
      tl.fromTo(
        nextImageRef.current,
        { opacity: 0, scale: 1.05 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.inOut",
        },
        0
      );
    }

    // Animate text
    if (textRef.current) {
      tl.fromTo(
        textRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        },
        0.3
      );
    }
  };

  const goToPrevSlide = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    const prev = (currentSlide - 1 + banners.length) % banners.length;
    setNextSlide(prev);

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSlide(prev);
        isTransitioning.current = false;
      },
    });

    if (currentImageRef.current) {
      tl.to(currentImageRef.current, {
        opacity: 0,
        scale: 1.1,
        duration: 1.2,
        ease: "power2.inOut",
      }, 0);
    }

    if (nextImageRef.current) {
      tl.fromTo(
        nextImageRef.current,
        { opacity: 0, scale: 1.05 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.inOut",
        },
        0
      );
    }

    if (textRef.current) {
      tl.fromTo(
        textRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        },
        0.3
      );
    }
  };

  const goToSlide = (index: number) => {
    if (isTransitioning.current || index === currentSlide) return;
    isTransitioning.current = true;

    setNextSlide(index);

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSlide(index);
        isTransitioning.current = false;
      },
    });

    if (currentImageRef.current) {
      tl.to(currentImageRef.current, {
        opacity: 0,
        scale: 1.1,
        duration: 1.2,
        ease: "power2.inOut",
      }, 0);
    }

    if (nextImageRef.current) {
      tl.fromTo(
        nextImageRef.current,
        { opacity: 0, scale: 1.05 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.inOut",
        },
        0
      );
    }

    if (textRef.current) {
      tl.fromTo(
        textRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        },
        0.3
      );
    }
  };

  return (
    <div className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden bg-black">
      {/* Image Layers - Stacked for crossfade */}
      <div className="absolute inset-0">
        {/* Current Slide */}
        <div
          ref={currentImageRef}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={banners[currentSlide].image}
            alt={banners[currentSlide].title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Next Slide (for crossfade) */}
        <div
          ref={nextImageRef}
          className="absolute inset-0 w-full h-full opacity-0"
        >
          <img
            src={banners[nextSlide].image}
            alt={banners[nextSlide].title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Cinematic Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 xl:px-32 z-10">
        <div ref={textRef} className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-white leading-tight tracking-tight">
            {banners[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 font-light tracking-wide">
            {banners[currentSlide].subtitle}
          </p>
          <div className="h-1 w-24 bg-primary rounded-full" />
        </div>
      </div>

      {/* Navigation Arrows - Modern Style */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 z-20 border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 z-20 border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots Indicator - Modern Style */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex space-x-4 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative transition-all duration-500 ${
              currentSlide === index ? "w-12" : "w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`h-1 rounded-full transition-all duration-500 ${
                currentSlide === index
                  ? "bg-primary shadow-lg shadow-primary/50"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Slide Counter - Cinematic Touch */}
      <div className="absolute bottom-8 md:bottom-12 right-6 md:right-8 text-white/80 font-light text-sm md:text-base tracking-widest z-20">
        <span className="text-2xl font-medium">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="mx-2">/</span>
        <span>{String(banners.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default HeroCarousel;
