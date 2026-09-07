import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/lab-reports")({
  head: () => ({
    meta: [
      { title: "Lab reports — Batch testing results | Greenwell" },
      {
        name: "description",
        content:
          "Look up third-party lab results by batch code: potency, pesticides, heavy metals and residual solvents for every Greenwell product.",
      },
      { property: "og:title", content: "Greenwell lab reports" },
      {
        property: "og:description",
        content: "Third-party test results published for every batch we sell.",
      },
    ],
  }),
  component: LabReports,
});

const batches = [
  { code: "GW-2409-A", product: "Cedar Dusk Indoor Flower", lab: "Northline Analytics", date: "12 Aug 2026" },
  { code: "GW-2411-C", product: "Sunrise Grove Cartridge", lab: "Northline Analytics", date: "19 Aug 2026" },
  { code: "SM-1183-B", product: "Orchard Sour Gummies", lab: "Beacon Labs", date: "02 Sep 2026" },
  { code: "SM-1204-A", product: "Quiet Hours Tincture", lab: "Beacon Labs", date: "05 Sep 2026" },
  { code: "CC-0442-D", product: "Amber Room Live Rosin", lab: "Northline Analytics", date: "06 Sep 2026" },
];

function LabReports() {
  return (
    <Layout>
      <div className="mx-auto max-w-4xl px-4 py-20">
        <p className="eyebrow">Transparency</p>
        <h1 className="mt-2 text-4xl font-semibold">Lab reports</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Every batch is tested before it lists. Find the batch code printed on your packaging in
          the table below.
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Batch</th>
                <th className="px-4 py-3">Product</th>
                <th className="hidden px-4 py-3 sm:table-cell">Lab</th>
                <th className="px-4 py-3">Tested</th>
              </tr>
            </thead>
            <tbody className="bg-card">
              {batches.map((b) => (
                <tr key={b.code} className="border-t border-border">
                  <td className="px-4 py-3 font-medium text-primary">{b.code}</td>
                  <td className="px-4 py-3">{b.product}</td>
                  <td className="hidden px-4 py-3 text-muted-foreground sm:table-cell">{b.lab}</td>
                  <td className="px-4 py-3 text-muted-foreground">{b.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Can&rsquo;t find your batch? Email the code to lab@greenwell.example and we&rsquo;ll send
          the certificate over.
        </p>
      </div>
    </Layout>
  );
}
