import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🌿</span>
            <span className="font-display text-lg font-semibold">Greenwell</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Small-batch cannabis, lab tested batch by batch and shipped in discreet, odour-sealed
            packaging.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Shop</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/shop" className="hover:text-foreground">
                All products
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-foreground">
                Flower &amp; pre-rolls
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-foreground">
                Vapes &amp; concentrates
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-foreground">
                Edibles &amp; tinctures
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-foreground">
                About us
              </Link>
            </li>
            <li>
              <Link to="/lab-reports" className="hover:text-foreground">
                Lab reports
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Stay in the loop</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Drop notices and batch releases, roughly twice a month.
          </p>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              (e.currentTarget as HTMLFormElement).reset();
            }}
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="w-full rounded-lg border border-input bg-card px-3 py-2 text-sm outline-none focus:border-accent"
            />
            <button className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-border px-4 py-6 text-center text-xs text-muted-foreground">
        21+ only. Keep out of reach of children. © {new Date().getFullYear()} Greenwell Cannabis.
      </div>
    </footer>
  );
}
