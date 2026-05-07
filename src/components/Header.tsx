import { useState, useRef, useEffect } from 'react';
import { Menu, Search, Download } from 'lucide-react';
import { useStore } from '../store/useStore';

const TABS = [
  { id: 'Overview', keywords: ['overview', 'home', 'main', 'summary', 'verdict'] },
  { id: 'Financial Performance', keywords: ['finance', 'financial', 'performance', 'money', 'profit', 'revenue'] },
  { id: 'Flash Fiber', keywords: ['flash', 'fiber', 'broadband', 'internet', 'ftth'] },
  { id: 'Enterprise & AI', keywords: ['enterprise', 'ai', 'cloud', 'data', 'corporate'] },
  { id: 'Network & 5G', keywords: ['network', '5g', 'telecom', 'mobile', 'wireless'] },
  { id: 'ESG & Digital PK', keywords: ['esg', 'digital', 'sustainability', 'environment', 'social'] },
  { id: 'Risk Context', keywords: ['risk', 'context', 'threats', 'liabilities', 'pension'] },
];

export function Header() {
  const { toggleSidebar, setActiveTab } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchResults = TABS.filter(tab => 
    tab.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
    tab.keywords.some(k => k.includes(searchQuery.toLowerCase()))
  );

  const handleSearchSelect = (tabId: string) => {
    setActiveTab(tabId);
    setSearchQuery('');
    setShowResults(false);
  };

  const handleExport = () => {
    // Basic CSV Export Simulation
    const csvContent = "data:text/csv;charset=utf-8,KPI,Value\nRevenue,251.7B\nOperating Profit Grw,216%\nFiber Share,33%";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "ptcl_group_report_2025.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="fixed top-6 right-6 left-28 z-30 transition-all duration-300 md:left-auto md:w-auto">
      <div className="glass-card rounded-[24px] px-4 py-2.5 flex items-center justify-between gap-6 w-full max-w-full">
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleSidebar}
            className="md:hidden p-2 text-white/50 hover:text-[#B6FF3B] hover:bg-white/5 rounded-xl transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div ref={searchRef} className="relative hidden sm:block">
            <div className="flex items-center px-4 py-1.5 bg-black/20 rounded-full border border-white/5 focus-within:border-[#B6FF3B]/30 transition-all shadow-inner">
              <Search className="w-4 h-4 text-white/40" />
              <input 
                type="text" 
                placeholder="Search report..." 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowResults(true);
                }}
                onFocus={() => setShowResults(true)}
                className="bg-transparent border-none outline-none text-sm text-[#e0e0e0] ml-2 placeholder:text-white/30 w-32 focus:w-48 transition-all duration-300"
              />
            </div>
            
            {showResults && searchQuery && (
              <div className="absolute top-full left-0 mt-2 w-full min-w-[200px] bg-[#111] border border-white/10 rounded-2xl shadow-xl overflow-hidden backdrop-blur-xl z-50">
                {searchResults.length > 0 ? (
                  <div className="flex flex-col">
                    {searchResults.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => handleSearchSelect(tab.id)}
                        className="text-left px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                      >
                        <div className="text-sm font-medium text-white">{tab.id}</div>
                        <div className="text-xs text-white/40 mt-1 capitalize">
                          {tab.keywords.slice(0, 3).join(', ')}
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-3 text-sm text-white/50 text-center">
                    No results found
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-5 border-l border-white/10 pl-5">
          <div className="hidden lg:flex flex-col items-end mr-2">
            <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">System Health</span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF3B] shadow-[0_0_8px_rgba(182,255,59,0.5)]"></span>
              <span className="text-xs font-semibold text-[#B6FF3B]">GOOD</span>
            </div>
          </div>
          <button 
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-1.5 border border-[#B6FF3B]/20 text-[#B6FF3B] bg-[#B6FF3B]/5 hover:bg-[#B6FF3B]/10 rounded-full font-medium text-xs transition-all shadow-[0_2px_10px_rgba(182,255,59,0.05)]"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Export OS</span>
          </button>
        </div>
      </div>
    </header>
  );
}
