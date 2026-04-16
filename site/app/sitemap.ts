import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://texasfiresprinklers.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/fire-sprinkler-installation`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/fire-sprinkler-inspection`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/fire-sprinkler-repair`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/fire-suppression-systems`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/fire-extinguisher-services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/emergency-fire-sprinkler-service`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact-us`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about-us`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/our-process`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
