import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import PageContent from "./components/PageContext";
import getSongs from "@/actions/getSongs";
import getPlaylistByUserId from "@/actions/getPlaylistByUserId";

// This page will not be cached, and the data will be always up-to-date
export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();
  const playlist = await getPlaylistByUserId();

  return (
    <div className="bg-gradient-to-br from-neutral-900 via-black to-neutral-800 rounded-2xl h-full w-full overflow-hidden overflow-y-auto p-10 min-h-screen shadow-2xl">
      <Header className="bg-gradient-to-r from-purple-900 via-black to-neutral-900 shadow-lg rounded-2xl p-8">
        <div className="mb-14">
          <h1 className="text-white text-6xl font-extrabold mb-8 drop-shadow-2xl tracking-tight leading-tight">Welcome Back !!</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mt-6">
            <ListItem
              name="Liked Songs"
              href="liked"
              image="/images/liked.png"
              data=""
            />
            {playlist.map((item: any) => (
              <ListItem
                key={item.id}
                name={item.Name}
                href={`playlist/${item.Name}`}
                image="N/A"
                data={item}
              />
            ))}
          </div>
        </div>
      </Header>
      <div className="mt-14 mb-14 px-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-white text-4xl font-bold tracking-tight">Newest Songs</h1>
        </div>
        <div className="rounded-2xl bg-neutral-900/90 p-8 shadow-2xl border border-neutral-800 backdrop-blur-md">
          <PageContent songs={songs} />
        </div>
      </div>
    </div>
  );
}
