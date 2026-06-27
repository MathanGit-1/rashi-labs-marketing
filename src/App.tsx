import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Beaker,
  CheckCircle2,
  FlaskConical,
  MapPin,
  Microscope,
  Play,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CallToAction from "./components/CallToAction";
import HeroSlider from "./components/HeroSlider";
import SectionHeading from "./components/SectionHeading";
import {
  business,
  galleryItems,
  processSteps,
  productCategories,
  qualityCommitments,
  services,
} from "./data/siteContent";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

const homeGalleryItems = [
  {
    ...galleryItems[0],
    src: "/images/gallery/original/chemistry_lab.jpeg",
  },
  {
    ...galleryItems[1],
    src: "/images/gallery/original/guided_practical.jpeg",
  },
  {
    ...galleryItems[2],
    src: "/images/gallery/original/composite_lab.jpeg",
  },
];

const aboutImages = [
  {
    src: "/images/gallery/original/guided_practical.jpeg",
    alt: "Practical science laboratory supported by Rashi Labs",
    label: "Guided practical learning",
  },
  {
    src: "/images/gallery/original/chemistry_lab.jpeg",
    alt: "Organised chemistry laboratory with work benches and storage",
    label: "Chemistry laboratory setup",
  },
  {
    src: "/images/gallery/original/composite_lab.jpeg",
    alt: "Flexible composite science laboratory learning space",
    label: "Composite science laboratory",
  },
];

