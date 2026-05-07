import { motion } from 'framer-motion';
import { SUMMARY_DATA } from '../data/dashboardData';

export function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.98, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card rounded-[24px] md:rounded-[40px] p-5 sm:p-8 md:p-12 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#B6FF3B]/10 blur-[60px] md:blur-[80px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" style={{ willChange: 'transform' }} />
      <div className="absolute bottom-0 left-0 w-[150px] md:w-[300px] h-[150px] md:h-[300px] bg-[#0B3D2E]/40 blur-[40px] md:blur-[60px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" style={{ willChange: 'transform' }} />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full flex items-center gap-2 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF3B] animate-pulse" />
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#B6FF3B] font-medium">Q4 2025 UPDATE</span>
          </div>
        </div>
        
        <h1 className="font-display font-bold text-[32px] sm:text-[48px] md:text-[72px] tracking-[-0.02em] text-white leading-[1.1] md:leading-[1.1] mb-4 md:mb-6 max-w-5xl drop-shadow-sm">
          {SUMMARY_DATA.title}
        </h1>
        
        <div className="max-w-3xl mb-8 md:mb-12">
          <p className="text-sm sm:text-base md:text-xl text-white/70 leading-relaxed font-light">
            {SUMMARY_DATA.tldr}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl">
          {SUMMARY_DATA.topFindings.slice(0, 2).map((finding, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (idx * 0.1), duration: 0.8 }}
              className="p-4 md:p-6 bg-white/5 border border-white/5 rounded-2xl md:rounded-3xl backdrop-blur-sm"
            >
              <div className="text-[10px] md:text-[11px] uppercase tracking-widest text-[#B6FF3B] mb-2 md:mb-3 font-medium opacity-80">Key Insight {idx + 1}</div>
              <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed font-medium">{finding}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
