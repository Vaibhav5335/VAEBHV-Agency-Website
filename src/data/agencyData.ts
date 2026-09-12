export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  categoryTag: string;
  description: string;
  annotation: string;
  doodleType: 'meta' | 'google' | 'ai' | 'creative' | 'landing' | 'growth';
  tags: string[];
  platformHighlights: string[];
}

export interface WorkItem {
  id: string;
  label: string;
  platformStack: string;
  deliverables: string[];
  note: string;
  accentColor: string;
  artboardSubtitle: string;
  realWorldScope: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverable: string;
  sketchNote: string;
}

export interface PlatformBadge {
  name: string;
  badgeText: string;
  role: string;
  color: string;
}

export const PLATFORMS_DATA: PlatformBadge[] = [
  {
    name: 'Meta Ads Manager',
    badgeText: 'META CERTIFIED',
    role: 'Instagram, Reels & Advantage+ Shopping',
    color: '#0668E1',
  },
  {
    name: 'Google Ads Manager',
    badgeText: 'GOOGLE PARTNER',
    role: 'Search, YouTube & Performance Max',
    color: '#0F9D58',
  },
  {
    name: 'ChatGPT Ads & AI Search',
    badgeText: 'AI CONVERSATIONAL ADS',
    role: 'LLM Prompt Sponsored Placements & Discovery',
    color: '#10A37F',
  },
  {
    name: 'TikTok Ads Manager',
    badgeText: 'TIKTOK FOR BUSINESS',
    role: 'Spark Ads & Native Content Scaling',
    color: '#FE2C55',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'meta-ads',
    number: '01 //',
    title: 'Meta Ads Manager',
    categoryTag: 'Social Performance',
    description: 'Full-funnel campaign management across Instagram, Facebook & Reels. We deploy Advantage+ Shopping Campaigns (ASC), custom Conversions API (CAPI) server tracking, and algorithmic budget flighting to scale customer acquisition.',
    annotation: 'Advantage+ creative clusters & CAPI data hygiene',
    doodleType: 'meta',
    tags: ['Instagram Reels', 'Advantage+ ASC', 'Meta CAPI', 'Catalog Ads'],
    platformHighlights: ['Multi-variant hook testing', 'Dynamic creative optimization', 'First-party server attribution']
  },
  {
    id: 'google-ads',
    number: '02 //',
    title: 'Google Ads Manager',
    categoryTag: 'High-Intent Search & Video',
    description: 'Capturing bottom-of-funnel customer intent via Google Search, Performance Max (PMax), YouTube Video, and Demand Gen. We build negative keyword shields, structured asset groups, and automated smart-bidding models tuned for ROAS.',
    annotation: 'PMax asset groups & exact-match search arbitrage',
    doodleType: 'google',
    tags: ['Google Search', 'Performance Max', 'YouTube Ads', 'Demand Gen'],
    platformHighlights: ['High-intent search harvesting', 'YouTube Shorts discovery', 'Google Shopping feed optimization']
  },
  {
    id: 'chatgpt-ai-ads',
    number: '03 //',
    title: 'ChatGPT & AI Ads Manager',
    categoryTag: 'Next-Gen AI Placements',
    description: 'Next-generation advertising in conversational AI environments and answer engines. We position your brand directly inside high-intent ChatGPT conversational queries, generative search prompts, and modern LLM recommendation flows.',
    annotation: 'conversational context & answer-engine targeting',
    doodleType: 'ai',
    tags: ['ChatGPT Sponsored', 'Conversational Search', 'LLM Placements', 'AI Answer Engines'],
    platformHighlights: ['Prompt contextual alignment', 'Zero-click answer presence', 'Early-mover AI search leverage']
  },
  {
    id: 'creative-strategy',
    number: '04 //',
    title: 'Ad Creative & Hook Production',
    categoryTag: 'Direct Response Creative',
    description: 'The creative is the targeting. We produce high-velocity motion design, direct-response UGC, and editorial static assets scripted specifically to disrupt scroll inertia within the first 0.8 seconds of impression.',
    annotation: 'thumb-stopping hooks with 0.8s hold rates',
    doodleType: 'creative',
    tags: ['Motion Design', 'UGC Direction', 'Static Ad Batches', 'Hook Sprinting'],
    platformHighlights: ['15-30 fresh hooks/month', 'Iterative visual fatigue prevention', 'Native feed-first aesthetics']
  },
  {
    id: 'landing-pages',
    number: '05 //',
    title: 'Landing Pages & CRO',
    categoryTag: 'Conversion Rate Architecture',
    description: 'High-speed digital landers and direct-response product detail pages engineered with message congruence. Every headline seamlessly echoes the ad creative hook to eliminate bounce friction and maximize checkout completions.',
    annotation: 'sub-800ms load speed & checkout funnel optimization',
    doodleType: 'landing',
    tags: ['Headless Landers', 'A/B Testing', 'Offer Sequencing', 'Shopify & Custom'],
    platformHighlights: ['Strict narrative continuity', 'Frictionless mobile checkout', 'Heatmap & drop-off diagnostics']
  },
  {
    id: 'growth-strategy',
    number: '06 //',
    title: 'Omnichannel Growth & Attribution',
    categoryTag: 'Commercial Modeling',
    description: 'Holistic growth steering looking beyond single platform reports. We monitor blended Marketing Efficiency Ratio (MER), customer acquisition cost (CAC) vs. 90-day LTV, and cohort contribution margins to guide capital deployment.',
    annotation: 'blended MER & true contribution margin steering',
    doodleType: 'growth',
    tags: ['Blended MER', 'Triple Whale / GA4', 'Cohort LTV', 'Budget Allocation'],
    platformHighlights: ['True profitability tracking', 'Cross-channel synergy analysis', 'Predictable scaling roadmaps']
  }
];

