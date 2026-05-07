import { motion } from 'framer-motion';
import { RISK_CONTEXT_DATA } from '../../data/tabsData';
import { HIDDEN_SIGNALS } from '../../data/dashboardData';
import { ShieldAlert, AlertCircle, Activity } from 'lucide-react';

export function RiskContextTab() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8 pb-12 animate-in fade-in duration-1000">
      <div className="mb-4">
        <h1 className="text-4xl sm:text-5xl font-display font-semibold text-white tracking-tight leading-tight">Risk Context</h1>
        <p className="text-white/50 text-lg mt-3 max-w-2xl font-light">Analyzing systemic vulnerabilities and macroeconomic friction points.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          {RISK_CONTEXT_DATA.risks.map((risk, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="glass-card rounded-[32px] p-6 sm:p-8 flex items-start gap-5 relative overflow-hidden group"
            >
              <div className={`absolute top-0 left-0 w-1 h-full ${risk.level === 'Critical' ? 'bg-red-500' : risk.level === 'High' ? 'bg-orange-500' : 'bg-yellow-500'}`} />
              
              <div className="p-3 bg-white/5 rounded-2xl shrink-0 mt-1">
                <AlertCircle className="w-5 h-5 text-white/50" />
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-medium text-white">{risk.risk}</h3>
                  <span className={`text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full ${
                    risk.level === 'Critical' ? 'bg-red-500/10 text-red-500' : 
                    risk.level === 'High' ? 'bg-orange-500/10 text-orange-500' : 
                    'bg-yellow-500/10 text-yellow-500'
                  }`}>
                    {risk.level}
                  </span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed font-light">{risk.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="glass-card rounded-[40px] p-8 sm:p-10 flex flex-col relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
             <Activity className="w-64 h-64" />
           </div>
           
           <div className="mb-8 flex items-center justify-between z-10">
              <div>
                <h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Hidden Signals</h3>
                <p className="text-white/50 text-sm font-light">Subsurface trends requiring executive attention.</p>
              </div>
              <ShieldAlert className="w-8 h-8 text-white/20" />
           </div>

           <div className="space-y-6 flex-1 z-10">
             {HIDDEN_SIGNALS.map((signal, idx) => (
               <div key={idx} className="flex gap-4">
                 <div className="flex flex-col items-center mt-1.5">
                   <div className="w-2 h-2 rounded-full bg-[#B6FF3B]" />
                   {idx !== HIDDEN_SIGNALS.length - 1 && <div className="w-px h-full bg-white/10 mt-2 min-h-[40px]" />}
                 </div>
                 <div className="pb-4">
                   <p className="text-sm text-white/70 leading-relaxed font-light">{signal}</p>
                 </div>
               </div>
             ))}
           </div>
        </motion.div>
      </div>
    </div>
  );
}
