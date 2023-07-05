import TabView from "../tabs/TabView";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex w-full">
        <TabView />
      </main>
    </div>
  );
};

export default Layout;
