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

const SLIDE_DURATION = 4500;

const imageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "18%" : "-18%",
    opacity: 0,
    scale: 1.02,
  }),
  center: {
    x: "0%",
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-18%" : "18%",
    opacity: 0,
    scale: 1.01,
  }),
};

const contentVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 18 : -18,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -14 : 14,
    opacity: 0,
  }),
};

const heroSlides = [
  {
    image: "/images/hero/new/1.png",
    imagePosition: "center center",
    eyebrow: "Student practical learning",
    title: "Learn science better through",
    highlight: "hands-on practice.",
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
    image: "/images/hero/new/2.png",
    imagePosition: "center center",
    eyebrow: "School & college lab setup",
    title: "Build practical labs for",
    highlight: "real learning.",
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
    image: "/images/hero/new/3.png",
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
    image: "/images/hero/new/4.png",
    imagePosition: "center center",
    eyebrow: "Complete laboratory solutions",
    title: "Complete laboratory solutions",
    highlight: "from start to finish.",
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
  {
    image: "/images/hero/new/5.png",
    imagePosition: "center center",
    eyebrow: "Science laboratory setup",
    title: "Practical labs for",
    highlight: "every science stream.",
    description:
      "Plan organised laboratory environments for chemistry, physics, biology and composite science requirements.",
    points: [
      "Physics and biology lab planning",
      "Composite science laboratories",
      "Practical storage and work areas",
    ],
    primaryLabel: "Discuss a science lab",
    primaryHref: business.whatsappUrl,
    primaryExternal: true,
    secondaryLabel: "View laboratory services",
    secondaryHref: "/services",
    navLabel: "Science labs",
  },
] as const;

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const remainingTime = useRef(SLIDE_DURATION);
  const timerStartedAt = useRef(0);

  const moveToSlide = useCallback(
    (index: number, nextDirection?: number) => {
      const normalizedIndex =
        (index + heroSlides.length) % heroSlides.length;

      if (normalizedIndex === activeIndex) {
        return;
      }

      setDirection(
        nextDirection ?? (normalizedIndex > activeIndex ? 1 : -1),
      );
      remainingTime.current = SLIDE_DURATION;
      setActiveIndex(normalizedIndex);
    },
    [activeIndex],
  );

  useEffect(() => {
    remainingTime.current = SLIDE_DURATION;
  }, [activeIndex]);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    timerStartedAt.current = Date.now();

    const timer = window.setTimeout(() => {
      setDirection(1);
      remainingTime.current = SLIDE_DURATION;
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, remainingTime.current);

    return () => {
      window.clearTimeout(timer);

      const elapsed = Date.now() - timerStartedAt.current;
      remainingTime.current = Math.max(
        200,
        remainingTime.current - elapsed,
      );
    };
  }, [activeIndex, isPaused]);

  const activeSlide = heroSlides[activeIndex];

  return (
    <section className="bg-white pt-[76px] lg:pt-[112px]">
      <div
        className="relative isolate min-h-[930px] overflow-hidden border-y border-teal/20 bg-[#EAF7F8] sm:min-h-[810px] lg:min-h-[710px]"
        aria-roledescription="carousel"
        aria-label="Rashi Labs services and facilities"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.img
            key={activeSlide.image}
            src={activeSlide.image}
            alt=""
            aria-hidden="true"
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 2.2,
              ease: [0.45, 0, 0.2, 1],
            }}
            className="absolute inset-0 h-full w-full object-cover will-change-transform"
            style={{ objectPosition: activeSlide.imagePosition }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(241,249,250,0.97)_0%,rgba(241,249,250,0.88)_36%,rgba(241,249,250,0.48)_65%,rgba(241,249,250,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_55%,rgba(231,246,247,0.9)_100%)]" />
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-teal/12 blur-3xl" />
        <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-orange/10 blur-3xl" />

        <div className="site-container relative z-10 flex min-h-[930px] items-start pb-48 pt-10 sm:min-h-[810px] sm:items-center sm:pb-40 sm:pt-16 lg:min-h-[710px] lg:pb-28">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.9,
                ease: [0.45, 0, 0.2, 1],
              }}
              className="w-full max-w-[690px]"
              aria-live="polite"
            >
              <div className="flex min-h-[650px] flex-col rounded-[2rem] border border-white/80 bg-white/[0.86] p-6 shadow-[0_28px_70px_rgba(13,43,90,0.16)] backdrop-blur-md sm:min-h-[590px] sm:p-8 lg:min-h-[610px] lg:p-10">
                <div className="inline-flex w-fit items-center rounded-full border border-teal/20 bg-mist/90 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-teal-dark">
                  {activeSlide.eyebrow}
                </div>

                <h1 className="mt-6 min-h-[132px] max-w-[620px] font-display text-[2.55rem] font-extrabold leading-[1.16] text-ink sm:min-h-[154px] sm:text-5xl lg:min-h-[196px] lg:text-[3.65rem]">
                  {activeSlide.title}{" "}
                  <span className="relative inline-block text-teal-dark">
                    {activeSlide.highlight}
                    <span className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-orange/75" />
                  </span>
                </h1>

                <p className="mt-5 min-h-[84px] max-w-[610px] text-base leading-7 text-slate-600 sm:min-h-[72px] sm:text-lg sm:leading-8">
                  {activeSlide.description}
                </p>

                <div className="mt-5 grid min-h-[82px] content-start gap-3 sm:grid-cols-2">
                  {activeSlide.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2.5 text-sm font-semibold text-ink"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-teal-dark"
                      />
                      {point}
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
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
                    <Link
                      to={activeSlide.primaryHref}
                      className="button button-orange"
                    >
                      {activeSlide.primaryLabel}
                      <ArrowRight size={18} />
                    </Link>
                  )}

                  <Link
                    to={activeSlide.secondaryHref}
                    className="button border border-line bg-white/85 text-ink hover:-translate-y-0.5 hover:border-teal/35 hover:bg-white"
                  >
                    {activeSlide.secondaryLabel}
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={() => moveToSlide(activeIndex - 1, -1)}
          aria-label="Show previous slide"
          className="absolute left-4 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/85 text-ink shadow-[0_14px_34px_rgba(13,43,90,0.18)] backdrop-blur-md transition hover:scale-105 hover:border-teal/40 hover:bg-white sm:flex lg:left-7"
        >
          <ChevronLeft size={23} />
        </button>

        <button
          type="button"
          onClick={() => moveToSlide(activeIndex + 1, 1)}
          aria-label="Show next slide"
          className="absolute right-4 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/85 text-ink shadow-[0_14px_34px_rgba(13,43,90,0.18)] backdrop-blur-md transition hover:scale-105 hover:border-teal/40 hover:bg-white sm:flex lg:right-7"
        >
          <ChevronRight size={23} />
        </button>

        <div className="absolute inset-x-0 bottom-0 z-20">
          <div className="site-container pb-7">
            <div className="flex min-w-0 items-center gap-2 sm:gap-3">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.navLabel}
                  type="button"
                  onClick={() =>
                    moveToSlide(
                      index,
                      index > activeIndex ? 1 : -1,
                    )
                  }
                  aria-label={`Show slide ${index + 1}: ${slide.navLabel}`}
                  aria-current={
                    index === activeIndex ? "true" : undefined
                  }
                  className={`group relative h-10 min-w-0 flex-1 overflow-hidden rounded-xl border px-2 text-left transition sm:h-12 sm:px-4 ${
                    index === activeIndex
                      ? "border-teal/35 bg-white/90 text-ink shadow-[0_10px_25px_rgba(13,43,90,0.09)]"
                      : "border-white/70 bg-white/60 text-slate-500 hover:bg-white/85 hover:text-ink"
                  }`}
                >
                  <span className="text-xs font-black">
                    0{index + 1}
                  </span>
                  <span className="ml-2 hidden truncate text-xs font-bold lg:inline">
                    {slide.navLabel}
                  </span>

                  {index === activeIndex && (
                    <span
                      className="hero-progress-fill absolute inset-x-0 bottom-0 h-0.5 bg-orange"
                      style={{
                        animationDuration: `${SLIDE_DURATION}ms`,
                        animationPlayState: isPaused
                          ? "paused"
                          : "running",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="h-1.5 bg-gradient-to-r from-orange via-teal to-orange" />
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
