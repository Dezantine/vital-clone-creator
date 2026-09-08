import flower from "@/assets/p-flower.jpg";
import vape from "@/assets/p-vape.jpg";
import edible from "@/assets/p-edible.jpg";
import tincture from "@/assets/p-tincture.jpg";

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  tags: string[];
  description: string;
  price: number;
  was?: number;
  badge?: string;
};

export const PHONE_DISPLAY = "+1 (437) 600-0915";
export const PHONE_HREF = "tel:+14376000915";
export const SMS_HREF = "sms:+14376000915";
export const WHATSAPP_HREF = "https://wa.me/14376000915";

export const categories = [
  { name: "Flower", count: 6, image: flower },
  { name: "Pre-Rolls", count: 2, image: flower },
  { name: "Vapes", count: 3, image: vape },
  { name: "Concentrates", count: 2, image: flower },
  { name: "Edibles", count: 3, image: edible },
  { name: "Oils & Tinctures", count: 2, image: tincture },
  { name: "Topicals", count: 1, image: tincture },
  { name: "Accessories", count: 1, image: vape },
];

export const effects = [
  { name: "Relaxed", count: 9 },
  { name: "Euphoric", count: 7 },
  { name: "Uplifted", count: 6 },
  { name: "Focused", count: 4 },
  { name: "Creative", count: 4 },
  { name: "Energetic", count: 3 },
  { name: "Sleepy", count: 5 },
  { name: "Body relief", count: 5 },
];

