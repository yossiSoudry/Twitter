import { useStateContext } from "@/context/context";
import BottomNav from "./layout/BottombNav";
import FollowBar from "./layout/FollowBar";
import Sidebar from "./layout/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { currentMode } =
  useStateContext();
  return (
    <div className={currentMode === "dark" ? "dark transition duration-500" : "light transition duration-500"}>
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container min-h-full mx-auto xl:px-30 max-w-6xl">
        <div className="lg:grid grid-cols-4 min-h-screen">
          <Sidebar />
          <div className="lg:col-span-2 border-x lg:pb-0 border-neutral-200 dark:border-neutral-900">
            {children}
          </div>
          <div className="hidden lg:block">
            <FollowBar />
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
    </div>
  );
};

export default Layout;
