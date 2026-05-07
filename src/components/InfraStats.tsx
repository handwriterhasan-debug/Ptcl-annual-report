import { motion } from 'framer-motion';
import { Server, Zap, Radio, Globe2, ArrowUpRight, ArrowDownRight, Database, Settings } from 'lucide-react';
import { CASH_FLOW_DATA } from '../data/dashboardData';

const NETWORK_STATS = [
  { label: "Flash Fiber Growth", value: "50%", icon: Zap, color: "text-[#B6FF3B]", bg: "bg-[#B6FF3B]/10" },
  { label: "Solar Deployment", value: "2 MW", icon: Globe2, color: "text-[#B6FF3B]", bg: "bg-[#B6FF3B]/10" },
  { label: "Backbone Upgrade", value: "800 Gbps", icon: Radio, color: "text-[#B6FF3B]", bg: "bg-[#B6FF3B]/10" },
  { label: "Active DCI Nodes", value: "Tier III", icon: Server, color: "text-[#B6FF3B]", bg: "bg-[#B6FF3B]/10" },
];

export function InfraStats() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      {/* Cash Flow Block */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card lg:col-span-1 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between transition-all hover:bg-white/[0.02]"
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="p-2 bg-white/5 rounded-full">
            <Database className="w-5 h-5 text-white/70" />
          </div>
          <h3 className="text-lg font-semibold text-white tracking-tight">Capital Allocation</h3>
        </div>
        
        <div className="space-y-4">
          {CASH_FLOW_DATA.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-xs font-medium text-white/50 mb-1.5">{item.name}</span>
              <div className="flex justify-between items-center bg-white/[0.03] px-4 py-3 rounded-2xl border border-white/[0.05] shadow-inner">
                <span className={`text-2xl font-light tracking-tight ${item.value > 0 ? 'text-[#B6FF3B]' : 'text-white/80'}`}>
                  {item.value > 0 ? '+' : ''}{item.value} <span className="text-base font-light text-white/40">B PKR</span>
                </span>
                {item.value > 0 ? <ArrowUpRight className="w-5 h-5 text-[#B6FF3B]" /> : <ArrowDownRight className="w-5 h-5 text-white/40" />}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Infrastructure KPI Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="glass-card lg:col-span-2 rounded-[32px] p-6 sm:p-8 flex flex-col transition-all hover:bg-white/[0.02]"
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/5 rounded-full">
              <Settings className="w-5 h-5 text-white/70" />
            </div>
            <h3 className="text-lg font-semibold text-white tracking-tight">Core Capabilities</h3>
          </div>
          <span className="text-[11px] px-3 py-1.5 rounded-full bg-white/10 font-medium text-white/80 shadow-sm backdrop-blur-md">PTCL + TELENOR SYNERGY</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 flex-1">
          {NETWORK_STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-5 flex flex-col justify-center relative overflow-hidden group hover:bg-white/[0.04] transition-all">
                <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity ${stat.color}`}>
                  <Icon className="w-16 h-16" strokeWidth={1} />
                </div>
                <div className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center mb-4 ${stat.bg}`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <span className="text-sm font-medium text-white/60 mb-1 z-10">{stat.label}</span>
                <span className="text-3xl font-light tracking-tight text-white z-10">{stat.value}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
