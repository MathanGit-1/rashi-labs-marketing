import { motion } from "framer-motion";
import CallToAction from "../components/CallToAction";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { galleryItems } from "../data/siteContent";

const GalleryPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A visual space for Rashi Labs projects and practical sessions."
        description="The current illustrations show the intended gallery structure. Replace them with the real photographs shared by Rashi Labs before publishing the final website."
      />

      <section className="section-space bg-white">
        <div className="site-container">
          <SectionHeading
            eyebrow="Project gallery"
            title="Laboratory spaces, equipment and learning moments."
            description="Each card is already sized and optimised for mobile and desktop. Real photos can be added by replacing the files inside public/images/gallery."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <motion.figure
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="overflow-hidden rounded-3xl border border-line bg-canvas"
              >
                <div className="aspect-[4/3] overflow-hidden bg-mist">
                  <img src={item.src} alt={item.title} className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]" />
                </div>
                <figcaption className="p-5">
                  <div className="text-xs font-bold uppercase tracking-[0.15em] text-orange">{item.category}</div>
                  <div className="mt-1.5 font-display text-lg font-extrabold text-ink">{item.title}</div>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-dashed border-teal/40 bg-mist p-6 text-center sm:p-8">
            <p className="text-sm leading-7 text-slate-600">
              <strong className="text-ink">Photo update note:</strong> keep each final image at approximately 1600 × 1200 px or the same 4:3 ratio for the cleanest result.
            </p>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default GalleryPage;
