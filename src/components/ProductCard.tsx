import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="royal-card product-card-hover h-full overflow-hidden">
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />

          {product.hasOffer && product.offerText && (
            <div className="absolute left-3 top-3 offer-badge sm:left-4 sm:top-4">{product.offerText}</div>
          )}
        </div>
      </Link>

      <div className="p-4 sm:p-5">
        <p className="text-caption font-semibold uppercase tracking-[0.12em] text-primary">{product.category}</p>
        <h3 className="mt-1 text-2xl font-semibold leading-tight">{product.name}</h3>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">Rs {product.price}</span>
          {product.originalPrice && <span className="text-sm text-muted-foreground line-through">Rs {product.originalPrice}</span>}
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.variants.slice(0, 3).map((variant) => (
            <span key={`${product.id}-${variant}`} className="variant-badge">
              {variant}
            </span>
          ))}
          {product.variants.length > 3 && (
            <span className="variant-badge bg-primary/10 text-primary">+{product.variants.length - 3}</span>
          )}
        </div>

        <Link
          to={`/products/${product.id}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
        >
          View Details
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
