import { useState } from "react";
import { X } from "lucide-react";
import { Product } from "@/data/products";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProductQuickViewProps {
  product: Product;
  open: boolean;
  onClose: () => void;
}

const ProductQuickView = ({
  product,
  open,
  onClose,
}: ProductQuickViewProps) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Quick View</DialogTitle>
          <DialogDescription>
            View product details and variants
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-4">
          {/* Images */}
          <div>
            <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-white">
              <img
                src={product.images[currentImage]}
                alt={product.name}
                className="w-[90%] h-[100%] object-cover"
              />
            </div>

            {/* Image Thumbnails */}
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    currentImage === index ? "border-primary" : "border-border"
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
          </div>

          {/* Product Info */}
          <div>
            {product.hasOffer && product.offerText && (
              <span className="offer-badge inline-block mb-3">
                {product.offerText}
              </span>
            )}

            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-muted-foreground mb-4">{product.category}</p>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-bold">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>

            <p className="text-muted-foreground mb-6">{product.description}</p>

            {/* Variants */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Variant</label>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 rounded-lg border transition-all ${
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
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Size</label>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border transition-all ${
                      selectedSize === size
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <Link to={`/products/${product.id}`}>
              <Button className="w-full btn-primary">View Full Details</Button>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductQuickView;
