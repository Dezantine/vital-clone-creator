import { Link } from "@tanstack/react-router";
import { useCart } from "./cart";
import { PHONE_DISPLAY, PHONE_HREF } from "./data";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/lab-reports", label: "Lab reports" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur">
      <p className="bg-secondary py-2 text-center text-xs text-muted-foreground">
        Free discreet delivery on every order · Call or text{" "}
        <a href={PHONE_HREF} className="font-medium text-foreground hover:underline">
          {PHONE_DISPLAY}
        </a>
      </p>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl">🌿</span>
          <span className="font-display text-lg font-semibold tracking-tight">Greenwell</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-muted-foreground transition hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={PHONE_HREF}
            className="hidden rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground transition hover:text-foreground lg:inline-block"
          >
            {PHONE_DISPLAY}
          </a>
          <Link
            to="/checkout"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Bag {count > 0 && <span className="ml-1">({count})</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}
