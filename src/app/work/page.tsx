import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import experienceData from "@/data/experience.json";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Work & Projects | Sandip Pathe - AI Systems Engineer",
  description:
    "Systems designed, built, and kept running by Sandip Pathe. AI workflows, automation infrastructure, and production-grade solutions for legal AI, data platforms, and enterprise tools.",
  openGraph: {
    title: "Work & Projects | Sandip Pathe",
    description: "Systems designed, built, and kept running.",
  },
};

interface Work {
  id: string;
  title: string;
  role: string;
  period: string;
  location: string;
  whatWasBroken: string;
  whyAutomationFailed: string;
  whatIBuilt: string;
  outcome: string;
  tech: string[];
  type: string;
}

export default function WorkPage() {
  const work: Work[] = experienceData;

  return (
    <div className="min-h-screen bg-background">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-4 right-4 z-50 sm:top-6 sm:right-6">
        <ThemeToggle />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Home</span>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-12">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 sm:mb-4 tracking-tight">
            Work
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
            Systems I've designed, built, and kept running.
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Each entry follows the same shape: what was broken, why normal
            approaches failed, what I actually built, and what happened.
          </p>
        </div>
      </header>

      {/* Work Entries */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="space-y-12 sm:space-y-16">
          {work.map((item) => (
            <article
              key={item.id}
              className="border-t border-border pt-6 sm:pt-8"
            >
              {/* Title & Meta */}
              <header className="mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-2 leading-tight">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {item.role} · {item.period}
                </p>
              </header>

              {/* Structure: What was broken → Why automation failed → What I built → Outcome */}
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-[15px]">
                {/* What was broken */}
                <div>
                  <h3 className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    What was broken
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.whatWasBroken}
                  </p>
                </div>

                {/* Why normal automation failed */}
                {item.whyAutomationFailed !==
                  "N/A — rapid prototype demonstrating speed to production." && (
                  <div>
                    <h3 className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                      Why normal automation failed
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.whyAutomationFailed}
                    </p>
                  </div>
                )}

                {/* What I built */}
                <div>
                  <h3 className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    What I built
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.whatIBuilt}
                  </p>
                </div>

                {/* Outcome */}
                <div>
                  <h3 className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    Outcome
                  </h3>
                  <p className="text-foreground leading-relaxed font-medium">
                    {item.outcome}
                  </p>
                </div>

                {/* Tech (de-emphasized) */}
                <div className="pt-2">
                  <p className="text-xs text-muted-foreground">
                    {item.tech.join(" · ")}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Contact CTA */}
        <section className="mt-16 sm:mt-20 pt-6 sm:pt-8 border-t border-border">
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">
            Have a system that needs to work reliably?
          </p>
          <a
            href="mailto:sandippathe9689@gmail.com"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:underline underline-offset-4 text-sm sm:text-base"
          >
            <Mail className="w-4 h-4" />
            Email me
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-xs sm:text-sm text-muted-foreground">
          <p>Mumbai, India</p>
        </div>
      </footer>
    </div>
  );
}
