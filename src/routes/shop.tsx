import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, products } from "@/components/site/data";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop cannabis — Flower, vapes, edibles | Greenwell" },
      {
        name: "description",
        content:
          "Browse Greenwell's full range: small-batch flower, pre-rolls, vapes, concentrates, edibles, tinctures and topicals.",
      },
      { property: "og:title", content: "Shop cannabis at Greenwell" },
      {
        property: "og:description",
        content: "Lab-tested flower, vapes, edibles and more, shipped discreetly.",
      },
    ],
  }),
  component: Shop,
});

function Shop() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", ...categories.map((c) => c.name)];

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="eyebrow">The collection</p>
        <h1 className="mt-2 text-4xl font-semibold">Shop all products</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          {products.length} in-stock items from this month&rsquo;s releases. Prices include the
          sitewide 10% discount at checkout.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                filter === f
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
