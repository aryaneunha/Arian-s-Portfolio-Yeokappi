import { Project, Experience, Skill } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Digital Media & AI Content Designer',
    company: 'The Friendly Pharmacists',
    period: 'Aug 2025 - Present',
    description: [
      'Designed patient-focused educational videos using Synthesia and Adobe Suite.',
      'Blended narrative storytelling with UX principles for healthcare outreach.',
      'Built branded assets and refined UX across web and social media.'
    ]
  },
  {
    id: '2',
    role: 'Graphics Designer',
    company: 'Douglas College',
    period: 'Oct 2023 - April 2025',
    description: [
      'Designed graphics for Douglas Royals athletics, maintaining brand consistency.',
      'Managed social media engagement, boosting followers by 30%.',
      'Delivered high-quality scoreboard graphics under tight deadlines.'
    ]
  },
  {
    id: '3',
    role: 'UX/UI Designer',
    company: 'Eunoia Design Jam',
    period: 'Feb - Mar 2024',
    description: [
      'Collaborated in a design sprint to enhance inclusivity on the "UX Was Here" beta website.',
      'Implemented event chatrooms to improve accessibility.',
      'Conducted usability testing with diverse designers.'
    ]
  },
  {
    id: '4',
    role: 'Graphics Director',
    company: 'UNICEF SFU',
    period: 'July - Dec 2023',
    description: [
      'Created social media graphics aligned with mission guidelines.',
      'Designed event materials increasing Gala attendance by 42%.'
    ]
  }
];

export const SKILLS_DESIGN: Skill[] = [
  { name: 'Wireframing', level: 90, category: 'design' },
  { name: 'Prototyping', level: 85, category: 'design' },
  { name: 'User Research', level: 80, category: 'design' },
  { name: 'Visual Design', level: 95, category: 'design' },
  { name: 'Motion Design', level: 75, category: 'design' },
];

export const SKILLS_SOFTWARE: Skill[] = [
  { name: 'Figma', level: 95, category: 'software' },
  { name: 'Adobe Creative Suite', level: 90, category: 'software' },
  { name: 'Procreate', level: 85, category: 'software' },
  { name: 'Webflow', level: 70, category: 'software' },
  { name: 'Notion', level: 95, category: 'software' },
];

export const PROJECTS: Project[] = [
  {
    id: 'p3',
    title: 'Douglas Royals',
    subtitle: 'Branding & Sports Graphics',
    role: 'Graphic Designer',
    image: 'https://i.ibb.co/Z1c9F57K/royalsthumbnail.png',
    overview: 'Complete visual overhaul and social media management for the Douglas College Athletics department.',
    problem: 'The athletics brand lacked consistency across digital and print mediums, reducing fan engagement.',
    process: [
      'Audited existing assets to identify inconsistencies.',
      'Created a master template library for scoreboards and social posts.',
      'Executed real-time graphic creation during tournament events.'
    ],
    tools: ['Photoshop', 'Illustrator', 'InDesign', 'Social Pilot'],
    outcomes: ['30% increase in social media followers.', 'Unified visual identity across campus.', 'High-engagement tournament coverage.']
  },
  {
    id: 'p2',
    title: 'UX Was Here App',
    subtitle: 'Eunoia Design Jam Project',
    role: 'UX/UI Designer',
    image: 'https://i.ibb.co/Z1Tyqfz4/uwhthumbnail.png',
    overview: 'A mobile application concept designed to improve event accessibility and networking for design students.',
    problem: 'Design jams often lack inclusive tools for remote participants or those with accessibility needs.',
    process: [
      'Conducted rapid user research during a 48-hour sprint.',
      'Developed low-fidelity wireframes focusing on chat accessibility.',
      'Iterated based on mentor feedback to refine the high-fidelity UI.'
    ],
    tools: ['Figma', 'Miro', 'Zoom'],
    outcomes: ['Enhance beta platform accessibility.', 'Implemented inclusive event chatrooms.', 'Finalist in Design Jam categories.']
  },
  {
    id: 'p1',
    title: 'The Friendly Pharmacists',
    subtitle: 'Digital Media & AI Content Design',
    role: 'Content Designer & Editor',
    image: 'https://i.ibb.co/ZpQ9vsRn/friendly.png',
    overview: 'A digital media initiative to improve patient health literacy through engaging video content.',
    problem: 'Medical information is often dense and inaccessible to the general public, leading to lower adherence and understanding.',
    process: [
      'Scripted educational narratives focused on clarity.',
      'Utilized Synthesia AI avatars for scalable video production.',
      'Designed custom overlays in After Effects for brand consistency.'
    ],
    tools: ['Synthesia', 'Premiere Pro', 'After Effects', 'Illustrator'],
    outcomes: ['Created a scalable video library.', 'Increased patient engagement metrics.', 'Established a consistent visual identity.']
  },
  {
    id: 'p4',
    title: 'Deep-Seated History',
    subtitle: 'Museum of Vancouver Exhibition',
    role: 'Co-Producer & Visual Designer',
    image: 'https://i.ibb.co/Fb2PQ1rv/movthumbnail.png',
    overview: 'A short film and visual exhibition piece featured in the Museum of Vancouver.',
    problem: 'Telling a complex historical narrative in a visually compelling way for a museum audience.',
    process: [
      'Storyboarding historical reenactments.',
      'Designing promotional materials and exhibit placards.',
      'Collaborating with curators on visual placement.'
    ],
    tools: ['Premiere Pro', 'DaVinci Resolve', 'Photoshop'],
    outcomes: ['Featured in official exhibition.', 'Positive reception from museum attendees.', 'Permanent archive addition.']
  }
];