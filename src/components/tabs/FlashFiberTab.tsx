import { motion } from 'framer-motion';
import { FLASH_FIBER_DATA } from '../../data/tabsData';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, BarChart, Bar, Cell } from 'recharts';
import { Zap, Award, CheckCircle2 } from 'lucide-react';

const fiberGrowth = [
  { year: '2022', subs: 1.2 },
  { year: '2023', subs: 2.1 },
  { year: '2024', subs: 3.5 },
  { year: '2025', subs: 5.2 },
];

const marketShare = [
  { name: 'PTCL Flash Fiber', value: 33, color: '#B6FF3B' },
  { name: 'Competitor A', value: 25, color: 'rgba(255,255,255,0.2)' },
  { name: 'Competitor B', value: 20, color: 'rgba(255,255,255,0.15)' },
  { name: 'Others', value: 22, color: 'rgba(255,255,255,0.1)' },
];

export function FlashFiberTab() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8 pb-12 animate-in fade-in duration-1000">
      <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-end justify-between mb-4">
        <div>
          <h1 className="text-4xl sm:text-5xl font-display font-semibold text-white tracking-tight leading-tight">Flash Fiber Expansion</h1>
          <p className="text-white/50 text-lg mt-3 max-w-2xl font-light">The dominant force in residential and enterprise gigabit connectivity.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card rounded-[40px] p-8 sm:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B6FF3B]/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col h-full">
            <h2 className="text-2xl font-semibold text-white mb-6">Aggressive FTTH Growth</h2>
            <p className="text-base text-white/70 leading-relaxed font-light max-w-xl mb-12">{FLASH_FIBER_DATA.description}</p>
            
            <div className="flex-1 mt-auto min-h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={fiberGrowth}>
                  <defs>
                    <linearGradient id="fiberGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#B6FF3B" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#B6FF3B" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="year" stroke="#ffffff40" tickLine={false} axisLine={false} dy={10} />
                  <YAxis stroke="#ffffff40" tickLine={false} axisLine={false} dx={-10} tickFormatter={v => `${v}M`} />
                  <Tooltip cursor={{ stroke: 'rgba(255,255,255,0.1)' }} contentStyle={{ backgroundColor: 'rgba(18,28,20,0.8)', borderColor: 'rgba(182,255,59,0.1)', borderRadius: '16px', backdropFilter: 'blur(10px)' }} />
                  <Area type="monotone" dataKey="subs" stroke="#B6FF3B" strokeWidth={4} fill="url(#fiberGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="glass-card rounded-[40px] p-8 flex-1">
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-white/50 mb-8">FTTH Market Share</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={marketShare} layout="vertical" margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" stroke="#fff" tickLine={false} axisLine={false} fontSize={12} opacity={0.6} dx={-10} />
                  <Tooltip cursor={{fill: 'rgba(255,255,255,0.02)'}} contentStyle={{ backgroundColor: 'rgba(18,28,20,0.8)', borderColor: 'rgba(255,255,255,0.05)', borderRadius: '12px' }} />
                  <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={24}>
                    {marketShare.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-card rounded-[40px] p-8 bg-white/[0.02]">
             <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-[#B6FF3B] mb-6">Achievements</h3>
             <ul className="space-y-4">
               {FLASH_FIBER_DATA.awards.map((award, idx) => (
                 <li key={idx} className="flex gap-3 items-center">
                   <div className="glass-card p-1.5 rounded-full">
                     <Award className="w-4 h-4 text-white/70" />
                   </div>
                   <span className="text-sm text-white/80 font-medium">{award}</span>
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
        {FLASH_FIBER_DATA.kpis.map((kpi, idx) => (
          <div key={idx} className="glass-card rounded-[32px] p-6 text-center group cursor-default hover:bg-white/[0.03] transition-colors">
            <span className="block text-xs uppercase tracking-widest text-white/50 mb-3">{kpi.label}</span>
            <div className="flex items-center justify-center gap-1 mb-2">
              <span className="font-display text-4xl font-semibold text-white group-hover:text-[#B6FF3B] transition-colors">{kpi.value}</span>
              <span className="text-lg text-white/40">{kpi.unit}</span>
            </div>
            <span className="text-[10px] uppercase font-medium tracking-widest text-[#B6FF3B] opacity-80">{kpi.trend}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
