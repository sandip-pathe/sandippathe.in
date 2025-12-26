"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Loader2 } from "lucide-react";
import { getEssayBySlug, Essay } from "@/helper/firebase-essays";
import ShareButtons from "@/components/ShareButtons";
import ThemeToggle from "@/components/ThemeToggle";

// Fallback data
import essaysData from "@/data/essays.json";

interface EssayContentProps {
  slug: string;
  initialEssay: Essay | null;
}

export default function EssayContent({
  slug,
  initialEssay,
}: EssayContentProps) {
  const [essay, setEssay] = useState<Essay | null>(initialEssay);
  const [loading, setLoading] = useState(!initialEssay);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // If we have initial essay from static props, use it
    if (initialEssay) {
      setEssay(initialEssay);
      setLoading(false);
      return;
    }

    async function fetchEssay() {
      try {
        // Try Firebase first
        const firebaseEssay = await getEssayBySlug(slug);
        if (firebaseEssay) {
          setEssay(firebaseEssay);
        } else {
          // Fallback to static data
          const staticEssay = (essaysData as Essay[]).find(
            (e) => e.slug === slug
          );
          if (staticEssay) {
            setEssay(staticEssay);
          } else {
            setNotFound(true);
          }
        }
      } catch (error) {
        console.error("Error fetching essay:", error);
        // Fallback to static data
        const staticEssay = (essaysData as Essay[]).find(
          (e) => e.slug === slug
        );
        if (staticEssay) {
          setEssay(staticEssay);
        } else {
          setNotFound(true);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchEssay();
  }, [slug, initialEssay]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-muted-foreground animate-spin" />
      </div>
    );
  }

  if (notFound || !essay) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
        <h1 className="text-xl sm:text-2xl font-serif text-foreground mb-4">
          Essay not found
        </h1>
        <Link
          href="/essays"
          className="text-muted-foreground hover:text-foreground underline"
        >
          ← Back to essays
        </Link>
      </div>
    );
  }

  // Split content into paragraphs
  const paragraphs = essay.content.split("\n\n");

  // Build the URL for sharing
  const baseUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://sandippathe.in";
  const shareUrl = `${baseUrl}/essays/${essay.slug}`;

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
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">All Essays</span>
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-24">
        {/* Header */}
        <header className="mb-8 sm:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-serif text-foreground leading-tight mb-4 sm:mb-6"
          >
            {essay.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {essay.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {essay.readTime}
              </span>
            </div>

            {/* Share Buttons */}
            <ShareButtons
              title={essay.title}
              url={shareUrl}
              summary={essay.summary}
            />
          </motion.div>
        </header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-lg dark:prose-invert"
        >
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-foreground leading-[1.8] text-base sm:text-[17px] font-serif mb-5 sm:mb-6"
              style={{
                textRendering: "optimizeLegibility",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border"
        >
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Share Buttons (bottom) */}
            <div className="flex items-center justify-center">
              <ShareButtons
                title={essay.title}
                url={shareUrl}
                summary={essay.summary}
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs sm:text-sm text-muted-foreground">
                Thanks for reading. If you have thoughts, feel free to{" "}
                <Link
                  href="/#contact"
                  className="text-muted-foreground hover:text-foreground underline"
                >
                  reach out
                </Link>
                .
              </p>
              <Link
                href="/essays"
                className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to all essays
              </Link>
            </div>
          </div>
        </motion.footer>
      </article>
    </div>
  );
}
