import { ChevronDown, Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { business, services } from "./data/siteContent";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-line bg-white/95 shadow-[0_8px_30px_rgba(13,43,90,0.07)] backdrop-blur"
          : "border-transparent bg-white/90 backdrop-blur"
      }`}
    >
      <div className="hidden border-b border-line bg-ink text-white lg:block">
        <div className="site-container flex h-9 items-center justify-between text-xs">
          <span className="font-medium text-slate-300">
            Educational & industrial laboratory solutions in Bengaluru
          </span>
          <div className="flex items-center gap-4">
            <a href={`mailto:${business.email}`} className="flex items-center gap-1.5 hover:text-orange">
              <Mail size={13} />
              {business.email}
            </a>
            <a href={`tel:${business.phoneHref}`} className="flex items-center gap-1.5 hover:text-orange">
              <Phone size={13} />
              {business.phoneDisplay}
            </a>
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-orange"
            >
              <MessageCircle size={13} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="site-container flex h-[76px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Rashi Labs home">
          <img
            src="/images/rashi-mark.png"
            alt="Rashi Labs logo mark"
            className="h-12 w-12 rounded-xl object-cover object-center"
          />
          <div className="leading-none">
            <div className="font-display text-[20px] font-extrabold tracking-[0.08em] text-ink">
              RASHI <span className="text-teal-dark">LABS</span>
            </div>
            <div className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">
              Complete Laboratory Solutions
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.slice(0, 2).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="group relative">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `nav-link flex items-center gap-1 ${isActive ? "nav-link-active" : ""}`
              }
            >
              Services
              <ChevronDown size={15} className="transition group-hover:rotate-180" />
            </NavLink>
            <div className="pointer-events-none absolute left-1/2 top-full w-[860px] max-w-[calc(100vw-3rem)] -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              <div className="rounded-3xl border border-line bg-white p-5 shadow-matte">
                <div className="mb-3 flex items-center justify-between px-2">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Laboratory services
                  </span>
                  <Link to="/services" className="text-xs font-bold text-teal-dark hover:text-ink">
                    View all services
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="flex items-center gap-3 rounded-2xl p-3 transition hover:bg-canvas"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist text-teal-dark">
                          <Icon size={19} />
                        </span>
                        <span>
                          <span className="block text-sm font-bold text-ink">
                            {service.shortTitle}
                          </span>
                          <span className="mt-0.5 block text-[11px] leading-4 text-slate-500">
                            {service.description.slice(0, 70)}...
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {navItems.slice(2).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href={business.whatsappUrl} target="_blank" rel="noreferrer" className="button button-primary">
            <MessageCircle size={17} />
            Book a visit
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink lg:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-line bg-white transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[900px] opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="site-container py-4">
          {navItems.slice(0, 2).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block rounded-xl px-3 py-3 text-sm font-bold ${
                  isActive ? "bg-mist text-teal-dark" : "text-ink"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <button
            type="button"
            onClick={() => setServicesOpen((open) => !open)}
            className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-bold text-ink"
          >
            Services
            <ChevronDown
              size={17}
              className={`transition ${servicesOpen ? "rotate-180" : ""}`}
            />
          </button>
          <div className={`grid overflow-hidden transition-all ${servicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
            <div className="min-h-0">
              <div className="ml-3 border-l border-line pl-3 pb-2">
                <NavLink
                  to="/services"
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-teal-dark"
                >
                  View all services
                </NavLink>
                {services.map((service) => (
                  <NavLink
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-canvas hover:text-ink"
                  >
                    {service.shortTitle}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {navItems.slice(2).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block rounded-xl px-3 py-3 text-sm font-bold ${
                  isActive ? "bg-mist text-teal-dark" : "text-ink"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="mt-3 grid grid-cols-2 gap-3">
            <a href={`tel:${business.phoneHref}`} className="button button-outline justify-center px-3">
              <Phone size={17} />
              Call
            </a>
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-primary justify-center px-3"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
