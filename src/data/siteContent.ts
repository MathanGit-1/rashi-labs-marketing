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
      "Planning and setup support for functional science laboratories in schools, colleges and training centres.",
    details:
      "From initial requirement discussions to layout planning, equipment selection and setup coordination, the goal is to create a practical laboratory that is easy to use, maintain and expand.",
    points: [
      "Requirement and space assessment",
      "Workstation and storage planning",
      "Equipment and utility coordination",
      "Handover and basic usage guidance",
    ],
    icon: Building2,
    accent: "blue",
  },
  {
    slug: "chemistry-lab-solutions",
    title: "Chemistry Lab Solutions",
    shortTitle: "Chemistry Labs",
    description:
      "Purposeful chemistry laboratory planning with attention to workflow, storage, utilities and safety.",
    details:
      "Chemistry labs need clear zones for preparation, experimentation, washing and storage. Rashi Labs supports practical layouts and equipment planning for educational and small-scale laboratory needs.",
    points: [
      "Experiment work areas",
      "Chemical and glassware storage planning",
      "Wash and utility zone coordination",
      "Safety-conscious workflow",
    ],
    icon: FlaskConical,
    accent: "teal",
  },
  {
    slug: "science-lab-setup",
    title: "Physics & Biology Lab Setup",
    shortTitle: "Science Labs",
    description:
      "Dedicated laboratory solutions for observation, measurement, demonstrations and practical learning.",
    details:
      "The setup can be adapted for physics demonstrations, biological observation and foundational science activities, with suitable work surfaces, storage and equipment access.",
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
      "For institutions working with limited space, a composite lab can bring multiple science disciplines into one organised room. The design focuses on adaptable work areas and well-planned storage.",
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
    slug: "industrial-lab-support",
    title: "Industrial Lab Support",
    shortTitle: "Industrial Solutions",
    description:
      "Practical setup and improvement support for small industrial and quality-control laboratory spaces.",
    details:
      "Rashi Labs can assist with basic planning, workstation organisation, utility coordination and equipment placement for small industrial laboratory environments.",
    points: [
      "Workflow-based space planning",
      "Workstation and storage support",
      "Equipment placement coordination",
      "Maintainable layout recommendations",
    ],
    icon: Wrench,
    accent: "teal",
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
    description: "Discuss the purpose, users, space, experiments and expected outcome.",
  },
  {
    step: "02",
    title: "Plan",
    description: "Prepare a practical layout, equipment approach and implementation plan.",
  },
  {
    step: "03",
    title: "Set up",
    description: "Coordinate the required workstations, storage, utilities and equipment.",
  },
  {
    step: "04",
    title: "Support",
    description: "Provide basic handover guidance and help with future improvements.",
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
