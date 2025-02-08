import { BLOCKS_LIST, TRANSACTIONS_LIST } from "@/constants/constants";
import BlocksTable from "./components/BlocksTable";
import TransactionsTable from "./components/TransactionsTable";

export const DashboardActivities = () => {
  return (
    <div id="DashboardActivities-wrapper" className="flex gap-4 mt-5 pb-8">
      <BlocksTable blocks={BLOCKS_LIST} />
      <TransactionsTable transactions={TRANSACTIONS_LIST} />
    </div>
  );
};

export default DashboardActivities;
