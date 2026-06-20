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

  const isStudentPractical =
    service.slug === "student-practical-sessions";

  const isSchoolCollegeLab =
    service.slug === "school-college-lab-setup";

  const isChemistryLab =
    service.slug === "chemistry-lab-solutions";

  const isScienceLab =
    service.slug === "science-lab-setup";

  const isCompositeLab =
    service.slug === "composite-science-lab";

  const isChemicalMicrobiologyLab =
    service.slug === "chemical-microbiology-lab";

  const isStemRoboticsAiLab = 
    service.slug === "stem-robotics-ai-lab"; 

  const isMathematicsComputerLab = 
    service.slug === "mathematics-computer-lab";

const heroEyebrow = isSchoolCollegeLab
  ? "Educational Laboratory Solutions"
  : isChemistryLab
    ? "Chemistry Laboratory Solutions"
    : isScienceLab
      ? "Physics & Biology Laboratory Solutions"
      : isCompositeLab
        ? "Integrated Science Laboratory Solutions"
        : isChemicalMicrobiologyLab
          ? "Chemical & Microbiology Laboratory Solutions"
          : isStemRoboticsAiLab
            ? "STEM, Robotics & AI Learning Spaces"
            : isMathematicsComputerLab
              ? "Mathematics & Computer Learning Spaces"
              : "Service";

const heroTone = isStudentPractical
  ? "dark"
  : isSchoolCollegeLab
    ? "science"
    : isChemistryLab
      ? "chemistry"
      : isScienceLab
        ? "discovery"
        : isCompositeLab
          ? "composite"
          : isChemicalMicrobiologyLab
            ? "microbiology"
            : isStemRoboticsAiLab || isMathematicsComputerLab
              ? "technology"
              : "light";

const sectionTitle = isStudentPractical
  ? "How the practical sessions help"
  : isSchoolCollegeLab
    ? "What the laboratory setup includes"
    : isChemistryLab
      ? "What the chemistry lab solution includes"
      : isScienceLab
        ? "What the physics and biology lab setup includes"
        : isCompositeLab
          ? "What the composite science lab setup includes"
          : isChemicalMicrobiologyLab
            ? "What the chemical and microbiology lab setup includes"
            : isStemRoboticsAiLab
              ? "What the STEM, robotics and AI lab setup includes"
              : isMathematicsComputerLab
                ? "What the mathematics and computer lab setup includes"
                : "What this service covers";

const scopeTitle = isStudentPractical
  ? "Sessions are planned around the learner and experiment goals"
  : isSchoolCollegeLab
    ? "Every laboratory is planned around the institution's requirements"
    : isChemistryLab
      ? "Every chemistry laboratory is planned around its experiments and users"
      : isScienceLab
        ? "Each laboratory is planned around its subjects, activities and users"
        : isCompositeLab
          ? "A shared science laboratory must balance flexibility, storage and safety"
          : isChemicalMicrobiologyLab
            ? "The workspace is planned around preparation, testing and observation workflows"
            : isStemRoboticsAiLab
              ? "The lab is planned around projects, collaboration and future expansion"
              : isMathematicsComputerLab
                ? "The space is planned around focused learning, digital access and easy supervision"
                : "Scope is finalised after a requirement discussion";

