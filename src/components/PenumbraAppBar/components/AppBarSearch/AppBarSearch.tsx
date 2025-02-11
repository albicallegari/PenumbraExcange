import Image from "next/image";

export const AppBarSearch = () => {
  return (
    <div className="flex items-center bg-light-gray-2 px-4 py-3 rounded-full w-[190px] border border-transparent focus-within:border-penumbra-orange">
      <Image
        src="/icon/search.svg"
        alt="search icon"
        width={14}
        height={14}
        priority
      />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent font-heading text-white outline-none px-2 ml-1"
      />
    </div>
  );
};

export default AppBarSearch;
