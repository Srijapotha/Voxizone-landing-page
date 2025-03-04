import { AnimatedTestimonials } from "@/components/ui/animated-testimonial";
import SectionHead from "./common/SectionHead";

export function Testimonial() {
  const testimonials = [
    {
      quote:
        "Voxizo Media has revolutionized our advertising efforts! Their premium ad accounts and 24/7 support helped us scale effortlessly, boosting our ROI like never before. Highly recommend for serious growth!",
      name: "Mufaddal Chittalwala",
      designation: "Product Manager at TechFlow",
      src: "/mufficlient.jpg",
    },
  ];
  return (
    <section>
      <SectionHead
        title="Don't just take our word for it."
        description="See what our clients have to say about our all-in-one advertising solutions."
      />
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
}
