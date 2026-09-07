import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Greenwell Cannabis — Orders & support" },
      {
        name: "description",
        content:
          "Questions about an order, a batch code or delivery? Send the Greenwell support team a message and we'll reply within one business day.",
      },
      { property: "og:title", content: "Contact Greenwell Cannabis" },
      {
        property: "og:description",
        content: "Order, delivery and lab-report support, answered within one business day.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <div className="mx-auto grid max-w-5xl gap-12 px-4 py-20 md:grid-cols-2">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h1 className="mt-2 text-4xl font-semibold">We&rsquo;re here to help</h1>
          <p className="mt-3 text-muted-foreground">
            Orders, delivery windows, batch certificates — send it over and a real person replies
            within one business day.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="text-muted-foreground">Support</dt>
              <dd>hello@greenwell.example</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Lab certificates</dt>
              <dd>lab@greenwell.example</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Hours</dt>
              <dd>Mon–Sat, 9am – 7pm</dd>
            </div>
          </dl>
          <p className="mt-6 text-xs text-muted-foreground">
            These contact details are placeholders — send me your real ones and I&rsquo;ll swap
            them in.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-2xl border border-border bg-card p-6"
        >
          {sent ? (
            <p className="py-16 text-center text-muted-foreground">
              Thanks — your message is on its way.
            </p>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  required
                  className="mt-1 w-full rounded-lg border border-input bg-surface px-3 py-2 outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-input bg-surface px-3 py-2 outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground" htmlFor="msg">
                  Message
                </label>
                <textarea
                  id="msg"
                  rows={5}
                  required
                  className="mt-1 w-full rounded-lg border border-input bg-surface px-3 py-2 outline-none focus:border-accent"
                />
              </div>
              <button className="w-full rounded-xl bg-primary px-4 py-3 font-medium text-primary-foreground transition hover:opacity-90">
                Send message
              </button>
            </div>
          )}
        </form>
      </div>
    </Layout>
  );
}
