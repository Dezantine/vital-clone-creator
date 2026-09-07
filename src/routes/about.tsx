import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Greenwell Cannabis — How we source and test" },
      {
        name: "description",
        content:
          "Greenwell works with a short list of partner farms, buys by the harvest and tests every batch before it reaches a shelf.",
      },
      { property: "og:title", content: "About Greenwell Cannabis" },
      {
        property: "og:description",
        content: "Small-batch sourcing, independent testing and discreet delivery.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <div className="mx-auto max-w-3xl px-4 py-20">
        <p className="eyebrow">Our story</p>
        <h1 className="mt-2 text-4xl font-semibold">Built around the harvest, not the warehouse</h1>
        <div className="mt-8 space-y-5 text-muted-foreground">
          <p>
            Greenwell started with a simple frustration: shelves full of products nobody could
            trace. We buy from a short list of partner farms, one harvest at a time, and we publish
            the paperwork for every batch we sell.
          </p>
          <p>
            Each lot is tested by an independent lab for potency, pesticides, heavy metals and
            residual solvents. If a result comes back outside our range, the lot never lists.
          </p>
          <p>
            Orders ship in odour-sealed, unmarked packaging with plain billing descriptors, so what
            arrives at your door stays between you and us.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            ["11", "partner farms"],
            ["100%", "batches tested"],
            ["48 hr", "typical dispatch"],
          ].map(([n, l]) => (
            <div key={l} className="rounded-2xl border border-border bg-card p-6 text-center">
              <p className="font-display text-3xl font-semibold text-primary">{n}</p>
              <p className="mt-1 text-sm text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