export const WORK_DATA: WorkItem[] = [
  {
    id: 'campaign-01',
    label: 'Omnichannel Scale System',
    platformStack: 'Meta Ads Manager + Google PMax',
    realWorldScope: 'Multi-Product E-Commerce Brand',
    deliverables: ['Advantage+ Catalog Architecture', 'Google PMax Asset Groups', 'Weekly Creative Refresh'],
    note: 'Combined high-intent Google Search with high-volume Instagram Reels creative testing',
    accentColor: '#0668E1',
    artboardSubtitle: 'System 01 // Meta ASC & Google Performance Max'
  },
  {
    id: 'campaign-02',
    label: 'High-Intent Acquisition Engine',
    platformStack: 'Google Search + ChatGPT Conversational Ads',
    realWorldScope: 'Subscription & SaaS Service',
    deliverables: ['Exact-Match Search Harvesting', 'Conversational AI Ad Positioning', 'Custom Comparison Landers'],
    note: 'Early integration into ChatGPT query flows paired with high-intent search capture',
    accentColor: '#10A37F',
    artboardSubtitle: 'System 02 // Search & AI Answer Engine'
  },
  {
    id: 'campaign-03',
    label: 'Creative Testing & Volume Engine',
    platformStack: 'Meta Ads Manager (Reels) + TikTok Ads',
    realWorldScope: 'Consumer Lifestyle & Apparel',
    deliverables: ['Direct-Response UGC Pipeline', 'Hook Variation Matrix', 'Conversion API Server Integration'],
    note: 'Rapid iterative creative sprints testing 12 distinct hooks weekly to stop ad fatigue',
    accentColor: '#D9381E',
    artboardSubtitle: 'System 03 // Video Motion & Native Feeds'
  },
  {
    id: 'campaign-04',
    label: 'Full-Funnel DTC Growth Architecture',
    platformStack: 'Meta + Google + Next-Gen AI + CRO',
    realWorldScope: 'Direct-to-Consumer Scale Brand',
    deliverables: ['Blended MER Attribution Model', 'Sub-second Headless Landers', 'Cross-Channel Retargeting'],
    note: 'Synchronized cross-platform narrative connecting top-of-funnel video with search intent',
    accentColor: '#1E3A8A',
    artboardSubtitle: 'System 04 // Unified Attribution Architecture'
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    step: '01',
    title: 'AUDIT & DIAGNOSTICS',
    tagline: 'Pixel, CAPI & Historical Analysis',
    description: 'We audit your Meta Pixel, Google tag configurations, tracking data hygiene, historical ad spend efficiency, and creative fatigue curves to identify hidden leaks.',
    deliverable: 'Tracking Audit & Account Restructure Blueprint',
    sketchNote: 'clean data before any capital deployment'
  },
  {
    step: '02',
    title: 'CAMPAIGN ARCHITECTURE',
    tagline: 'Platform Setup & Bidding Strategy',
    description: 'We structure simplified, scalable account frameworks across Meta Ads Manager, Google Ads, and ChatGPT ads with clear budget flighting and target ROAS/CPA thresholds.',
    deliverable: 'Omnichannel Media Plan & Bidding Matrix',
    sketchNote: 'consolidate ad sets for algorithmic power'
  },
  {
    step: '03',
    title: 'CREATIVE SPRINTING',
    tagline: 'Hook Generation & Motion Production',
    description: 'Our creative team produces high-impact video concepts, static layouts, and prompt-targeted copy designed for platform-native consumption patterns.',
    deliverable: 'Sprint 1 Asset Vault (15+ Hook Variations)',
    sketchNote: '0.8s thumb-stopping angle testing'
  },
  {
    step: '04',
    title: 'DEPLOYMENT & FLIGHTING',
    tagline: 'Controlled Scale Protocols',
    description: 'Campaigns go live with structured testing methodology. We monitor early click-through rates, hold rates, and cost-per-add-to-cart in real time.',
    deliverable: 'Live Campaigns & Daily Spend Guardrails',
    sketchNote: 'cut losers fast, feed winners budget'
  },
  {
    step: '05',
    title: 'COMPOUND & ATTRIBUTE',
    tagline: 'Weekly Iteration & Blended MER',
    description: 'We evaluate multi-touch attribution, cut decaying ads, double down on winning creative concepts, and scale daily budgets while safeguarding contribution margin.',
    deliverable: 'Weekly Performance Report & Iteration Sprint Plan',
    sketchNote: 'relentless weekly creative rotation'
  }
];

export const STRATEGY_BOARD_NOTES = [
  {
    id: 'note-1',
    title: 'META ADVANTAGE+ SHOPPING (ASC)',
    content: 'Give algorithm broad targeting; let creative do the heavy lifting. Test 3 distinct angles per ad set: Problem-Agitation, Social Proof, and Direct Demo.',
    rotation: -2,
    bgType: 'yellow',
    platform: 'Meta Ads'
  },
  {
    id: 'note-2',
    title: 'GOOGLE PMAX & SEARCH HYBRID',
    content: 'Protect brand terms with exact match. Direct PMax toward high-converting audience signals. Feed asset groups with high-resolution vertical video.',
    rotation: 2,
    bgType: 'blue',
    platform: 'Google Ads'
  },
  {
    id: 'note-3',
    title: 'CHATGPT & AI CONVERSATIONAL INTENT',
    content: 'Target commercial intent queries where users seek recommendations. Frame ad copy as the authoritative solution in contextual conversational flows.',
    rotation: -1,
    bgType: 'paper',
    platform: 'ChatGPT / AI Ads'
  }
];
