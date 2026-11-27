import type { LucideIcon } from 'lucide-react'
import {
  Bridge,
  Building2,
  ClipboardCheck,
  Construction,
  Gauge,
  HardHat,
  Layers3,
  MapPinned,
  Ruler,
  Shovel,
  TrafficCone,
} from 'lucide-react'

export type ExpertiseItem = { title: string; description: string; icon: LucideIcon }

export const expertise: ExpertiseItem[] = [
  { title: 'Transportation Engineering', description: 'Planning and development of efficient transport infrastructure.', icon: MapPinned },
  { title: 'Highway Construction', description: 'Road development, widening, strengthening, and improvement works.', icon: Construction },
  { title: 'Pavement Design', description: 'Pavement systems designed around traffic, climate, soil, and load.', icon: Ruler },
  { title: 'Pavement Rehabilitation', description: 'Assessment and renewal strategies for existing road surfaces.', icon: Gauge },
  { title: 'Structural Engineering', description: 'Structural considerations for durable civil infrastructure.', icon: Building2 },
  { title: 'Bridge Construction', description: 'Bridge construction and rehabilitation supervision.', icon: Bridge },
  { title: 'Geotechnical Engineering', description: 'Ground behavior analysis and geotechnical problem solving.', icon: Shovel },
  { title: 'Soil Investigation', description: 'Sub-soil investigation and construction material assessment.', icon: Layers3 },
  { title: 'Construction Quality', description: 'Quality assurance, material testing, and site inspections.', icon: ClipboardCheck },
  { title: 'Contract Management', description: 'Contract administration and technical implementation oversight.', icon: HardHat },
  { title: 'Planning & Estimation', description: 'Project planning, cost estimation, and technical documentation.', icon: Ruler },
  { title: 'Road Safety', description: 'Infrastructure management aligned with safety standards.', icon: TrafficCone },
]

export const navItems = [
  ['home', 'Home'],
  ['about', 'About'],
  ['expertise', 'Expertise'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['leadership', 'Leadership'],
  ['education', 'Education'],
  ['contact', 'Contact'],
] as const

export const experiences = [
  {
    period: '2019 — Present',
    organization: 'Roads & Highways Department (RHD)',
    role: 'Civil Engineer',
    detail: 'Bangladesh Civil Service (BCS), Roads & Highways Cadre',
    employer: 'Ministry of Road Transport & Bridges',
    responsibilities: [
      'Contract management and preparation of estimates for flexible and rigid pavement, culverts, and bridges.',
      'Selection and quality testing of asphalt, concrete, aggregates, and other construction materials.',
      'Pavement design considering climate, traffic, soil conditions, load capacity, durability, and sustainability.',
      'Site inspections, pavement assessment, rehabilitation planning, and design documentation.',
      'Sub-soil investigation for bridges, slope stability assessment, slope protection, and earth-retaining structures.',
    ],
  },
  {
    period: '2018 — 2019',
    organization: 'Nuclear Power Plant Company Bangladesh Limited',
    role: 'Executive Trainee (ET), Civil Engineering',
    detail: 'Rooppur Nuclear Power Plant (RNPP)',
    employer: 'Civil construction quality assurance',
    responsibilities: [
      'Quality assurance and construction monitoring for nuclear power plant civil works.',
      'Flexible pavement and rigid pavement construction.',
      'Soil-cement stabilization works.',
    ],
  },
  {
    period: '2016 — 2018',
    organization: 'Orient Trading & Builders Limited',
    role: 'Pavement & Geotechnical Engineer (Intern)',
    detail: 'Pavement construction and soil investigation',
    employer: 'Field and laboratory engineering',
    responsibilities: [
      'Quality assurance of civil engineering works.',
      'Geotechnical and transportation-related problem solving.',
      'Laboratory testing of construction materials.',
    ],
  },
]

export const projects = [
  {
    title: 'Pirojpur–Nazirpur–Matibhanga–Patgati–Gonapara District Highway',
    code: 'Z-7704',
    period: '2024 — 2025',
    length: '12.00 KM',
    cost: '347.04 Crore',
    funding: 'Government of Bangladesh',
    role: 'Deputy Project Manager, PIU',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=85',
    type: 'District Highway Improvement',
  },
  {
    title: 'Takerhat–Gopalganj (Haridaspur)–Mollahat (Gonapara) Regional Highway',
    code: 'R-850',
    period: '2024 — 2025',
    length: '44.68 KM',
    cost: '651.70 Crore',
    funding: 'Government of Bangladesh',
    role: 'Deputy Project Manager, PIU',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1400&q=85',
    type: 'Regional Highway Improvement',
  },
  {
    title: 'Sub-soil Investigation & Prestressed Concrete Girder Bridge',
    code: 'Bridge Infrastructure',
    period: '2022 — 2023',
    length: '37.20 M',
    cost: 'Bridge Project',
    funding: 'Infrastructure Development',
    role: 'Deputy Project Manager',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=85',
    type: 'Bridge Construction',
  },
]

export const education = [
  { degree: 'Bachelor of Science in Civil Engineering', institution: 'Chittagong University of Engineering & Technology (CUET)', year: '2015', score: 'CGPA 3.29 / 4.00', detail: '20th among 132 students · English medium', extra: 'Thesis: Environmental Impact Assessment (EIA) of Bahaddarhat Flyover, Chittagong · Supervisor: Dr. Asiful Hoque' },
  { degree: 'Higher Secondary Certificate (HSC)', institution: 'Government K.C. College, Jhenaidah', year: '2010', score: 'GPA 5.00 / 5.00', detail: 'Science · English medium', extra: '' },
  { degree: 'Secondary School Certificate (SSC)', institution: 'Munuria Secondary School, Jhenaidah', year: '2008', score: 'GPA 5.00 / 5.00', detail: 'Science', extra: '' },
]
