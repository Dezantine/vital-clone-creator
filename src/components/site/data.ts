import flowerSmall from "@/assets/eY_CN1rduh0wbxGcw9BPYvtqdnPsMNN7azxPXy2uHDgFnydlLxavW0F8zLeH7sOhz8Y3xcBO7qZYbQ90G0xDKXXyY-Wov76Q3pmsnURhp2Fv82MHMA16FBeBN01IqIr1np8WSChhlWmnKVzvW3ymk-NOO_VvIb63S0MOSS3o63jhrmZvINlX8aRkBW-Qj6-.jpg.asset.json";
import flowerLarge from "@/assets/mtjurTfwWf2w2UED40eTys6-ayCSH78CwtZIYW3PQKpHCL7zcYU14L2suR5866F6aQnAsEjZBQCKpWQq395FtFEy8FuG7CqAPDtOsAjWlb2aSl2hYLNlN08OQpqYge_UeCdKQKriIeezdS672mfaapuZsk80QiGktITNarNoKnK25zzq-KJynIWpBHKvMEN7.jpg.asset.json";
import cbdFlower from "@/assets/Rj1wPgq6uRjbl9IPYpKI3AKpDE59wAheNYAb5-gCrZ6rK59Mflt10BY6Jnrr7HNIEfQf8VVh2O2Rozsjhpfk6x6on2WW2jiiyDrzJJanLr1liYZKvZmR-htww8ivGJKUshhE-UvHdQ1d0c4UW09vQsTkIzxM_AXtCguEqZzmRoruBo4IkxNJSa9fK9HNvbd.jpg.asset.json";
import preroll from "@/assets/TF8SXT8OG5lKhFm625oYXjfQ8JiW3b629cWUNfJXXINXr9hAASzaW9UT1DgvPvPINpjFsL-ev6Ih5t9XaEiWXLMDKQhqRJ_EWQisdHMogLqpItOfjIOw-dcJca4X0H77OBtDbFXBJJV3gFcd217rSExloPmO-zcrPnZ6irOjU3HcJr7gt_hSAKmYSTgEXhfq.jpg.asset.json";
import cbdOil from "@/assets/TYkHiWqqnwlknxNpRfRNx4ETc_lObu88X0_TLKB0fru7Y3lJktanknpRzkpmoTCw5aO1bDtm9PEwkabvBU8bo2xK7IApm3kly4DPcBKKeZaGbc_okdEBI6GWijbhvJEuuw963RVzzHBcHEApR544OjLI5Nxyis7A2hy-c8Mt8AWU8D-fKhONTN4ROwfCt3Zv.jpg.asset.json";
import balm from "@/assets/u5btxW9HofeUNbCpCTFvHuzkfEG7MIOvY40UuPcdOo74SyHZi5q4iUwAN_kiAnNd4XZcnFOe9IVyXUm2qEh3_rpsKPrY1YeTrjPTRaXqmgWOKyo5eH2o0mBL3SfeyymDhoRyXvapuPKP453aV1Ur23nPsrivOHoBE9YaVSSmFWvWqKof032igyUeJcHXSeky.jpg.asset.json";
import bong from "@/assets/p-bong.jpg";
import grinder from "@/assets/p-grinder.jpg";
import papers from "@/assets/p-papers.jpg";
import jar from "@/assets/p-jar.jpg";
import berryGummies from "@/assets/berry-gummies.jpg.asset.json";
import gummies30 from "@/assets/gummies-30.jpg.asset.json";
import tinctureFull from "@/assets/tincture-full.jpg.asset.json";
import hempPapers from "@/assets/hemp-papers.jpg.asset.json";
import vapeCartridge from "@/assets/vape-cartridge.jpg.asset.json";
import hempFlower from "@/assets/hemp-flower.jpg.asset.json";
import hempPrerolls from "@/assets/hemp-prerolls.jpg.asset.json";
import balmPeppermint from "@/assets/p-balm-peppermint.jpg";
import massageOil from "@/assets/p-massage-oil.jpg";
import softgels from "@/assets/p-softgels.jpg";
import rollOn from "@/assets/p-rollon.jpg";
import bathSoak from "@/assets/p-bath-soak.jpg";
import faceSerum from "@/assets/p-face-serum.jpg";
import cbdDrink from "@/assets/p-cbd-drink.jpg";
import glassPipe from "@/assets/p-glass-pipe.jpg";
import rollingTray from "@/assets/p-rolling-tray.jpg";
import preTubes from "@/assets/p-tubes.jpg";
import storageCase from "@/assets/p-case.jpg";
import hygrometer from "@/assets/p-hygrometer.jpg";

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
  { name: "Flower", count: 2, image: flowerLarge.url },
  { name: "CBD Flower", count: 1, image: cbdFlower.url },
  { name: "Hemp", count: 2, image: hempFlower.url },
  { name: "Pre-Rolls", count: 1, image: preroll.url },
  { name: "Edibles", count: 2, image: berryGummies.url },
  { name: "CBD Oil", count: 3, image: cbdOil.url },
  { name: "Topicals", count: 6, image: balm.url },
  { name: "Vapes", count: 1, image: vapeCartridge.url },
  { name: "Drinks", count: 1, image: cbdDrink },
  { name: "Accessories", count: 10, image: bong },
];

