import { create } from "zustand";
import { ReactNode } from "react";
import { act } from "react-dom/test-utils";

interface Tab {
  title: string;
  content: ReactNode;
  index: number;
}

interface TabStore {
  activeTab: number;
  tabs: Tab[];
  setActiveTab: (index: number) => void;
  addTab: (tab: ReactNode, title: string) => void;
  removeTab: (index: number) => void;
}

export const useTabStore = create<TabStore>((set) => ({
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
      const tabs = state.tabs.filter((tab) => tab.index !== index);
      return {
        tabs: tabs.map((tab, i) => ({ ...tab, index: i })),
        activeTab: tabs.length - 1,
      };
    });
  },

  setActiveTab: (index: number) =>
    set(() => ({
      activeTab: index,
    })),
}));
