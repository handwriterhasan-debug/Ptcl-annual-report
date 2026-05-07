import { motion } from 'framer-motion';
import { 
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Legend, Cell 
} from 'recharts';
import { FINANCIAL_SERIES, UFONE_PROFIT_GROWTH } from '../data/dashboardData';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-4 rounded-2xl shadow-2xl border-white/10 font-sans backdrop-blur-xl">
        <p className="text-white/60 mb-3 text-xs font-medium tracking-wide">{label}</p>
        <div className="space-y-2">
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full shadow-inner" style={{ backgroundColor: entry.color }} />
              <span className="text-white/80 text-xs font-medium">{entry.name}:</span>
              <span className="text-white font-semibold ml-auto">{entry.name.includes('%') ? entry.value + '%' : 'PKR ' + entry.value + 'B'}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export function ChartsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
      {/* Revenue Shift Chart */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card rounded-[32px] p-6 sm:p-8 flex flex-col h-[420px] transition-all hover:bg-white/[0.02]"
      >
        <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
          <div>
            <h3 className="text-lg font-semibold text-white tracking-tight">Revenue Growth Trend</h3>
            <p className="text-sm text-white/50 mt-1">Multi-year group vs standalone trajectory</p>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-xs font-medium text-[#B6FF3B] px-3 py-1.5 bg-[#B6FF3B]/10 rounded-full border border-[#B6FF3B]/20 whitespace-nowrap">GROUP: PKR 251.7B</span>
          </div>
        </div>
        
        <div className="flex-1 w-full mt-2 min-h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={FINANCIAL_SERIES} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorPtcl" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffffff" stopOpacity={0.15}/>
                  <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorGroup" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#B6FF3B" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#B6FF3B" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="year" stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} dy={10} />
              <YAxis stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `${val}B`} dx={-10} />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1, strokeDasharray: '4 4' }} />
              <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '16px', opacity: 0.8 }} iconType="circle" />
              <Area type="monotone" dataKey="ptcl" name="PTCL Standalone" stroke="#ffffff60" fillOpacity={1} fill="url(#colorPtcl)" strokeWidth={2} />
              <Area type="monotone" dataKey="group" name="PTCL Group Total" stroke="#B6FF3B" fillOpacity={1} fill="url(#colorGroup)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* CapEx / Ufone Distribution */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="glass-card rounded-[32px] p-6 sm:p-8 flex flex-col h-[420px] transition-all hover:bg-white/[0.02]"
      >
        <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
          <div>
            <h3 className="text-lg font-semibold text-white tracking-tight">Ufone 4G Acceleration</h3>
            <p className="text-sm text-white/50 mt-1">Explosive operating profit expansion</p>
          </div>
          <div className="text-left sm:text-right">
             <span className="text-xs font-medium text-[#B6FF3B] px-3 py-1.5 bg-[#B6FF3B]/10 rounded-full border border-[#B6FF3B]/20 whitespace-nowrap">OP PROFIT: +283%</span>
          </div>
        </div>
        
        <div className="flex-1 w-full mt-2 min-h-[250px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={UFONE_PROFIT_GROWTH} layout="vertical" margin={{ top: 10, right: 30, left: 20, bottom: 0 }}>
              <XAxis type="number" stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `${val}%`} />
              <YAxis dataKey="category" type="category" stroke="#ffffff60" fontSize={12} tickLine={false} axisLine={false} dx={-10} />
              <Tooltip cursor={{fill: 'rgba(255,255,255,0.03)'}} contentStyle={{ backgroundColor: 'rgba(18,28,20,0.8)', borderColor: 'rgba(182,255,59,0.1)', borderRadius: '12px', backdropFilter: 'blur(16px)' }} itemStyle={{ color: '#fff' }} />
              <Bar dataKey="value" name="Growth %" radius={[0, 8, 8, 0]} barSize={28}>
                {UFONE_PROFIT_GROWTH.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 1 ? '#B6FF3B' : 'rgba(255,255,255,0.2)'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}
