import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { KPICards } from './components/KPICards';
import { ChartsSection } from './components/ChartsSection';
import { RisksAndSignals } from './components/RisksAndSignals';
import { Verdict } from './components/Verdict';
import { InfraStats } from './components/InfraStats';
import { useStore } from './store/useStore';
import { FinancialTab } from './components/tabs/FinancialTab';
import { FlashFiberTab } from './components/tabs/FlashFiberTab';
import { EnterpriseAITab } from './components/tabs/EnterpriseAITab';
import { Network5GTab } from './components/tabs/Network5GTab';
import { ESGTab } from './components/tabs/ESGTab';
import { RiskContextTab } from './components/tabs/RiskContextTab';

function OverviewTab() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8 pb-12">
      <Hero />
      <KPICards />
      <ChartsSection />
      <InfraStats />
      <RisksAndSignals />
      <Verdict />
    </div>
  );
}

function renderTab(activeTab: string) {
  switch (activeTab) {
    case 'Overview':
      return <OverviewTab />;
    case 'Financial Performance':
      return <FinancialTab />;
    case 'Flash Fiber':
      return <FlashFiberTab />;
    case 'Enterprise & AI':
      return <EnterpriseAITab />;
    case 'Network & 5G':
      return <Network5GTab />;
    case 'ESG & Digital PK':
      return <ESGTab />;
    case 'Risk Context':
      return <RiskContextTab />;
    default:
      return <OverviewTab />;
  }
}

export default function App() {
  const { activeTab } = useStore();

  return (
    <Layout>
      {renderTab(activeTab)}
      
      <footer className="mt-12 py-8 flex flex-col sm:flex-row items-center sm:items-end px-6 justify-between text-xs text-white/30 font-medium tracking-wide max-w-7xl w-full mx-auto border-t border-white/5 gap-8">
        <div className="flex flex-col gap-1.5 text-center sm:text-left">
          <div className="text-[10px] uppercase tracking-widest text-[#B6FF3B] mb-1">Platform Architect</div>
          <div className="text-white/80 font-display text-base">Hasan Zai <span className="text-white/20 font-sans text-xs ml-2">Age 17</span></div>
          <div className="text-white/40">Son of Jawed Khan</div>
          <div className="text-white/50 mt-1">Web/App SaaS Developer</div>
        </div>
        <div className="flex flex-col items-center sm:items-end gap-3 text-center sm:text-right">
          <div className="text-white/50">PTCL Group AI Framework</div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-8">
            <span className="hover:text-white/60 transition-colors cursor-default">Intelligence Pipeline V4</span>
            <span className="hover:text-white/60 transition-colors cursor-default">System Health: Nominal</span>
            <span>&copy; 2025 PTCL Group Global</span>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
