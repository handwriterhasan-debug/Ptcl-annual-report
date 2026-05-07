export const SUMMARY_DATA = {
  title: "PTCL Group: 2025 Integrated Digital Infrastructure Report",
  tldr: "PTCL is evolving from a traditional telecom operator to Pakistan's dominant integrated digital infrastructure and enterprise platform. With the strategic acquisition of Telenor Pakistan, massive expansion of AI-ready infrastructure, and double-digit fiber growth, PTCL is setting the foundation for 'Digital Pakistan'.",
  topFindings: [
    "Telenor Pakistan acquisition expands scale and secures long-term market dominance.",
    "Flash Fiber grew 50% YoY, capturing 33% of the FTTH market.",
    "Enterprise modernization accelerating with AI-ready Tier III Data Centers.",
    "Operating Profit surged 216%, though net losses persist due to heavy investment and finance costs."
  ],
  risks: [
    { name: "Debt Pressure", severity: "High", impact: "Heavy reliance on financing for capex leading to net losses despite operational growth." },
    { name: "Integration Risks", severity: "High", impact: "Merging Telenor Pakistan requires seamless execution to realize synergies." },
    { name: "Cybersecurity Threats", severity: "Medium", impact: "AI growth and enterprise expansion exponentially increase the attack surface." },
    { name: "Taxation & Regulation", severity: "Medium", impact: "High taxation suppressing margin expansion across the sector." }
  ],
  verdict: "PTCL is successfully transitioning into an unassailable digital infrastructure conglomerate. While heavy capital expenditures and integration dynamics present short-term earnings pressure, the Telenor acquisition and fiber/AI deployments build a permanent structural moat for long-term growth.",
  confidenceScore: 88,
};

export const KPI_DATA = [
  { label: "Group Revenue", value: 251.7, unit: "B", trend: "+ 15%", isPositive: true },
  { label: "Operating Profit Grw", value: 216, unit: "%", trend: "Explosive", isPositive: true },
  { label: "FTTH Market Share", value: 33, unit: "%", trend: "+ 50% YoY", isPositive: true },
  { label: "Flash Fiber Speed", value: 35, unit: "Mbps", trend: "Ookla Verified", isPositive: true },
];

export const FINANCIAL_SERIES = [
  { year: "2021", group: 138, ptcl: 77, ufone: 52 },
  { year: "2022", group: 153, ptcl: 83, ufone: 60 },
  { year: "2023", group: 190, ptcl: 95, ufone: 80 },
  { year: "2024", group: 220, ptcl: 105, ufone: 95 },
  { year: "2025", group: 251.7, ptcl: 120.1, ufone: 108 },
];

export const UFONE_PROFIT_GROWTH = [
  { category: "Revenue", value: 14 },
  { category: "Op Profit", value: 283 },
  { category: "Data Usage", value: 25 },
];

export const CASH_FLOW_DATA = [
  { name: "Operating Cash Flow", value: 35 },
  { name: "Investment Outflow", value: -157 },
  { name: "Financing Inflow", value: 110 }
];

export const HIDDEN_SIGNALS = [
  "Growth vs. Profitability Contradiction: 216% operating profit growth wiped out by extreme financing and pension liabilities at the net income level.",
  "Aggressive Network Overhaul: 800Gbps Backbone upgrade explicitly targets future 5G backhaul loads.",
  "AI Cloud Pivot: Internal transition from telco workflows to predictive AI models sets stage for enterprise AI-as-a-Service.",
  "Solar Offloading: 2MW initial deployment is a pilot for massive energy cost reduction across cell sites."
];
