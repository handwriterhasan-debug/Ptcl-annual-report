import { motion } from 'framer-motion';
import { SUMMARY_DATA, HIDDEN_SIGNALS } from '../data/dashboardData';
import { AlertCircle, Hexagon } from 'lucide-react';

export function RisksAndSignals() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {/* Risk Matrix Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card rounded-[32px] p-6 sm:p-8 flex flex-col transition-all hover:bg-white/[0.02]"
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="p-2 bg-white/5 rounded-full">
            <AlertCircle className="w-5 h-5 text-white/70" />
          </div>
          <h3 className="text-lg font-semibold text-white tracking-tight">Risk & Volatility Analysis</h3>
        </div>
        
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left font-sans text-sm">
            <thead>
              <tr className="border-b border-white/5 text-white/40 text-[11px] font-medium tracking-wide">
                <th className="pb-3 px-1 font-normal">Risk Factor</th>
                <th className="pb-3 px-1 font-normal">Severity</th>
                <th className="pb-3 px-1 font-normal">Business Impact</th>
              </tr>
            </thead>
            <tbody>
              {SUMMARY_DATA.risks.map((risk, idx) => (
                <tr key={idx} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors group">
                  <td className="py-4 px-1 text-white/90 font-medium group-hover:text-white transition-colors">{risk.name}</td>
                  <td className="py-4 px-1">
                    <span className={`inline-flex items-center px-2 py-1 rounded-md text-[10px] font-semibold tracking-wide ${risk.severity === 'High' ? 'bg-red-500/10 text-red-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
                      {risk.severity}
                    </span>
                  </td>
                  <td className="py-4 px-1 text-white/50 leading-relaxed max-w-xs">{risk.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Hidden Signals Terminal */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="glass-card rounded-[32px] p-6 sm:p-8 flex flex-col transition-all hover:bg-white/[0.02] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 blur-[40px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="mb-6 flex items-center justify-between z-10">
           <div className="flex items-center gap-3">
             <div className="p-2 bg-white/5 rounded-full">
                <Hexagon className="w-5 h-5 text-white/70" />
             </div>
             <h3 className="text-lg font-semibold text-white tracking-tight">Market Intelligence</h3>
           </div>
           <span className="text-[11px] px-3 py-1.5 rounded-full bg-white/10 font-medium text-white/80 backdrop-blur-md">LIVE FEED</span>
        </div>

        <div className="space-y-5 flex-1 overflow-auto z-10 pr-2">
          {HIDDEN_SIGNALS.map((signal, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + (idx * 0.1) }}
              className="flex gap-4 group"
            >
              <div className="flex flex-col items-center mt-1.5">
                <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-[#B6FF3B] shadow-[0_0_8px_rgba(182,255,59,0.5)]' : 'bg-white/20'}`} />
                {idx !== HIDDEN_SIGNALS.length - 1 && <div className="w-px h-full bg-white/10 mt-2 min-h-[20px]" />}
              </div>
              <div className="pb-1">
                <p className="text-[13px] text-white/70 leading-relaxed font-light group-hover:text-white/90 transition-colors">{signal}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
