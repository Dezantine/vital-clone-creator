import type { ReactNode } from "react";
import { AgeGate } from "./AgeGate";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <AgeGate />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
