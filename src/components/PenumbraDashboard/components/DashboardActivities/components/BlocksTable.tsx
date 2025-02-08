import { BlocksTableProps } from "../DashboardActivities.model";
import Image from "next/image";

export const BlocksTable = ({ blocks }: BlocksTableProps) => {
  return (
    <div className="bg-light-gray-2 rounded-2xl w-full p-5">
      <div className="flex justify-between w-full">
        <p className="text-2xl text-white">Latest Blocks</p>
        <button className="text-white bg-light-gray bg-opacity-5 px-4 py-2 font-medium rounded-full">
          View All
        </button>
      </div>
      <table className="w-full border-collapse mt-4">
        <thead>
          <tr className="border-b border-gray-700 text-left text-secondary text-sm">
            <th className="py-2 font-mono">Block Height</th>
            <th className="py-2 font-mono">Time</th>
            <th className="py-2 font-mono text-right pr-3">Txs</th>
          </tr>
        </thead>
        <tbody>
          {blocks.map((block, index) => (
            <tr
              key={index}
              className={`${
                index < blocks.length -1 ? "border-b border-gray-800" : ""
              }  hover:bg-gray-900`}
            >
              <td className="py-3 flex items-center gap-2 text-light-gray font-mono tracking-[-0.05rem]">
                <Image
                  src={block.icon}
                  alt="Block Icon"
                  width={16}
                  height={16}
                />
                {block.blockHeight}
              </td>
              <td className="py-3 text-light-gray font-mono tracking-[-0.05rem]">
                {block.time}
              </td>
              <td className="py-3 text-light-gray font-mono tracking-[-0.05rem] text-right pr-3">
                {block.tsx}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlocksTable;
