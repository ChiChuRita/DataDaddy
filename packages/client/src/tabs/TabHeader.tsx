import { useTabStore } from "../store/tabStore";

import { clsx } from "clsx";

interface TabHeadProps {
  title: string;
  index: number;
}

const TabHead: React.FC<TabHeadProps> = ({ title, index }) => {
  const state = useTabStore();

  return (
    <div
      className={clsx("flex gap-2 rounded-t-md p-2", {
        "bg-slate-900": state.activeTab === index,
        "bg-slate-800": state.activeTab !== index,
      })}
    >
      <button onClick={() => state.setActiveTab(index)}>{title}</button>
      <button onClick={() => state.removeTab(index)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

const TabHeader = () => {
  const tabs = useTabStore((state) => state.tabs);
  return (
    <div className="flex">
      {tabs.map((tab) => (
        <TabHead title={tab.title} index={tab.id} />
      ))}
    </div>
  );
};

export default TabHeader;
