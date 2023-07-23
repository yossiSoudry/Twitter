import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";

const SidebarLogo = () => {
    const router = useRouter()
    return (
        <div 
        onClick={() => router.push('/')}
        className="
          rounded-full 
          h-20
          w-20
          p-4 
          center
          hover:bg-blue-300/10
          cursor-pointer
          transition
      ">
        <BsTwitter size={40} className="text-sky-500" />
      </div>
    );
}

export default SidebarLogo;