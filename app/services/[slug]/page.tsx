import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/services";
import { Contact } from "@/components/sections/contact";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | QubiQode",
    };
  }

  return {
    title: `${service.title} Services | QubiQode`,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <>
      {/* Service Hero */}
      <section className="pt-32 pb-24 bg-stone-50 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-medium text-stone-500 hover:text-stone-950 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 ml-0 mr-2" />
            Back to Services
          </Link>

          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-3/5">
              <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-800 mb-6">
                <Icon className="w-4 h-4 mr-2" />
                Service Overview
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-950 mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed mb-10 max-w-2xl">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-stone-950 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-stone-900/20 hover:bg-stone-800 transition-all duration-200"
                >
                  Discuss Your Project
                </Link>
              </div>
            </div>

            {/* Benefits Card */}
            <div className="lg:w-2/5 w-full bg-white p-8 md:p-10 rounded-[2rem] border border-stone-200 shadow-xl shadow-stone-200/40">
              <h3 className="font-display text-2xl font-bold text-stone-950 mb-6">
                Why choose this service?
              </h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />
                    <span className="text-stone-700 leading-tight pt-0.5">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Workflow */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Deliverables */}
            <div>
              <h2 className="font-display text-3xl font-bold text-stone-950 mb-8">
                What You Get
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-stone-50 p-6 rounded-2xl border border-stone-100"
                  >
                    <h4 className="font-bold text-stone-900 mb-2">{item}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Workflow */}
            <div>
              <h2 className="font-display text-3xl font-bold text-stone-950 mb-8">
                Our Process
              </h2>
              <div className="space-y-8">
                {service.workflow.map((step, idx) => (
                  <div key={idx} className="flex">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 rounded-full bg-stone-950 text-white flex items-center justify-center font-bold text-sm z-10">
                        {idx + 1}
                      </div>
                      {idx !== service.workflow.length - 1 && (
                        <div className="w-px h-full bg-stone-200 my-2"></div>
                      )}
                    </div>
                    <div className="pb-8">
                      <h4 className="font-display text-xl font-bold text-stone-950 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-stone-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
