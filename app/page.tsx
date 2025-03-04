import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Partners } from "@/components/partners";
import { Stats } from "@/components/stats";
import { Experience } from "@/components/experiance";
import { CTA } from "@/components/cta";
import { Testimonial } from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Partners />
      <Experience />
      <Stats />
      <Faq />
      <Testimonial />
      <CTA />
    </main>
  );
}
