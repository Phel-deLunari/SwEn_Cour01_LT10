"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaPlay } from 'react-icons/fa';
import useLoadThumbnail from "@/hooks/useLoadThumbnail";
import { useUser } from "@/hooks/useUser";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
  data: any;
}

const ListItem: React.FC<ListItemProps> = ({ image, href, name, data }) => {
  const router = useRouter();
  const { user } = useUser();

  // eslint-disable-next-line
  const imagePath = image !== 'N/A' ? image : useLoadThumbnail(data) as string;
  const handleOnClick = () => {
    if (!user) return;
    router.push(href);
  };

  return (
    <button
      onClick={handleOnClick}
      className="
        relative
        group
        flex
        items-center
        rounded-2xl
        overflow-hidden
        gap-x-6
        bg-neutral-800/90
        hover:bg-emerald-800/80
        transition
        pr-6
        py-4
        shadow-xl
        border border-neutral-700
        hover:shadow-2xl
        focus:outline-none
        focus:ring-2 focus:ring-emerald-500
      "
    >
      <div
        className="
          relative
          min-h-[64px]
          min-w-[64px]
          rounded-full
          overflow-hidden
          shadow-lg
          border border-neutral-700
        "
      >
        <Image className="object-cover" fill src={imagePath} alt="Image" />
      </div>
      <span className="text-white font-bold text-lg truncate py-5 mr-4">
        {name}
      </span>
      <div
        className="
          absolute
          transition
          opacity-0
          rounded-full
          flex
          items-center
          justify-center
          bg-green-500
          p-4
          drop-shadow-md
          right-5
          group-hover:opacity-100
          hover:scale-110
        "
      >
        <FaPlay className="text-green-200" />
      </div>
    </button>
  );
};

export default ListItem;
