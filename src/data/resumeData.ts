import { ExperienceItem, ToolItem, SkillItem, InterestItem, PortfolioProject } from '../types';

export const RESUME_INFO = {
  fullName: "CONG SANG TRAN",
  vietnameseName: "Trần Công Sang",
  title: "Graphic Designer & Creative Professional",
  bio: "Hi, my name is Trần Công Sang. I am a Graphic Designer with more than 3 years of experience in design fields such as: F&B, Travel, Fashion, ... A responsible person at work and leisure. Hit me up and I’ll be happy to help with your design ideas.",
  contact: {
    base: "Danang",
    phone: "+84 796 530 157",
    website: "behance.net/congsang00c0cf",
    websiteUrl: "https://behance.net/congsang00c0cf",
    email: "congsang003@gmail.com"
  },
  education: {
    degree: "Bachelor of E-commerce",
    institution: "Danang University of Economics",
    period: "2015-2020",
    fullText: "Bachelor of E-commerce, Danang University of Economics (2015-2020)"
  }
};

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: "liberzy",
    period: "2017 - 2019",
    role: "Part-time Designer, Video editor",
    company: "Start-up Liberzy Travel",
    category: "travel",
    description: "Designed promotional graphics, social media campaigns, and travel video stories for Liberzy Travel startup platform.",
    highlights: ["Social Media Visuals", "Travel Campaign Video Editing", "Branding Assets"]
  },
  {
    id: "merriman",
    period: "2017 - 2019",
    role: "Part-time Designer",
    company: "Merriman Fashion",
    category: "fashion",
    description: "Created seasonal fashion lookbooks, retail display graphics, and apparel brand collateral for Merriman Fashion.",
    highlights: ["Lookbook Design", "Apparel Catalog Layout", "Retail Promotion Design"]
  },
  {
    id: "danang090",
    period: "2020 - 2021",
    role: "Full-time Designer",
    company: "Gaming Company Danang-090Bravo",
    category: "gaming",
    description: "Led graphic design for gaming projects, digital character promotional assets, streamer overlays, and game UI identity.",
    highlights: ["Game Brand Identity", "Digital Promotion Graphics", "Event Stream Overlays"]
  },
  {
    id: "freelance",
    period: "2019 - Now",
    role: "Freelance Designer",
    company: "Freelance Designer",
    category: "freelance",
    description: "Collaborating with clients across F&B, Travel, and Fashion on brand identity, packaging, and advertising campaigns.",
    highlights: ["F&B Brand Identity", "Custom Packaging Design", "Photography & Art Direction"]
  }
];

export const TOOLS_LIST: ToolItem[] = [
  {
    id: "ps",
    name: "Adobe Photoshop",
    shortLabel: "Ps",
    category: "Photo Editing & Manipulation",
    proficiency: 95,
    description: "Advanced photo retouching, compositing, color grading, and raster graphic creation."
  },
  {
    id: "ai",
    name: "Adobe Illustrator",
    shortLabel: "Ai",
    category: "Vector & Logo Design",
    proficiency: 92,
    description: "Brand marks, vector typography, packaging layouts, and scalable illustrations."
  },
  {
    id: "pr",
    name: "Adobe Premiere Pro",
    shortLabel: "Pr",
    category: "Video Editing",
    proficiency: 88,
    description: "Video editing, motion storytelling, color grading, and commercial video cuts."
  },
  {
    id: "camera",
    name: "Photography & DSLR Studio",
    shortLabel: "CAM",
    category: "Photography",
    proficiency: 90,
    description: "Product photography, travel documentation, studio lighting, and visual direction."
  }
];

export const SKILLS_LIST: SkillItem[] = [
  {
    id: "research",
    name: "Research",
    iconName: "Search",
    description: "Market research, visual moodboarding, and trend analysis for design concepts."
  },
  {
    id: "writing",
    name: "Writing",
    iconName: "PenTool",
    description: "Creative copywriting, brand voice articulation, and conceptual storytelling."
  },
  {
    id: "photography",
    name: "Photography",
    iconName: "Camera",
    description: "On-location and studio photography for F&B, fashion lookbooks, and travel."
  },
  {
    id: "creative-design",
    name: "Creative Design",
    iconName: "Sparkles",
    description: "Holistic brand identity, editorial layouts, packaging, and digital visual systems."
  }
];

