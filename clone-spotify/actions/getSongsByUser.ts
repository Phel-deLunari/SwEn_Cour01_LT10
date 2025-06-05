import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getSongsByUserId = async (): Promise<Song[]> => {
  const cookieStore = cookies(); // Lấy cookies từ Next.js headers
  const supabase = createServerComponentClient({ cookies: () => cookieStore }); // Truyền cookie đúng cách

  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching songs:", error.message);
    return [];
  }

  return data as Song[]; // Trả về mảng bài hát
};

export default getSongsByUserId;
