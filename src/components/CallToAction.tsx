import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { business } from "../data/siteContent";

const CallToAction = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-4xl bg-ink px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[42px] border-teal/20" />
          <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-teal/10 blur-2xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-orange">
                Start a conversation
              </div>
              <h2 className="max-w-3xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Planning a laboratory or looking for hands-on practical support?
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                Share your requirement with Rashi Labs. We will understand the need and suggest a practical next step.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="button button-orange whitespace-nowrap"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
              <Link to="/contact" className="button button-light whitespace-nowrap">
                Contact details
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