export const products: Product[] = [
  {
    id: "premium-indoor-flower-3-5g",
    name: "Premium Indoor Flower",
    brand: "Greenwell",
    category: "Flower",
    image: flowerSmall.url,
    tags: ["Indoor", "3.5 g", "THC 20–25%"],
    description:
      "High-quality indoor-grown cannabis flower with rich aroma, dense buds and carefully selected genetics. Cured slow and hand-trimmed.",
    price: 35,
    badge: "Best seller",
  },
  {
    id: "premium-indoor-flower-7g",
    name: "Premium Indoor Flower — 7 g",
    brand: "Greenwell",
    category: "Flower",
    image: flowerLarge.url,
    tags: ["Indoor", "7 g", "THC 20–25%"],
    description:
      "A larger option for regular customers, featuring aromatic, well-cured flower with the same indoor-grown quality in a value size.",
    price: 65,
    badge: "Bulk value",
  },
  {
    id: "cbd-flower-3-5g",
    name: "CBD Flower",
    brand: "Greenwell",
    category: "CBD Flower",
    image: cbdFlower.url,
    tags: ["Hemp CBD", "3.5 g", "<0.3% THC"],
    description:
      "Hemp-derived CBD flower designed for customers looking for a non-intoxicating cannabis option where legally permitted.",
    price: 25,
  },
  {
    id: "prerolled-joints-5-pack",
    name: "Pre-Rolled Joints — 5 Pack",
    brand: "Greenwell",
    category: "Pre-Rolls",
    image: preroll.url,
    tags: ["5 × 0.5 g", "Whole flower", "Hybrid"],
    description:
      "Convenient, ready-to-use pre-rolls made from quality whole flower. Rolled fresh and sealed for portability.",
    price: 30,
    badge: "Staff pick",
  },
  {
    id: "cbd-oil-tincture-30ml",
    name: "CBD Oil Tincture — 30 ml",
    brand: "Greenwell",
    category: "CBD Oil",
    image: cbdOil.url,
    tags: ["30 ml", "Broad-spectrum", "THC-free"],
    description:
      "A measured CBD oil product in a dropper bottle for convenient portioning. Third-party tested and blended with MCT oil.",
    price: 30,
  },
  {
    id: "cannabis-topical-balm-50g",
    name: "Cannabis Topical Balm — 50 g",
    brand: "Greenwell",
    category: "Topicals",
    image: balm.url,
    tags: ["50 g", "CBD-rich", "External use"],
    description:
      "A cannabis/CBD topical designed for external application. Product claims and ingredients follow local regulations.",
    price: 35,
  },
  {
    id: "premium-glass-bong",
    name: "Premium Glass Bong",
    brand: "Greenwell",
    category: "Accessories",
    image: bong,
    tags: ["Glass", "Water-filtered", "10 in"],
    description:
      "Durable glass cannabis accessory with a sleek design, made for customers who prefer water-filtered smoking.",
    price: 55,
  },
  {
    id: "herb-grinder-4-piece",
    name: "Herb Grinder — 4 Piece",
    brand: "Greenwell",
    category: "Accessories",
    image: grinder,
    tags: ["Metal", "4-piece", "63 mm"],
    description:
      "Four-piece metal grinder for breaking up dry herbs efficiently and consistently. Includes a kief catcher and magnetic lid.",
    price: 25,
  },
  {
    id: "rolling-paper-filter-kit",
    name: "Rolling Paper & Filter Kit",
    brand: "Greenwell",
    category: "Accessories",
    image: papers,
    tags: ["Papers + tips", "Unbleached", "Kit"],
    description:
      "Rolling papers, tips and accessories packaged together for convenient use. Unbleached paper for a clean burn.",
    price: 10,
  },
  {
    id: "airtight-cannabis-storage-jar",
    name: "Airtight Cannabis Storage Jar",
    brand: "Greenwell",
    category: "Accessories",
    image: jar,
    tags: ["Airtight", "Odor-resistant", "250 ml"],
    description:
      "Odor-resistant, airtight storage container designed to help keep dry cannabis properly stored and fresh.",
    price: 20,
  },
];
