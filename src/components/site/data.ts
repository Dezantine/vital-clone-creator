import flower from "@/assets/p-flower.jpg";
import vape from "@/assets/p-vape.jpg";
import edible from "@/assets/p-edible.jpg";
import tincture from "@/assets/p-tincture.jpg";

export type Product = {
  id: string;
  name: string;
  brand: string;
  image: string;
  tags: string[];
  price: number;
  was?: number;
  badge?: string;
};

export const categories = [
  { name: "Flower", count: 219, image: flower },
  { name: "Pre-Rolls", count: 113, image: flower },
  { name: "Vapes", count: 241, image: vape },
  { name: "Edibles", count: 132, image: edible },
  { name: "Concentrates", count: 211, image: flower },
  { name: "Oils & Tinctures", count: 24, image: tincture },
  { name: "Topicals", count: 16, image: tincture },
  { name: "Accessories", count: 44, image: vape },
];

export const effects = [
  { name: "Relaxed", count: 703 },
  { name: "Euphoric", count: 477 },
  { name: "Uplifted", count: 248 },
  { name: "Focused", count: 96 },
  { name: "Creative", count: 111 },
  { name: "Energetic", count: 93 },
  { name: "Sleepy", count: 184 },
  { name: "Body relief", count: 274 },
  { name: "Sociable", count: 21 },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Cedar Dusk Indoor Flower",
    brand: "Greenwell Reserve",
    image: flower,
    tags: ["Indica", "3.5 g", "THC 27.4%"],
    price: 44,
    was: 52,
    badge: "Best seller",
  },
  {
    id: "2",
    name: "Sunrise Grove Cartridge",
    brand: "Greenwell Reserve",
    image: vape,
    tags: ["Sativa", "Cartridge", "1 g"],
    price: 38,
    was: 42,
    badge: "New",
  },
  {
    id: "3",
    name: "Orchard Sour Gummies",
    brand: "Still Meadow",
    image: edible,
    tags: ["Hybrid", "10 mg × 20"],
    price: 26,
    badge: "Lab verified",
  },
  {
    id: "4",
    name: "Quiet Hours Tincture",
    brand: "Still Meadow",
    image: tincture,
    tags: ["CBN blend", "30 ml"],
    price: 58,
    was: 64,
  },
  {
    id: "5",
    name: "Harbour Haze Pre-Rolls",
    brand: "Greenwell Reserve",
    image: flower,
    tags: ["Sativa", "5-pack"],
    price: 32,
    badge: "Best seller",
  },
  {
    id: "6",
    name: "Amber Room Live Rosin",
    brand: "Coast & Copper",
    image: flower,
    tags: ["Hybrid", "1 g", "THC 61.8%"],
    price: 54,
    was: 60,
  },
  {
    id: "7",
    name: "Field Note Balm",
    brand: "Still Meadow",
    image: tincture,
    tags: ["Topical", "50 ml"],
    price: 34,
  },
  {
    id: "8",
    name: "Low Tide Disposable",
    brand: "Coast & Copper",
    image: vape,
    tags: ["Indica", "Disposable"],
    price: 29,
    badge: "New",
  },
];
