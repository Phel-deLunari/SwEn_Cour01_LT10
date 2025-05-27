"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";
import usePlayer from '@/hooks/usePlayer';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}
const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const player = usePlayer();
  const authModal = useAuthModal();

  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    player.reset();
    router.refresh();
    if (error) {
      return toast.error(error.message);
    }
    toast.success('Logout Sucessfull !!');
  };

  return (
    <div
      className={twMerge(
        `
    h-fit
    bg-gradient-to-b
    from-emerald-800
    p-8
    rounded-2xl
    shadow-2xl
    mb-8
    `,
        className
      )}
    >
      <div
        className="
            w-full
            mb-6
            flex
            items-center
            justify-between
            "
      >
        <div className="hidden md:flex gap-x-4 items-center">
          <button
            className="
            rounded-full
            bg-black
            flex
            items-center
            justify-center
            hover:opacity-80
            hover:scale-105
            transition
            p-3
            shadow-lg
            border border-neutral-800
            "
            onClick={() => router.back()}
          >
            <span className="text-white">
              <RxCaretLeft size={28} />
            </span>
          </button>
          <button
            className="
            rounded-full
            bg-black
            flex
            items-center
            justify-center
            hover:opacity-80
            hover:scale-105
            transition
            p-3
            shadow-lg
            border border-neutral-800
            "
            onClick={() => router.forward()}
          >
            <span className="text-white">
              <RxCaretRight size={28} />
            </span>
          </button>
        </div>
        {/* For mobile view */}
        <div className="flex md:hidden gap-x-2 items-center">
          <button
            className="rounded-full p-3 bg-white flex items-center justify-center hover:opacity-80 hover:scale-105 transition shadow border border-neutral-300"
            onClick={() => router.push('/')}
          >
            <span className="text-black">
              <HiHome size={22} />
            </span>
          </button>
          <button
            className="rounded-full p-3 bg-white flex items-center justify-center hover:opacity-80 hover:scale-105 transition shadow border border-neutral-300"
          >
            <span className="text-black">
              <BiSearch size={22} />
            </span>
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button
                onClick={handleLogout}
                className="bg-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-neutral-200 transition"
              >
                Logout
              </Button>
              <Button
                onClick={() => router.push('/account')}
                className="bg-white rounded-full p-3 shadow hover:bg-neutral-200 transition"
              >
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="
                    bg-transparent
                    text-neutral-300
                    font-medium
                    hover:text-white
                    transition
                  "
                >
                  Sign up
                </Button>
              </div>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="bg-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-neutral-200 transition"
                >
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
        {/* End Mobile view */}
      </div>
      {children}
    </div>
  );
};

export default Header;
