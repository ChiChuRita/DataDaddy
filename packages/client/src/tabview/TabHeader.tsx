import { useTabStore } from "../store/tabStore";
import React from "react";

interface TabHeadProps {
  title: string;
  index: number;
}

const TabHead: React.FC<TabHeadProps> = ({ title, index }) => {
  const setActiveTab = useTabStore((state) => state.setActiveTab);

  return (
    <div className="flex gap-2 bg-slate-700 p-2 rounded">
      <span>Index: {index}</span>
      <button onClick={() => setActiveTab(index)}>{title}</button>
      <button onClick={() => setActiveTab(-1)}>Close</button>
    </div>
  );
};

const TabHeader = () => {
  const tabs = useTabStore((state) => state.tabs);
  return (
    <div className="flex gap-2 p-4">
      {tabs.map((tab) => (
        <TabHead title={tab.title} index={tab.index} />
      ))}
    </div>
  );
};

export default TabHeader;
