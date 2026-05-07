import { motion } from 'framer-motion';
import { ENTERPRISE_AI_DATA } from '../../data/tabsData';
import { Cpu, Server, ShieldCheck, Database, Zap } from 'lucide-react';

const ICONS = [Cpu, Server, ShieldCheck, Zap, Database];

export function EnterpriseAITab() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8 pb-12 animate-in fade-in duration-1000">
      <div className="mb-4 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl font-display font-semibold text-white tracking-tight leading-tight">Enterprise & AI</h1>
        <p className="text-white/50 text-lg mt-3 max-w-2xl font-light mx-auto sm:mx-0">Transforming from telco workflows to predictive AI and cloud-native architecture.</p>
      </div>

      <div className="glass-card rounded-[40px] p-8 sm:p-12 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0B3D2E] blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#B6FF3B]/5 blur-[80px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-8 backdrop-blur-md">
            <Cpu className="w-4 h-4 text-[#B6FF3B]" />
            <span className="text-[11px] font-medium tracking-[0.2em] text-white/90 uppercase">Digital Nervous System</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6 leading-snug">
            {ENTERPRISE_AI_DATA.summary}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ENTERPRISE_AI_DATA.initiatives.map((init, idx) => {
          const IconObj = ICONS[idx % ICONS.length];
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (idx * 0.1), duration: 0.8 }}
              className="glass-card rounded-[32px] p-8 group hover:bg-white/[0.03] transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#B6FF3B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="p-4 bg-white/5 rounded-2xl inline-block mb-6 relative z-10 border border-white/5 group-hover:border-[#B6FF3B]/20 transition-colors">
                <IconObj className="w-6 h-6 text-white/80 group-hover:text-[#B6FF3B] transition-colors" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3 tracking-tight relative z-10">{init.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed font-light relative z-10">{init.desc}</p>
            </motion.div>
          );
        })}

        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.8, duration: 0.8 }}
           className="glass-card rounded-[32px] p-8 flex flex-col items-center justify-center text-center border-dashed border-white/20 bg-transparent group"
        >
          <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <span className="text-xl text-white/40">+</span>
          </div>
          <h3 className="text-white/60 font-medium">Future Modules</h3>
          <p className="text-white/30 text-xs mt-2 font-light">Continuous ML integration</p>
        </motion.div>
      </div>
    </div>
  );
}
