import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useRef, useState } from "react";
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

const galleryVideoItems = [
  {
    src: "/videos/home_video.mp4",
    category: "Laboratory walkthrough",
    title: "Inside a completed laboratory space",
  },
  {
    src: "/videos/video_1.mp4",
    category: "Laboratory environment",
    title: "Practical learning workspace",
  },
  {
    src: "/videos/video_3.mp4",
    category: "Laboratory setup",
    title: "Laboratory layout and setup",
  },
  {
    src: "/videos/video_4.mp4",
    category: "Laboratory facilities",
    title: "Equipment and laboratory overview",
  },
];

const GalleryPage = () => {
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const [startedVideos, setStartedVideos] = useState<Record<string, boolean>>(
    {},
  );

  const markVideoAsStarted = (src: string) => {
    setStartedVideos((current) => ({
      ...current,
      [src]: true,
    }));
  };

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Laboratory spaces designed for practical learning and scientific work."
        description="Explore laboratory layouts, equipment arrangements and learning environments that reflect the solutions supported by Rashi Labs."
        tone="dark"
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

      <section className="border-y border-line bg-[#F2F7F7] py-14 sm:py-16 lg:py-20">
        <div className="site-container">
          <SectionHeading
            eyebrow="Laboratory videos"
            title="Take a closer look at the laboratory spaces."
            description="Watch short walkthroughs of laboratory environments, laboratory layouts and practical learning spaces."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {galleryVideoItems.map((video, index) => (
              <motion.article
                key={video.src}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_14px_35px_rgba(13,43,90,0.08)]"
              >
                <div className="relative aspect-video overflow-hidden bg-ink">
                  <video
                    ref={(element) => {
                      videoRefs.current[video.src] = element;
                    }}
                    src={video.src}
                    className="h-full w-full object-cover brightness-[1.08] outline-none"
                    controls={Boolean(startedVideos[video.src])}
                    playsInline
                    preload="metadata"
                    controlsList="nodownload noplaybackrate"
                    onPlay={() => markVideoAsStarted(video.src)}
                  />

                  {!startedVideos[video.src] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-b from-ink/5 via-ink/10 to-ink/20" />

                      <button
                        type="button"
                        onClick={(event) => {
                          event.currentTarget.blur();
                          void videoRefs.current[video.src]?.play();
                        }}
                        className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-white/95 text-ink shadow-[0_16px_40px_rgba(13,43,90,0.30)] transition duration-300 hover:scale-105 hover:bg-white focus:outline-none focus:ring-4 focus:ring-teal/25 sm:h-16 sm:w-16"
                        aria-label={`Play ${video.title}`}
                      >
                        <Play
                          size={26}
                          className="ml-1 fill-current sm:h-7 sm:w-7"
                        />
                      </button>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-orange">
                    {video.category}
                  </div>

                  <h3 className="mt-1.5 font-display text-base font-extrabold leading-snug text-ink">
                    {video.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default GalleryPage;
