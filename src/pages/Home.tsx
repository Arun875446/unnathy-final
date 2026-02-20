import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const featuredRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const featuredProducts = products.filter((product) => product.featured);

  const categoryMeta = [
    {
      name: "Nutrition",
      description: "Health mixes and flours for simple everyday meals.",
    },
    {
      name: "Masala",
      description: "Spice powders made for balanced, familiar taste.",
    },
    {
      name: "Tupperware",
      description: "Storage and utility items that keep things organized.",
    },
  ].filter((category) => products.some((product) => product.category === category.name));

  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }

    const context = gsap.context(() => {
      if (featuredRef.current) {
        gsap.fromTo(
          featuredRef.current.querySelectorAll(".product-card"),
          { y: 34, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.74,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featuredRef.current,
              start: "top 82%",
            },
          }
        );
      }

      if (categoriesRef.current) {
        gsap.fromTo(
          categoriesRef.current.children,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.58,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: categoriesRef.current,
              start: "top 84%",
            },
          }
        );
      }
    });

    return () => context.revert();
  }, []);

  return (
    <div className="min-h-screen">
      <HeroCarousel />

      <section className="layout-section layout-container">
        <div className="mb-10 sm:mb-12">
          <span className="section-eyebrow">Featured Collection</span>
          <h2 className="mt-4">Top Picks This Season</h2>
          <p className="section-copy mt-3">
            These are the products most people ask for first.
          </p>
          <div className="section-divider" />
        </div>

        <div ref={featuredRef} className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <Link to="/products" className="btn-primary inline-flex">
          View All Products
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <section className="layout-section-tight">
        <div className="layout-container">
          <div className="royal-surface p-6 sm:p-8 lg:p-10">
            <span className="section-eyebrow">Shop By Category</span>
            <h2 className="mt-4">Find The Right Collection Quickly</h2>
            <p className="section-copy mt-3">
              Jump straight to the section you need and skip extra scrolling.
            </p>
            <div className="section-divider" />

            <div ref={categoriesRef} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categoryMeta.map((category) => (
                <Link key={category.name} to={`/products?category=${category.name}`} className="royal-card p-6">
                  <h3 className="text-2xl">{category.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{category.description}</p>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Explore {category.name}
                    <ArrowRight className="h-4 w-4" />
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="layout-section layout-container">
        <div className="rounded-2xl p-7 text-white sm:p-10 lg:p-12" style={{ background: "var(--gradient-lavender)" }}>
          <span className="inline-flex rounded-full border border-white/40 px-3 py-1 text-caption font-semibold uppercase tracking-[0.16em] text-white/90">
            Getting Started
          </span>
          <h2 className="mt-4 text-white">Not Sure What To Pick First?</h2>
          <p className="mt-3 max-w-3xl text-white/90">
            Open the product page, filter by category, and shortlist your items. Reach out after that and we will help
            with the final list.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link to="/about" className="btn-secondary w-full sm:w-auto">
              Learn About Us
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-white/50 bg-white px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/90 sm:w-auto"
            >
              Contact Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
