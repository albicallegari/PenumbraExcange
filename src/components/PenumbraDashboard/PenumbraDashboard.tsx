import { CARDS } from "@/constants/constants";
import DashboardCards from "./components/DashboardCards/DashboardCards";
import { DashboardSearch } from "./components/DashboardSearch/DashboardSearch";
import DashboardActivities from "./components/DashboardActivities/DashboardActivities";

export const PenumbraDashboard = () => {
  return (
    <div className="pt-14">
      <h3 className="font-headline text-white text-4xl ">
        Penumbra Blockchain Explorer
      </h3>
      <DashboardSearch />
      <DashboardCards cards={CARDS} />
      <DashboardActivities />
    </div>
  );
};

export default PenumbraDashboard;
