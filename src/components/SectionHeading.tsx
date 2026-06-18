type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: SectionHeadingProps) => {
  const centered = align === "center";
  const light = tone === "light";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <div
        className={`mb-4 inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] ${
          light
            ? "border-white/15 bg-white/10 text-[#8ADDE4]"
            : "border-teal/25 bg-mist text-teal-dark"
        } ${
          centered ? "mx-auto" : ""
        }`}
      >
        {eyebrow}
      </div>
      <h2 className={`font-display text-3xl font-extrabold leading-[1.32] sm:text-4xl lg:text-[2.7rem] ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-8 sm:text-lg ${light ? "text-slate-300" : "text-slate-600"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
