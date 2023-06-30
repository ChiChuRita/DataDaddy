import { Outlet } from "@tanstack/react-router";
import Sidebar from "./Sidebar";

const RootLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
