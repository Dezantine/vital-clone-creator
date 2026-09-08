import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { useCart } from "@/components/site/cart";
import { PHONE_DISPLAY, PHONE_HREF, SMS_HREF } from "@/components/site/data";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Greenwell Cannabis" },
      {
        name: "description",
        content:
          "Review your bag and place your Greenwell order. Free discreet delivery, or call to order by phone.",
      },
      { property: "og:title", content: "Checkout — Greenwell Cannabis" },
      {
        property: "og:description",
        content: "Review your bag and place your order, or call us to order by phone.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Checkout,
});

const DELIVERY = 0;
const TAX_RATE = 0.13;

function Checkout() {
  const { items, subtotal, setQty, remove, clear } = useCart();
  const [placed, setPlaced] = useState(false);

  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax + DELIVERY;

  if (placed) {
    return (
      <Layout>
        <div className="mx-auto max-w-2xl px-4 py-28 text-center">
          <p className="eyebrow">Order received</p>
          <h1 className="mt-2 text-4xl font-semibold">Thanks — we&rsquo;ve got your order</h1>
          <p className="mt-4 text-muted-foreground">
            We&rsquo;ll text you a confirmation and delivery window shortly. Any questions, call or
            text{" "}
            <a href={PHONE_HREF} className="text-accent hover:underline">
              {PHONE_DISPLAY}
            </a>
            .
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-block rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground"
          >
            Keep shopping
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="eyebrow">Checkout</p>
        <h1 className="mt-2 text-4xl font-semibold">Your bag</h1>
        <p className="mt-3 text-muted-foreground">
          Prefer to order by phone? Call or text{" "}
          <a href={PHONE_HREF} className="text-accent hover:underline">
            {PHONE_DISPLAY}
          </a>{" "}
          and we&rsquo;ll take it from there.
        </p>

        {items.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-border bg-card p-12 text-center">
            <p className="text-muted-foreground">Your bag is empty.</p>
            <Link
              to="/shop"
              className="mt-6 inline-block rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground"
            >
              Browse products
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4">
              {items.map(({ product, qty }) => (
                <div
                  key={product.id}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-4"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    width={160}
                    height={160}
                    loading="lazy"
                    className="size-24 shrink-0 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h2 className="font-display font-semibold">{product.name}</h2>
                    <p className="text-xs text-muted-foreground">{product.tags.join(" · ")}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center rounded-lg border border-border">
                        <button
                          aria-label={`Decrease quantity of ${product.name}`}
                          onClick={() => setQty(product.id, qty - 1)}
                          className="px-3 py-1 text-muted-foreground hover:text-foreground"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm">{qty}</span>
                        <button
                          aria-label={`Increase quantity of ${product.name}`}
                          onClick={() => setQty(product.id, qty + 1)}
                          className="px-3 py-1 text-muted-foreground hover:text-foreground"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => remove(product.id)}
                        className="text-xs text-muted-foreground hover:text-foreground"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <p className="font-display font-semibold">
                    ${(product.price * qty).toFixed(2)}
                  </p>
                </div>
              ))}
              <button
                onClick={clear}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Clear bag
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setPlaced(true);
                clear();
              }}
              className="h-fit rounded-2xl border border-border bg-card p-6"
            >
              <h2 className="font-display text-lg font-semibold">Delivery details</h2>
              <div className="mt-4 space-y-3">
                <input
                  required
                  maxLength={100}
                  placeholder="Full name"
                  className="w-full rounded-lg border border-input bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
                />
                <input
                  required
                  type="tel"
                  maxLength={20}
                  placeholder="Phone number"
                  className="w-full rounded-lg border border-input bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
                />
                <input
                  required
                  type="email"
                  maxLength={255}
                  placeholder="Email"
                  className="w-full rounded-lg border border-input bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
                />
                <input
                  required
                  maxLength={200}
                  placeholder="Delivery address"
                  className="w-full rounded-lg border border-input bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
                />
                <textarea
                  rows={3}
                  maxLength={500}
                  placeholder="Delivery notes (optional)"
                  className="w-full rounded-lg border border-input bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
                />
              </div>

              <dl className="mt-6 space-y-2 border-t border-border pt-4 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Subtotal</dt>
                  <dd>${subtotal.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Delivery</dt>
                  <dd>Free</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Tax (13%)</dt>
                  <dd>${tax.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between border-t border-border pt-2 font-display text-base font-semibold">
                  <dt>Total</dt>
                  <dd>${total.toFixed(2)}</dd>
                </div>
              </dl>

              <button className="mt-6 w-full rounded-xl bg-primary px-4 py-3 font-medium text-primary-foreground transition hover:opacity-90">
                Place order
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Pay on delivery, or{" "}
                <a href={SMS_HREF} className="text-accent hover:underline">
                  text us
                </a>{" "}
                to arrange e-transfer. 21+ ID checked at the door.
              </p>
            </form>
          </div>
        )}
      </div>
    </Layout>
  );
}
