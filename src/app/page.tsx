"use client";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";
import FeedbackForm from "@/components/Feedback";
import { useFirestoreData } from "@/helper/fetcher";
import InvestorSnapshot from "@/components/Investor";
import Accordion from "@/components/FAQ";
import CursorDot from "@/components/cursorDot";

export default function Home() {
  const { data, isLoadingAbout } = useFirestoreData();
  return (
    <>
      <main className="overflow-y-scroll snap-y snap-mandatory h-screen select-none bg-[#F9F7F1]">
        <section>
          <Hero loading={isLoadingAbout} />
        </section>
        <section>
          <About data={data.about} />
        </section>
        <section>
          <Projects data={data.projects} />
        </section>
        <section>
          <InvestorSnapshot data={data.skills} education={data.education} />
        </section>
        <section>
          <Accordion data={data.faq} />
        </section>
        <section>
          <ContactPage />
        </section>
        <section>
          <FeedbackForm />
        </section>
        <section>
          <Footer data={data.footer} />
        </section>
        <CursorDot />
      </main>
    </>
  );
}