export const products: Product[] = [
  {
    id: "flower-pink-kush",
    name: "Pink Kush — Indoor Flower",
    brand: "Greenwell Reserve",
    category: "Flower",
    image: flower,
    tags: ["Indica", "3.5 g", "THC 24–30%"],
    description:
      "A heavy indoor indica with sweet vanilla and floral notes. Dense, frosted buds cured for 21 days — best kept for the end of the evening.",
    price: 34.99,
    was: 39.99,
    badge: "Best seller",
  },
  {
    id: "flower-blue-dream",
    name: "Blue Dream — Indoor Flower",
    brand: "Greenwell Reserve",
    category: "Flower",
    image: flower,
    tags: ["Sativa hybrid", "3.5 g", "THC 18–24%"],
    description:
      "Berry-forward sativa hybrid. Clear-headed and social without the racing edge — a solid daytime jar.",
    price: 29.99,
    badge: "Staff pick",
  },
  {
    id: "flower-wedding-cake",
    name: "Wedding Cake — Indoor Flower",
    brand: "Greenwell Reserve",
    category: "Flower",
    image: flower,
    tags: ["Hybrid", "7 g", "THC 22–27%"],
    description:
      "Rich, doughy terpenes with a peppery finish. Balanced hybrid effect: relaxed body, steady head.",
    price: 54.99,
    was: 64.99,
  },
  {
    id: "flower-gg4",
    name: "GG4 (Gorilla Glue) — Indoor Flower",
    brand: "Coast & Copper",
    category: "Flower",
    image: flower,
    tags: ["Hybrid", "3.5 g", "THC 25–29%"],
    description:
      "Sticky, resin-soaked buds with earthy pine and diesel. Strong and slow — start with less than you think.",
    price: 32.99,
  },
  {
    id: "flower-northern-lights",
    name: "Northern Lights — Indoor Flower",
    brand: "Still Meadow",
    category: "Flower",
    image: flower,
    tags: ["Indica", "14 g", "THC 18–22%"],
    description:
      "A classic sleepy indica in a value-size jar. Sweet, spicy and dependable night after night.",
    price: 89.99,
    was: 104.99,
    badge: "Bulk value",
  },
  {
    id: "flower-jack-herer",
    name: "Jack Herer — Indoor Flower",
    brand: "Coast & Copper",
    category: "Flower",
    image: flower,
    tags: ["Sativa", "3.5 g", "THC 19–23%"],
    description:
      "Bright citrus and pine, sharp and clear. The one people reach for before a long walk or a busy afternoon.",
    price: 31.99,
  },
  {
    id: "preroll-indica-5pack",
    name: "Indica Pre-Roll 5-Pack",
    brand: "Greenwell Reserve",
    category: "Pre-Rolls",
    image: flower,
    tags: ["Indica", "5 × 0.5 g"],
    description:
      "Five half-gram joints of whole-flower indica — no trim, no shake. Rolled fresh each week.",
    price: 24.99,
    was: 29.99,
    badge: "Best seller",
  },
  {
    id: "preroll-infused",
    name: "Infused Diamond Pre-Roll",
    brand: "Coast & Copper",
    category: "Pre-Rolls",
    image: flower,
    tags: ["Hybrid", "1 g", "THC 38%+"],
    description:
      "Flower rolled with THCa diamonds and kief for a much stronger, slower-burning joint. Experienced users only.",
    price: 17.99,
  },
  {
    id: "vape-510-hybrid",
    name: "510 Cartridge — Hybrid Distillate",
    brand: "Greenwell Reserve",
    category: "Vapes",
    image: vape,
    tags: ["Hybrid", "1 g cart", "THC 85%+"],
    description:
      "Strain-specific terpenes on a clean distillate base. Fits any standard 510 battery.",
    price: 39.99,
    was: 44.99,
  },
  {
    id: "vape-live-resin",
    name: "Live Resin Cartridge",
    brand: "Coast & Copper",
    category: "Vapes",
    image: vape,
    tags: ["Sativa", "1 g cart", "Live resin"],
    description:
      "Full-spectrum live resin pressed from flash-frozen fresh flower. Much more flavour than distillate.",
    price: 49.99,
    badge: "New",
  },
  {
    id: "vape-disposable",
    name: "All-in-One Disposable Pen",
    brand: "Still Meadow",
    category: "Vapes",
    image: vape,
    tags: ["Indica", "2 g", "Rechargeable"],
    description: "Two grams, rechargeable, ready out of the box. Nothing to screw together.",
    price: 44.99,
  },
  {
    id: "conc-live-rosin",
    name: "Live Rosin — Solventless",
    brand: "Coast & Copper",
    category: "Concentrates",
    image: flower,
    tags: ["Hybrid", "1 g", "Solventless"],
    description:
      "Ice-water hash pressed with heat only — no solvents at any stage. Our cleanest-tasting extract.",
    price: 59.99,
    was: 69.99,
  },
  {
    id: "conc-shatter",
    name: "Shatter — Craft Extract",
    brand: "Still Meadow",
    category: "Concentrates",
    image: flower,
    tags: ["Indica", "1 g", "THC 80%+"],
    description: "Glassy, snap-and-pull shatter for dabs. Purged fully and lab-tested for solvents.",
    price: 34.99,
  },
  {
    id: "edible-gummies",
    name: "Sour Fruit Gummies — 200 mg",
    brand: "Still Meadow",
    category: "Edibles",
    image: edible,
    tags: ["Hybrid", "20 × 10 mg"],
    description:
      "Twenty precisely dosed 10 mg gummies. Start with half a piece and wait a full 90 minutes.",
    price: 24.99,
    badge: "Lab verified",
  },
  {
    id: "edible-chocolate",
    name: "Dark Chocolate Bar — 100 mg",
    brand: "Still Meadow",
    category: "Edibles",
    image: edible,
    tags: ["Indica", "10 × 10 mg"],
    description: "70% dark chocolate scored into ten even 10 mg squares. Melts clean, no grit.",
    price: 19.99,
  },
  {
    id: "edible-sleep-gummies",
    name: "Sleep Gummies — CBN + THC",
    brand: "Still Meadow",
    category: "Edibles",
    image: edible,
    tags: ["5 mg THC + 5 mg CBN", "20 pack"],
    description:
      "A low-dose THC and CBN blend built for staying asleep rather than getting high.",
    price: 27.99,
    badge: "New",
  },
  {
    id: "oil-full-spectrum",
    name: "Full-Spectrum THC Oil — 30 ml",
    brand: "Greenwell Reserve",
    category: "Oils & Tinctures",
    image: tincture,
    tags: ["25 mg/ml THC", "MCT base"],
    description:
      "Measured dropper, MCT carrier oil, nothing else. Straightforward for daily or measured dosing.",
    price: 64.99,
    was: 74.99,
  },
  {
    id: "oil-cbd-1000",
    name: "CBD Tincture 1000 mg — 30 ml",
    brand: "Still Meadow",
    category: "Oils & Tinctures",
    image: tincture,
    tags: ["CBD", "33 mg/ml", "THC-free"],
    description: "Broad-spectrum CBD with no detectable THC. Neutral taste, third-party tested.",
    price: 49.99,
  },
  {
    id: "topical-balm",
    name: "Muscle Relief Balm — 500 mg",
    brand: "Still Meadow",
    category: "Topicals",
    image: tincture,
    tags: ["1:1 THC:CBD", "50 ml"],
    description:
      "A thick, non-greasy balm with arnica and menthol for joints and worked muscles. Won't get you high.",
    price: 39.99,
  },
  {
    id: "acc-battery",
    name: "510 Battery + USB-C Charger",
    brand: "Greenwell Reserve",
    category: "Accessories",
    image: vape,
    tags: ["Variable voltage", "Preheat"],
    description:
      "Three heat settings and a preheat mode so thicker carts pull properly in cold weather.",
    price: 24.99,
  },
];
