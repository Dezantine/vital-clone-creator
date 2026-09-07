import { useEffect, useState } from "react";

const KEY = "greenwell-age-ok";

export function AgeGate() {
  const [open, setOpen] = useState(false);
  const [remember, setRemember] = useState(true);
  const [declined, setDeclined] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(KEY) !== "yes") setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-surface/85 p-4 backdrop-blur-md">
      <div className="w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card glow">
        <div className="flex items-center gap-3 border-b border-border bg-secondary px-6 py-5">
          <span className="text-2xl">🌿</span>
          <div>
            <p className="font-display text-lg font-semibold">Greenwell Cannabis</p>
            <p className="eyebrow">Premium dispensary</p>
          </div>
        </div>
        <div className="px-6 py-7 text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full border border-accent/40 bg-secondary font-display text-xl font-bold text-primary">
            21+
          </div>
          <h1 className="mt-5 text-2xl font-semibold">Are you 21 or older?</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {declined
              ? "Sorry — you need to be 21 or older to browse this store."
              : "Greenwell sells cannabis and hemp-derived products. Age is checked again at checkout."}
          </p>

          <label className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="size-4 accent-current"
            />
            Remember me on this device for 30 days
          </label>

          <button
            onClick={() => {
              if (remember) {
                try {
                  localStorage.setItem(KEY, "yes");
                } catch {
                  /* ignore */
                }
              }
              setOpen(false);
            }}
            className="mt-5 w-full rounded-xl bg-primary px-4 py-3 font-medium text-primary-foreground transition hover:opacity-90"
          >
            Yes, I am 21+
          </button>
          <button
            onClick={() => setDeclined(true)}
            className="mt-2 w-full rounded-xl border border-border px-4 py-3 font-medium text-foreground transition hover:bg-secondary"
          >
            No, take me back
          </button>

          <p className="mt-4 text-xs text-muted-foreground">
            By entering you accept our terms of service and privacy policy.
          </p>

          <div className="mt-5 flex flex-col gap-2 border-t border-border pt-5 text-xs text-muted-foreground">
            <span className="rounded-full bg-secondary px-3 py-1.5">
              Every batch third-party lab tested
            </span>
            <span className="rounded-full bg-secondary px-3 py-1.5">
              Discreet, odour-sealed packaging
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
