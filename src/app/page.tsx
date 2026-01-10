import { Metadata } from "next";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

// Page-specific metadata for SEO
export const metadata: Metadata = {
  title: "Sandip Pathe | Building AI Systems That Don't Break",
  description:
    "I spent 18 months building a legal AI startup that processed 10,000+ contracts. Here's what I learned about making automation actually work in production.",
  alternates: {
    canonical: "https://sandippathe.in",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-4 right-4 z-50 sm:top-6 sm:right-6">
        <ThemeToggle />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        {/* Hero - Problem Ownership */}
        <section className="mb-16 sm:mb-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4 tracking-tight text-foreground">
            Sandip Pathe
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-foreground mb-6 sm:mb-8 leading-relaxed font-normal">
            Building Anaya, Automated Compliance Detection System for Fintechs.
          </h2>
          <div className="space-y-3 sm:space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
            <p>
              Over the last few years, I’ve worked across legal tech,
              compliance, and automation.
            </p>
            <p>
              mostly in early, undefined problem spaces where the real
              constraints only appear after you start building.
            </p>
            <p>
              I care about failure modes, incentives, and ownership: why systems
              break in practice, and what it takes to design software that keeps
              working when assumptions fail.
            </p>
          </div>
          <p className="text-foreground font-medium text-base sm:text-lg mb-6 sm:mb-8 border-l-2 border-foreground pl-4">
            Automation without ownership is just deferred failure.
          </p>
          <a
            href="mailto:sandippathe9689@gmail.com"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:underline underline-offset-4 text-sm sm:text-base"
          >
            <Mail className="w-4 h-4" />
            sandippathe9689@gmail.com
          </a>
        </section>

        {/* Divider */}
        <div className="border-t border-border mb-12 sm:mb-16"></div>

        {/* Notes Section */}
        <section className="mb-12 sm:mb-16">
          <h3 className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3 sm:mb-4">
            ESSAYS
          </h3>
          <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
            Notes from building automation systems, leverage thinking, and life
            in general. Short snippets of mantras, reflections, and lessons
            learned.
          </p>
          <div className="space-y-4">
            <Link
              href="/essays"
              className="group flex items-center justify-between py-3 border-b border-border hover:border-foreground transition-colors"
            >
              <span className="text-foreground underline-offset-4 text-sm sm:text-base">
                Read essays →
              </span>
            </Link>
          </div>
        </section>

        {/* Work Section */}
        <section className="mb-12 sm:mb-16">
          <h3 className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3 sm:mb-4">
            Work
          </h3>
          <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
            Systems I’ve designed, built, and kept running under real
            constraints.
          </p>
          <Link
            href="/work"
            className="group flex items-center justify-between py-3 border-b border-border hover:border-foreground transition-colors"
          >
            <span className="text-foreground underline-offset-4 text-sm sm:text-base">
              View projects →
            </span>
          </Link>
        </section>

        {/* Background (de-emphasized) */}
        <section className="mb-12 sm:mb-16">
          <h3 className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3 sm:mb-4">
            About
          </h3>
          <div className="text-xs sm:text-sm text-muted-foreground space-y-2">
            <p>founder, engineer, creative technologist</p>
            <p>
              mumbai-based builder obsessed with making AI workflows reliable in
              the real world.
            </p>
            <p>
              launched anaya (legal ai platform) to automate contract
              intelligence for law firms. now exploring compliance automation
              for fintechs.
            </p>
            <p>
              published researcher (ieee igarss 2024), full-stack engineer, and
              relentless experimenter. i believe the best systems are those that
              survive chaos, not just pass tests.
            </p>
            <p>
              when not building, you’ll find me running city marathons,
              sketching, or chasing new ideas across disciplines.
            </p>
            <a
              href="https://github.com/sandip-pathe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:text-foreground hover:underline underline-offset-4"
            >
              github.com/sandip-pathe
            </a>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
