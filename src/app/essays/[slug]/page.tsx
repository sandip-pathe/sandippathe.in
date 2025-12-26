import { db } from "@/helper/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";

interface Essay {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
}

// Generate static params for known essays (for build optimization)
export async function generateStaticParams() {
  try {
    const essaysRef = collection(db, "essays");
    const querySnapshot = await getDocs(essaysRef);

    return querySnapshot.docs.map((doc) => ({
      slug: doc.data().slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const essaysRef = collection(db, "essays");
    const q = query(essaysRef, where("slug", "==", slug));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return {
        title: "Essay Not Found",
      };
    }

    const essay = querySnapshot.docs[0].data() as Essay;

    return {
      title: `${essay.title} | Sandip Pathe`,
      description: essay.summary,
      openGraph: {
        title: essay.title,
        description: essay.summary,
        type: "article",
        publishedTime: essay.date,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Essay | Sandip Pathe",
    };
  }
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function EssayPage({ params }: PageProps) {
  const { slug } = await params;

  // Fetch essay from Firebase (always latest data)
  let essay: Essay | null = null;

  try {
    const essaysRef = collection(db, "essays");
    const q = query(essaysRef, where("slug", "==", slug));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      essay = querySnapshot.docs[0].data() as Essay;
    }
  } catch (error) {
    console.error("Error fetching essay:", error);
  }

  if (!essay) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-4 right-4 z-50 sm:top-6 sm:right-6">
        <ThemeToggle />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <Link
            href="/essays"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">All Essays</span>
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <header className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            {essay.title}
          </h1>

          <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={essay.date}>
                {new Date(essay.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{essay.readTime}</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div
          className="prose prose-lg prose-neutral dark:prose-invert max-w-none
            prose-headings:text-foreground
            prose-p:text-foreground/90
            prose-strong:text-foreground
            prose-a:text-foreground prose-a:underline hover:prose-a:text-muted-foreground
            prose-blockquote:border-l-border prose-blockquote:text-muted-foreground
            prose-code:text-foreground prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-muted prose-pre:text-foreground
            prose-ul:text-foreground/90
            prose-ol:text-foreground/90
            prose-li:text-foreground/90"
          dangerouslySetInnerHTML={{ __html: essay.content }}
        />
      </article>
    </div>
  );
}
