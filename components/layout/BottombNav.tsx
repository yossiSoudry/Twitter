import { BsBellFill, BsHouseFill } from "react-icons/bs";
import SidebarItem from "./SidebarItem";
import { FaFeather, FaUser } from "react-icons/fa";
import useCurrentUser from "@/hooks/useCurrentUser";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "next-auth/react";
import { useCallback } from "react";
import { useRouter } from "next/router";
import useLoginModal from "@/hooks/useLoginModal";
import { VscSettings } from "react-icons/vsc";

const BottomNav = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();
  const items = [
      {
          icon: BsHouseFill,
          label: "Home",
          href: "/",
          auth: false,
        },
        {
            icon: BsBellFill,
            label: "Notifications",
            href: "/notifications",
            auth: true,
            alert: currentUser?.hasNotification,
        },
        {
            icon: FaUser,
            label: "Profile",
            href: `/users/${currentUser?.id}`,
            auth: true,
        },
        {
          icon: VscSettings,
          label: "Settings",
          href: '/settings',
          auth: true,
        },
  ];

  const onClick = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    router.push("/posts");
  }, [loginModal, router, currentUser]);

  return (
    <>
      <div className="lg:hidden sticky bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-black dark:border-neutral-900">
        <div
          onClick={onClick}
          className="mt-6 lg:hidden absolute -top-24 left-4 rounded-full h-14 w-14  p-4 center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer"
        >
          <FaFeather size={24} color="white" />
        </div>
        <div className="flex justify-evenly h-full max-w-lg mx-auto">
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              alert={item.alert}
              auth={item.auth}
              href={item.href}
              icon={item.icon}
              label={item.label}
            />
          ))}
          {currentUser && (
            <SidebarItem
              onClick={() => signOut()}
              icon={BiLogOut}
              label="Logout"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default BottomNav;
