import { IconType } from "react-icons";
import { useCallback } from "react";
import { useRouter } from "next/router";
import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import { BsDot } from "react-icons/bs";

interface SidebarItemProps {
  label: string;
  icon: IconType;
  href?: string;
  onClick?: () => void;
  auth?: boolean;
  alert?: boolean;
}

const SidebarItem = ({
  label,
  icon: Icon,
  href,
  onClick,
  auth,
  alert,
}: SidebarItemProps) => {
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();
  const router = useRouter();
  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }
    if (auth && !currentUser) {
      loginModal.onOpen();
    } else if (href) {
      router.push(href);
    }
  }, [router, href, onClick, auth, currentUser, loginModal]);

  return (
    <div className="flex items-center" onClick={handleClick}>
      <div className="relative rounded-full h-14 w-14 center p-4 hover:bg-slate-300/10 cursor-pointer lg:hidden">
        <Icon size={28} color="white" />
        {alert && <BsDot className="text-sky-500 absolute -top-4 left-0" size={70}/>}
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300/10 cursor-pointer">
        <Icon size={28} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
        {alert && <BsDot className="text-sky-500 absolute -top-4 left-0" size={70}/>}
      </div>
    </div>
  );
};

export default SidebarItem;
