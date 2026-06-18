import { motion } from "framer-motion";
import {
  ArrowRight,
  Beaker,
  CheckCircle2,
  FlaskConical,
  MapPin,
  Microscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import CallToAction from "./components/CallToAction";
import HeroSlider from "./components/HeroSlider";
import SectionHeading from "./components/SectionHeading";
import {
  galleryItems,
  processSteps,
  services,
  strengths,
} from "./data/siteContent";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

const App = () => {
  return (
    <>
      <HeroSlider />

      <section className="border-y border-line bg-white">
        <div className="site-container grid divide-y divide-line py-3 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {[
            { icon: Beaker, title: "Student practicals", text: "Guided hands-on experiments" },
            { icon: FlaskConical, title: "Chemistry labs", text: "Purposeful and organised spaces" },
            { icon: Microscope, title: "Science setup", text: "Physics, biology and composite labs" },
            { icon: MapPin, title: "Local support", text: "Based in Bengaluru" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-center gap-3 px-4 py-5 first:pl-0 sm:px-6 lg:justify-center">
                <Icon size={23} className="shrink-0 text-teal-dark" />
                <div>
                  <div className="text-sm font-extrabold text-ink">{item.title}</div>
                  <div className="mt-0.5 text-xs text-slate-500">{item.text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div {...reveal} className="relative">
            <div className="rounded-4xl bg-mist p-4 sm:p-6">
              <img
                src="/images/about-lab.svg"
                alt="Illustration showing students learning in a science laboratory"
                className="w-full rounded-3xl"
              />
            </div>
            <div className="absolute -bottom-7 -right-2 max-w-[220px] rounded-2xl border border-line bg-white p-4 shadow-card sm:right-6">
              <div className="flex items-center gap-2 text-sm font-extrabold text-ink">
                <span className="h-2.5 w-2.5 rounded-full bg-orange" />
                Practical before complicated
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Clear guidance, useful equipment and an environment that encourages curiosity.
              </p>
            </div>
          </motion.div>

          <motion.div {...reveal}>
            <SectionHeading
              eyebrow="About Rashi Labs"
              title="Making laboratory learning more approachable and useful."
              description="Rashi Labs is built around a simple idea: students understand science better when they can safely perform, observe and ask questions. Alongside practical learning support, we help educational institutions and smaller industrial teams plan functional laboratory spaces."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Guided practical exposure",
                "Educational laboratory planning",
                "Chemistry and science lab solutions",
                "Support for industrial requirements",
              ].map((text) => (
                <div key={text} className="flex items-start gap-3 rounded-2xl border border-line bg-canvas p-4">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-teal-dark" />
                  <span className="text-sm font-bold leading-6 text-ink">{text}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-teal-dark hover:text-ink">
              Learn more about Rashi Labs
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-space bg-canvas">
        <div className="site-container">
          <SectionHeading
            eyebrow="Our services"
            title="Practical laboratory support from learning to setup."
            description="Choose the kind of support you need. Each service can be discussed and adapted based on the students, institution, available space and intended laboratory use."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="service-card group"
                >
                  <div className={`service-icon service-icon-${service.accent}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-extrabold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-teal-dark transition group-hover:text-ink"
                  >
                    View service
                    <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.div {...reveal}>
            <SectionHeading
              eyebrow="How we work"
              title="A clear process without unnecessary complexity."
              description="Whether the requirement is a practical session or a complete lab setup, the work begins by understanding the real need."
            />
            <Link to="/contact" className="button button-outline mt-8">
              Discuss your requirement
              <ArrowRight size={18} />
            </Link>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="rounded-3xl border border-line bg-canvas p-6"
              >
                <div className="text-sm font-black tracking-[0.14em] text-orange">{item.step}</div>
                <h3 className="mt-4 font-display text-xl font-extrabold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-ink">
        <div className="site-container">
          <SectionHeading
            eyebrow="Why Rashi Labs"
            title="Built around safety, usefulness and clear learning outcomes."
            description="A good laboratory is not only about equipment. It should be organised, understandable and practical for the people using it."
            align="center"
            tone="light"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.055] p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/15 text-[#78D2DA]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-extrabold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="site-container">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Gallery preview"
              title="Spaces designed for learning, observation and work."
              description="These illustration placeholders are ready to be replaced with Rashi Labs' real project and practical-session photographs."
            />
            <Link to="/gallery" className="button button-outline shrink-0">
              View gallery
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.slice(0, 3).map((item) => (
              <Link key={item.title} to="/gallery" className="gallery-card group">
                <img src={item.src} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                <div className="gallery-overlay">
                  <div className="text-xs font-bold uppercase tracking-[0.15em] text-orange">{item.category}</div>
                  <div className="mt-1 font-display text-lg font-extrabold text-white">{item.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default App;
