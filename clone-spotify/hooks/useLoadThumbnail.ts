import { useSupabaseClient } from "@supabase/auth-helpers-react";

import { PlayList } from "@/types";

const useLoadThumbnail = (playlist: PlayList | any) => {
  const supabaseClient = useSupabaseClient();

  if (!playlist || !playlist.thumbnail_path) return null;

  const { data: imageData } = supabaseClient.storage
    .from("playlist_thumbnail")
    .getPublicUrl(playlist.thumbnail_path);

  return imageData.publicUrl;
};

export default useLoadThumbnail;
