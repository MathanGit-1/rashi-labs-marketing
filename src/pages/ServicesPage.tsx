import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { processSteps, services } from "../data/siteContent";

const ServicesPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Laboratory support designed around the people who will use it."
        description="From guided practical sessions to complete educational and industrial laboratory planning, each requirement is approached with clarity, safety and practical use in mind."
      />

      <section className="section-space bg-white">
        <div className="site-container">
          <SectionHeading
            eyebrow="Complete support"
            title="Choose the service that matches your requirement."
            description="The scope can be adjusted after understanding the available space, intended experiments, number of users and expected outcome."
          />

          <div className="mt-12 space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5 }}
                  className="grid overflow-hidden rounded-4xl border border-line bg-canvas lg:grid-cols-[0.7fr_1.3fr]"
                >
                  <div className={`flex min-h-[245px] items-center justify-center p-8 ${index % 2 === 0 ? "bg-mist" : "bg-[#FFF4E8]"}`}>
                    <div className={`service-illustration service-illustration-${service.accent}`}>
                      <Icon size={58} strokeWidth={1.7} />
                    </div>
                  </div>
                  <div className="p-7 sm:p-9 lg:p-10">
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h2 className="mt-3 font-display text-2xl font-extrabold text-ink sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                      {service.details}
                    </p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {service.points.map((point) => (
                        <div key={point} className="flex items-center gap-2 text-sm font-semibold text-ink">
                          <CheckCircle2 size={17} className="shrink-0 text-teal-dark" />
                          {point}
                        </div>
                      ))}
                    </div>
                    <Link
                      to={`/services/${service.slug}`}
                      className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-teal-dark hover:text-ink"
                    >
                      View complete details
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-canvas">
        <div className="site-container">
          <SectionHeading
            eyebrow="Our process"
            title="From requirement to a usable laboratory."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <div key={item.step} className="rounded-3xl border border-line bg-white p-6 shadow-card">
                <div className="text-sm font-black tracking-[0.14em] text-orange">{item.step}</div>
                <h3 className="mt-4 font-display text-xl font-extrabold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default ServicesPage;
