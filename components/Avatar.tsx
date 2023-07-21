import useUser from "@/hooks/useUser"
import Image from "next/image"
import { useRouter } from "next/router"
import { useCallback } from "react"

interface AvatarProps{
    userId: string
    isLarge?: boolean
    hasBorder?: boolean
}

const Avatar = ({
    userId,
    isLarge,
    hasBorder
}:AvatarProps) => {
    const router = useRouter()
    const {data: fetchedUser} = useUser(userId)
    const onClick = useCallback((e: any) => {
        e.stopPropagation()
        const url = `/users/${userId}`
        router.push(url)
    },[router, userId])
    return (
        <div className={`
        ${hasBorder ? 'border-4 border-black' : ''} 
        ${isLarge ? 'h-32' : 'h-12'} 
        ${isLarge ? 'w-32' : 'w-12'} 
        rounded-full hover:opacity-90 transition cursor-pointer relative
        `}>
          <Image
          fill
          className="object-cover rounded-full"
          alt="Avatar"
          onClick={onClick}
          src={fetchedUser?.profileImage || '/images/placeholder.png'}
          />
        </div>
    );
}

export default Avatar;