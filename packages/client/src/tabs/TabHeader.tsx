import { useTabStore } from "../store/tabStore";

import classNames from "classnames";

interface TabHeadProps {
  title: string;
  index: number;
}

const TabHead: React.FC<TabHeadProps> = ({ title, index }) => {
  const state = useTabStore();

  return (
    <div
      className={classNames(
        "flex gap-2 p-2 rounded-t-md",
        state.activeTab === index ? "bg-slate-900" : "bg-slate-800"
      )}
    >
      <button onClick={() => state.setActiveTab(index)}>{title}</button>
      <button onClick={() => state.removeTab(index)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
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
