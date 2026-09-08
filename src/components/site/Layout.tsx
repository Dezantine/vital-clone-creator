import type { ReactNode } from "react";
import { AgeGate } from "./AgeGate";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CartProvider } from "./cart";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <AgeGate />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </CartProvider>
  );
}
