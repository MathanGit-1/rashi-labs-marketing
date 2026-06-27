import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { business, services } from "./data/siteContent";

const Footer = () => {
  const year = 2022;

  return (
    <footer className="border-t border-line bg-[#F2F7F7]">
      <div className="site-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.7fr_0.9fr_1.2fr] lg:gap-12">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/rashi-mark.png"
              alt="Rashi Labs logo"
              className="h-12 w-12 rounded-xl object-cover"
            />
            <div>
              <div className="font-display text-xl font-extrabold tracking-[0.08em] text-ink">
                RASHI <span className="text-teal-dark">LABS</span>
              </div>
              <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">
                Industrial / Educational
              </div>
            </div>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
            Established in {business.establishedYear}, Rashi Labs provides practical-learning support and complete laboratory product supply and setup services in Bengaluru.
          </p>
          <div className="mt-5 space-y-1 text-xs font-semibold text-slate-500">
            <div>{business.association}</div>
            <div>GSTIN: {business.gst}</div>
          </div>
        </div>

        <div>
          <h3 className="footer-title">Quick links</h3>
          <div className="mt-5 space-y-3 text-sm">
            <Link className="footer-link" to="/about">About us</Link>
            <Link className="footer-link" to="/services">Services</Link>
            <Link className="footer-link" to="/gallery">Gallery</Link>
            <Link className="footer-link" to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="footer-title">Services</h3>
          <div className="mt-5 space-y-3 text-sm">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                className="footer-link"
                to={`/services/${service.slug}`}
              >
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="footer-title">Contact</h3>
          <div className="mt-5 space-y-4 text-sm text-slate-600">
            <a href={`mailto:${business.email}`} className="flex gap-3 transition hover:text-ink">
              <Mail size={18} className="mt-0.5 shrink-0 text-teal-dark" />
              <span className="break-all">{business.email}</span>
            </a>
            <a href={`tel:${business.phoneHref}`} className="flex gap-3 transition hover:text-ink">
              <Phone size={18} className="mt-0.5 shrink-0 text-orange" />
              <span>{business.phoneDisplay}</span>
            </a>
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex gap-3 transition hover:text-ink"
            >
              <MessageCircle size={18} className="mt-0.5 shrink-0 text-teal-dark" />
              <span className="flex items-center gap-1">
                Start a WhatsApp conversation <ArrowUpRight size={14} />
              </span>
            </a>
            <div className="flex gap-3 leading-6">
              <MapPin size={18} className="mt-0.5 shrink-0 text-ink" />
              <span>{business.address}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="site-container flex flex-col gap-2 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Rashi Labs. All rights reserved.</span>
          <span>Designed for clear, practical and accessible science learning.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
