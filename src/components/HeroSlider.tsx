import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { business } from "../data/siteContent";

const SLIDE_DURATION = 6500;

const heroSlides = [
  {
    image: "/images/hero/hero-blue-lab.jpg",
    imagePosition: "center center",
    eyebrow: "Student practical learning",
    title: "Learn science by",
    highlight: "doing it.",
    description:
      "A prepared laboratory space where students can perform, observe and understand experiments with clear guidance.",
    points: [
      "Guided hands-on experiments",
      "Student-friendly support",
      "Safety-conscious learning",
    ],
    primaryLabel: "Book a practical session",
    primaryHref: business.whatsappUrl,
    primaryExternal: true,
    secondaryLabel: "Explore practical sessions",
    secondaryHref: "/services/student-practical-sessions",
    navLabel: "Student practicals",
  },
  {
    image: "/images/hero/hero-yellow-lab.jpg",
    imagePosition: "center center",
    eyebrow: "School & college lab setup",
    title: "Build laboratories that are",
    highlight: "ready for real work.",
    description:
      "From layout planning to workstations, storage and utilities, we help institutions create functional laboratories for everyday use.",
    points: [
      "Space and layout assessment",
      "Workstation and storage planning",
      "Equipment and utility coordination",
    ],
    primaryLabel: "Plan an educational lab",
    primaryHref: business.whatsappUrl,
    primaryExternal: true,
    secondaryLabel: "View setup service",
    secondaryHref: "/services/school-college-lab-setup",
    navLabel: "Educational setup",
  },
  {
    image: "/images/hero/hero-modern-lab.jpg",
    imagePosition: "center center",
    eyebrow: "Chemistry lab solutions",
    title: "Plan chemistry labs around",
    highlight: "safety and flow.",
    description:
      "Clear experiment zones, practical storage and maintainable work areas designed around the people who use the laboratory.",
    points: [
      "Purposeful experiment zones",
      "Glassware and chemical storage",
      "Organised, maintainable workflow",
    ],
    primaryLabel: "Discuss a chemistry lab",
    primaryHref: business.whatsappUrl,
    primaryExternal: true,
    secondaryLabel: "Explore chemistry labs",
    secondaryHref: "/services/chemistry-lab-solutions",
    navLabel: "Chemistry labs",
  },
  {
    image: "/images/hero/hero-lab-collage.jpg",
    imagePosition: "center center",
    eyebrow: "Complete laboratory solutions",
    title: "From one room to a complete",
    highlight: "laboratory solution.",
    description:
      "Rashi Labs supports educational institutions, student learning and smaller industrial laboratory requirements from Bengaluru.",
    points: [
      "Educational and industrial support",
      "Adapted to available space",
      "Local Bengaluru coordination",
    ],
    primaryLabel: "Discuss your requirement",
    primaryHref: business.whatsappUrl,
    primaryExternal: true,
    secondaryLabel: "Explore all services",
    secondaryHref: "/services",
    navLabel: "Complete solutions",
  },
] as const;

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const remainingTime = useRef(SLIDE_DURATION);
  const timerStartedAt = useRef(0);

  const moveToSlide = useCallback((index: number) => {
    remainingTime.current = SLIDE_DURATION;
    setActiveIndex((index + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    remainingTime.current = SLIDE_DURATION;
  }, [activeIndex]);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    timerStartedAt.current = Date.now();
    const timer = window.setTimeout(() => {
      remainingTime.current = SLIDE_DURATION;
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, remainingTime.current);

    return () => {
      window.clearTimeout(timer);
      const elapsed = Date.now() - timerStartedAt.current;
      remainingTime.current = Math.max(200, remainingTime.current - elapsed);
    };
  }, [activeIndex, isPaused]);

  const activeSlide = heroSlides[activeIndex];

  return (
    <section className="bg-white pt-[76px] lg:pt-[112px]">
      <div
        className="relative isolate min-h-[900px] overflow-hidden border-y border-ink/15 bg-ink sm:min-h-[790px] lg:min-h-[710px]"
        aria-roledescription="carousel"
        aria-label="Rashi Labs services and facilities"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} mode="sync">
          <motion.img
            key={activeSlide.image}
            src={activeSlide.image}
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0, scale: 1.035 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: activeSlide.imagePosition }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,29,65,0.98)_0%,rgba(13,43,90,0.92)_38%,rgba(13,43,90,0.45)_68%,rgba(13,43,90,0.13)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,21,49,0.12)_0%,rgba(5,21,49,0.05)_58%,rgba(5,21,49,0.52)_100%)]" />
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
        <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-orange/15 blur-3xl" />

        <div className="site-container relative z-10 flex min-h-[900px] items-start pb-40 pt-10 sm:min-h-[790px] sm:items-center sm:pb-32 sm:pt-16 lg:min-h-[710px] lg:pb-28">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 18 }}
              transition={{ duration: 0.48, ease: "easeOut" }}
              className="w-full max-w-[690px]"
              aria-live="polite"
            >
              <div className="rounded-[2rem] border border-white/15 bg-[#0A2854]/90 p-6 shadow-[0_28px_70px_rgba(3,18,44,0.28)] sm:p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#AEE8EC]">
                  <span className="h-2 w-2 rounded-full bg-orange" />
                  {activeSlide.eyebrow}
                </div>

                <h1 className="mt-6 max-w-[620px] font-display text-[2.55rem] font-extrabold leading-[1.06] text-white sm:text-5xl lg:text-[3.65rem]">
                  {activeSlide.title}{" "}
                  <span className="relative inline-block text-[#73D1D9]">
                    {activeSlide.highlight}
                    <span className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-orange/80" />
                  </span>
                </h1>

                <p className="mt-6 max-w-[610px] text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
                  {activeSlide.description}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {activeSlide.points.map((point) => (
                    <div key={point} className="flex items-center gap-2.5 text-sm font-semibold text-white/90">
                      <CheckCircle2 size={17} className="shrink-0 text-[#73D1D9]" />
                      {point}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {activeSlide.primaryExternal ? (
                    <a
                      href={activeSlide.primaryHref}
                      target="_blank"
                      rel="noreferrer"
                      className="button button-orange"
                    >
                      <MessageCircle size={18} />
                      {activeSlide.primaryLabel}
                    </a>
                  ) : (
                    <Link to={activeSlide.primaryHref} className="button button-orange">
                      {activeSlide.primaryLabel}
                      <ArrowRight size={18} />
                    </Link>
                  )}
                  <Link
                    to={activeSlide.secondaryHref}
                    className="button border border-white/20 bg-white/10 text-white hover:-translate-y-0.5 hover:bg-white/15"
                  >
                    {activeSlide.secondaryLabel}
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20">
          <div className="site-container pb-7">
            <div className="flex items-center justify-between gap-5">
              <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.navLabel}
                    type="button"
                    onClick={() => moveToSlide(index)}
                    aria-label={`Show slide ${index + 1}: ${slide.navLabel}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                    className={`group relative h-11 min-w-0 overflow-hidden rounded-xl border px-3 text-left transition sm:h-12 sm:flex-1 sm:px-4 ${
                      index === activeIndex
                        ? "border-white/30 bg-white/15 text-white"
                        : "border-white/10 bg-ink/45 text-white/65 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className="text-xs font-black">0{index + 1}</span>
                    <span className="ml-2 hidden truncate text-xs font-bold md:inline">
                      {slide.navLabel}
                    </span>
                    {index === activeIndex && (
                      <span
                        className="hero-progress-fill absolute inset-x-0 bottom-0 h-0.5 bg-orange"
                        style={{
                          animationDuration: `${SLIDE_DURATION}ms`,
                          animationPlayState: isPaused ? "paused" : "running",
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => moveToSlide(activeIndex - 1)}
                  aria-label="Show previous slide"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-ink/55 text-white transition hover:bg-white/15"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => moveToSlide(activeIndex + 1)}
                  aria-label="Show next slide"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-ink/55 text-white transition hover:bg-white/15"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="h-1.5 bg-gradient-to-r from-orange via-teal to-orange" />
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
