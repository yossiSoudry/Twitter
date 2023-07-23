import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import { format } from "date-fns";
import { useMemo } from "react";
import Button from "../Button";
import { BiCalendar } from "react-icons/bi";
import useEditModal from "@/hooks/useEditModal";
import Image from "next/image";
import useFollow from "@/hooks/useFollow";

interface UserBioProps {
  userId: string;
}

const UserBio = ({ userId }: UserBioProps) => {
  const { data: currentUser } = useCurrentUser();
  const { data: fetchedUser } = useUser(userId);

  const editModal = useEditModal();

  const { isFollowing, toggleFollow } = useFollow(userId);

  const createdAt = useMemo(() => {
    if (!fetchedUser?.createdAt) return null;

    return format(new Date(fetchedUser.createdAt), "MMM yyy");
  }, [fetchedUser?.createdAt]);
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-900 pb-4">
      <div className="flex justify-end p-2">
        {currentUser?.id === userId ? (
          <Button secondary label="Edit" onClick={editModal.onOpen} />
        ) : (
          <Button
            onClick={toggleFollow}
            label={isFollowing ? "Unfollow" : "Follow"}
            secondary
          />
        )}
      </div>
      <div className="mt-8 px-4">
        <div className="flex flex-col">
          <div className="text-slate-700 dark:text-white text-2xl font-semibold flex items-center gap-2">
            {fetchedUser?.name}
            {fetchedUser?.name === "Yossi Soudry" && (
              <div className="w-6 h-6 mt-2 relative">
                <Image
                  fill
                  className="object-cover rounded-full"
                  alt="Avatar"
                  src={"/images/verified.jpg"}
                />
              </div>
            )}
          </div>
          <p className="text-md text-neutral-500">@{fetchedUser?.username}</p>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-slate-700 dark:text-white">{fetchedUser?.bio}</p>
          <div className="flex items-center gap-2 mt-4 text-neutral-500">
            <BiCalendar size={24} />
            <p>joined {createdAt}</p>
          </div>
        </div>
        <div className="flex items-center mt-4 gap-6">
          <div className="flex items-center gap-1">
            <p className="text-slate-700 dark:text-white">{fetchedUser?.followingIds?.length}</p>
            <p className="text-neutral-500">Following</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-slate-700 dark:text-white">{fetchedUser?.followersCount || 0}</p>
            <p className="text-neutral-500">Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBio;
