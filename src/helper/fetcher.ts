import { useState, useEffect } from "react";
import { fetchData } from "../../firebaseConf";

interface FirestoreData {
  about: any[];
  projects: any[];
  faq: any[];
  skills: any[];
  education: any[];
  footer: any[];
}

export function useFirestoreData() {
  const [isLoadingAbout, setIsLoadingAbout] = useState(true);
  const [data, setData] = useState<FirestoreData>({
    about: [],
    projects: [],
    faq: [],
    skills: [],
    education: [],
    footer: [],
  });

  useEffect(() => {
    async function loadInitialData() {
      try {
        const prioritySections: (keyof FirestoreData)[] = ["about", "projects"];
        const delayedSections: (keyof FirestoreData)[] = [
          "faq",
          "skills",
          "education",
          "footer",
        ];

        const priorityPromises = prioritySections.map(async (section) => {
          const sectionData = await fetchData(section);
          return {
            section,
            data: Array.isArray(sectionData) ? sectionData : [],
          };
        });

        const priorityResults = await Promise.all(priorityPromises);
        setData((prev) => ({
          ...prev,
          ...priorityResults.reduce(
            (acc, { section, data }) => ({ ...acc, [section]: data }),
            {}
          ),
        }));

        setIsLoadingAbout(false);

        setTimeout(async () => {
          const delayedPromises = delayedSections.map(async (section) => {
            const sectionData = await fetchData(section);
            return {
              section,
              data: Array.isArray(sectionData) ? sectionData : [],
            };
          });

          const delayedResults = await Promise.all(delayedPromises);
          setData((prev) => ({
            ...prev,
            ...delayedResults.reduce(
              (acc, { section, data }) => ({ ...acc, [section]: data }),
              {}
            ),
          }));
        }, 500);
      } catch (error) {
        console.error("❌ Error loading Firestore data:", error);
      }
    }

    loadInitialData();
  }, []);

  return { data, isLoadingAbout };
}
