import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import PageHero from "../components/PageHero";
import { business, services } from "../data/siteContent";

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.description}
      />

      <section className="section-space bg-white">
        <div className="site-container grid items-start gap-10 lg:grid-cols-[1fr_360px] lg:gap-14">
          <div>
            <div className={`service-detail-visual service-detail-visual-${service.accent}`}>
              <Icon size={76} strokeWidth={1.5} />
            </div>
            <h2 className="mt-9 font-display text-3xl font-extrabold text-ink">
              What this service covers
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {service.details}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.points.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl border border-line bg-canvas p-5">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-teal-dark" />
                  <span className="text-sm font-bold leading-6 text-ink">{point}</span>
                </div>
              ))}
            </div>
            <div className="mt-9 rounded-3xl border border-line bg-mist p-6 sm:p-8">
              <h3 className="font-display text-xl font-extrabold text-ink">
                Scope is finalised after a requirement discussion
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                The exact equipment, layout, session plan, utilities and implementation support depend on the available space and intended use. Share the requirement for a practical recommendation.
              </p>
            </div>
          </div>

          <aside className="sticky top-32 rounded-3xl border border-line bg-canvas p-6 shadow-card">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
              Discuss this service
            </div>
            <h3 className="mt-3 font-display text-2xl font-extrabold text-ink">
              Tell us what you are planning.
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Share the location, type of lab, number of users and expected requirement through WhatsApp.
            </p>
            <a
              href={`${business.whatsappUrl}?text=${encodeURIComponent(`Hello Rashi Labs, I would like to discuss ${service.title}.`)}`}
              target="_blank"
              rel="noreferrer"
              className="button button-primary mt-6 w-full justify-center"
            >
              <MessageCircle size={18} />
              Start on WhatsApp
            </a>
            <Link to="/services" className="mt-4 flex items-center justify-center gap-2 text-sm font-bold text-teal-dark hover:text-ink">
              <ArrowLeft size={16} />
              Back to all services
            </Link>
          </aside>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default ServiceDetailPage;
