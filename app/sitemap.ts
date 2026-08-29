import type { MetadataRoute } from "next";
import { buyingCategories } from "./category-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryPages: MetadataRoute.Sitemap = buyingCategories.map((category) => ({
    url: `https://bargainhunterninja.com/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  return [
    { url: "https://bargainhunterninja.com/", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://bargainhunterninja.com/moving", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...categoryPages,
  ];
}
