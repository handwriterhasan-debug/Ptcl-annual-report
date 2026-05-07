import { motion } from 'framer-motion';
import { FINANCIAL_TAB_DATA } from '../../data/tabsData';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, AreaChart, Area, CartesianGrid } from 'recharts';
import { TrendingUp, AlertTriangle, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const cashFlowData = [
  { name: 'Q1', op: 8, inv: -35 },
  { name: 'Q2', op: 15, inv: -40 },
  { name: 'Q3', op: 22, inv: -45 },
  { name: 'Q4', op: 35, inv: -37 },
];

export function FinancialTab() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8 pb-12 animate-in fade-in duration-1000">
      <div className="mb-4">
        <h1 className="text-4xl sm:text-5xl font-display font-semibold text-white tracking-tight leading-tight">Financial Performance</h1>
        <p className="text-white/50 text-lg mt-3 max-w-2xl font-light">Analyzing top-line acceleration, capex implications, and the structural profitability paradox.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FINANCIAL_TAB_DATA.kpis.map((kpi, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            className="glass-card glass-card-hover rounded-[32px] p-6 relative flex flex-col justify-between group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[40px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:bg-[#B6FF3B]/10 transition-colors duration-700" />
            <h3 className="text-sm font-medium text-white/60 mb-8">{kpi.label}</h3>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-white group-hover:text-[#B6FF3B] transition-colors">{kpi.value}</span>
                <span className="text-lg font-light text-white/40">{kpi.unit}</span>
              </div>
              <p className="text-[#B6FF3B] text-xs font-medium uppercase tracking-wider mt-3 bg-[#B6FF3B]/10 inline-flex px-2 py-1 rounded-full">{kpi.trend}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card rounded-[40px] p-8 sm:p-10 flex flex-col">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Operating Cash Flow vs Capex</h2>
              <p className="text-white/50 text-sm font-light">Quarterly distribution of liquidity and major investments.</p>
            </div>
          </div>
          <div className="flex-1 min-h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={cashFlowData}>
                 <defs>
                   <linearGradient id="colorOp" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#B6FF3B" stopOpacity={0.3}/>
                     <stop offset="95%" stopColor="#B6FF3B" stopOpacity={0}/>
                   </linearGradient>
                   <linearGradient id="colorInv" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2}/>
                     <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                 <XAxis dataKey="name" stroke="#ffffff40" tickLine={false} axisLine={false} />
                 <YAxis stroke="#ffffff40" tickLine={false} axisLine={false} />
                 <Tooltip contentStyle={{ backgroundColor: 'rgba(18,28,20,0.8)', borderColor: 'rgba(182,255,59,0.1)', borderRadius: '16px', backdropFilter: 'blur(10px)' }} itemStyle={{ color: '#fff' }} />
                 <Area type="monotone" dataKey="op" name="Operating Cash Flow" stroke="#B6FF3B" strokeWidth={3} fill="url(#colorOp)" />
                 <Area type="monotone" dataKey="inv" name="Investment Outflow" stroke="#ef4444" strokeWidth={2} fill="url(#colorInv)" />
               </AreaChart>
             </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card rounded-[40px] p-8 sm:p-10 flex flex-col relative overflow-hidden group">
          <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
            <AlertTriangle className="w-64 h-64 text-yellow-500" />
          </div>
          <div className="relative z-10">
            <div className="p-3 bg-white/5 rounded-full inline-block mb-6">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">{FINANCIAL_TAB_DATA.contradiction.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-6 font-light">{FINANCIAL_TAB_DATA.contradiction.description}</p>
            
            <ul className="space-y-4">
              {FINANCIAL_TAB_DATA.contradiction.points.map((point, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                  <span className="text-sm text-white/80 font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
