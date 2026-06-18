import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="flex min-h-[75vh] items-center bg-canvas pt-28">
      <div className="site-container py-20 text-center">
        <div className="text-sm font-black tracking-[0.18em] text-orange">404</div>
        <h1 className="mt-4 font-display text-4xl font-extrabold text-ink sm:text-5xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-600">
          The page you are looking for is not available. Return to the Rashi Labs home page.
        </p>
        <Link to="/" className="button button-primary mt-8">
          <ArrowLeft size={18} />
          Back to home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
