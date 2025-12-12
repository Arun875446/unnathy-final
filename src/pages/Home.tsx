import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroCarousel from "@/components/HeroCarousel";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const featuredRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate featured products section
    if (featuredRef.current) {
      gsap.fromTo(
        featuredRef.current.querySelectorAll(".product-card"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuredRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // Animate categories section
    if (categoriesRef.current) {
      gsap.fromTo(
        categoriesRef.current.children,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Collection</h2>
          <p className="text-muted-foreground text-lg">
            Discover our handpicked selection of premium products
          </p>
        </div>

        <div ref={featuredRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button className="btn-primary text-lg px-8 py-6">
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground text-lg">
              Explore our diverse range of products
            </p>
          </div>

          <div ref={categoriesRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Clothing", "Accessories", "Jewelry", "Home Decor"].map((category) => (
              <Link
                key={category}
                to={`/products?category=${category}`}
                className="bg-card rounded-xl p-8 text-center hover:shadow-lg transition-all group"
              >
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {category}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8 opacity-90">
            Get in touch with us to learn more about our latest collections
          </p>
          <Link to="/contact">
            <Button className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
