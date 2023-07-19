import { useTabStore } from "../store/tabStore";
import QueryTab from "../tabs/QueryTab";
import Construction from "./Construction";

const Sidebar = () => {
  const { addTab } = useTabStore();

  const createQueryTab = () => {
    addTab(<QueryTab />, "Query");
  };

  const createConnectionTab = () => {
    addTab(<Construction />, "Connection");
  };

  return (
    <div className="flex flex-col w-[300px] ">
      <div className="flex flex-col items-start">
        <h1>Create</h1>
        <button onClick={createQueryTab}>Query</button>
        <button onClick={createConnectionTab}>Connection</button>
      </div>
      <div>
        <h1>Tables</h1>
      </div>
    </div>
  );
};

export default Sidebar;
