import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const PageHero = ({ eyebrow, title, description }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden border-b border-line bg-canvas pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="absolute -right-28 top-20 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-orange/10 blur-3xl" />
      <div className="site-container relative">
        <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-slate-500">
          <Link to="/" className="transition hover:text-ink">
            Home
          </Link>
          <ChevronRight size={15} />
          <span className="text-teal-dark">{eyebrow}</span>
        </div>
        <div className="max-w-3xl">
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-orange">
            {eyebrow}
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
