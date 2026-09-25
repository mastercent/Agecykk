import heroPortrait from '../assets/images/hero_cinematic_portrait_1790302430360.jpg';
import philosophyTunnel from '../assets/images/philosophy_tunnel_1790302448364.jpg';
import fluidRibbon from '../assets/images/abstract_fluid_ribbon_1790302461827.jpg';
import techShowcase from '../assets/images/project_showcase_tech_1790302475435.jpg';

export interface Project {
  id: string;
  name: string;
  client: string;
  year: string;
  category: 'Digital Products' | 'Brand Identity' | 'Web Experiences' | 'AI & Automation';
  industry: string;
  headline: string;
  description: string;
  image: string;
  accentColor: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
  challenge: string;
  solution: string;
}

export interface Service {
  number: string;
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  timeline: string;
  highlight: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  avatarSeed: string;
}

export const AGENCY_ASSETS = {
  heroPortrait,
  philosophyTunnel,
  fluidRibbon,
  techShowcase,
};

export const SERVICES_DATA: Service[] = [
  {
    number: '01',
    id: 'strategy',
    title: 'Digital Strategy & Research',
    shortDesc: 'Deconstruct complex market dynamics into defensible digital product positioning and high-velocity roadmaps.',
    fullDesc: 'We dismantle generic business briefs to discover unique market levers. Through ethnographic user analysis, competitive decompression, and technical feasibility audits, we create an actionable strategic playbook that protects your investment.',
    deliverables: ['Market Opportunity Mapping', 'User Ethnography & Journey Modeling', 'Information Architecture', 'Product Vision & North Star KPIs'],
    timeline: '3 — 5 Weeks',
    highlight: 'Defensible Positioning'
  },
  {
    number: '02',
    id: 'branding',
    title: 'Brand Systems & Visual Identity',
    shortDesc: 'Sculpt distinctive typographic systems, motion semantics, and design tokens that command authority.',
    fullDesc: 'A brand is not a logo stamp; it is a coherent sensorial language. We develop holistic visual identities featuring bespoke display typography, calculated color systems, responsive motion guidelines, and unified digital asset libraries.',
    deliverables: ['Custom Brand Identity Guidelines', 'Typographic & Palette Hierarchy', 'Motion & Transition Guidelines', 'Vector Iconography & 3D Assets'],
    timeline: '4 — 6 Weeks',
    highlight: 'Command Authority'
  },
  {
    number: '03',
    id: 'uiux',
    title: 'UI / UX Product Design',
    shortDesc: 'Engineered interfaces that balance cinematic visual restraint with effortless ergonomic interaction.',
    fullDesc: 'Every millimeter of interaction is weighted and calibrated. We design web and mobile interfaces that feel physical, immediate, and frictionless, ensuring high cognitive retention and natural conversion flows.',
    deliverables: ['Design System Architecture', 'High-Fidelity Interactive Prototypes', 'Micro-Interactions & Haptic Pacing', 'Accessibility & Contrast Auditing'],
    timeline: '5 — 8 Weeks',
    highlight: 'Ergonomic Precision'
  },
  {
    number: '04',
    id: 'development',
    title: 'Full-Stack Web Engineering',
    shortDesc: 'Sub-second page speeds, WebGL spatial shaders, and reactive architectures crafted for scale.',
    fullDesc: 'We translate complex aesthetic visions into high-performance, accessible code. Utilizing modern React architectures, hardware-accelerated transitions, and headless CMS foundations, our applications achieve 100/100 Lighthouse scores.',
    deliverables: ['Modern React & Next.js Builds', 'Hardware-Accelerated WebGL/Three.js', 'Headless CMS Architecture', 'Core Web Vitals Optimization'],
    timeline: '6 — 10 Weeks',
    highlight: 'Sub-second Velocity'
  },
  {
    number: '05',
    id: 'ai-automation',
    title: 'AI Integration & Automation',
    shortDesc: 'Embed intelligent workflows and predictive interfaces that transform passive software into active partners.',
    fullDesc: 'Move beyond static generative gimmicks. We integrate contextual AI agents, multimodal interfaces, and streamlined back-office automation pipelines that tangibly accelerate enterprise throughput.',
    deliverables: ['LLM & Multimodal Integration', 'Contextual Search & Embeddings', 'Automated Content Ops', 'Custom AI Pipeline Engineering'],
    timeline: '4 — 7 Weeks',
    highlight: 'Adaptive Intelligence'
  },
  {
    number: '06',
    id: 'growth',
    title: 'Growth & Conversion Optimization',
    shortDesc: 'Data-driven funnel iteration and behavioral experimentation to continuously compound market dominance.',
    fullDesc: 'Launch is day one. We implement high-fidelity behavioral telemetry, multivariate experimentation matrices, and conversion rate optimizations that turn casual visitors into loyal brand advocates.',
    deliverables: ['Conversion Rate Audits', 'A/B & Multivariate Testing', 'Behavioral Heatmap Analysis', 'Technical SEO Infrastructure'],
    timeline: 'Ongoing Retainer',
    highlight: 'Compounding ROI'
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    step: '01',
    title: 'DISCOVER',
    tagline: 'Deconstruct The Core',
    description: 'We immerse ourselves into your operational reality, interviewing stakeholders, dismantling competitor advantages, and identifying your exact differentiation thesis.',
    deliverables: ['Stakeholder Deep-Dives', 'Competitive Topology', 'Technical Feasibility Map', 'KPI Definition Matrix'],
    duration: 'Week 1–2'
  },
  {
    step: '02',
    title: 'DEFINE',
    tagline: 'Architect The Blueprint',
    description: 'Before a single pixel is rendered, we establish the invisible architecture: wireframes, structural user journeys, and technical system specifications.',
    deliverables: ['System Architecture Spec', 'Information Hierarchy', 'Interactive Low-Fi Wireframes', 'Content Strategy'],
    duration: 'Week 3–4'
  },
  {
    step: '03',
    title: 'DESIGN',
    tagline: 'Craft The Sensory Experience',
    description: 'We create the full aesthetic expression: cinematic typography, dark luxury materials, interactive micro-animations, and modular component tokens.',
    deliverables: ['High-Fidelity Screen Designs', 'Interactive Motion Prototypes', 'Production Design Token Library', 'Asset Specifications'],
    duration: 'Week 5–7'
  },
  {
    step: '04',
    title: 'DEVELOP',
    tagline: 'Engineer For Velocity',
    description: 'Pixel-perfect development with zero bloat. We build resilient, accessible, and performant web applications using modern full-stack frameworks.',
    deliverables: ['TypeScript / React Architecture', 'Micro-Interactions & Transitions', 'CMS & API Integrations', 'Cross-Platform Quality Testing'],
    duration: 'Week 8–11'
  },
  {
    step: '05',
    title: 'LAUNCH',
    tagline: 'Deploy & Command',
    description: 'Rigorous staging verification, SEO optimization, and infrastructure provisioning followed by a seamless global launch and performance monitoring.',
    deliverables: ['Edge CDN Deployment', 'Core Web Vitals Optimization', 'SEO Verification', 'Post-Launch Telemetry Setup'],
    duration: 'Week 12'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'nova',
    name: 'NOVA',
    client: 'Nova Spatial Technologies',
    year: '2026',
    category: 'Digital Products',
    industry: 'Spatial Computing & AI',
    headline: 'Next-Generation Spatial Computing Hardware Interface',
    description: 'A revolutionary digital interface and launch platform for Nova’s groundbreaking spatial headset, blending tactile physical feedback with fluid 3D spatial software.',
    image: techShowcase,
    accentColor: '#FF5E00',
    metrics: [
      { label: 'Conversion Lift', value: '+184%' },
      { label: 'Series B Capital', value: '$42M' },
      { label: 'Time on Experience', value: '4.8m' }
    ],
    deliverables: ['Spatial UI Design System', 'WebGL Product Configurator', 'Marketing Launch Engine', 'Design Tokens'],
    challenge: 'Nova needed to showcase complex spatial hardware and proprietary neural interface technology without overwhelming non-technical venture capital and enterprise buyers.',
    solution: 'We engineered an interactive, dark-mode 3D digital experience that lets prospects explore real-time haptic slices and spatial OS views directly inside the browser.'
  },
  {
    id: 'aura',
    name: 'AURA',
    client: 'Aura Health Technologies',
    year: '2025',
    category: 'Web Experiences',
    industry: 'Longevity & Preventive Care',
    headline: 'Biometric Telemetry Platform for Clinical Longevity',
    description: 'Reimagining preventive health into an authoritative, clinical-grade patient dashboard and interactive diagnostic experience with sub-second biometrics.',
    image: philosophyTunnel,
    accentColor: '#FF7700',
    metrics: [
      { label: 'Patient Retention', value: '94.2%' },
      { label: 'Clinical Onboarding', value: '-65% time' },
      { label: 'Annual ARR Growth', value: '+310%' }
    ],
    deliverables: ['Clinical Telemetry Dashboard', 'Brand Identity', 'Custom Typography Pairing', 'HIPAA-Compliant UI'],
    challenge: 'Transforming clinical lab results and genetic sequencing datasets into an intuitive visual story that patients can grasp in seconds.',
    solution: 'Created an editorial, dark-luxury patient portal using custom tabular data hierarchies and warm biological amber highlights.'
  },
  {
    id: 'vanta',
    name: 'VANTA',
    client: 'Vanta Capital Partners',
    year: '2025',
    category: 'Brand Identity',
    industry: 'Quantitative Asset Management',
    headline: 'Institutional Capital Platform for Sovereign Funds',
    description: 'An uncompromising brand identity and institutional web terminal for an algorithmic trading firm managing $3.2B in multi-asset global liquidity.',
    image: fluidRibbon,
    accentColor: '#E64A00',
    metrics: [
      { label: 'Institutional Inflow', value: '$850M' },
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Bounce Rate', value: '18.4%' }
    ],
    deliverables: ['Corporate Rebrand', 'Real-Time Portfolio Terminal', 'Interactive Investment Calculator', 'Brand Book'],
    challenge: 'Traditional hedge funds look dated and opaque. Vanta required an aesthetic that projected cryptographic security and forward-looking algorithmic rigor.',
    solution: 'Designed an ultra-minimalist black and amber visual architecture with monospace telemetry and instant data streaming.'
  },
  {
    id: 'forma',
    name: 'FORMA',
    client: 'Forma Studio Tokyo',
    year: '2026',
    category: 'Web Experiences',
    industry: 'Minimalist Architecture',
    headline: 'Monolithic Digital Archive for Contemporary Architecture',
    description: 'A digital museum and exhibition monograph presenting award-winning concrete and timber structures across Japan, Scandinavia, and Switzerland.',
    image: heroPortrait,
    accentColor: '#FF5E00',
    metrics: [
      { label: 'Awwwards Recognition', value: 'Site of the Day' },
      { label: 'Global Press Mentions', value: '38+' },
      { label: 'Average Session', value: '5.2m' }
    ],
    deliverables: ['Monograph Web Architecture', 'Custom Image Resampling', 'Dual-Language System', 'Editorial Layouts'],
    challenge: 'Showcasing subtle concrete textures, light gradients, and negative space without visual digital compression artifacts.',
    solution: 'Built a museum-grade progressive web experience with custom aspect ratio grids, smooth smooth scrolling, and silent interaction design.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    quote: 'STRUCT completely transformed our market perception. Within 90 days of launching the new digital ecosystem, our enterprise inbound deals tripled in contract size.',
    author: 'Elena Rostova',
    role: 'Chief Marketing Officer',
    company: 'Nova Spatial Systems',
    metric: '+184% Deal Size',
    avatarSeed: 'Elena'
  },
  {
    id: '2',
    quote: 'Working with STRUCT felt like partnering with both an elite design atelier and an aerospace engineering team. The attention to typography, micro-interactions, and speed is unmatched.',
    author: 'Marcus Vance',
    role: 'Managing Partner',
    company: 'Vanta Capital',
    metric: '$850M Inflow',
    avatarSeed: 'Marcus'
  },
  {
    id: '3',
    quote: 'They did not just redesign our website; they defined our brand’s entire visual language for the next decade. Zero fluff, pure aesthetic authority.',
    author: 'Dr. Soraya Chen',
    role: 'Co-Founder & CEO',
    company: 'Aura Longevity Labs',
    metric: '94% Retention',
    avatarSeed: 'Soraya'
  }
];

export const STUDIO_STATS = [
  { value: '200+', label: 'Projects Delivered', detail: 'Across North America, Europe & Asia' },
  { value: '50+', label: 'Global Brands', detail: 'From Seed stage to Public Enterprise' },
  { value: '12+', label: 'Industry Sectors', detail: 'AI, Spatial Tech, Fintech, Architecture' },
  { value: '8+', label: 'Years of Mastery', detail: 'Founded in 2018 with Zero compromise' }
];
