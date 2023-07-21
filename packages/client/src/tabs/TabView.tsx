import { useTabStore } from "../store/tabStore";

import TabHeader from "./TabHeader";

const TabView = () => {
  const { getActiveTab } = useTabStore();
  const activeTab = getActiveTab();
  return (
    <div className="flex h-full flex-col">
      <TabHeader />
      {activeTab && activeTab.content}
      {!activeTab && <div className="flex-1">Nothing here</div>}
    </div>
  );
};

export default TabView;
