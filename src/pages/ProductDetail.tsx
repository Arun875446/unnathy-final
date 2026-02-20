import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import gsap from "gsap";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { prefersReducedMotion } from "@/lib/motion";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] ?? "");
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] ?? { label: "", offerPrice: 0, originalPrice: 0 });
  const [currentImage, setCurrentImage] = useState(0);

  const imageRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }

    const context = gsap.context(() => {
      if (!imageRef.current || !detailsRef.current) {
        return;
      }

      gsap.fromTo(imageRef.current, { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.66, ease: "power3.out" });
      gsap.fromTo(
        detailsRef.current.children,
        { x: 24, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.56, stagger: 0.07, ease: "power3.out" }
      );
    });

    return () => context.revert();
  }, []);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button className="btn-primary">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen">
      <div className="layout-container py-5 sm:py-6">
        <Link to="/products" className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
          <ChevronLeft size={18} />
          Back to Products
        </Link>
      </div>

      <section className="layout-container pb-14 sm:pb-16">
        <div className="royal-surface grid gap-8 p-4 sm:p-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 lg:p-8">
          <div ref={imageRef}>
            <div className="mb-4 aspect-square overflow-hidden rounded-xl border border-border/70 bg-white">
              <img
                src={product.images[currentImage]}
                alt={product.name}
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>

            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2 sm:gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={`${product.id}-image-${index}`}
                    type="button"
                    onClick={() => setCurrentImage(index)}
                    className={`h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all sm:h-20 sm:w-20 ${
                      currentImage === index ? "border-primary" : "border-border"
                    }`}
                    aria-label={`Show image ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} preview ${index + 1}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div ref={detailsRef} className="self-start lg:sticky lg:top-24">
            <span className="section-eyebrow">{product.category}</span>
            <h1 className="mt-3">{product.name}</h1>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">Check the options below and pick what fits your requirement.</p>

            <div className="mt-5 flex items-center gap-3 sm:gap-4">
              <span className="text-2xl font-bold sm:text-3xl">Rs {selectedSize.offerPrice}</span>
              <span className="text-base text-muted-foreground line-through sm:text-xl">Rs {selectedSize.originalPrice}</span>
            </div>

            <div className="my-6 border-y border-border py-5 sm:py-6">
              <h2 className="text-2xl">Description</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{product.description}</p>
            </div>

            <div className="mb-7">
              <label className="mb-3 block text-sm font-semibold">Select Variant</label>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={`min-h-11 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors sm:px-6 ${
                      selectedVariant === variant ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary"
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-7">
              <label className="mb-3 block text-sm font-semibold">Select Size</label>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={`${product.id}-${size.label}`}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`min-h-11 min-w-[64px] rounded-lg border px-4 py-2 text-sm font-semibold transition-colors sm:px-6 ${
                      selectedSize.label === size.label
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card hover:border-primary"
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              This is a catalog website. Contact us for final price confirmation and delivery details.
            </p>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="layout-section-tight">
          <div className="layout-container">
            <span className="section-eyebrow">Related Products</span>
            <h2 className="mt-4">You May Also Like</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
