import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
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

export const metadata: Metadata = {
  title: "Essays | Sandip Pathe - Notes on AI Workflows & Automation",
  description:
    "Short memos on why AI workflows fail in real businesses — and how to make them survive time, humans, and uncertainty. By Sandip Pathe.",
  openGraph: {
    title: "Essays | Sandip Pathe",
    description: "Notes from building automation systems.",
  },
};

export default async function EssaysPage() {
  // Fetch essays from Firebase (always latest)
  let essays: Essay[] = [];

  try {
    const essaysRef = collection(db, "essays");
    const q = query(essaysRef, orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);

    essays = querySnapshot.docs.map((doc) => doc.data() as Essay);
  } catch (error) {
    console.error("Error fetching essays:", error);
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-4 right-4 z-50 sm:top-6 sm:right-6">
        <ThemeToggle />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Home</span>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header className="max-w-2xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-12">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 sm:mb-4 tracking-tight">
            Notes & Essays
          </h1>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            Short memos on AI Workflows, Agentic AI, Automation Systems, and
            Production Reliability.
          </p>
        </div>
      </header>

      {/* Essays List */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="space-y-1">
          {essays.map((essay) => (
            <article key={essay.id}>
              <Link
                href={`/essays/${essay.slug}`}
                className="block py-4 sm:py-6 border-b border-border hover:bg-muted/50 -mx-4 px-4 transition-colors group"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-2 mb-2">
                  <h2 className="text-base sm:text-lg text-foreground group-hover:underline underline-offset-4 transition-colors">
                    {essay.title}
                  </h2>
                  <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                    {essay.date}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px]">
                  {essay.summary}
                </p>
                <span className="text-xs text-muted-foreground mt-2 inline-block">
                  {essay.readTime}
                </span>
              </Link>
            </article>
          ))}
        </div>

        {essays.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <p className="text-muted-foreground text-base sm:text-lg">
              No essays yet. Check back soon.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <Footer />
      </div>
    </div>
  );
}
