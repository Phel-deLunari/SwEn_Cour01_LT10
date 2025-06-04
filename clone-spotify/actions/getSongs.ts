import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getSongs = async (): Promise<Song[]> => {
    const cookieStore = await cookies(); // <-- await cookies
    const supabase = createServerComponentClient({
        cookies: () => cookieStore, // <-- truyền function trả về cookieStore
    });

    const { data, error } = await supabase
        .from('songs')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.log(error);
    }

    return (data as any) || [];
};

export default getSongs;
