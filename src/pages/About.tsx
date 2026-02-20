import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const aboutImageUrls = {
  howWeStarted:
    "https://images.pexels.com/photos/30296301/pexels-photo-30296301.jpeg?cs=srgb&dl=pexels-kamakshi-72543796-30296301.jpg&fm=jpg",
  qualityChecks:
    "https://images.pexels.com/photos/5953777/pexels-photo-5953777.jpeg?cs=srgb&dl=pexels-shvetsa-5953777.jpg&fm=jpg",
  whoWeServe:
    "https://images.pexels.com/photos/8581405/pexels-photo-8581405.jpeg?cs=srgb&dl=pexels-rdne-8581405.jpg&fm=jpg",
};

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }

    const context = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(heroRef.current.children, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, stagger: 0.12 });
      }

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.querySelectorAll(".about-block"),
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 82%",
            },
          }
        );
      }
    });

    return () => context.revert();
  }, []);

  return (
    <div className="min-h-screen">
      <section className="layout-section-tight">
        <div ref={heroRef} className="layout-container">
          <div className="royal-surface p-6 sm:p-8">
            <span className="section-eyebrow">About Unnathy</span>
            <h1 className="mt-4">How Unnathy Started</h1>
            <p className="section-copy mt-3">
              We began as a small setup in Thoothukudi and grew steadily through repeat customers and referrals.
            </p>
            <div className="section-divider" />
          </div>
        </div>
      </section>

      <section ref={contentRef} className="layout-container pb-16">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="about-block royal-surface p-6 sm:p-8">
            <h2>How We Started</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              In the beginning, we supplied to nearby families who wanted reliable pantry products without changing
              brands every month.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Over time, demand grew, the range expanded, and the process became more structured.
            </p>
          </article>

          <article className="about-block royal-surface overflow-hidden">
            <img
              src={aboutImageUrls.howWeStarted}
              alt="Assorted Indian spices arranged for in-house preparation"
              className="h-full min-h-[16rem] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </article>
        </div>

        <div className="about-block mt-5 grid gap-5 lg:grid-cols-3">
          <article className="royal-card p-6">
            <h3 className="text-2xl">Nutrition</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Everyday mixes and flours made for regular family use.
            </p>
          </article>
          <article className="royal-card p-6">
            <h3 className="text-2xl">Masala</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Spice blends that are easy to use and easy to repeat.
            </p>
          </article>
          <article className="royal-card p-6">
            <h3 className="text-2xl">Kitchen Utility</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Storage and utility products chosen for practical everyday handling.
            </p>
          </article>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <article className="about-block royal-surface p-6 sm:p-8">
            <h2>How We Check Quality</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              The rule is simple: if something feels off, it does not go out.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground sm:text-base">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                Raw ingredients are checked before production starts.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                Each batch is reviewed before packing.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                Only approved stock goes into customer packs.
              </li>
            </ul>
          </article>

          <article className="about-block royal-surface overflow-hidden">
            <img
              src={aboutImageUrls.qualityChecks}
              alt="Workers handling product packing with hygiene gloves"
              className="h-full min-h-[16rem] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </article>
        </div>

        <div className="about-block mt-5 grid gap-5 lg:grid-cols-2">
          <article className="royal-surface p-6 sm:p-8">
            <h2>Who We Serve</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Most orders come from home kitchens, and we also handle larger quantity requests for bulk buyers.
            </p>
          </article>

          <article className="royal-surface overflow-hidden">
            <img
              src={aboutImageUrls.whoWeServe}
              alt="Hands holding pantry jars for home and bulk kitchen use"
              className="h-full min-h-[16rem] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
