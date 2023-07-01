import { create } from "zustand";
import { ReactNode } from "react";

interface Tab {
  title: string;
  content: ReactNode;
  index: number;
}

interface TabStore {
  activeTab: number;
  tabs: Tab[];
  setActiveTab: (index: number) => void;
  getActiveTab: () => Tab | null;
  addTab: (tab: ReactNode, title: string) => void;
  removeTab: (index: number) => void;
}

export const useTabStore = create<TabStore>((set, get) => ({
  tabs: [],
  activeTab: -1,
  addTab: (tab: ReactNode, title: string) =>
    set((state) => ({
      tabs: [
        ...state.tabs,
        {
          title,
          content: tab,
          index: state.tabs.length,
        },
      ],
      activeTab: state.tabs.length,
    })),

  removeTab: (index: number) => {
    set((state) => {
      const newTabs = state.tabs.filter((tab) => tab.index !== index);
      const newActiveTab = newTabs.length - 1;
      return {
        tabs: newTabs,
        activeTab: newActiveTab,
      };
    });
  },

  setActiveTab: (index: number) =>
    set(() => ({
      activeTab: index,
    })),

  getActiveTab: () => {
    const { tabs, activeTab } = get();
    if (activeTab === -1) return null;
    return tabs[activeTab];
  },
}));
