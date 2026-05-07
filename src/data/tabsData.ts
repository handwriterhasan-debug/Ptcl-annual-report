export const FINANCIAL_TAB_DATA = {
  kpis: [
    { label: "Group Revenue", value: "251.7", unit: "PKR B", trend: "+15%" },
    { label: "PTCL Standalone Rev", value: "120.1", unit: "PKR B", trend: "Growth" },
    { label: "Ufone Rev Growth", value: "14", unit: "% YoY", trend: "Strong" },
    { label: "Op Profit Growth", value: "216", unit: "% YoY", trend: "Explosive" },
  ],
  contradiction: {
    title: "The Growth vs. Profitability Paradox",
    description: "While operating profit surged by an impressive 216%, net losses persisted. This contradiction is driven by unprecedented macroeconomic pressures, including extreme finance costs, provisioning, and inherited pension liabilities. The base operational model is highly profitable, but capital structure and external factors mask the underlying performance.",
    points: [
      "Record Revenue: PKR 251.7B driven by multi-tier growth.",
      "High OPEX/Finance: Staggering interest rates erasing op-profit gains.",
      "Capex Expansion: Substantial investment layout for Telenor integration.",
      "Pension Obligations: Legacy structural costs."
    ]
  },
  cashFlow: [
    { metric: "Operating Cash Flow", value: "35B", type: "positive" },
    { metric: "Investment Outflow", value: "-157B", type: "negative" }
  ]
};

export const FLASH_FIBER_DATA = {
  kpis: [
    { label: "YoY Growth", value: "50", unit: "%", trend: "Market Leading" },
    { label: "FTTH Market Share", value: "33", unit: "%", trend: "Dominant" },
    { label: "Max Speed", value: "35", unit: "Mbps", trend: "Verified" },
    { label: "Expansion", value: "Nationwide", unit: "", trend: "Ongoing" },
  ],
  awards: [
    "Ookla Verified Fastest Network",
    "Highest Customer Adoption Rate 2025",
    "Premium Infrastructure Expansion Tier"
  ],
  description: "Flash Fiber is PTCL's most aggressive growth engine, capturing 33% of the FTTH market and expanding at 50% YoY. By deploying blazing-fast gigabit-capable GPON networks, PTCL is effectively future-proofing Pakistan's residential and enterprise broadband landscape."
};

export const ENTERPRISE_AI_DATA = {
  initiatives: [
    { title: "Predictive AI Systems", desc: "AI-driven customer support and network fault prediction." },
    { title: "Tier III Data Centers", desc: "AI-ready secure facilities scaling cloud infrastructure." },
    { title: "Cybersecurity Shield", desc: "Advanced threat detection protecting enterprise and public sector data." },
    { title: "Fintech Connectivity", desc: "Ultra-low latency backbone for banking and financial platforms." },
    { title: "Recommendation Engines", desc: "Machine learning deployed for targeted upsells and retention." }
  ],
  summary: "PTCL has moved beyond pure connectivity, establishing an enterprise architecture that acts as the digital nervous system for the banking sector, government endpoints, and next-generation cloud services."
};

export const NETWORK_5G_DATA = {
  stats: [
    { label: "Optical Transport", value: "800", unit: "Gbps", desc: "Upgraded backbone capacity" },
    { label: "Solar Deployment", value: "2", unit: "MW", desc: "Eco-friendly site conversions" },
    { label: "Submarine Cables", value: "Multi", unit: "Tbps", desc: "Global redundant connectivity" },
    { label: "Rural Access", value: "Expanded", unit: "", desc: "Connecting remote communities" },
  ],
  readiness: "The massive 800Gbps optical upgrade and dense fiber footprint are not just for broadband—they are the prerequisite infrastructure for an impending 5G rollout. By saturating the backhaul with deep fiber, PTCL ensures its cell sites can handle the extreme data density of upcoming 5G protocols."
};

export const ESG_DATA = {
  metrics: [
    { label: "Digital Inclusion", text: "Connecting the unconnected in deep rural sectors." },
    { label: "Sustainability", text: "2MW Solar deployment at major switching nodes to cut grid reliance." },
    { label: "Community", text: "Education tech and women empowerment initiatives active nationwide." },
    { label: "Emissions", text: "Implementing strategic energy offloading to reduce carbon footprint." }
  ]
};

export const RISK_CONTEXT_DATA = {
  risks: [
    { risk: "Debt Pressure", level: "Critical", text: "Aggressive capex and acquisitions rely heavily on debt financing in a high-interest environment." },
    { risk: "Integration Risk", level: "High", text: "The Telenor Pakistan acquisition demands flawless execution to capture anticipated synergies." },
    { risk: "Cybersecurity", level: "High", text: "As the AI and enterprise cloud footprint grows, the threat surface expands exponentially." },
    { risk: "Taxation", level: "Medium", text: "Regulated telecom sector bears disproportionate taxation, suppressing cash realization." },
    { risk: "Energy Costs", level: "Medium", text: "Grid unreliability and soaring energy tariffs pressure operating margins." }
  ]
};
