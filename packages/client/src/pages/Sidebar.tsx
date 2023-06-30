import { Link } from "@tanstack/react-router";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-[300px] ">
      <div className="flex flex-col">
        <Link to="/">Connections</Link>
      </div>
      <div>
        <h1>Create</h1>
      </div>
      <div>
        <h1>Tables</h1>
      </div>
    </div>
  );
};

export default Sidebar;
