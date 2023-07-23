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
      <div className=" center flex-1 hover:bg-slate-300/10 cursor-pointer lg:hidden">
        <Icon size={20} className="text-neutral-900 dark:text-white" />
        {alert && <BsDot className="text-sky-500 absolute -top-4 left-0" size={70}/>}
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300/10 cursor-pointer">
        <Icon size={28} className="text-neutral-900 dark:text-white" />
        <p className="hidden lg:block text-slate-700 dark:text-white text-xl">{label}</p>
        {alert && <BsDot className="text-sky-500 absolute -top-4 left-0" size={70}/>}
      </div>
    </div>
  );
};

export default SidebarItem;
