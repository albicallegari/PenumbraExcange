import { useEffect, useState } from "react";
import Image from "next/image";

export const BlockProgressChart = () => {
  const totalBars = 20;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < totalBars ? prev + 1 : 0));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-2 items-end">
      <div className="flex items-center gap-1">
        {Array.from({ length: totalBars }).map((_, index) => (
          <div
            key={index}
            className={`w-[6px] h-[48px] rounded-lg transition-colors duration-300 ${
              index < progress ? "bg-cyan-400" : "bg-gray-700"
            }`}
          />
        ))}
      </div>
      <div className="gap-1 text-white text-sm ml-4 flex items-center">
        <Image
          src="/icon/block-icon.svg"
          alt="block icon"
          width={16}
          height={16}
          priority
        />
        <p className="text-xs text-secondary">Receiving new block {totalBars - progress}s</p>
      </div>
    </div>
  );
};

export default BlockProgressChart;
