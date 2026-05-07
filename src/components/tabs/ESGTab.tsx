import { motion } from 'framer-motion';
import { ESG_DATA } from '../../data/tabsData';
import { TreeDeciduous, Users, Sun, Globe2 } from 'lucide-react';

const ICONS = [Globe2, Sun, Users, TreeDeciduous];

export function ESGTab() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8 pb-12 animate-in fade-in duration-1000">
      <div className="mb-4 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl font-display font-semibold text-white tracking-tight leading-tight">ESG & Digital PK</h1>
        <p className="text-white/50 text-lg mt-3 max-w-2xl font-light mx-auto sm:mx-0">Executing on sustainable nation-building and digital inclusion.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ESG_DATA.metrics.map((metric, idx) => {
          const Icon = ICONS[idx];
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="glass-card rounded-[40px] p-8 sm:p-10 flex gap-6 items-start group hover:bg-white/[0.02] transition-colors"
            >
              <div className="p-4 bg-white/5 rounded-2xl shrink-0 group-hover:bg-[#B6FF3B]/10 group-hover:text-[#B6FF3B] transition-colors">
                <Icon className="w-6 h-6 text-white/60" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{metric.label}</h3>
                <p className="text-white/60 leading-relaxed font-light text-sm">{metric.text}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="glass-card rounded-[40px] p-8 sm:p-12 relative overflow-hidden mt-4"
      >
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#B6FF3B]/10 to-transparent pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl">
          <span className="text-[10px] uppercase font-medium tracking-widest text-[#B6FF3B] mb-4 block">Sustainable Impact</span>
          <h2 className="text-3xl font-semibold text-white mb-6">Building for the next decade.</h2>
          <p className="text-lg text-white/70 font-light leading-relaxed">
            By shifting towards solar-powered switching nodes and aggressively laying deep-rural fiber, PTCL is not only optimizing operational costs, but actively fulfilling the Sustainable Development Goals (SDGs) for Pakistan's digital future.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
