import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";

const SidebarTweetButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();
  const onClick = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    router.push('/posts');
  }, [loginModal, router, currentUser]);
  return (
    <div onClick={onClick}>
      <div className="hidden lg:block mt-6 rounded-full py-2 px-4 center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
        <p className="text-center font-semibold text-white text-xl">
          Tweet
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
