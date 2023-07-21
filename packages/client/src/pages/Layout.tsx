import { Outlet } from "@tanstack/react-router";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex h-full w-1">
      <Sidebar />
      <main className="flex h-full w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
