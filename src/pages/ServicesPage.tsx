import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { processSteps, services } from "../data/siteContent";

const serviceVisuals: Record<
  string,
  {
    src: string;
    alt: string;
    label: string;
  }
> = {
  "student-practical-sessions": {
    src: "/images/gallery/original/guided_practical.jpeg",
    alt: "Students participating in guided practical science learning",
    label: "Student practical learning",
  },
  "school-college-lab-setup": {
    src: "/images/gallery/original/organised_storage.jpeg",
    alt: "Organised school and college science laboratory",
    label: "Educational laboratory setup",
  },
  "chemistry-lab-solutions": {
    src: "/images/gallery/original/chemistry_lab.jpeg",
    alt: "Chemistry laboratory with work benches and storage",
    label: "Chemistry laboratory",
  },
  "science-lab-setup": {
    src: "/images/gallery/original/physics_lab.jpeg",
    alt: "Physics and biology laboratory learning space",
    label: "Physics & biology laboratories",
  },
  "composite-science-lab": {
    src: "/images/gallery/original/composite_lab.jpeg",
    alt: "Composite science laboratory supporting multiple subjects",
    label: "Composite science laboratory",
  },
  "chemical-microbiology-lab": {
    src: "/images/gallery/original/biology_lab.jpeg",
    alt: "Chemical and microbiology laboratory workspace",
    label: "Chemical & microbiology",
  },
  "stem-robotics-ai-lab": {
    src: "/images/gallery/original/organised_storage.jpeg",
    alt: "Organised STEM, robotics and AI learning laboratory",
    label: "STEM, robotics & AI",
  },
  "mathematics-computer-lab": {
    src: "/images/gallery/original/maths_lab.jpeg",
    alt: "Mathematics and computer laboratory with student workstations",
    label: "Mathematics & computer lab",
  },
  "library-setup": {
    src: "/images/gallery/original/organised_storage.jpeg",
    alt: "Organised learning space suitable for library planning",
    label: "Library planning & setup",
  },
  "fire-hydrant-line-support": {
    src: "/images/gallery/original/fire_hydrant_support.jpeg",
    alt: "Facility space supported by fire hydrant line coordination",
    label: "Fire hydrant line support",
  },
  "industrial-lab-support": {
    src: "/images/gallery/original/composite_lab.jpeg",
    alt: "Compact industrial laboratory workspace",
    label: "Industrial laboratory support",
  },
};

const ServicesPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Laboratory solutions for practical learning and everyday use."
        description="Explore support for student practical sessions, educational laboratories, technology learning spaces, fire-safety coordination and compact industrial laboratory requirements."
        tone="dark"
      />

      <section className="section-space bg-white">
        <div className="site-container">
          <SectionHeading
            eyebrow="Complete support"
            title="Choose the service that matches your requirement."
            description="Select the type of laboratory, learning space or facility support you need. The final scope is refined after understanding the available space, users, activities and expected outcome."
          />

          <div className="mt-12 space-y-7">
            {services.map((service, index) => {
              const Icon = service.icon;
              const visual = serviceVisuals[service.slug];

              return (
                <motion.article
                  key={service.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5 }}
                  className="group grid overflow-hidden rounded-4xl border border-line bg-canvas shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-card lg:grid-cols-[0.82fr_1.18fr]"
                >
                  {visual ? (
                    <div className="relative min-h-[270px] overflow-hidden bg-mist lg:min-h-full">
                      <img
                        src={visual.src}
                        alt={visual.alt}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#06182F]/95 via-[#06182F]/30 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                        <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="mt-2 max-w-md font-display text-xl font-extrabold text-white sm:text-2xl">
                          {visual.label}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`flex min-h-[270px] items-center justify-center p-8 ${
                        index % 2 === 0 ? "bg-mist" : "bg-[#FFF4E8]"
                      }`}
                    >
                      <div
                        className={`service-illustration service-illustration-${service.accent}`}
                      >
                        <Icon size={58} strokeWidth={1.7} />
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10">
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
                      {service.shortTitle}
                    </div>

                    <h2 className="mt-3 font-display text-2xl font-extrabold text-ink sm:text-3xl">
                      {service.title}
                    </h2>

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                      {service.description}
                    </p>

                    <div className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                      {service.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-2.5 text-sm font-semibold leading-6 text-ink"
                        >
                          <CheckCircle2
                            size={17}
                            className="mt-1 shrink-0 text-teal-dark"
                          />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={`/services/${service.slug}`}
                      className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-extrabold text-teal-dark transition hover:text-ink"
                    >
                      View complete details
                      <ArrowRight
                        size={17}
                        className="transition group-hover:translate-x-1"
                      />
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
            title="A clear path from requirement to a usable space."
            description="Every engagement follows a practical sequence while remaining flexible enough to suit the site, users and intended activities."
            align="center"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-line bg-white p-6 shadow-card"
              >
                <div className="text-sm font-black tracking-[0.14em] text-orange">
                  {item.step}
                </div>

                <h3 className="mt-4 font-display text-xl font-extrabold text-ink">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
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
