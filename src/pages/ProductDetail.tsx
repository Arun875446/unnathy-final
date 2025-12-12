import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import gsap from "gsap";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants[0] || ""
  );
  const [selectedSize, setSelectedSize] = useState(
    product?.sizes[0] || { label: "", offerPrice: 0, originalPrice: 0 }
  );
  const [currentImage, setCurrentImage] = useState(0);

  const imageRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current && detailsRef.current) {
      gsap.fromTo(
        imageRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );

      gsap.fromTo(
        detailsRef.current.children,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    }
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button className="btn-primary">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <Link
          to="/products"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronLeft size={20} />
          Back to Products
        </Link>
      </div>

      {/* Product Details */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Images */}
          <div ref={imageRef}>
            <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-white pt-2">
              <img
                src={product.images[currentImage]}
                alt={product.name}
                className="w-[90%] h-[100%] object-cover"
              />
            </div>

            {/* Image Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImage === index
                        ? "border-primary"
                        : "border-border"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div ref={detailsRef}>
            {/* {product.hasOffer && product.offerText && (
              <span className="offer-badge inline-block mb-4">
                {product.offerText}
              </span>
            )} */}

            <h1 className="text-4xl font-bold mb-3">{product.name}</h1>
            <p className="text-muted-foreground text-lg mb-6">
              {product.category}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-bold">
                ₹{selectedSize.offerPrice}
              </span>
              <span className="text-xl text-muted-foreground line-through">
                ₹{selectedSize.originalPrice}
              </span>
            </div>

            <div className="border-t border-b border-border py-6 mb-6">
              <h2 className="font-semibold text-lg mb-3">Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Variants */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">
                Select Variant
              </label>
              <div className="flex gap-3 flex-wrap">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 rounded-lg border-2 transition-all font-medium ${
                      selectedVariant === variant
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">
                Select Size
              </label>
              <div className="flex gap-3 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size.label}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-lg border-2 transition-all font-medium min-w-[60px] ${
                      selectedSize.label === size.label
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-muted-foreground text-sm mb-6">
              * This is a catalog website. Products are for viewing only.
            </p>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