const scopeDescription = isStudentPractical
  ? "The subject, learner level, group size, experiment plan and available equipment are discussed before the session. This helps Rashi Labs recommend a practical format that is focused, safe and suitable for the students."
  : isSchoolCollegeLab
    ? "The final layout, furniture, storage, utility points, equipment and installation scope depend on the available room, subjects, student capacity and operating requirements. Rashi Labs reviews these details before recommending the setup."
    : isChemistryLab
      ? "The final arrangement depends on the available room, experiments, number of users, chemical storage needs, washing facilities and utility requirements. These details are reviewed before recommending the furniture, equipment and setup scope."
      : isScienceLab
        ? "Physics and biology laboratories have different workstation, storage and equipment requirements. The final solution is planned after reviewing the room, subjects, practical activities, student capacity, instruments and demonstration needs."
        : isCompositeLab
          ? "The final solution depends on the available room, science subjects, student capacity, experiment types, shared utilities and storage requirements. Rashi Labs reviews these details to create a flexible layout that can support multiple disciplines without making the laboratory difficult to manage."
          : isChemicalMicrobiologyLab
            ? "Chemical testing and microbiology activities may require separate preparation, testing, washing, observation and storage areas. The final layout and equipment scope are planned after reviewing the samples, processes, user capacity, utilities and maintenance requirements."
            : isStemRoboticsAiLab
              ? "The final layout depends on the available space, learner level, number of students, project activities, computers, robotics kits, electronics, tools, storage and demonstration requirements. Rashi Labs reviews these details before planning a flexible learning environment."
              : isMathematicsComputerLab
                ? "The final layout depends on the available room, number of students, computers, mathematics activities, teaching methods, electrical points, networking and storage requirements. These details are reviewed before planning the furniture and workstation arrangement."
                : "The exact equipment, layout, session plan, utilities and implementation support depend on the available space and intended use. Share the requirement for a practical recommendation.";

const discussionTitle = isStudentPractical
  ? "Plan a practical session."
  : isSchoolCollegeLab
    ? "Plan your educational laboratory."
    : isChemistryLab
      ? "Plan your chemistry laboratory."
      : isScienceLab
        ? "Plan your physics or biology laboratory."
        : isCompositeLab
          ? "Plan your composite science laboratory."
          : isChemicalMicrobiologyLab
            ? "Plan your chemical or microbiology laboratory."
            : isStemRoboticsAiLab
              ? "Plan your STEM, robotics or AI lab."
              : isMathematicsComputerLab
                ? "Plan your mathematics or computer laboratory."
                : "Tell us what you are planning.";

