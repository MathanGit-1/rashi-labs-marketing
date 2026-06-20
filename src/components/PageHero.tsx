import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  tone?:
    | "light"
    | "dark"
    | "science"
    | "chemistry"
    | "discovery"
    | "composite"
    | "microbiology"
    | "technology"
    | "safety"
    | "industrial";
};

const PageHero = ({
  eyebrow,
  title,
  description,
  tone = "light",
}: PageHeroProps) => {
  const dark = tone === "dark";
  const science = tone === "science";
  const chemistry = tone === "chemistry";
  const discovery = tone === "discovery";
  const composite = tone === "composite";
  const microbiology = tone === "microbiology";
  const technology = tone === "technology";
  const safety = tone === "safety";
  const industrial = tone === "industrial";

  const darkText =
    dark ||
    science ||
    chemistry ||
    discovery ||
    composite ||
    microbiology ||
    technology ||
    safety ||
    industrial;

  return (
    <section
      className={`relative overflow-hidden border-b pt-32 pb-16 sm:pt-36 sm:pb-20 ${
        industrial
          ? "border-white/10 bg-[linear-gradient(135deg,#08151F_0%,#17414C_48%,#3C665C_100%)]"
          : safety
            ? "border-white/10 bg-[linear-gradient(135deg,#07152B_0%,#4D263D_48%,#A54128_100%)]"
            : technology
            ? "border-white/10 bg-[linear-gradient(135deg,#07152E_0%,#253B78_48%,#087273_100%)]"
            : microbiology
              ? "border-white/10 bg-[linear-gradient(135deg,#07152A_0%,#29365F_45%,#087069_100%)]"
              : composite
                ? "border-white/10 bg-[linear-gradient(135deg,#07182F_0%,#17466D_48%,#08746F_100%)]"
                : discovery
                  ? "border-white/10 bg-[linear-gradient(135deg,#07162F_0%,#283D7A_48%,#08736F_100%)]"
                  : chemistry
                    ? "border-white/10 bg-[linear-gradient(135deg,#06172F_0%,#0B3854_45%,#087078_100%)]"
                    : science
                      ? "border-white/10 bg-[linear-gradient(135deg,#061B3A_0%,#123A70_48%,#08727D_100%)]"
                      : dark
                        ? "border-white/10 bg-[linear-gradient(135deg,#071F46_0%,#0D3566_48%,#075966_100%)]"
                        : "border-line bg-[linear-gradient(135deg,#E7F4F6_0%,#F1F7F9_55%,#FFF3E5_100%)]"
      }`}
    >
      {industrial ? (
        <>
          <div className="absolute -right-24 -top-28 h-[30rem] w-[30rem] rounded-full bg-[#5DC7B5]/20 blur-3xl" />
          <div className="absolute -left-28 bottom-[-10rem] h-80 w-80 rounded-full bg-orange/20 blur-3xl" />
          <div className="absolute left-[43%] top-4 h-72 w-72 rounded-full bg-[#7A9FA3]/15 blur-3xl" />

          <div className="absolute right-[9%] top-12 h-28 w-28 rounded-3xl border border-[#9AD8CC]/20" />
          <div className="absolute right-[5%] top-7 h-52 w-52 rotate-12 rounded-[2.5rem] border border-white/10" />
          <div className="absolute right-[18%] top-44 h-14 w-14 -rotate-12 rounded-2xl border border-orange/25" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:36px_36px]" />
        </>
      ) : safety ? (
        <>
          <div className="absolute -right-24 -top-28 h-[30rem] w-[30rem] rounded-full bg-orange/30 blur-3xl" />
          <div className="absolute -left-28 bottom-[-10rem] h-80 w-80 rounded-full bg-[#D94A40]/25 blur-3xl" />
          <div className="absolute left-[43%] top-4 h-72 w-72 rounded-full bg-[#F5A742]/15 blur-3xl" />

          <div className="absolute right-[9%] top-12 h-28 w-28 rounded-full border border-orange/25" />
          <div className="absolute right-[5%] top-7 h-52 w-52 rounded-full border border-white/10" />
          <div className="absolute right-[18%] top-44 h-14 w-14 rounded-full border border-[#FFB36A]/30" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:38px_38px]" />
        </>
      ) : technology ? (
        <>
          <div className="absolute -right-24 -top-28 h-[30rem] w-[30rem] rounded-full bg-[#45D8D1]/25 blur-3xl" />
          <div className="absolute -left-28 bottom-[-10rem] h-80 w-80 rounded-full bg-[#6A67E4]/25 blur-3xl" />
          <div className="absolute left-[43%] top-4 h-72 w-72 rounded-full bg-orange/15 blur-3xl" />

          <div className="absolute right-[8%] top-10 h-28 w-28 rotate-12 rounded-3xl border border-[#8CE8E2]/20" />
          <div className="absolute right-[5%] top-7 h-52 w-52 rounded-full border border-white/10" />
          <div className="absolute right-[18%] top-44 h-14 w-14 -rotate-12 rounded-2xl border border-orange/25" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:34px_34px]" />
        </>
      ) : microbiology ? (
        <>
          <div className="absolute -right-24 -top-28 h-[30rem] w-[30rem] rounded-full bg-[#42D8C9]/25 blur-3xl" />
          <div className="absolute -left-28 bottom-[-10rem] h-80 w-80 rounded-full bg-[#746BE0]/25 blur-3xl" />
          <div className="absolute left-[43%] top-4 h-72 w-72 rounded-full bg-orange/15 blur-3xl" />

          <div className="absolute right-[10%] top-12 h-24 w-24 rounded-full border border-[#8CE8E0]/20" />
          <div className="absolute right-[5%] top-7 h-52 w-52 rounded-full border border-white/10" />
          <div className="absolute right-[18%] top-44 h-14 w-14 rounded-full border border-orange/25" />
          <div className="absolute right-[24%] top-24 h-7 w-7 rounded-full border border-[#8CE8E0]/25" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07)_1px,transparent_1.5px)] bg-[size:30px_30px] opacity-40" />
        </>
      ) : composite ? (
        <>
          <div className="absolute -right-24 -top-28 h-[30rem] w-[30rem] rounded-full bg-[#42D3C8]/25 blur-3xl" />
          <div className="absolute -left-28 bottom-[-10rem] h-80 w-80 rounded-full bg-orange/25 blur-3xl" />
          <div className="absolute left-[42%] top-5 h-72 w-72 rounded-full bg-[#4C8EDB]/15 blur-3xl" />

          <div className="absolute right-[10%] top-12 h-28 w-28 rounded-full border border-[#8BE6DF]/20" />
          <div className="absolute right-[5%] top-7 h-52 w-52 rounded-full border border-white/10" />
          <div className="absolute right-[18%] top-44 h-14 w-14 rounded-full border border-orange/25" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:38px_38px]" />
        </>
      ) : discovery ? (
        <>
          <div className="absolute -right-24 -top-28 h-[30rem] w-[30rem] rounded-full bg-[#57D5DE]/25 blur-3xl" />
          <div className="absolute -left-28 bottom-[-10rem] h-80 w-80 rounded-full bg-[#7476E8]/25 blur-3xl" />
          <div className="absolute left-[43%] top-4 h-72 w-72 rounded-full bg-orange/15 blur-3xl" />

          <div className="absolute right-[9%] top-14 h-28 w-28 rounded-full border border-[#8AE6EA]/20" />
          <div className="absolute right-[5%] top-8 h-52 w-52 rounded-full border border-white/10" />
          <div className="absolute right-[17%] top-44 h-16 w-16 rounded-full border border-orange/25" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07)_1px,transparent_1.5px)] bg-[size:30px_30px] opacity-40" />
        </>
      ) : chemistry ? (
        <>
          <div className="absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-[#34C6C8]/25 blur-3xl" />
          <div className="absolute -left-28 bottom-[-10rem] h-80 w-80 rounded-full bg-orange/25 blur-3xl" />
          <div className="absolute left-[43%] top-4 h-72 w-72 rounded-full bg-[#2A85C7]/15 blur-3xl" />

          <div className="absolute right-[10%] top-14 h-24 w-24 rounded-full border border-[#7CE1E3]/20" />
          <div className="absolute right-[5%] top-28 h-44 w-44 rounded-full border border-white/10" />
          <div className="absolute right-[18%] top-48 h-12 w-12 rounded-full border border-orange/25" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1.5px)] bg-[size:28px_28px] opacity-40" />
        </>
      ) : science ? (
        <>
          <div className="absolute -right-20 -top-24 h-[28rem] w-[28rem] rounded-full bg-[#40C8D2]/25 blur-3xl" />
          <div className="absolute -left-28 bottom-[-10rem] h-80 w-80 rounded-full bg-orange/20 blur-3xl" />
          <div className="absolute left-[42%] top-6 h-72 w-72 rounded-full bg-[#3F7FD8]/15 blur-3xl" />
          <div className="absolute right-[8%] top-12 h-44 w-44 rounded-full border border-white/10" />
          <div className="absolute right-[4%] top-2 h-64 w-64 rounded-full border border-white/[0.06]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:42px_42px]" />
        </>
      ) : dark ? (
        <>
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal/25 blur-3xl" />
          <div className="absolute -left-28 bottom-[-9rem] h-80 w-80 rounded-full bg-orange/20 blur-3xl" />
          <div className="absolute left-[48%] top-10 h-72 w-72 rounded-full bg-[#48C5D1]/10 blur-3xl" />
          <div className="absolute right-[9%] top-16 h-40 w-40 rounded-full border border-white/10" />
          <div className="absolute right-[5%] top-8 h-56 w-56 rounded-full border border-white/[0.06]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:42px_42px]" />
        </>
      ) : (
        <>
          <div className="absolute -right-28 top-20 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-orange/10 blur-3xl" />
        </>
      )}

      <div className="site-container relative">
        <div
          className={`mb-6 flex items-center gap-2 text-sm font-semibold ${
            darkText ? "text-white/60" : "text-slate-500"
          }`}
        >
          <Link
            to="/"
            className={`transition ${
              darkText ? "hover:text-white" : "hover:text-ink"
            }`}
          >
            Home
          </Link>

          <ChevronRight size={15} />

          <span className={darkText ? "text-[#8DE4EA]" : "text-teal-dark"}>
            {eyebrow}
          </span>
        </div>

        <div className="max-w-3xl">
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-orange">
            {eyebrow}
          </div>

          <h1
            className={`font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl ${
              darkText ? "text-white" : "text-ink"
            }`}
          >
            {title}
          </h1>

          <p
            className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${
              darkText ? "text-slate-200" : "text-slate-600"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
