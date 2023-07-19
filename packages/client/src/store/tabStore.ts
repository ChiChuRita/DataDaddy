import { create } from "zustand";
import { ReactNode } from "react";

interface Tab {
  title: string;
  content: ReactNode;
  id: number;
}

interface TabStore {
  activeTab: number;
  tabs: Tab[];
  setActiveTab: (id: number) => void;
  getActiveTab: () => Tab | null;
  addTab: (tab: ReactNode, title: string) => void;
  removeTab: (index: number) => void;
}

let idx = 1;
const getNewIndex = () => {
  return idx++;
};

export const useTabStore = create<TabStore>((set, get) => ({
  activeTab: 0,
  tabs: [],
  setActiveTab: (id: number) => set(() => ({ activeTab: id })),
  getActiveTab: () => {
    const { activeTab, tabs } = get();
    return tabs.find((tab) => tab.id === activeTab) || null;
  },
  addTab: (content: ReactNode, title: string) => {
    const newID = getNewIndex();
    console.log(newID);
    const { tabs } = get();
    const newTab = {
      title,
      content,
      id: newID,
    };
    set(() => ({ tabs: [...tabs, newTab], activeTab: newTab.id }));
  },
  removeTab: (index: number) => {
    const { tabs, activeTab } = get();
    let activeID = activeTab;

    if (activeTab === index) {
      const activeIndex = tabs.findIndex((tab) => tab.id === index) - 1;
      activeID = tabs[activeIndex]?.id || 0;
    }

    set(() => ({
      tabs: tabs.filter((tab) => tab.id !== index),
      activeTab: activeID,
    }));
  },
}));