const discussionDescription = isStudentPractical
  ? "Share the subject, learner level, number of students and preferred session timing through WhatsApp."
  : isSchoolCollegeLab
    ? "Share the institution type, available space, subjects, student capacity and expected laboratory requirements through WhatsApp."
    : isChemistryLab
      ? "Share the available space, institution type, number of users, experiments, storage and utility requirements through WhatsApp."
      : isScienceLab
        ? "Share the available space, subjects, student capacity, practical activities, instruments and storage requirements through WhatsApp."
        : isCompositeLab
          ? "Share the available space, science subjects, student capacity, practical activities, utilities and storage requirements through WhatsApp."
          : isChemicalMicrobiologyLab
            ? "Share the available space, laboratory activities, sample types, number of users, utilities, storage and equipment requirements through WhatsApp."
            : isStemRoboticsAiLab
              ? "Share the available space, learner level, student capacity, planned activities, equipment and technology requirements through WhatsApp."
              : isMathematicsComputerLab
                ? "Share the available space, student capacity, number of computers, mathematics activities, power, networking and storage requirements through WhatsApp."
                : "Share the location, type of lab, number of users and expected requirement through WhatsApp.";
  return (
    <>
      <PageHero
        eyebrow={heroEyebrow}
        title={service.title}
        description={service.description}
        tone={heroTone}
      />

      <section className="section-space bg-white">
        <div className="site-container grid items-start gap-10 lg:grid-cols-[1fr_360px] lg:gap-14">
          <div>
            {isStudentPractical ? (
              <div className="overflow-hidden rounded-4xl border border-line bg-mist p-3 shadow-card sm:p-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.6rem] bg-canvas">
                  <img
                    src="/images/gallery/original/guided_practical.jpeg"
                    alt="Guided practical learning in a prepared science laboratory"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent px-6 pb-5 pt-20">
                    <div className="text-xs font-bold uppercase tracking-[0.16em] text-orange">
                      Student practical sessions
                    </div>

                    <div className="mt-1.5 font-display text-xl font-extrabold text-white sm:text-2xl">
                      Learn science through guided, hands-on experiments.
                    </div>
                  </div>
                </div>
              </div>
            ) : isSchoolCollegeLab ? (
              <div className="overflow-hidden rounded-4xl border border-line bg-mist p-3 shadow-card sm:p-4">
                <div className="group relative aspect-[16/10] overflow-hidden rounded-[1.6rem] bg-canvas">
                  <img
                    src="/images/gallery/original/organised_storage.jpeg"
                    alt="Organised school and college science laboratory setup"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent px-6 pb-5 pt-24 sm:px-8 sm:pb-7">
                    <div className="text-xs font-bold uppercase tracking-[0.16em] text-orange">
                      School & college laboratories
                    </div>

                    <div className="mt-1.5 max-w-xl font-display text-xl font-extrabold text-white sm:text-2xl">
                      Functional science spaces planned for everyday learning.
                    </div>
                  </div>
                </div>
              </div>
            ) : isChemistryLab ? (
              <div className="overflow-hidden rounded-4xl border border-line bg-mist p-3 shadow-card sm:p-4">
                <div className="group relative aspect-[16/10] overflow-hidden rounded-[1.6rem] bg-canvas">
                  <img
                    src="/images/gallery/original/chemistry_lab.jpeg"
                    alt="Organised chemistry laboratory with work benches, storage and utilities"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#061B3A]/95 via-[#061B3A]/45 to-transparent px-6 pb-5 pt-24 sm:px-8 sm:pb-7">
                    <div className="text-xs font-bold uppercase tracking-[0.16em] text-orange">
                      Chemistry laboratory setup
                    </div>

                    <div className="mt-1.5 max-w-xl font-display text-xl font-extrabold text-white sm:text-2xl">
                      Organised work areas for preparation, experiments and storage.
                    </div>
                  </div>
                </div>
              </div>
            ) : isScienceLab ? (
              <div className="overflow-hidden rounded-4xl border border-line bg-mist p-3 shadow-card sm:p-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.6rem] bg-canvas">
                  <div className="grid h-full grid-cols-2">
                    <div className="group relative overflow-hidden">
                      <img
                        src="/images/gallery/original/physics_lab.jpeg"
                        alt="Physics laboratory with practical workstations and equipment"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                      />

                      <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-ink/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                        Physics
                      </div>
                    </div>

                    <div className="group relative overflow-hidden border-l border-white/15">
                      <img
                        src="/images/gallery/original/biology_lab.jpeg"
                        alt="Biology laboratory with observation and microscope work areas"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                      />

                      <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-ink/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                        Biology
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07162F]/95 via-[#07162F]/55 to-transparent px-6 pb-5 pt-24 sm:px-8 sm:pb-7">
                    <div className="text-xs font-bold uppercase tracking-[0.16em] text-orange">
                      Physics & biology laboratories
                    </div>

                    <div className="mt-1.5 max-w-2xl font-display text-xl font-extrabold text-white sm:text-2xl">
                      Practical spaces for observation, measurement and scientific discovery.
                    </div>
                  </div>
                </div>
              </div>
            ) : isCompositeLab ? (
              <div className="overflow-hidden rounded-4xl border border-line bg-mist p-3 shadow-card sm:p-4">
                <div className="group relative aspect-[16/10] overflow-hidden rounded-[1.6rem] bg-canvas">
                  <img
                    src="/images/gallery/original/composite_lab.jpeg"
                    alt="Composite science laboratory supporting multiple practical subjects"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06182F]/95 via-[#06182F]/50 to-transparent px-6 pb-5 pt-24 sm:px-8 sm:pb-7">
                    <div className="text-xs font-bold uppercase tracking-[0.16em] text-orange">
                      Composite science laboratory
                    </div>

                    <div className="mt-1.5 max-w-2xl font-display text-xl font-extrabold text-white sm:text-2xl">
                      One flexible space for chemistry, physics and biology practicals.
                    </div>
                  </div>
                </div>
              </div>
            ) : isChemicalMicrobiologyLab ? (
              <div className="overflow-hidden rounded-4xl border border-line bg-mist p-3 shadow-card sm:p-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.6rem] bg-canvas">
                  <div className="grid h-full grid-cols-2">
                    <div className="group relative overflow-hidden">
                      <img
                        src="/images/gallery/original/chemistry_lab.jpeg"
                        alt="Chemical testing laboratory work area"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                      />

                      <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-ink/75 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                        Chemical
                      </div>
                    </div>

                    <div className="group relative overflow-hidden border-l border-white/15">
                      <img
                        src="/images/gallery/original/biology_lab.jpeg"
                        alt="Microbiology observation and laboratory work area"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                      />

                      <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-ink/75 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                        Microbiology
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07152A]/95 via-[#07152A]/55 to-transparent px-6 pb-5 pt-24 sm:px-8 sm:pb-7">
                    <div className="text-xs font-bold uppercase tracking-[0.16em] text-orange">
                      Chemical & microbiology laboratories
                    </div>

                    <div className="mt-1.5 max-w-2xl font-display text-xl font-extrabold text-white sm:text-2xl">
                      Purpose-planned spaces for preparation, testing, observation and storage.
                    </div>
                  </div>
                </div>
              </div>
              ) : isStemRoboticsAiLab ? (
                <div className="overflow-hidden rounded-4xl border border-line bg-mist p-3 shadow-card sm:p-4">
                  <div className="group relative aspect-[16/10] overflow-hidden rounded-[1.6rem] bg-canvas">
                    <img
                      src="/images/gallery/original/organised_storage.jpeg"
                      alt="Organised STEM, robotics and AI laboratory learning space"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07152E]/95 via-[#07152E]/50 to-transparent px-6 pb-5 pt-24 sm:px-8 sm:pb-7">
                      <div className="text-xs font-bold uppercase tracking-[0.16em] text-orange">
                        STEM, robotics & AI laboratory
                      </div>

                      <div className="mt-1.5 max-w-2xl font-display text-xl font-extrabold text-white sm:text-2xl">
                        Flexible project spaces for building, coding and collaborative learning.
                      </div>
                    </div>
                  </div>
                </div>
              ) : isMathematicsComputerLab ? (
                <div className="overflow-hidden rounded-4xl border border-line bg-mist p-3 shadow-card sm:p-4">
                  <div className="group relative aspect-[16/10] overflow-hidden rounded-[1.6rem] bg-canvas">
                    <img
                      src="/images/gallery/original/maths_lab.jpeg"
                      alt="Mathematics and computer laboratory with organised student workstations"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07152E]/95 via-[#07152E]/50 to-transparent px-6 pb-5 pt-24 sm:px-8 sm:pb-7">
                      <div className="text-xs font-bold uppercase tracking-[0.16em] text-orange">
                        Mathematics & computer laboratory
                      </div>

                      <div className="mt-1.5 max-w-2xl font-display text-xl font-extrabold text-white sm:text-2xl">
                        Organised learning spaces for problem-solving, digital instruction and computer practice.
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
              <div
                className={`service-detail-visual service-detail-visual-${service.accent}`}
              >
                <Icon size={76} strokeWidth={1.5} />
              </div>
            )}

            <h2 className="mt-9 font-display text-3xl font-extrabold text-ink">
              {sectionTitle}
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              {service.details}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-line bg-canvas p-5"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-teal-dark"
                  />

                  <span className="text-sm font-bold leading-6 text-ink">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9 rounded-3xl border border-line bg-mist p-6 sm:p-8">
              <h3 className="font-display text-xl font-extrabold text-ink">
                {scopeTitle}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {scopeDescription}
              </p>
            </div>
          </div>

          <aside className="sticky top-32 rounded-3xl border border-line bg-canvas p-6 shadow-card">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
              Discuss this service
            </div>

            <h3 className="mt-3 font-display text-2xl font-extrabold text-ink">
              {discussionTitle}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              {discussionDescription}
            </p>

            <a
              href={`${business.whatsappUrl}?text=${encodeURIComponent(
                `Hello Rashi Labs, I would like to discuss ${service.title}.`,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="button button-primary mt-6 w-full justify-center"
            >
              <MessageCircle size={18} />
              Start on WhatsApp
            </a>

            <Link
              to="/services"
              className="mt-4 flex items-center justify-center gap-2 text-sm font-bold text-teal-dark hover:text-ink"
            >
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