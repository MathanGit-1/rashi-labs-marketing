import { FormEvent, useState } from "react";
import { Building2, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import PageHero from "../components/PageHero";
import { business, services } from "../data/siteContent";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    requirement: services[0].title,
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = [
      "Hello Rashi Labs,",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Requirement: ${form.requirement}`,
      `Message: ${form.message || "I would like to know more."}`,
    ].join("\n");

    window.open(`${business.whatsappUrl}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Share your laboratory or practical-learning requirement."
        description="Call, email, visit or send the details through WhatsApp. Rashi Labs will review the requirement and help with the next step."
        tone="dark"
      />

      <section className="section-space bg-white">
        <div className="site-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="space-y-5">
            <div className="rounded-3xl border border-line bg-canvas p-6 sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-teal-dark">
                <Phone size={23} />
              </div>
              <h2 className="mt-5 font-display text-xl font-extrabold text-ink">Call Rashi Labs</h2>
              <a href={`tel:${business.phoneHref}`} className="mt-2 block text-lg font-extrabold text-teal-dark hover:text-ink">
                {business.phoneDisplay}
              </a>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Use this number for laboratory enquiries, visits and project discussions.
              </p>
            </div>

            <div className="rounded-3xl border border-line bg-canvas p-6 sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-teal-dark">
                <Mail size={23} />
              </div>
              <h2 className="mt-5 font-display text-xl font-extrabold text-ink">Email Rashi Labs</h2>
              <a
                href={`mailto:${business.email}`}
                className="mt-2 block break-all text-base font-extrabold text-teal-dark hover:text-ink"
              >
                {business.email}
              </a>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Share product lists, room details, drawings or institutional requirements by email.
              </p>
            </div>

            <div className="rounded-3xl border border-line bg-canvas p-6 sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF0DF] text-orange">
                <MapPin size={23} />
              </div>
              <h2 className="mt-5 font-display text-xl font-extrabold text-ink">Visit us</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{business.address}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-teal-dark hover:text-ink"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="rounded-3xl border border-line bg-canvas p-6 sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-ink">
                <Building2 size={23} />
              </div>
              <h2 className="mt-5 font-display text-xl font-extrabold text-ink">Business information</h2>
              <div className="mt-2 space-y-2 text-sm text-slate-600">
                <p><strong className="text-ink">Established:</strong> {business.establishedYear}</p>
                <p><strong className="text-ink">GSTIN:</strong> {business.gst}</p>
              </div>
            </div>
          </div>

          <div className="rounded-4xl border border-line bg-canvas p-6 shadow-card sm:p-8 lg:p-10">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange">Send an enquiry</div>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-ink">Continue through WhatsApp</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Fill in the details below. Submitting the form opens WhatsApp with a prepared message, so no backend is required for this static website.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="form-label">
                  Name
                  <input
                    required
                    value={form.name}
                    onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                    className="form-input"
                    placeholder="Your name"
                  />
                </label>
                <label className="form-label">
                  Phone number
                  <input
                    required
                    value={form.phone}
                    onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                    className="form-input"
                    placeholder="Your contact number"
                  />
                </label>
              </div>

              <label className="form-label">
                Requirement
                <select
                  value={form.requirement}
                  onChange={(event) => setForm((current) => ({ ...current, requirement: event.target.value }))}
                  className="form-input"
                >
                  {services.map((service) => (
                    <option key={service.slug}>{service.title}</option>
                  ))}
                  <option>General enquiry</option>
                </select>
              </label>

              <label className="form-label">
                Message
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                  className="form-input resize-none"
                  placeholder="Tell us about the students, institution, lab type or space available."
                />
              </label>

              <button type="submit" className="button button-primary w-full justify-center sm:w-auto">
                <Send size={18} />
                Open WhatsApp message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="overflow-hidden rounded-4xl border border-line bg-mist p-3">
            <img src="/images/rashi-signboard.jpg" alt="Rashi Labs signboard with address and phone number" className="w-full rounded-3xl" />
          </div>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
            <span className="text-sm font-semibold text-slate-600">Prefer a quick message?</span>
            <a href={business.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-extrabold text-teal-dark hover:text-ink">
              <MessageCircle size={17} />
              Chat with Rashi Labs
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
