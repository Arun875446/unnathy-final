import { useState } from "react";
import { Eye } from "lucide-react";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import ProductQuickView from "./ProductQuickView";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [showQuickView, setShowQuickView] = useState(false);

  return (
    <>
      <div className="group product-card-hover bg-card rounded-xl overflow-hidden border border-border animated-border">
        <Link to={`/products/${product.id}`}>
          <div className="relative overflow-hidden aspect-square">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-[380px] h-[450px] object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Offer Badge */}
            {product.hasOffer && product.offerText && (
              <div className="absolute top-4 left-4 offer-badge">
                {product.offerText}
              </div>
            )}

            {/* Quick View Button */}
            <Button
              onClick={(e) => {
                e.preventDefault();
                setShowQuickView(true);
              }}
              className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 hover:bg-background text-foreground"
              size="sm"
            >
              <Eye className="w-4 h-4 mr-2" />
              Quick View
            </Button>
          </div>
        </Link>

        <div className="p-4">
          <Link to={`/products/${product.id}`}>
            <p className="text-sm text-muted-foreground mb-1">
              {product.category}
            </p>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          {/* Variants Preview */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {product.variants.slice(0, 3).map((variant, index) => (
              <span key={index} className="variant-badge">
                {variant}
              </span>
            ))}
            {product.variants.length > 3 && (
              <span className="variant-badge bg-primary/10 text-primary">
                +{product.variants.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Quick View Dialog */}
      <ProductQuickView
        product={product}
        open={showQuickView}
        onClose={() => setShowQuickView(false)}
      />
    </>
  );
};

export default ProductCard;
