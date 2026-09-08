import { useState } from "react";
import type { Product } from "./data";
import { useCart } from "./cart";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  const off =
    product.was && product.was > product.price
      ? Math.round(((product.was - product.price) / product.was) * 100)
      : null;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:border-accent/50">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="size-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          {off && (
            <span className="rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold text-primary-foreground">
              {off}% off
            </span>
          )}
          {product.badge && (
            <span className="rounded-full bg-surface/80 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur">
              {product.badge}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-display text-base font-semibold leading-tight">{product.name}</h3>
        <p className="text-xs text-muted-foreground">{product.brand}</p>
        <div className="flex flex-wrap gap-1.5">
          {product.tags.map((t) => (
            <span
              key={t}
              className="rounded-md bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{product.description}</p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <p className="font-display text-lg font-semibold">
            ${product.price.toFixed(2)}
            {product.was && (
              <span className="ml-2 text-sm font-normal text-muted-foreground line-through">
                ${product.was.toFixed(2)}
              </span>
            )}
          </p>
          <button
            onClick={() => {
              add(product.id);
              setAdded(true);
              setTimeout(() => setAdded(false), 1200);
            }}
            className="rounded-lg border border-accent/40 px-3 py-1.5 text-xs font-medium text-accent transition hover:bg-accent hover:text-accent-foreground"
          >
            {added ? "Added ✓" : "Add to bag"}
          </button>
        </div>
      </div>
    </article>
  );
}
