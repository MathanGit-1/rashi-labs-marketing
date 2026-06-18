import { motion } from "framer-motion";
import { CheckCircle2, Compass, FlaskConical, HeartHandshake, ShieldCheck } from "lucide-react";
import CallToAction from "../components/CallToAction";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { processSteps, strengths } from "../data/siteContent";

const AboutPage = () => {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Practical science learning supported by thoughtful laboratory solutions."
        description="Rashi Labs is a Bengaluru-based laboratory initiative focused on hands-on student learning and useful educational and industrial lab support."
      />

      <section className="section-space bg-white">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-4xl bg-mist p-4 sm:p-6"
          >
            <img src="/images/about-lab.svg" alt="Students learning in a science laboratory" className="w-full rounded-3xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <SectionHeading
              eyebrow="Our purpose"
              title="Helping learners experience science instead of only reading about it."
              description="The idea behind Rashi Labs is to make practical science more approachable. Students should be able to see reactions, handle instruments, make observations and connect those experiences to what they learn in class."
            />
            <p className="mt-5 text-base leading-8 text-slate-600">
              The same practical mindset is applied to laboratory setup work. A useful lab should have the right work areas, organised storage, sensible movement and equipment selected for its actual purpose.
            </p>
            <div className="mt-7 space-y-3">
              {[
                "Hands-on, guided practical exposure",
                "Clear and student-friendly environment",
                "Purpose-based lab planning",
                "Support for educational and industrial needs",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-bold text-ink">
                  <CheckCircle2 size={19} className="text-teal-dark" />
                  {item}
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
            title="Simple principles for every learning session and setup."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Safety",
                text: "Encourage responsible handling, organised workspaces and clear laboratory habits.",
              },
              {
                icon: FlaskConical,
                title: "Practicality",
                text: "Choose layouts and equipment based on the experiments and users they need to support.",
              },
              {
                icon: Compass,
                title: "Clarity",
                text: "Keep guidance, workflows and spaces straightforward enough to use with confidence.",
              },
              {
                icon: HeartHandshake,
                title: "Support",
                text: "Work collaboratively and stay available as needs evolve after the initial setup.",
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
                  <h3 className="mt-5 font-display text-xl font-extrabold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
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
            title="Understand the need before recommending the solution."
            description="Every space and learning objective is different. The process stays flexible while following a clear sequence."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((item) => (
              <div key={item.step} className="rounded-3xl border border-line bg-canvas p-6">
                <div className="text-sm font-black tracking-[0.14em] text-orange">{item.step}</div>
                <h3 className="mt-3 font-display text-xl font-extrabold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
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
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.055] p-6">
                <Icon size={25} className="text-[#78D2DA]" />
                <h3 className="mt-5 font-display text-lg font-extrabold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
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
