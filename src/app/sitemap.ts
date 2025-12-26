import { MetadataRoute } from "next";
import { db } from "@/helper/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

interface Essay {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://sandippathe.in";

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/essays`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  // Fetch essays from Firebase (dynamic, always up-to-date)
  let essayPages: MetadataRoute.Sitemap = [];
  try {
    const essaysRef = collection(db, "essays");
    const q = query(essaysRef, orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);

    essayPages = querySnapshot.docs.map((doc) => {
      const essay = doc.data() as Essay;
      return {
        url: `${baseUrl}/essays/${essay.slug}`,
        lastModified: new Date(essay.date),
        changeFrequency: "yearly" as const,
        priority: 0.7,
      };
    });
  } catch (error) {
    console.error("Error fetching essays for sitemap:", error);
  }

  return [...staticPages, ...essayPages];
}
