import Image from "next/image";

export const DashboardSearch = () => {
  return (
    <div className="flex items-center bg-light-gray-2 px-4 py-3 mt-3 rounded-lg w-[631px] h-[56px] border border-transparent focus-within:border-penumbra-orange">
      <Image
        src="/icon/search.svg"
        alt="search icon"
        width={14}
        height={14}
        priority
      />
      <input
        type="text"
        placeholder="Search by address, hash number, blocks, etc"
        className="bg-transparent font-heading text-white outline-none px-2 ml-1 w-full"
      />
    </div>
  );
};
