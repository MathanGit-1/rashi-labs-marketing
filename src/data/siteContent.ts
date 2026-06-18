import {
  Atom,
  Beaker,
  BookOpenCheck,
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
      "Supply and setup support for functional science laboratories in schools, colleges and training centres.",
    details:
      "From initial requirement discussions to layout planning, furniture and equipment supply, utility coordination and setup support, the goal is to create a practical laboratory that is easy to use, maintain and expand.",
    points: [
      "Requirement and space assessment",
      "Workstation and storage planning",
      "Furniture and equipment supply",
      "Setup coordination and handover guidance",
    ],
    icon: Building2,
    accent: "blue",
  },
  {
    slug: "chemistry-lab-solutions",
    title: "Chemistry Lab Solutions",
    shortTitle: "Chemistry Labs",
    description:
      "Purposeful chemistry laboratory setup with attention to workflow, storage, utilities and safety.",
    details:
      "Chemistry labs need clear zones for preparation, experimentation, washing and storage. Rashi Labs supplies and coordinates practical furniture, utilities, glassware and equipment for educational and small-scale laboratory needs.",
    points: [
      "Experiment work areas",
      "Chemical and glassware storage",
      "Wash and utility zone coordination",
      "Safety-conscious workflow",
    ],
    icon: FlaskConical,
    accent: "teal",
  },
  {
    slug: "science-lab-setup",
    title: "Physics & Biology Lab Setup",
    shortTitle: "Physics & Biology Labs",
    description:
      "Dedicated laboratory solutions for observation, measurement, demonstrations and practical learning.",
    details:
      "The setup can be adapted for physics demonstrations, biological observation and foundational science activities, with suitable work surfaces, storage, instruments and equipment access.",
    points: [
      "Flexible practical workstations",
      "Instrument and specimen storage",
      "Demonstration-friendly layouts",
      "Organised student access",
    ],
    icon: Microscope,
    accent: "blue",
  },
  {
    slug: "composite-science-lab",
    title: "Composite Science Lab",
    shortTitle: "Composite Labs",
    description:
      "A shared science space designed to support chemistry, physics and biology activities efficiently.",
    details:
      "For institutions working with limited space, a composite lab can bring multiple science disciplines into one organised room. The setup focuses on adaptable work areas, shared utilities and well-planned storage.",
    points: [
      "Multi-subject layout planning",
      "Shared equipment organisation",
      "Space-efficient storage",
      "Flexible work zones",
    ],
    icon: Atom,
    accent: "orange",
  },
  {
    slug: "chemical-microbiology-lab",
    title: "Chemical & Microbiology Lab Setup",
    shortTitle: "Chemical & Microbiology",
    description:
      "Specialised setup support for chemical testing, sample preparation and microbiology workspaces.",
    details:
      "Rashi Labs supports the supply and setup of workstations, storage, utility points and selected equipment for chemical and microbiology laboratory requirements.",
    points: [
      "Sample preparation work areas",
      "Dedicated storage planning",
      "Utility and equipment coordination",
      "Easy-to-maintain layouts",
    ],
    icon: Beaker,
    accent: "teal",
  },
  {
    slug: "stem-robotics-ai-lab",
    title: "STEM, Robotics & AI Lab Setup",
    shortTitle: "STEM, Robotics & AI",
    description:
      "Flexible technology-learning spaces for STEM activities, robotics projects and AI-based learning.",
    details:
      "These spaces are planned around collaborative work, device access, project storage, demonstrations and practical student engagement.",
    points: [
      "Collaborative project tables",
      "Power and device planning",
      "Component and project storage",
      "Demonstration-friendly arrangement",
    ],
    icon: Atom,
    accent: "orange",
  },
  {
    slug: "mathematics-computer-lab",
    title: "Mathematics & Computer Lab Setup",
    shortTitle: "Maths & Computer Labs",
    description:
      "Organised learning spaces for mathematics activities, digital learning and computer-based instruction.",
    details:
      "Rashi Labs supports practical workstation layouts, furniture supply, cable planning, storage and classroom organisation for mathematics and computer laboratories.",
    points: [
      "Computer workstation planning",
      "Cable and power coordination",
      "Mathematics activity areas",
      "Storage and classroom organisation",
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
      "Coordination support for fire-hydrant line requirements as part of institutional setup projects.",
    details:
      "Where required, Rashi Labs can coordinate fire-hydrant line work through suitable technical partners as part of a broader laboratory or institutional setup requirement.",
    points: [
      "Requirement discussion",
      "Technical coordination",
      "Integration with setup work",
      "Partner-supported execution",
    ],
    icon: ShieldCheck,
    accent: "orange",
  },
  {
    slug: "industrial-lab-support",
    title: "Industrial Lab Support",
    shortTitle: "Industrial Solutions",
    description:
      "Practical supply, setup and improvement support for smaller industrial and quality-control laboratories.",
    details:
      "Rashi Labs can assist with workstation supply, storage organisation, utility coordination and equipment placement for compact industrial laboratory environments.",
    points: [
      "Workflow-based space planning",
      "Workstation and storage supply",
      "Equipment placement coordination",
      "Maintainable layout recommendations",
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
