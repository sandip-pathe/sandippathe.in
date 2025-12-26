import { db } from "@/helper/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";

// Force dynamic rendering - always fetch fresh data
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Convert plain text with line breaks into proper HTML
function processContent(content: string): string {
  // If content already has HTML tags, return as-is
  if (/<[a-z][\s\S]*>/i.test(content)) {
    return content;
  }

  // Split by double line breaks (paragraphs)
  const paragraphs = content.split(/\n\n+/).filter(Boolean);

  return paragraphs
    .map((p) => {
      // Convert single line breaks within paragraphs to <br>
      const withBreaks = p
        .split(/\n/)
        .map((line) => line.trim())
        .join("<br />");
      return `<p>${withBreaks}</p>`;
    })
    .join("");
}

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
        <header className="mb-10 sm:mb-14">
          <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-foreground mb-5 sm:mb-7 leading-[1.2] tracking-tight">
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
          className="prose prose-lg dark:prose-invert max-w-none text-justify
            prose-headings:font-serif prose-headings:text-foreground prose-headings:font-semibold prose-headings:tracking-tight prose-headings:leading-tight prose-headings:text-left
            prose-p:font-serif prose-p:text-[18px] prose-p:leading-[1.9] prose-p:tracking-[0.01em] prose-p:text-foreground/95 prose-p:mb-7
            prose-strong:text-foreground prose-strong:font-semibold
            prose-a:text-foreground prose-a:underline prose-a:decoration-muted-foreground/50 hover:prose-a:decoration-foreground prose-a:underline-offset-[3px] prose-a:transition-colors
            prose-blockquote:border-l-[3px] prose-blockquote:border-border prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-muted-foreground/90
            prose-code:font-mono prose-code:text-[15px] prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-pre:font-mono prose-pre:bg-muted prose-pre:text-foreground prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto
            prose-ul:text-foreground/95 prose-ul:text-[18px] prose-ul:leading-[1.9] prose-ul:text-left
            prose-ol:text-foreground/95 prose-ol:text-[18px] prose-ol:leading-[1.9] prose-ol:text-left
            prose-li:text-foreground/95 prose-li:mb-3
            prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-12
            prose-h2:text-3xl prose-h2:mb-5 prose-h2:mt-12
            prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-10"
          dangerouslySetInnerHTML={{ __html: processContent(essay.content) }}
        />
      </article>
    </div>
  );
}
