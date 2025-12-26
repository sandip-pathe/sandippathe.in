import { Metadata } from "next";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

// Page-specific metadata for SEO
export const metadata: Metadata = {
  title: "Sandip Pathe | AI Engineer & Founder - Durable AI Workflows",
  description:
    "Sandip Pathe designs and runs AI workflows for systems that can't afford to break. Founder building AI orchestration for legal tech, research, and healthcare.",
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
            I design and run AI workflows for systems that can't afford to
            break.
          </h2>
          <div className="space-y-3 sm:space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
            <p>
              Most AI automations fail in production because no one owns what
              happens when they don't behave.
            </p>
            <p>
              I build orchestration systems where failure modes are designed
              for, not ignored.
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
            Email me
          </a>
        </section>

        {/* Divider */}
        <div className="border-t border-border mb-12 sm:mb-16"></div>

        {/* Notes Section */}
        <section className="mb-12 sm:mb-16">
          <h3 className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3 sm:mb-4">
            Notes from building automation systems
          </h3>
          <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
            Short memos on why AI workflows fail in real businesses — and how to
            make them survive time, humans, and uncertainty.
          </p>
          <div className="space-y-4">
            <Link
              href="/essays"
              className="group flex items-center justify-between py-3 border-b border-border hover:border-foreground transition-colors"
            >
              <span className="text-foreground group-hover:underline underline-offset-4 text-sm sm:text-base">
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
            Systems I've designed, built, and kept running.
          </p>
          <Link
            href="/work"
            className="group flex items-center justify-between py-3 border-b border-border hover:border-foreground transition-colors"
          >
            <span className="text-foreground group-hover:underline underline-offset-4 text-sm sm:text-base">
              View work →
            </span>
          </Link>
        </section>

        {/* Background (de-emphasized) */}
        <section className="mb-12 sm:mb-16">
          <h3 className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3 sm:mb-4">
            Background
          </h3>
          <div className="text-xs sm:text-sm text-muted-foreground space-y-2">
            <p>IEEE IGARSS 2024 — 2 papers on neural network classifiers</p>
            <p>VIT Mumbai — B.E. Electronics (AI/ML focus)</p>
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
