import { motion } from 'framer-motion';
import { NETWORK_5G_DATA } from '../../data/tabsData';
import { Network, Radio, Wifi, Globe } from 'lucide-react';

const topology = [
  { text: "Optical Backbone", status: "Active" },
  { text: "Submarine Landing", status: "Active" },
  { text: "Tier III Edge Nodes", status: "Scaling" },
  { text: "5G Core Elements", status: "Stating" }
];

export function Network5GTab() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8 pb-12 animate-in fade-in duration-1000">
      <div className="mb-4">
        <h1 className="text-4xl sm:text-5xl font-display font-semibold text-white tracking-tight leading-tight">Network & 5G Readiness</h1>
        <p className="text-white/50 text-lg mt-3 max-w-2xl font-light">Building the capacity and resilience required for next-generation spectrums.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-[40px] p-8 sm:p-12 relative overflow-hidden h-[400px] flex flex-col justify-end"
        >
          {/* Abstract map/network background */}
          <div className="absolute inset-x-0 top-10 flex justify-center opacity-10">
            <Network className="w-96 h-96 text-[#B6FF3B]" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505] to-transparent" />
          
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold text-white mb-4">The 5G Prerequisite</h2>
            <p className="text-base text-white/70 leading-relaxed font-light">{NETWORK_5G_DATA.readiness}</p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
            {NETWORK_5G_DATA.stats.slice(0, 2).map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (idx * 0.1), duration: 0.8 }}
                className="glass-card rounded-[32px] p-6 text-center group hover:bg-white/[0.03] transition-colors"
              >
                <div className="flex items-center justify-center gap-1 mb-2">
                  <span className="font-display text-4xl font-semibold text-white group-hover:text-[#B6FF3B] transition-colors">{stat.value}</span>
                  <span className="text-sm text-white/40">{stat.unit}</span>
                </div>
                <span className="block text-xs uppercase tracking-widest text-[#B6FF3B] mb-1">{stat.label}</span>
                <span className="text-[10px] text-white/40">{stat.desc}</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4, duration: 0.8 }}
             className="glass-card rounded-[32px] p-8 flex-1"
          >
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-white/50 mb-6">Topology Status</h3>
            <div className="space-y-4">
              {topology.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-white/40" />
                    <span className="text-sm text-white/80 font-medium">{item.text}</span>
                  </div>
                  <span className={`text-[10px] px-2 py-1 rounded-full uppercase tracking-widest font-semibold ${
                    item.status === 'Active' ? 'bg-[#B6FF3B]/10 text-[#B6FF3B]' : 'bg-white/10 text-white/50'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
