import { motion } from 'framer-motion';
import { KPI_DATA } from '../data/dashboardData';

export function KPICards() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {KPI_DATA.map((kpi, idx) => (
        <motion.div 
          key={kpi.label}
          variants={item}
          className="glass-card glass-card-hover rounded-[32px] p-6 relative overflow-hidden flex flex-col justify-between group transition-all duration-500 min-h-[180px]"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#B6FF3B]/5 blur-[40px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#B6FF3B]/10 transition-colors duration-700 pointer-events-none" />

          <div className="relative z-10 flex flex-col h-full">
            <h3 className="text-[13px] font-medium text-white/60 mb-2">{kpi.label}</h3>
            
            <div className="mt-auto">
              <div className="flex items-baseline gap-1">
                {kpi.unit === "$" && <span className="text-2xl font-light text-white/50">{kpi.unit}</span>}
                {kpi.unit === "PKR" && <span className="text-xl font-light text-white/50 mr-1">{kpi.unit}</span>}
                <span className="font-display text-5xl font-semibold tracking-tight text-white group-hover:text-[#B6FF3B] transition-colors duration-500">
                  {kpi.value}
                </span>
                {kpi.unit !== "$" && kpi.unit !== "PKR" && <span className="text-xl font-light text-white/50 ml-1">{kpi.unit}</span>}
              </div>
              
              <div className="flex items-center gap-2 mt-4">
                <span className={`px-2 py-1 rounded-full text-[11px] font-medium ${kpi.isPositive ? 'bg-[#B6FF3B]/10 text-[#B6FF3B]' : 'bg-red-500/10 text-red-500'}`}>
                  {kpi.trend} {kpi.isPositive ? '↑' : '↓'}
                </span>
                <span className="text-[11px] text-white/40">vs prior period</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
