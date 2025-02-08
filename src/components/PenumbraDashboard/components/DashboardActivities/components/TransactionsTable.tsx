import { useState } from "react";
import { TransactionsTableProps } from "../DashboardActivities.model";
import { CheckCircle, Copy } from "lucide-react";
import Image from "next/image";

export const TransactionsTable = ({ transactions }: TransactionsTableProps) => {
  const [copiedHash, setCopiedHash] = useState<string | null>(null);

  const handleCopy = (hash: string) => {
    navigator.clipboard.writeText(hash);
    setCopiedHash(hash);
    setTimeout(() => setCopiedHash(null), 2000);
  };
  return (
    <div className="bg-light-gray-2 rounded-2xl w-full p-5">
      <div className="flex justify-between w-full">
        <p className="text-2xl text-white">Latest Blocks</p>
        <button className="text-white bg-light-gray bg-opacity-5 px-4 py-2 font-medium rounded-full">
          View All
        </button>
      </div>
      <table className="table-fixed w-full border-collapse mt-4">
        <thead>
          <tr className="border-b border-gray-700 text-left text-secondary text-sm">
            <th className="py-2 font-mono">Tx Hash</th>
            <th className="py-2 px-8 font-mono">Block Height</th>
            <th className="py-2 font-mono">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((trans, index) => (
            <tr
              key={index}
              className={`${
                index < transactions.length - 1
                  ? "border-b border-gray-800"
                  : ""
              }  hover:bg-gray-900`}
            >
              <td className="py-2 text-light-gray font-mono tracking-[-0.05rem]">
                <div className="flex items-center gap-2 w-full">
                  <Image
                    src={trans.icon}
                    alt="Block Icon"
                    width={16}
                    height={16}
                  />
                  <span>{trans.txHash}</span>
                  <button onClick={() => handleCopy(trans.txHash)}>
                    {copiedHash === trans.txHash ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400 hover:text-white" />
                    )}
                  </button>
                </div>
              </td>
              <td className="py-2 text-light-gray font-mono tracking-[-0.05rem]">
                <div className="flex items-center gap-2 w-full ml-8">
                  <Image
                    src={trans.blockHeight.icon}
                    alt="Block Icon"
                    width={16}
                    height={16}
                  />
                  {trans.blockHeight.value}
                </div>
              </td>
              <td className="py-[6px] text-light-gray font-mono tracking-[-0.05rem]">
                <div className="flex items-center gap-2 text-right pr-3 w-full">
                  <p className="bg-light-gray bg-opacity-5 px-4 rounded-full text-sm whitespace-nowrap py-2 overflow-hidden text-ellipsis w-fit max-w-[200px]">
                    {trans.actions.label}
                  </p>
                  {trans.actions.other && (
                    <span className="ml-2 text-gray-400">
                      {trans.actions.other}
                    </span>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
