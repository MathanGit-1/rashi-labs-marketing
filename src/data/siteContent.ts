import {
  Atom,
  Beaker,
  BookOpenCheck,
  Bot,
  Building2,
  FlaskConical,
  GraduationCap,
  Microscope,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const business = {
  name: "Rashi Labs",
  tagline: "Complete Laboratory Solutions",
  establishedYear: 2026,
  email: "rashilabsbengaluru@gmail.com",
  phoneDisplay: "+91 80883 82683",
  phoneHref: "+918088382683",
  whatsappUrl: "https://wa.me/918088382683",
  address:
    "Ground Floor, Shop No. 1, Mahendra V Building, Electronic City, Near DS Max Apartment, Gollahalli, Bengaluru, Karnataka 560100",
  gst: "29AQGPH3991P1Z0",
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  details: string;
  points: string[];
  icon: LucideIcon;
  accent: "blue" | "teal" | "orange";
};

export const services: Service[] = [
  {
    slug: "student-practical-sessions",
    title: "Student Practical Sessions",
    shortTitle: "Practical Sessions",
    description:
      "A structured space where students can understand science through guided, hands-on experiments.",
    details:
      "Rashi Labs helps students move beyond textbook learning with practical exposure in a prepared laboratory environment. Sessions can be planned around the learner's level, experiment goals and available equipment.",
    points: [
      "Guided experiment support",
      "Student-friendly environment",
      "Focus on safe laboratory habits",
      "Suitable for individual or small-group learning",
    ],
    icon: GraduationCap,
    accent: "orange",
  },
  {
    slug: "school-college-lab-setup",
    title: "School & College Lab Setup",
    shortTitle: "Educational Lab Setup",
    description:
      "Planning, supply and setup support for safe, organised and functional science laboratories in schools, colleges and training centres.",
    details:
      "Rashi Labs supports educational institutions from the initial requirement discussion through space assessment, layout planning, furniture, storage, utility coordination, equipment supply and setup support. Each laboratory is planned around the available room, subjects, student capacity and everyday operating requirements.",
    points: [
      "Space, subject and student-capacity assessment",
      "Workstation, utility and storage planning",
      "Laboratory furniture and equipment supply",
      "Installation coordination and handover support",
    ],
    icon: Building2,
    accent: "blue",
  },
  {
    slug: "chemistry-lab-solutions",
    title: "Chemistry Lab Solutions",
    shortTitle: "Chemistry Labs",
    description:
      "Complete chemistry laboratory planning, furniture, utilities, storage, glassware and equipment support for educational and smaller laboratory environments.",
    details:
      "A functional chemistry laboratory needs clearly organised areas for preparation, experimentation, washing, utilities and storage. Rashi Labs supports layout planning, work benches, sinks, reagent storage, glassware, instruments and equipment coordination based on the available room, users and practical requirements.",
    points: [
      "Experiment benches and preparation areas",
      "Reagent, glassware and equipment storage",
      "Washing and utility-point coordination",
      "Safety-conscious and maintainable workflow",
    ],
    icon: FlaskConical,
    accent: "teal",
  },
  {
    slug: "science-lab-setup",
    title: "Physics & Biology Lab Setup",
    shortTitle: "Physics & Biology Labs",
    description:
      "Purpose-built physics and biology laboratory solutions for observation, measurement, experimentation and demonstration-based learning.",
    details:
      "Physics and biology laboratories require different but complementary working environments. Rashi Labs supports practical planning, suitable workstations, demonstration areas, instrument and specimen storage, microscope access, measuring equipment and organised student movement based on the subjects, user capacity and available space.",
    points: [
      "Physics experiment and demonstration workstations",
      "Microscope, specimen and observation areas",
      "Instrument, model and equipment storage",
      "Layouts planned for organised student access",
    ],
    icon: Microscope,
    accent: "blue",
  },
  {
    slug: "composite-science-lab",
    title: "Composite Science Lab",
    shortTitle: "Composite Science Lab",
    description:
      "Flexible laboratory planning and setup support for institutions that need chemistry, physics and biology practicals within one shared science space.",
    details:
      "A composite science laboratory must support different subjects without making the room crowded or difficult to manage. Rashi Labs helps plan flexible workstations, shared utilities, washing areas, subject-wise storage, equipment placement and organised movement so one laboratory can support a wide range of practical activities.",
    points: [
      "Shared workstations for multiple science subjects",
      "Subject-wise equipment and material storage",
      "Flexible utility and washing arrangements",
      "Layouts planned for safe movement and supervision",
    ],
    icon: FlaskConical,
    accent: "teal",
  },
  {
    slug: "chemical-microbiology-lab",
    title: "Chemical & Microbiology Lab Setup",
    shortTitle: "Chemical & Microbiology",
    description:
      "Specialised planning, furniture, storage, utilities and equipment support for chemical testing, sample preparation and microbiology laboratory activities.",
    details:
      "Chemical and microbiology laboratories require organised workflows for sample preparation, testing, observation, washing and storage. Rashi Labs supports practical layout planning, workstations, cleanable storage, utility coordination and selected equipment based on the laboratory activities, user capacity and available space.",
    points: [
      "Sample preparation and testing work areas",
      "Observation and instrument workstations",
      "Dedicated material and equipment storage",
      "Utility, washing and workflow coordination",
    ],
    icon: Beaker,
    accent: "teal",
  },
  {
    slug: "stem-robotics-ai-lab",
    title: "STEM, Robotics & AI Lab",
    shortTitle: "STEM, Robotics & AI",
    description:
      "Flexible learning-space planning, furniture, storage, technology and equipment support for hands-on STEM, robotics, electronics, coding and artificial-intelligence activities.",
    details:
      "STEM, robotics and AI laboratories should support individual exploration, team projects, demonstrations and safe equipment storage. Rashi Labs helps plan flexible worktables, computer access, electronics and robotics work areas, presentation zones, charging points and organised storage based on the learner level, available space and planned activities.",
    points: [
      "Flexible worktables for individual and team projects",
      "Robotics, electronics and coding work areas",
      "Computer, display and charging-point planning",
      "Organised kit, tool and component storage",
    ],
    icon: Bot,
    accent: "blue",
  },
  {
    slug: "mathematics-computer-lab",
    title: "Mathematics & Computer Lab Setup",
    shortTitle: "Maths & Computer Labs",
    description:
      "Organised mathematics and computer learning spaces designed for activity-based teaching, digital instruction and focused student practice.",
    details:
      "Rashi Labs supports mathematics and computer laboratories with practical layout planning, student workstations, teacher demonstration areas, power and cable coordination, storage and suitable furniture. Each setup is planned around the learner capacity, available devices, curriculum activities and room dimensions.",
    points: [
      "Computer workstation and seating layouts",
      "Power, network and cable coordination",
      "Mathematics activity and demonstration areas",
      "Device, accessory and learning-material storage",
    ],
    icon: BookOpenCheck,
    accent: "blue",
  },
  {
    slug: "library-setup",
    title: "Library Setup",
    shortTitle: "Library Setup",
    description:
      "Functional library spaces with practical shelving, reading areas, storage and circulation planning.",
    details:
      "Library setup support can include shelving arrangements, reading tables, storage units and space planning suited to the institution and available area.",
    points: [
      "Shelving and storage supply",
      "Reading-area planning",
      "Space-efficient circulation",
      "Institution-focused setup",
    ],
    icon: BookOpenCheck,
    accent: "teal",
  },
  {
    slug: "fire-hydrant-line-support",
    title: "Fire Hydrant Line Support",
    shortTitle: "Fire Hydrant Support",
    description:
    "Coordination support for fire hydrant line planning, routing and partner-led execution as part of institutional, laboratory and facility setup projects.",
    details:
    "Rashi Labs helps coordinate fire hydrant line requirements with suitable technical partners. Support can include site discussions, proposed pipe routing, hydrant-point planning, associated equipment coordination and integration with broader civil, utility or institutional setup work.",
    points: [
    "Site requirement and pipeline-routing discussion",
    "Hydrant-point and associated equipment coordination",
    "Integration with civil and utility activities",
    "Partner-supported installation and testing coordination",
    ],
    icon: ShieldCheck,
    accent: "orange",
    },    
  {
    slug: "industrial-lab-support",
    title: "Industrial Lab Support",
    shortTitle: "Industrial Solutions",
    description:
      "Practical planning, supply and improvement support for compact industrial, testing and quality-control laboratory environments.",
    details:
      "Rashi Labs supports smaller industrial and quality-control laboratories with workflow-based layout planning, practical workstations, organised storage, utility coordination and equipment-placement support. The focus is to create a maintainable workspace that improves access, movement and everyday laboratory operation.",
    points: [
      "Workflow and space-utilisation assessment",
      "Workstation, storage and utility planning",
      "Instrument and equipment-placement coordination",
      "Practical improvement support for existing labs",
    ],
    icon: Wrench,
    accent: "teal",
  },
];

export const productCategories = [
  "Laboratory work tables and island benches",
  "Wall benches, sinks and utility fittings",
  "Storage cabinets, reagent racks and shelving",
  "Laboratory stools and practical accessories",
  "Glassware, instruments and laboratory equipment",
  "Furniture for science, computer and library spaces",
];

export const qualityCommitments = [
  {
    title: "Quality materials",
    description:
      "Furniture, work surfaces and supplied components are selected for practical, regular laboratory use.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable supply & setup",
    description:
      "Requirements are coordinated from planning and product supply through installation and basic handover.",
    icon: Wrench,
  },
  {
    title: "Purpose-led planning",
    description:
      "Layouts, storage and equipment are recommended around the actual users, subjects and workflow.",
    icon: Beaker,
  },
  {
    title: "Ongoing support",
    description:
      "Rashi Labs remains available for additions, replacement requirements and future improvements.",
    icon: Building2,
  },
];

export const strengths = [
  {
    title: "Safety-first planning",
    description:
      "Layouts, movement and storage are considered with safe laboratory habits in mind.",
    icon: ShieldCheck,
  },
  {
    title: "Learning through practice",
    description:
      "The experience is designed to help students understand concepts by performing and observing.",
    icon: BookOpenCheck,
  },
  {
    title: "Purposeful equipment selection",
    description:
      "Recommendations focus on what is useful for the intended experiments and operating needs.",
    icon: Beaker,
  },
  {
    title: "Educational & industrial support",
    description:
      "Solutions can be adapted for student learning spaces and smaller professional laboratory needs.",
    icon: Building2,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Understand",
    description: "Discuss the purpose, users, space, subjects, products and expected outcome.",
  },
  {
    step: "02",
    title: "Plan",
    description: "Prepare a practical layout, supply approach and implementation plan.",
  },
  {
    step: "03",
    title: "Supply & set up",
    description: "Coordinate the required furniture, storage, utilities, equipment and setup work.",
  },
  {
    step: "04",
    title: "Support",
    description: "Provide basic handover guidance and help with additions or future improvements.",
  },
];

export const galleryItems = [
  {
    src: "/images/gallery/gallery-chemistry.svg",
    title: "Chemistry workspace",
    category: "Chemistry Lab",
  },
  {
    src: "/images/gallery/gallery-students.svg",
    title: "Guided practical learning",
    category: "Student Sessions",
  },
  {
    src: "/images/gallery/gallery-composite.svg",
    title: "Flexible science room",
    category: "Composite Lab",
  },
  {
    src: "/images/gallery/gallery-storage.svg",
    title: "Organised equipment storage",
    category: "Lab Planning",
  },
  {
    src: "/images/gallery/gallery-microscope.svg",
    title: "Biology observation area",
    category: "Biology Lab",
  },
  {
    src: "/images/gallery/gallery-industrial.svg",
    title: "Compact industrial lab",
    category: "Industrial Lab",
  },
];
