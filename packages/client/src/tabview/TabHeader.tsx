import { useTabStore } from "../store/tabStore";
import React from "react";

interface TabHeadProps {
  title: string;
  index: number;
}

const TabHead: React.FC<TabHeadProps> = ({ title, index }) => {
  const state = useTabStore();

  return (
    <div className="flex gap-2 bg-slate-700 p-2 rounded">
      <button onClick={() => state.setActiveTab(index)}>{title}</button>
      <button onClick={() => state.removeTab(index)}>Close</button>
    </div>
  );
};

const TabHeader = () => {
  const tabs = useTabStore((state) => state.tabs);
  return (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <TabHead title={tab.title} index={tab.index} />
      ))}
    </div>
  );
};

export default TabHeader;
