import aboutData from "@/data/about.json";
import projectsData from "@/data/projects.json";
import skillsData from "@/data/skills.json";
import educationData from "@/data/education.json";
import faqData from "@/data/faq.json";
import footerData from "@/data/footer.json";

interface FirestoreData {
  about: any[];
  projects: any[];
  faq: any[];
  skills: any[];
  education: any[];
  footer: any[];
}

export function getStaticData(): FirestoreData {
  return {
    about: aboutData,
    projects: projectsData,
    faq: faqData,
    skills: skillsData,
    education: educationData,
    footer: footerData,
  };
}

// For backward compatibility
export function useFirestoreData() {
  const data = getStaticData();

  return {
    data,
    isLoadingAbout: false,
  };
}
