import { Outlet } from "@tanstack/react-router";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <main className="flex w-full h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
