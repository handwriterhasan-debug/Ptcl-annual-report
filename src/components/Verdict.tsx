import { motion } from 'framer-motion';
import { SUMMARY_DATA } from '../data/dashboardData';

export function Verdict() {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.98, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card relative overflow-hidden rounded-[40px] p-8 sm:p-12 mt-6 mb-12"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#B6FF3B]/10 blur-[80px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#0B3D2E]/40 blur-[60px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full flex items-center gap-2 backdrop-blur-sm">
             <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF3B] shadow-[0_0_8px_rgba(182,255,59,0.5)]" />
             <h3 className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/90">Strategic Verdict</h3>
          </div>
        </div>
        
        <p className="text-xl sm:text-2xl text-white/95 leading-relaxed mb-10 font-light tracking-tight">
          {SUMMARY_DATA.verdict}
        </p>

        <div className="flex flex-wrap items-center gap-10 border-t border-white/5 pt-8">
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-2 font-medium">Confidence Score</span>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-5xl font-semibold tracking-tight text-white">{SUMMARY_DATA.confidenceScore}</span>
              <span className="text-xl font-light text-white/30">/ 100</span>
            </div>
          </div>
          <div className="hidden sm:block h-12 w-px bg-white/10" />
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-2 font-medium">Recommendation</span>
            <span className="text-lg font-medium text-[#B6FF3B] flex items-center gap-2">
              STRONG BUY 
              <span className="bg-[#B6FF3B]/20 p-1 rounded-full"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg></span>
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
