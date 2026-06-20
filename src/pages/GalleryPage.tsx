import { motion } from "framer-motion";
import CallToAction from "../components/CallToAction";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { galleryItems } from "../data/siteContent";

const galleryPageItems = [
  {
    ...galleryItems[0],
    src: "/images/gallery/original/chemistry_lab.jpeg",
  },
  {
    ...galleryItems[1],
    src: "/images/gallery/original/guided_practical.jpeg",
  },
  {
    ...galleryItems[2],
    src: "/images/gallery/original/physics_lab.jpeg",
  },
  {
    ...galleryItems[3],
    src: "/images/gallery/original/organised_storage.jpeg",
  },
  {
    ...galleryItems[4],
    src: "/images/gallery/original/biology_lab.jpeg",
  },
  {
    ...galleryItems[5],
    src: "/images/gallery/original/composite_lab.jpeg",
  },
];

const GalleryPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Laboratory spaces designed for practical learning and scientific work."
        description="Explore laboratory layouts, equipment arrangements and learning environments that reflect the solutions supported by Rashi Labs."
      />

      <section className="section-space bg-white">
        <div className="site-container">
          <SectionHeading
            eyebrow="Laboratory gallery"
            title="Spaces, equipment and practical learning environments."
            description="A selection of science laboratories, organised workspaces and hands-on learning settings across different disciplines."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryPageItems.map((item, index) => (
              <motion.figure
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="overflow-hidden rounded-3xl border border-line bg-canvas"
              >
                <div className="aspect-[4/3] overflow-hidden bg-mist">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                  />
                </div>

                <figcaption className="p-5">
                  <div className="text-xs font-bold uppercase tracking-[0.15em] text-orange">
                    {item.category}
                  </div>

                  <div className="mt-1.5 font-display text-lg font-extrabold text-ink">
                    {item.title}
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default GalleryPage;