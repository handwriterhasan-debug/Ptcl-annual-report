import { create } from 'zustand';

interface DashboardState {
  timeHorizon: 'Short-term (1YR)' | 'Mid-term (3YR)' | 'Long-term (5YR)';
  setTimeHorizon: (horizon: DashboardState['timeHorizon']) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const useStore = create<DashboardState>((set) => ({
  timeHorizon: 'Mid-term (3YR)',
  setTimeHorizon: (horizon) => set({ timeHorizon: horizon }),
  activeTab: 'Overview',
  setActiveTab: (tab) => set({ activeTab: tab }),
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
