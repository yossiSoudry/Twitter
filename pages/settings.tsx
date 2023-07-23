import Header from "@/components/Header";
import FollowBar from "@/components/layout/FollowBar";
import { useStateContext } from "@/context/context";

const Settings = () => {
  const { setCurrentMode } = useStateContext();
  return (
    <div>
      <Header label="Settings" showBackArrow />
      <div className="center dark:text-white text-xl mt-4">Set mode</div>
      <div className="sm:flex p-8 my-8 gap-4 justify-center">
        <div onClick={() => setCurrentMode("dark")}>
          <span className="block w-full p-2 space-y-2 text-center text-neutral-500 dark:text-white text-xl font-normal">
            Dark
          </span>
          <div className="items-center cursor-pointer rounded-md border-2 p-1 hover:scale-110 duration-300 border-white">
            <div className="space-y-2 rounded-sm bg-slate-950 p-2">
              <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                <div className="h-2 w-[80px] rounded-lg bg-slate-400" />
                <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
              </div>
              <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                <div className="h-4 w-4 rounded-full bg-slate-400" />
                <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
              </div>
              <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                <div className="h-4 w-4 rounded-full bg-slate-400" />
                <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
              </div>
            </div>
          </div>
        </div>
        <div onClick={() => setCurrentMode("light")}>
          <span className="block text-neutral-500 dark:text-white text-xl w-full p-2 text-center font-normal">
            Light
          </span>
          <div className="items-center cursor-pointer rounded-md border-2 p-1 hover:scale-110 duration-300 border-gray-700">
            <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
              <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
              </div>
              <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
              </div>
              <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <FollowBar />
      </div>
    </div>
  );
};

export default Settings;
