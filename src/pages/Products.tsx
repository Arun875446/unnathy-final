import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryFilter || "All");
  const [sortBy, setSortBy] = useState<string>("featured");
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }

    const context = gsap.context(() => {
      if (!productsRef.current) {
        return;
      }

      gsap.fromTo(
        productsRef.current.querySelectorAll(".product-card"),
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.62,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: productsRef.current,
            start: "top 86%",
          },
        }
      );
    });

    return () => context.revert();
  }, [selectedCategory, sortBy]);

  const categories = ["All", ...Array.from(new Set(products.map((product) => product.category)))];

  const filteredProducts = products
    .filter((product) => selectedCategory === "All" || product.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="min-h-screen">
      <section className="layout-section-tight">
        <div className="layout-container">
          <div className="royal-surface p-6 sm:p-8">
            <span className="section-eyebrow">Product Catalog</span>
            <h1 className="mt-4">Explore Our Full Collection</h1>
            <p className="section-copy mt-3">
              Browse nutrition, masala, and kitchen utility products with clear pricing and variant information.
            </p>
            <div className="section-divider" />
          </div>
        </div>
      </section>

      <section className="layout-container py-6 sm:py-8">
        <div className="royal-surface p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_1fr_auto] md:items-end">
            <div className="w-full">
              <label className="mb-2 block text-sm font-semibold">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="w-full">
              <label className="mb-2 block text-sm font-semibold">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pt-1 text-sm font-medium text-muted-foreground md:text-right">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>
      </section>

      <section className="layout-container pb-16">
        {filteredProducts.length > 0 ? (
          <div ref={productsRef} className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="royal-surface py-14 text-center">
            <p className="text-lg text-muted-foreground">No products found for the selected filter.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Products;
