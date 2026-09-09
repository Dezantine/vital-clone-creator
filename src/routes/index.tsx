import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { Layout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, effects, products } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Greenwell Cannabis — Small-batch flower, vapes & edibles" },
      {
        name: "description",
        content:
          "Lab-tested small-batch cannabis shipped in discreet packaging. Shop flower, pre-rolls, vapes, edibles, concentrates and tinctures.",
      },
      { property: "og:title", content: "Greenwell Cannabis — Premium, lab-tested cannabis" },
      {
        property: "og:description",
        content:
          "Small-batch flower, extracts and edibles. Every batch third-party tested, every order shipped discreetly.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <img
          src={hero}
          alt="Greenwell dispensary counter lit with warm light"
          width={1600}
          height={1104}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative mx-auto max-w-6xl px-4 py-28 sm:py-36">
          <p className="eyebrow">Lab-verified batches · shipped nationwide</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-6xl">
            Premium cannabis, delivered clean and compliant
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Small-batch flower, extracts and edibles — every batch tested by an independent lab,
            every order sealed and shipped discreetly to your door.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/shop"
              className="rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
            >
              Shop the collection
            </Link>
            <Link
              to="/lab-reports"
              className="rounded-xl border border-border bg-surface/60 px-6 py-3 font-medium backdrop-blur transition hover:bg-secondary"
            >
              View lab reports
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="rounded-full bg-primary px-3 py-1.5 font-medium text-primary-foreground">
              Shop 10 products
            </span>
            <span>Free discreet standard delivery</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Categories</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Shop by category</h2>
            <p className="mt-2 text-muted-foreground">
              Six curated ranges, one standard of quality.
            </p>
          </div>
          <Link to="/shop" className="text-sm text-accent hover:underline">
            Shop all products →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.name}
              to="/shop"
              className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:border-accent/50"
            >
              <div className="aspect-4/3 overflow-hidden bg-secondary">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="size-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-base font-semibold">{c.name}</h3>
                <p className="text-xs text-muted-foreground">{c.count} products</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {effects.map((e) => (
            <Link
              key={e.name}
              to="/shop"
              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition hover:border-accent/50 hover:text-foreground"
            >
              {e.name} <span className="font-semibold text-foreground">{e.count}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Featured this week</p>
              <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">This week&rsquo;s picks</h2>
              <p className="mt-2 text-muted-foreground">
                Hand-selected by our cultivation team.
              </p>
            </div>
            <Link to="/shop" className="text-sm text-accent hover:underline">
              View all →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              t: "Tested every batch",
              d: "Independent labs check potency, pesticides and residual solvents before anything ships.",
            },
            {
              t: "Discreet by default",
              d: "Odour-sealed, unmarked packaging with plain billing descriptors.",
            },
            {
              t: "Grown small-batch",
              d: "Limited runs from partner farms we visit, harvest by harvest.",
            },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
