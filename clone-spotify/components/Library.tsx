"use client";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "@/types";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";

interface LibraryProps {
    songs: Song[];
}

const Library: React.FC<LibraryProps>= ({
    songs
}) => {
    const authModal = useAuthModal();
    const upLoadModal = useUploadModal();
    const {user}= useUser();

    const onPlay = useOnPlay(songs);

    const oneClick =() => {
        if (!user) {
            return authModal.onOpen();
        }

        // ToDo: check for subscription
        return upLoadModal.onOpen();
    
    };
    return (
        <div className="flex flex-col">
            <div
            className="
            flex
            items-center
            justify-between
            px-5
            py-4
            ">
                <div
                className="
                inline-flex
                items-center
                gap-x-2>
                ">
                    <TbPlaylist className="text-neutral-400" size ={26} />
               <p
               className="
               text-neutral-400
               font-medium
               text-md"
               >
                Your library
               </p>
                </div>
                <AiOutlinePlus
                onClick={oneClick}
                size ={20}
                className="
                text-neutral-400
                cursor-pointer
                hover:text-white
                transition
                "
                />
            </div>
            <div
            className="
            flex
            flex-col
            gap-y-2
            px-3
            py-4
            ">
             {songs.map((item) =>(
                <MediaItem
                    onClick={(id: string) => onPlay(id)}
                    key={item.id}
                    data={item}
                />
             ))}
            </div>
        </div>
    );
}
export default Library;