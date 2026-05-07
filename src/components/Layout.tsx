import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useStore } from '../store/useStore';
import { cn } from '../lib/utils';
import { ReactNode } from 'react';

export function Layout({ children }: { children: ReactNode }) {
  const { isSidebarOpen } = useStore();

  return (
    <div className="min-h-screen bg-[#050805] text-[#e0e0e0] flex overflow-hidden font-sans">
      <Sidebar />
      <div 
        className={cn(
           "flex-1 flex flex-col transition-all duration-[600ms] h-screen overflow-y-auto overflow-x-hidden relative",
          isSidebarOpen ? "md:ml-[280px]" : "md:ml-[88px]"
        )}
      >
        <Header />
        <main className="flex-1 relative pt-28 px-6 sm:px-12 pb-16 w-full max-w-[1400px] mx-auto">
          {/* Ambient Lighting Layers */}
          <div className="fixed top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[#B6FF3B]/5 blur-[120px] pointer-events-none" />
          <div className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#0B3D2E]/40 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 w-full animate-in fade-in duration-1000 ease-out">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