const App = () => {
  const homeVideoRef = useRef<HTMLVideoElement | null>(null);
  const [homeVideoHasStarted, setHomeVideoHasStarted] = useState(false);
  const [aboutImageIndex, setAboutImageIndex] = useState(0);
  useEffect(() => {
    const interval = window.setInterval(() => {
      setAboutImageIndex((current) =>
        current === aboutImages.length - 1 ? 0 : current + 1,
      );
    }, 5000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <>
      <HeroSlider />

      <section className="section-space overflow-hidden border-y border-line bg-[#EAF3F5]">
        <div className="site-container">
          <motion.div {...reveal} className="max-w-[820px]">
            <div className="inline-flex items-center rounded-full border border-teal/20 bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-teal-dark shadow-[0_8px_22px_rgba(13,43,90,0.05)]">
              What Rashi Labs brings together
            </div>

            <h2 className="mt-6 font-display text-3xl font-extrabold leading-snug text-ink sm:text-4xl lg:text-[2.7rem]">
              Practical learning, laboratory setup and{" "}
              <span className="bg-gradient-to-r from-teal-dark to-orange bg-clip-text text-transparent">
                local support.
              </span>
            </h2>

            <p className="mt-4 max-w-[720px] text-base leading-8 text-slate-600">
              From guided student experiments to complete laboratory supply and
              setup, Rashi Labs brings the essential support together in one
              place.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: Beaker,
                eyebrow: "Hands-on learning",
                title: "Student practicals",
                points: [
                  "Guided experiment sessions",
                  "Safety-conscious support",
                  "Student-friendly learning",
                ],
                to: "/services/student-practical-sessions",
                iconClass: "bg-[#E8F7F7] text-teal-dark",
              },
              {
                icon: FlaskConical,
                eyebrow: "Chemistry setup",
                title: "Chemistry labs",
                points: [
                  "Workstations and storage",
                  "Glassware and equipment supply",
                  "Practical workflow planning",
                ],
                to: "/services/chemistry-lab-solutions",
                iconClass: "bg-[#FFF1E1] text-orange",
              },
              {
                icon: Microscope,
                eyebrow: "Multi-discipline labs",
                title: "Science setup",
                points: [
                  "Physics, biology and composite labs",
                  "STEM, robotics and AI labs",
                  "Computer and mathematics labs",
                ],
                to: "/services",
                iconClass: "bg-[#EAF0F8] text-ink",
              },
              {
                icon: MapPin,
                eyebrow: "Bengaluru support",
                title: "Local coordination",
                points: [
                  "Requirement discussion",
                  "Supply and setup coordination",
                  "Ongoing local assistance",
                ],
                to: "/contact",
                iconClass: "bg-[#E8F7F7] text-teal-dark",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group flex min-h-[330px] flex-col rounded-[1.75rem] border border-teal/15 bg-white p-6 shadow-[0_18px_45px_rgba(13,43,90,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-teal/50 hover:bg-[#F4FBFB] hover:shadow-[0_26px_65px_rgba(54,169,181,0.20)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex rounded-full border border-line bg-white px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-teal-dark transition duration-300 group-hover:border-teal/35 group-hover:bg-mist">
                      {item.eyebrow}
                    </div>

                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-[0_10px_24px_rgba(13,43,90,0.08)] transition duration-300 group-hover:scale-110 group-hover:shadow-[0_14px_30px_rgba(54,169,181,0.18)] ${item.iconClass}`}
                    >
                      <Icon size={23} />
                    </div>
                  </div>

                  <h3 className="mt-7 font-display text-xl font-extrabold text-ink transition duration-300 group-hover:text-teal-dark">
                    {item.title}
                  </h3>

                  <div className="mt-5 space-y-3">
                    {item.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={item.to}
                    className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-extrabold text-teal-dark transition group-hover:text-ink"
                  >
                    Explore
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-line bg-[#F6FAFB] py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(54,169,181,0.10),transparent_42%),radial-gradient(circle_at_top_right,rgba(247,148,30,0.08),transparent_38%)]" />

        <div className="site-container relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-[1120px]"
          >
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center rounded-full border border-teal/20 bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-teal-dark shadow-[0_8px_22px_rgba(13,43,90,0.05)]">
                Rashi Labs in action
              </div>

              <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-[2.7rem]">
                See practical laboratory learning and setup{" "}
                <span className="bg-gradient-to-r from-teal-dark to-orange bg-clip-text text-transparent">
                  in action.
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-600">
                A short look at how Rashi Labs supports hands-on learning and
                well-organised laboratory spaces.
              </p>
            </div>

            <div className="relative mt-10 sm:mt-12 lg:mt-14">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-ink shadow-[0_35px_90px_rgba(13,43,90,0.22)] sm:rounded-[2rem]">
                <video
                  ref={homeVideoRef}
                  src="/videos/home_video.mp4"
                  className="block aspect-video w-full object-cover brightness-[1.12] contrast-[1.02] outline-none focus:outline-none"
                  playsInline
                  preload="auto"
                  controls={homeVideoHasStarted}
                  controlsList="nodownload noplaybackrate"
                  onPlay={() => setHomeVideoHasStarted(true)}
                />

                {!homeVideoHasStarted && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-ink/5 via-ink/10 to-ink/20" />

                    <button
                      type="button"
                      onClick={() => {
                        const video = homeVideoRef.current;

                        if (!video) return;

                        void video.play();
                      }}
                      className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-white/95 text-ink shadow-[0_18px_45px_rgba(13,43,90,0.28)] transition duration-300 hover:scale-105 hover:bg-white focus:outline-none focus:ring-4 focus:ring-teal/25 sm:h-20 sm:w-20"
                      aria-label="Play Rashi Labs video"
                    >
                      <Play
                        size={30}
                        className="ml-1 fill-current sm:h-9 sm:w-9"
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <motion.div {...reveal} className="relative w-full">
            <div className="overflow-hidden rounded-4xl bg-mist p-3">
              <div className="group relative h-[380px] w-full overflow-hidden rounded-3xl bg-canvas sm:h-[460px] lg:h-[520px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={aboutImages[aboutImageIndex].src}
                    src={aboutImages[aboutImageIndex].src}
                    alt={aboutImages[aboutImageIndex].alt}
                    initial={{ opacity: 0, scale: 1.015 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.995 }}
                    transition={{ duration: 0.45 }}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </AnimatePresence>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />


                <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">
                  {aboutImages.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setAboutImageIndex(index)}
                      aria-label={`Show ${image.label}`}
                      className={`h-2.5 rounded-full transition-all ${
                        aboutImageIndex === index
                          ? "w-8 bg-white"
                          : "w-2.5 bg-white/55 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>

                <div className="absolute bottom-6 right-6 hidden max-w-[230px] text-right sm:block">
                  <div className="text-xs font-bold uppercase tracking-[0.16em] text-orange">
                    Rashi Labs
                  </div>

                  <div className="mt-1 font-display text-lg font-extrabold text-white">
                    {aboutImages[aboutImageIndex].label}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-7 right-4 max-w-[240px] rounded-2xl border border-line bg-white p-4 shadow-card sm:right-8">
              <div className="flex items-center gap-2 text-sm font-extrabold text-ink">
                <span className="h-2.5 w-2.5 rounded-full bg-orange" />
                Established in {business.establishedYear}
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Bengaluru-based laboratory supply, setup and practical-learning
                support.
              </p>
            </div>
          </motion.div>

          <motion.div {...reveal}>
            <SectionHeading
              eyebrow="About Rashi Labs"
              title="Making laboratory learning more approachable and useful."
              description="Established in 2022, Rashi Labs is a Bengaluru-based laboratory solutions provider. We support student practical learning and coordinate the supply and setup of educational, technology and smaller industrial laboratory spaces."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Student practical sessions",
                "Complete educational lab setup",
                "STEM, robotics, AI and computer labs",
                "Furniture, equipment and utility supply",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-start gap-3 rounded-2xl border border-line bg-canvas p-4"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-teal-dark"
                  />
                  <span className="text-sm font-bold leading-6 text-ink">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-teal-dark hover:text-ink"
            >
              Learn more about Rashi Labs
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-space border-y border-line bg-[#EEF5F6]">
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
                  <div
                    className={`service-icon service-icon-${service.accent}`}
                  >
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
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="products" className="section-space bg-white">
        <div className="site-container grid items-start gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <motion.div {...reveal}>
            <SectionHeading
              eyebrow="Products & supply"
              title="Laboratory furniture, equipment and setup essentials."
              description="Rashi Labs supplies the practical products required to build and operate educational, technology and smaller industrial laboratory spaces. Final selections are based on the room, subject and expected use."
            />

            <Link to="/contact" className="button button-outline mt-8">
              Request product details
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {productCategories.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-3 rounded-2xl border border-line bg-canvas p-5"
              >
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-teal-dark"
                />

                <span className="text-sm font-bold leading-6 text-ink">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-line bg-[#EAF3F5]">
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
                className="rounded-3xl border border-line bg-white p-6"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-ink">
        <div className="site-container">
          <SectionHeading
            eyebrow="Quality commitment"
            title="No compromise on practical quality."
            description="A reliable laboratory needs suitable materials, useful products, organised setup and support that continues after installation."
            align="center"
            tone="light"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {qualityCommitments.map((item, index) => {
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

                  <h3 className="mt-5 font-display text-lg font-extrabold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>
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
              description="A growing collection of laboratory spaces, supplied products and practical-learning environments supported by Rashi Labs."
            />

            <Link to="/gallery" className="button button-outline shrink-0">
              View gallery
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeGalleryItems.map((item) => (
              <Link
                key={item.title}
                to="/gallery"
                className="gallery-card group"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />

                <div className="gallery-overlay">
                  <div className="text-xs font-bold uppercase tracking-[0.15em] text-orange">
                    {item.category}
                  </div>

                  <div className="mt-1 font-display text-lg font-extrabold text-white">
                    {item.title}
                  </div>
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
