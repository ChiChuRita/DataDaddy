import { useTabStore } from "../store/tabStore";
import Index from "../tabs/QueryTab";
import Construction from "./Construction";

const Sidebar = () => {
  const { addTab } = useTabStore();

  const createIndexTab = () => {
    addTab(<Index />, "Index Tab");
  };

  const createConnectionTab = () => {
    addTab(<Construction />, "Connection Tab");
  };

  return (
    <div className="flex flex-col w-[300px] ">
      <div className="flex flex-col items-start">
        <h1>Create</h1>
        <button onClick={createIndexTab}>Index</button>
        <button onClick={createConnectionTab}>Connection</button>
      </div>
      <div>
        <h1>Tables</h1>
      </div>
    </div>
  );
};

export default Sidebar;