export const INTERESTS_LIST: InterestItem[] = [
  {
    id: "mystical",
    name: "Mystical",
    detail: "Fascination with mystical folklore, symbolism, and atmospheric art styles."
  },
  {
    id: "travel",
    name: "Travel",
    detail: "Exploring new cultures and landscapes across Vietnam and Southeast Asia."
  },
  {
    id: "jogging",
    name: "Jogging",
    detail: "Daily running along Danang beach for clarity and physical balance."
  },
  {
    id: "discover",
    name: "Discover",
    detail: "Continuous exploration of emerging design tools, music, and local gastronomy."
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "fnb-coffee-identity",
    title: "An Khê Craft Bakery & Coffee Identity",
    category: "F&B",
    year: "2023",
    client: "An Khê Specialty Coffee (Danang)",
    summary: "Comprehensive brand identity and eco-friendly packaging design for a specialty coffee & craft bakery in central Danang.",
    deliverables: ["Brand Identity", "Packaging Box Design", "Menu Typography", "Social Visuals"],
    imageUrl: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    behanceUrl: "https://behance.net/congsang00c0cf"
  },
  {
    id: "travel-liberzy-campaign",
    title: "Liberzy Travel Stories Campaign",
    category: "Travel",
    year: "2019",
    client: "Liberzy Travel Startup",
    summary: "Visual storytelling campaign, social media graphics, and promotional video edits highlighting hidden gems of coastal Vietnam.",
    deliverables: ["Video Editing", "Social Media Templates", "Hero Banners", "Travel Guide Typography"],
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
    behanceUrl: "https://behance.net/congsang00c0cf"
  },
  {
    id: "fashion-merriman-lookbook",
    title: "Merriman Autumn/Winter Elegance Lookbook",
    category: "Fashion",
    year: "2019",
    client: "Merriman Fashion",
    summary: "Clean editorial lookbook design and retail promotion displays focusing on menswear tailoring and modern silhouettes.",
    deliverables: ["Editorial Lookbook Layout", "In-store Posters", "Typography Grid", "Lookbook Photography"],
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    behanceUrl: "https://behance.net/congsang00c0cf"
  },
  {
    id: "gaming-danang090-identity",
    title: "Danang-090Bravo Cyber Gaming Branding",
    category: "Gaming",
    year: "2021",
    client: "Danang-090Bravo",
    summary: "Bold, atmospheric visual system and tournament stream overlays designed for a prominent esports and gaming lounge.",
    deliverables: ["Streamer Overlays", "Tournament Event Posters", "Badge & Logo Suite", "Social Media Kits"],
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    behanceUrl: "https://behance.net/congsang00c0cf"
  },
  {
    id: "photography-coastal-danang",
    title: "Danang Coastal Solitude & Street Photography",
    category: "Photography",
    year: "2024",
    client: "Personal / Exhibition",
    summary: "An atmospheric photo essay capturing morning fishermen, tranquil beaches, and urban geometry in Danang.",
    deliverables: ["Photography Series", "Color Grading", "Exhibition Catalog Layout"],
    imageUrl: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
    behanceUrl: "https://behance.net/congsang00c0cf"
  },
  {
    id: "creative-mystical-posters",
    title: "Mystical Folklore Typography Posters",
    category: "Photography",
    year: "2023",
    client: "Creative Design Challenge",
    summary: "Experimental typographic poster series exploring Vietnamese folklore symbolism with contemporary geometric typography.",
    deliverables: ["Poster Design", "Custom Vector Typography", "Print Production Setup"],
    imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    behanceUrl: "https://behance.net/congsang00c0cf"
  }
];
