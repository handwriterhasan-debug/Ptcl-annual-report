import { useState } from 'react';
import { Activity, BarChart2, Cpu, Globe, LayoutDashboard, ShieldAlert, Zap, Network, TreeDeciduous } from 'lucide-react';
import { useStore } from '../store/useStore';
import { cn } from '../lib/utils';

const NAV_ITEMS = [
  { id: 'Overview', icon: LayoutDashboard },
  { id: 'Financial Performance', icon: BarChart2 },
  { id: 'Flash Fiber', icon: Zap },
  { id: 'Enterprise & AI', icon: Cpu },
  { id: 'Network & 5G', icon: Network },
  { id: 'ESG & Digital PK', icon: TreeDeciduous },
  { id: 'Risk Context', icon: ShieldAlert },
];

export function Sidebar() {
  const { isSidebarOpen, activeTab, setActiveTab } = useStore();
  const [imgError, setImgError] = useState(false);

  return (
    <aside className={cn(
      "fixed top-6 bottom-6 left-6 z-40 hidden md:flex flex-col transition-all duration-[600ms] glass-card rounded-[32px] overflow-hidden",
      isSidebarOpen ? "w-[240px]" : "w-[64px]"
    )}>
      <div className="flex flex-col items-center justify-center relative mt-6 mb-4">
        {!imgError ? (
          <img 
            src="https://e7.pngegg.com/pngimages/410/235/png-clipart-islamabad-united-ptcl-telecommunication-business-service-provider-business-text-people.png" 
            alt="PTCL"
            className="w-12 h-12 object-contain z-10 shrink-0 transition-transform duration-300 hover:scale-110"
            onError={() => setImgError(true)}
          />
        ) : (
          <Activity className="text-[#B6FF3B] w-8 h-8 shrink-0 z-10" />
        )}
        {isSidebarOpen && (
          <div className="flex flex-col items-center mt-3 z-10 animate-in fade-in">
            <span className="font-bold text-xl tracking-tight text-white leading-tight">
              PTCL Group
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#B6FF3B] font-medium mt-1">
              2025 Report
            </span>
          </div>
        )}
      </div>

      <nav className="px-3 space-y-2 mt-4 flex-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center py-3 rounded-2xl transition-all duration-300 group relative",
                isSidebarOpen ? "justify-start px-4" : "justify-center px-0",
                isActive 
                  ? "bg-[#B6FF3B]/10 text-[#B6FF3B]" 
                  : "text-white/40 hover:bg-white/5 hover:text-white"
              )}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#B6FF3B] rounded-r-md shadow-[0_0_10px_rgba(182,255,59,0.5)]" />
              )}
              <Icon className={cn("w-5 h-5 shrink-0 transition-colors", isActive ? "text-[#B6FF3B]" : "group-hover:text-white")} />
              {isSidebarOpen && <span className="ml-4 text-sm font-medium whitespace-nowrap animate-in fade-in">{item.id}</span>}
            </button>
          )
        })}
      </nav>
      
      {isSidebarOpen && (
        <div className="p-4 mb-4 mt-auto">
          <div className="bg-black/30 border border-white/5 p-4 rounded-[20px] backdrop-blur-md">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40 mb-3">SYSTEM STATUS</p>
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#B6FF3B] shadow-[0_0_12px_rgba(182,255,59,0.8)] relative">
                <div className="absolute inset-0 bg-[#B6FF3B] rounded-full animate-ping opacity-50"></div>
              </div>
              <span className="text-xs font-semibold text-white/90">ALL SYSTEMS GO</span>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
