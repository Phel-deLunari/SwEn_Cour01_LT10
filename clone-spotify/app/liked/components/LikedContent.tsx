"use client";

import { Song } from "@/types";
import { useRouter } from "next/navigation";

interface LikedContentProps {
    songs: Song[];
}

const LikeContent: React.FC<LikedContentProps> = ({
    songs
}) => {
    const router = useRouter();
    return(
        <div>
            Liked content!
        </div>
    );
}

export default LikeContent;