import { Outlet } from "react-router-dom";

import { Header } from "./header";
import { Sidebar } from "./sidebar";

export default function MainLayout() {
  return (
    <div className={layoutStyles.wrapper}>
      <Sidebar />

      <div className={layoutStyles.mainContent}>
        <Header />

        <main className={layoutStyles.pageContainer}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

const layoutStyles = {
  wrapper: "flex h-screen w-full overflow-hidden bg-background",
  mainContent: "flex flex-1 flex-col relative min-w-0",
  pageContainer: "flex-1 overflow-auto",
};
