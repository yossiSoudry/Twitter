import useUser from "@/hooks/useUser";
import Image from "next/image";
import Avatar from "../Avatar";

interface UserHeroProps{
    userId: string
}

const UserHero = ({
    userId,
}:UserHeroProps) => {
    const { data: fetchedUser } = useUser(userId)
    return (
        <div className="bg-neutral-200 dark:bg-neutral-700 shadow h-44 relative">
            {fetchedUser?.coverImage && (
                <Image
                src={fetchedUser.coverImage}
                fill
                alt="Cover Image"
                className="object-cover"
                 />
                )}
                <div className="absolute -bottom-16 left-4 ">
                    <Avatar userId={userId} isLarge hasBorder />
                </div>
        </div>
    );
}

export default UserHero;