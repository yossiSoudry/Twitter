import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

interface HeaderProps {
  label: string;
  showBackArrow?: boolean;
}

const Header = ({ label, showBackArrow}: HeaderProps) => {
  const router = useRouter();
  const handleBack = useCallback(() => {
    router.back();
  }, [router]);
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-900 p-5">
      <div className="flex items-center gap-2">
        {showBackArrow && (
          <BiArrowBack
            onClick={handleBack}
            size={20}
            className="cursor-pointer text-neutral-900 dark:text-white hover:opacity-70 transition"
          />
        )}
        <h1 className="text-slate-700 dark:text-white text-xl font-semibold">{label}</h1>
      </div>
    </div>
  );
};

export default Header;
