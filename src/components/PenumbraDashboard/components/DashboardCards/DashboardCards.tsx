'use client';

import BlockProgressChart from "../Charts/BlocksProgressChart";
import CustomBarChart from "../Charts/CustomBarChart";
import DynamicBarChart from "../Charts/DynamicBarChart";
import { DashboardCardsProps } from "./DashboardCards.model";
import Image from "next/image";

export const DashboardCards = ({ cards }: DashboardCardsProps) => {
  return (
    <div className="flex mt-16 gap-4">
      {cards.map((card, index) => (
        <div
          key={`card-${index}`}
          className="w-full h-[196px] rounded-2xl"
          style={{
            background: card.background,
          }}
        >
          <div id={`${index}-card-wrapper`} className="flex h-full">
            <div className="p-5 pr-0 relative h-full">
              <div className="flex items-center gap-[10px]">
                <Image
                  src={card.icon}
                  alt="card icon"
                  width={24}
                  height={24}
                  priority
                />
                <p className="text-secondary font-medium font-heading text-lg whitespace-nowrap">
                  {card.title}
                </p>
              </div>
              <p className="mt-1 tracking-[-0.15rem] text-white font-mono text-3xl font-medium whitespace-nowrap">
                {card.data}
              </p>
              <p className="absolute text-xs bottom-5 left-5 text-secondary">
                {card.cornerInfo}
              </p>
            </div>
            <div className="p-5 pl-0 w-full flex flex-col justify-end">
              {card.chart === "blocks-chart" && <BlockProgressChart />}
              {card.chart === "bar-chart" && <DynamicBarChart />}
              {card.chart === "custom-chart" && <CustomBarChart />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
