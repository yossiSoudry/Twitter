import useUsers from "@/hooks/useUsers";
import Avatar from "../Avatar";
import Image from "next/image";

const FollowBar = () => {
  const { data: users = [] } = useUsers();

  if (users.length === 0) return null;
  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="bg-neutral-800 rounded-xl p-4">
        <h2 className="text-white text-xl font-semibold">Who to follow</h2>
        <div className="flex flex-col gap-6 mt-4">
          {users.map((user: any) => (
            <div className="flex gap-4" key={user.id}>
              <Avatar userId={user.id} />
              <div className="flex flex-col">
                <div className="text-white font-semibold flex gap-2 items-center text-sm">
                  {user.name}
                  {user.name === "Yossi Soudry" && (
                    <div className="w-4 h-4 mt-1 relative">
                      <Image
                        fill
                        className="object-cover rounded-full"
                        alt="Avatar"
                        src={"/images/verified.jpg"}
                      />
                    </div>
                  )}
                </div>
                <p className="text-neutral-400 text-sm">@{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
