import { motion } from "framer-motion";
import {
  CheckCircle2,
  Compass,
  FlaskConical,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
import CallToAction from "../components/CallToAction";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { business, processSteps, strengths } from "../data/siteContent";

const AboutPage = () => {
  return (
    <>
      <PageHero
        eyebrow="About Rashi Labs"
        title="Laboratory solutions designed for practical learning and everyday use."
        description={`Established in ${business.establishedYear}, Rashi Labs supports schools, colleges and smaller industrial facilities with laboratory planning, furniture, equipment, utilities and setup coordination in Bengaluru.`}
        tone="dark"
      />

      <section className="section-space bg-white">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-4xl bg-mist p-4 sm:p-6"
          >
            <img
              src="/images/gallery/original/guided_practical.jpeg"
              alt="Practical science laboratory supported by Rashi Labs"
              className="aspect-[4/3] w-full rounded-3xl object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="self-center"
          >
          <SectionHeading
            eyebrow={`Established in ${business.establishedYear}`}
            title="Complete laboratory support for practical learning."
            description="Rashi Labs helps institutions create organised and functional learning spaces through practical sessions, planning, supply and setup coordination."
          />

          <p className="mt-4 text-base leading-7 text-slate-600">
            We support school, college and smaller industrial laboratory
            requirements across chemistry, physics, biology, composite science,
            chemical, microbiology, STEM, robotics, AI, mathematics, computer and
            library spaces.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Hands-on practical learning",
              "Educational and science lab setup",
              "Technology and library spaces",
              "Furniture, equipment and utilities",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-2.5 text-sm font-bold leading-6 text-ink"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-teal-dark"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
          </motion.div>
        </div>
      </section>

      <section className="section-space bg-canvas">
        <div className="site-container">
          <SectionHeading
            eyebrow="What guides us"
            title="Practical principles behind every session and laboratory setup."
            description="Every recommendation is shaped around the people using the space, the work they need to perform and the support required to keep it functional."
            align="center"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Safety first",
                text: "Support responsible laboratory habits, organised work areas and appropriate handling of equipment.",
              },
              {
                icon: FlaskConical,
                title: "Fit for purpose",
                text: "Recommend layouts, furniture and equipment based on the subjects, users and practical activities involved.",
              },
              {
                icon: Compass,
                title: "Clear coordination",
                text: "Keep requirement discussions, planning, supply and setup activities straightforward and easy to follow.",
              },
              {
                icon: HeartHandshake,
                title: "Ongoing support",
                text: "Remain available for guidance, additions, replacements and future improvements after the initial setup.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-3xl border border-line bg-white p-6 shadow-card"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-teal-dark">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-extrabold text-ink">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="site-container grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            eyebrow="Our approach"
            title="A clear process from requirement discussion to setup support."
            description="The scope may vary between a practical session and a complete laboratory setup, but every engagement follows a simple and organised process."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-line bg-canvas p-6"
              >
                <div className="text-sm font-black tracking-[0.14em] text-orange">
                  {item.step}
                </div>

                <h3 className="mt-3 font-display text-xl font-extrabold text-ink">
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

      <section className="section-space bg-ink">
        <div className="site-container grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.055] p-6"
              >
                <Icon size={25} className="text-[#78D2DA]" />

                <h3 className="mt-5 font-display text-lg font-extrabold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default AboutPage;