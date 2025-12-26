import {
  BarChart3,
  PieChart,
  ShieldCheck,
  TrendingUp,
  Users,
  Briefcase,
  FileText,
  Megaphone,
  MonitorPlay,
  Lightbulb,
  HeartHandshake,
} from "lucide-react";

export const NAV_LINKS = [
  { name: "About Us", href: "/about" },
  {
    name: "Built for",
    href: "/#clients",
    children: [
      { name: "⁠Marketing & Investor Communication Team", href: "/#clients" },
      { name: "⁠Operations & Reporting Team", href: "/#clients" },
      { name: "⁠Fund Management team", href: "/#clients" },
      { name: "⁠PMS Product Management", href: "/#clients" },
      { name: "⁠Offshore Product Management", href: "/#clients" },
      { name: "⁠AIF Product Management", href: "/#clients" },
    ],
  },
];
export const Footer_NAV_LINKS = [
  { name: "About Us", href: "/about" },
  {
    name: "Built for",
    href: "/#clients",
    children: [
      { name: "⁠Marketing & Investor Communication Team", href: "/#clients" },
      { name: "⁠Operations & Reporting Team", href: "/#clients" },
      { name: "⁠Fund Management team", href: "/#clients" },
      { name: "⁠PMS Product Management", href: "/#clients" },
      { name: "⁠Offshore Product Management", href: "/#clients" },
      { name: "⁠AIF Product Management", href: "/#clients" },
    ],
  },
  { name: "Services", href: "/#services" },
  { name: "What We Do", href: "/#post-hero-services" },
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Algorithmic Dashboard Automation",
    subtitle:
      "Dashboards are automatically generated using fixed calculation logic, with minimum data handling.",
    image: "/BannerImage/Algorithmic.jpg",
  },
  {
    id: 2,
    title: "Complaince Alignment Secured",
    subtitle:
      "Compliance requirements are built into the process, ensuring regulatory alignment across all outputs.",
    image: "/BannerImage/Complaince.webp",
  },
  {
    id: 3,
    title: "Fully Audit safe Process",
    subtitle:
      "All outputs are traceable and controlled, keeping the process audit-ready at every stage.",
    image: "/BannerImage/FullyProcess.jpg",
  },
  {
    id: 4,
    title: "Higher Accuracy",
    subtitle:
      "Standardised rules and validated data ensure reliable and consistent results.",
    image: "/BannerImage/HigherAccuracy.jpg",
  },
  {
    id: 5,
    title: "Minimum Manual Intervention",
    subtitle:
      "Processes run largely through automation, reducing manual work and dependence on individuals",
    image: "/BannerImage/MinimumManual.jpg",
  },
];

export const USP_LIST = [
  "Expert Mutual Fund Research",
  "Tailored NFO Campaigns",
  "Innovative Tech Development",
  "Comprehensive Goal Planning",
  "Strategic Product Pitches",
];

export const SERVICES = {
  b2b: [
    {
      title: "Product Pitches",
      icon: Megaphone,
      desc: "Compelling narratives for AMCs.",
    },
    {
      title: "MF Scheme Research",
      icon: PieChart,
      desc: "Deep dive analytics into funds.",
    },
    {
      title: "Marketing Collaterals",
      icon: FileText,
      desc: "High-impact sales materials.",
    },
    {
      title: "NFO Campaigns",
      icon: TrendingUp,
      desc: "Strategic launch planning.",
    },
    {
      title: "Data Dashboards",
      icon: MonitorPlay,
      desc: "Real-time performance tracking.",
    },
    {
      title: "Tech Developments",
      icon: BarChart3,
      desc: "Custom software solutions.",
    },
  ],
  retail: [
    {
      title: "Long-term Investments",
      icon: TrendingUp,
      desc: "Wealth creation strategies.",
    },
    {
      title: "Retirement Planning",
      icon: ShieldCheck,
      desc: "Secure your golden years.",
    },
    {
      title: "Child Education",
      icon: Lightbulb,
      desc: "Planning for the next generation.",
    },
    {
      title: "Goal-based Investing",
      icon: Users,
      desc: "Target-oriented portfolios.",
    },
    {
      title: "Insurance",
      icon: HeartHandshake,
      desc: "Protecting what matters most.",
    },
  ],
};

export const FUNDS_MANAGED = [
  { label: "Funds Supported on Recurring", value: "270+" },
  { label: "Investor Presentations Delivered", value: "50+" },
  { label: "Compliance Documents Generated", value: "120+" },
  { label: "Processing Data Points with Precision", value: "10,000+" },
  { label: "Annual Data Validations", value: "1_000_000" },
];

export const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    role: "CEO, Alpha Investments",
    text: "Fintune's research capabilities transformed how we pitch our products to high-net-worth individuals. Their data dashboards are world-class.",
  },
  {
    name: "Sarah Jenkins",
    role: "Retail Client",
    text: "Fintune Capital helped me plan my retirement with clarity. I feel secure knowing my portfolio is in expert hands.",
  },
  {
    name: "Amit Patel",
    role: "Director, Zenith Funds",
    text: "The marketing collaterals provided by Fintune gave our NFO the visibility it needed to be oversubscribed. Highly recommended.",
  },
];

export const CLIENT_LOGOS = [
  "Aditya Birla Sun Life Mutual Funds",
  "Helios Capital Asset Management (India) Pvt. Ltd.",
  "Mirae  Asset Mutual Funds",
  "Aditya Birla Sun Life Asset Management Company Pte. Ltd",
  "Northern Arc Capital Limited",
  "Baroda BNP Paribas Mutual Fund",
  "ITI Mutual Fund",
  "National Institute of Securities Markets (NISM)",
  "Helios Capital Management Pte. Ltd.",
  "PriceTime",
];

export const COMPANY_INFO = {
  name: "FINTUNE",
  email: "priyanka.bharati@fintuneweb.com",
  // phone: "+91 98765 43210",
  address: "123 Financial District, Mumbai, India",
  linkedin:
    "Started in 2019, Fintune works primarily in the asset management space.",
};
