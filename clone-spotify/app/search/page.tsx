import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import SearchContent from "./components/SearchContent";

interface SearchProps {
  searchParams: Record<string, string> | URLSearchParams | Promise<Record<string, string> | URLSearchParams>;
}

export const revalidate = 0;

const Search = async ({ searchParams }: SearchProps) => {
  const resolvedParams = await searchParams;

  let pageTitle = "";
  if (resolvedParams instanceof URLSearchParams) {
    pageTitle = resolvedParams.get("title") || "";
  } else {
    pageTitle = resolvedParams.title || "";
  }

  const songs = await getSongsByTitle(pageTitle);

  return (
    <div
      className="
        bg-neutral-900
        rounded-lg
        h-full
        w-full
        overflow-hidden
        overflow-y-auto
        "
    >
    <Header className="from-bg-neural-900">
        <div className="mb-2 flex flex-col gap-y-6">
            <h1 className ="text-white text-3xl font-semibold">
                Search
            </h1>
            <SearchInput/>
        </div>
    </Header>
    <SearchContent songs={songs}/>
    </div>
  );
};

export default Search;