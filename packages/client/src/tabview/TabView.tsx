import { useTabStore } from "../store/tabStore";

import TabHeader from "./TabHeader";

const TabView = () => {
  const { tabs, activeTab } = useTabStore();
  return (
    <div>
      <TabHeader />
      {activeTab == -1 && <div>Nothing to see here</div>}
      {activeTab != -1 && tabs.at(activeTab)?.content}
    </div>
  );
};

export default TabView;
