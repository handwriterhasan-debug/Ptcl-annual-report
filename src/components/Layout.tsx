import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useStore } from '../store/useStore';
import { cn } from '../lib/utils';
import { ReactNode } from 'react';

export function Layout({ children }: { children: ReactNode }) {
  const { isSidebarOpen, toggleSidebar } = useStore();

  return (
    <div className="min-h-screen bg-[#050805] text-[#e0e0e0] flex overflow-hidden font-sans w-full">
      <Sidebar />
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
      <div 
        className={cn(
           "flex-1 flex flex-col transition-all duration-[600ms] h-screen overflow-y-auto overflow-x-hidden relative w-full",
          isSidebarOpen ? "md:ml-[280px]" : "md:ml-[88px]"
        )}
      >
        <Header />
        <main className="flex-1 relative pt-24 md:pt-28 px-4 sm:px-6 md:px-12 pb-16 w-full max-w-[1400px] mx-auto">
          {/* Ambient Lighting Layers */}
          <div className="fixed top-[-20%] right-[-10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] rounded-full bg-[#B6FF3B]/5 blur-[80px] md:blur-[120px] pointer-events-none" />
          <div className="fixed bottom-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-[#0B3D2E]/40 blur-[80px] md:blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 w-full animate-in fade-in duration-1000 ease-out">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
