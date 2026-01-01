import { ArrowRightIcon, CheckCircleIcon, ChevronDown } from "lucide-react";
import { Metadata } from "next";
import CalendlyEmbed from "./CalendlyEmbed";
import ContactForm from "./ContactForm";
import ServiceCard from "./ServiceCard";

export const metadata: Metadata = {
  title:
    "AI Automation Services for Startups | Automate Invoice Processing, Workflows | Save 20+ Hours/Week",
  description:
    "Automate repetitive tasks with custom AI workflows. Invoice processing automation, meeting transcription, email routing, lead qualification. Built in 5-7 days for growing startups. Starting at $1,500.",
  keywords:
    "automate invoice processing, workflow automation services, AI automation for startups, automate email management, meeting transcription automation, lead qualification automation, business process automation, automate repetitive tasks, custom automation solutions, Mumbai automation services, Indian startup automation, automate customer data, document processing automation, smart email routing",
  openGraph: {
    title: "Automate Your Startup's Repetitive Work | AI Workflow Automation",
    description:
      "Save 20+ hours/week with custom AI automation. Invoice processing, meetings, emails, lead qualification. 5-7 day delivery. Starting $1,500.",
    type: "website",
    url: "https://sandippathe.in/automation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automate Your Startup's Repetitive Work",
    description:
      "Custom AI workflows. Save 20+ hours/week. Built in 5-7 days. $1,500-$2,500.",
  },
  alternates: {
    canonical: "https://sandippathe.in/automation",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function AutomationLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900">
      {/* Schema.org structured data for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI Automation Services for Startups",
            description:
              "Custom AI workflows that automate invoice processing, meeting transcription, email routing, and repetitive business tasks",
            provider: {
              "@type": "Person",
              name: "Sandip Pathe",
              email: "sandippathe9689@gmail.com",
              url: "https://sandippathe.in",
            },
            areaServed: "IN",
            offers: {
              "@type": "Offer",
              price: "1500",
              priceCurrency: "USD",
              priceValidUntil: "2025-12-31",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "3",
            },
          }),
        }}
      />
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-28 max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Invoice Automation Market: $4.32B+ in 2025
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            Stop Losing 20 Hours/Week
            <br />
            to Manual Work
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Custom AI workflows for invoice processing, meeting transcription,
            and data chaos.
            <br />
            <span className="text-blue-600 font-semibold">
              Delivered in 5-7 days.
            </span>{" "}
            No code required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <a
              href="#calendly"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Book 15-Min Discovery Call
              <ArrowRightIcon className="w-5 h-5" />
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 bg-white text-slate-700 rounded-lg font-semibold text-lg hover:bg-slate-50 transition-all border-2 border-slate-200"
            >
              See How It Works
            </a>
          </div>
          <p className="text-sm text-slate-500 pt-2">
            Starting at $1,500 • No long-term contracts • 7-day delivery
          </p>
        </div>
      </section>

      {/* How It Works - MOVED UP */}
      <section id="how-it-works" className="px-4 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            How It Works
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Discovery Call (15 mins)
                </h3>
                <p className="text-slate-600">
                  Walk me through your current workflow. I'll identify 2-3
                  automation opportunities and estimate time savings.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Custom Proposal (Same Day)
                </h3>
                <p className="text-slate-600">
                  Detailed scope, tech stack, timeline, and investment.
                  Transparent pricing. No hidden fees.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Build & Deliver (5-7 Days)
                </h3>
                <p className="text-slate-600">
                  Daily Slack updates. You'll see progress in real-time.
                  Includes training video and documentation.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Launch & Support
                </h3>
                <p className="text-slate-600">
                  2-week free support. Optional $300/month maintenance for
                  updates, monitoring, and enhancements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOP 3 Services Section */}
      <section id="services" className="px-4 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Top 3 Workflows We Automate
          </h2>
          <p className="text-xl text-slate-600">
            Each automation is custom-built for your stack. Delivered in 5-7
            days.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 - Invoice Processing */}
          <ServiceCard
            tag="AUTOMATE INVOICE PROCESSING"
            title="Route prescriptions to your own pharmacies"
            description="Photon prioritizes your system-owned pharmacies when filling scripts—so you capture more revenue and give patients a better experience. You get extra lift from care teams."
            tagColor="blue"
          />

          {/* Service 2 - Meeting Transcription */}
          <ServiceCard
            tag="REDUCE READMISSIONS"
            title="Fewer unfilled scripts. Fewer returns."
            description="When patients leave with no plan for pickup—or face price barriers—they're more likely to return to the ED. Photon helps remove those friction points so prescriptions are filled on time and patients stay on track."
            tagColor="green"
          />

          {/* Service 3 - Customer Data Consolidation */}
          <ServiceCard
            tag="TRACK POST-DISCHARGE PICKUP"
            title="Deliver a better experience—and own it"
            description="Photon gives you visibility into who picked up, who didn't, and where follow-up is needed—so your care model feels complete. That seamless experience reflects back on your brand, helping you stand apart from the competition."
            tagColor="orange"
          />
        </div>

        {/* Other Services - Collapsed */}
        <details className="mt-12 bg-white p-6 rounded-xl border border-slate-200">
          <summary className="cursor-pointer font-semibold text-lg text-slate-900 flex items-center justify-between">
            Other Workflows We Build
            <ChevronDown className="w-5 h-5" />
          </summary>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="p-6 border border-slate-200 rounded-lg">
              <h4 className="font-bold text-slate-900 mb-2">
                Lead Qualification
              </h4>
              <p className="text-sm text-slate-600">
                Auto-score inbound leads. Update CRM. Route to sales rep
                automatically.
              </p>
            </div>
            <div className="p-6 border border-slate-200 rounded-lg">
              <h4 className="font-bold text-slate-900 mb-2">
                Smart Email Routing
              </h4>
              <p className="text-sm text-slate-600">
                AI categorizes emails. Auto-labels and forwards to right person.
                End inbox chaos.
              </p>
            </div>
            <div className="p-6 border border-slate-200 rounded-lg">
              <h4 className="font-bold text-slate-900 mb-2">
                Document Intelligence
              </h4>
              <p className="text-sm text-slate-600">
                Extract data from contracts, forms. 30 mins → 10 seconds per
                document.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* Social Proof - UPDATED */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white text-center">
          <p className="text-xl md:text-2xl font-semibold mb-4">
            "Built automation for 3 early-stage startups — invoice processing,
            meeting workflows, and customer data pipelines. Combined savings:
            60+ hours/week."
          </p>
          <p className="text-blue-200">
            Sandip Pathe • Founder, Anaya • Built AI systems for legal &
            compliance automation
          </p>
        </div>
      </section>

      {/* Pricing - WITH URGENCY */}
      <section className="px-4 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-6">
            Taking 3 clients in January 2025 • Next slot: Jan 3rd
          </div>
          <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-10 max-w-lg mx-auto">
            <div className="text-5xl font-bold text-slate-900 mb-2">
              $1,500 - $2,500
            </div>
            <div className="text-xl text-slate-600 mb-6">
              One-time setup fee
            </div>
            <ul className="space-y-3 text-left mb-8">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Custom workflow built for your tools
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">5-7 day delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Training video + documentation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">2 weeks free support</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">No long-term contracts</span>
              </li>
            </ul>
            <div className="text-sm text-slate-600 border-t border-slate-300 pt-6">
              Optional: $300/month for ongoing maintenance, monitoring, and
              updates
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - NEW */}
      <section className="px-4 py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <details className="bg-white p-6 rounded-xl border border-slate-200">
              <summary className="cursor-pointer font-semibold text-lg text-slate-900">
                Do I need to know the technical details?
              </summary>
              <p className="mt-4 text-slate-600">
                Nope. I handle everything. You just tell me the workflow
                problem, I build the solution.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl border border-slate-200">
              <summary className="cursor-pointer font-semibold text-lg text-slate-900">
                What if it breaks after you deliver?
              </summary>
              <p className="mt-4 text-slate-600">
                2 weeks free support included. Optional $300/month maintenance
                after that.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl border border-slate-200">
              <summary className="cursor-pointer font-semibold text-lg text-slate-900">
                Can you integrate with my tools?
              </summary>
              <p className="mt-4 text-slate-600">
                Most likely yes. I work with Stripe, Notion, Slack, Google
                Sheets, HubSpot, Zoom, and 100+ other tools.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl border border-slate-200">
              <summary className="cursor-pointer font-semibold text-lg text-slate-900">
                What if I'm not sure which automation I need?
              </summary>
              <p className="mt-4 text-slate-600">
                Book a 15-min discovery call. I'll walk through your workflow
                and recommend 2-3 automations.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl border border-slate-200">
              <summary className="cursor-pointer font-semibold text-lg text-slate-900">
                How do I know this will actually work for my business?
              </summary>
              <p className="mt-4 text-slate-600">
                On the discovery call, I'll map your exact workflow and show you
                similar automations I've built. You'll see exactly how it works
                before committing.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Calendly + Contact Form */}
      <section id="calendly" className="px-4 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Book Your Discovery Call
          </h2>
          <p className="text-xl text-slate-600">
            15 minutes to explore if automation fits your workflow. No
            obligation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Calendly Embed */}
          <CalendlyEmbed />

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 bg-slate-900 text-slate-400">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="text-sm">
            <a href="/automation/admin">🤍</a> Built by{" "}
            <a
              href="https://sandippathe.in"
              className="text-blue-400 hover:text-blue-300"
            >
              Sandip Pathe
            </a>{" "}
            • Mumbai, India •{" "}
            <a
              href="mailto:sandippathe9689@gmail.com"
              className="text-blue-400 hover:text-blue-300"
            >
              sandippathe9689@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
