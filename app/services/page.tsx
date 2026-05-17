import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Our Services | QubiQode Digital Agency",
  description:
    "Explore QubiQode's premium digital services: Web Development, UI/UX Design, SEO, Video Editing, and more. We build digital products that perform.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-24 bg-stone-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-stone-950 mb-6">
              Our <span className="text-orange-600">Services</span>
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              We offer end-to-end digital capabilities to help modern brands
              scale, engage, and convert. From strategy to execution, we are
              your creative partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl border border-stone-200 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 group flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-6 group-hover:bg-orange-50 group-hover:border-orange-100 transition-colors">
                    <Icon className="w-7 h-7 text-stone-700 group-hover:text-orange-600 transition-colors" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-stone-950 mb-4 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-stone-600 mb-8 leading-relaxed flex-grow">
                    {service.summary}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-stone-950 group/link mt-auto"
                  >
                    Explore Service
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform text-orange-600" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
