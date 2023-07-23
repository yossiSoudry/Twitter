import useUsers from "@/hooks/useUsers";
import Avatar from "../Avatar";
import Image from "next/image";
import { useRouter } from "next/router";

const FollowBar = () => {
  const { data: users = [] } = useUsers();
  const router = useRouter()
  if (users.length === 0) return null;
  return (
    <div className="px-6 py-4">
      <div className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-4">
        <h2 className="text-slate-700 dark:text-white text-xl font-semibold">Who to follow</h2>
        <div className="flex flex-col gap-6 mt-4">
          {users.map((user: any) => (
            <div className="flex gap-4" key={user.id}>
              <Avatar userId={user.id} />
              <div className="flex flex-col">
                <div className="text-slate-700 dark:text-white font-semibold flex gap-2 items-center text-sm">
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
                <p className="text-neutral-400 cursor-pointer hover:underline text-sm" onClick={()=> router.push(`/users/${user.id}`)}>@{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
