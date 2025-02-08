import { useEffect, useState } from "react";

const generateRandomBars = (count: number) => {
  return Array.from({ length: count }, () => ({
    bottom: Math.floor(Math.random() * 40) + 10,
    top: Math.random() > 0.5 ? Math.floor(Math.random() * 20) + 5 : 0,
  }));
};

export const DynamicBarChart = () => {
  const [bars, setBars] = useState<{ bottom: number; top: number }[] | null>(
    null
  );

  useEffect(() => {
    setBars(generateRandomBars(31));
    const interval = setInterval(() => {
      setBars(generateRandomBars(31));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!bars) return null;
  return (
    <div className="flex flex-col gap-1 items-end">
      <div className="flex items-end w-full h-40 gap-[2px] justify-end">
        {bars.map((bar, index) => (
          <div key={index} className="flex flex-col items-center w-[6px]">
            {bar.top > 0 && (
              <div
                className="w-full rounded-full"
                style={{
                  height: `${bar.top}px`,
                  background: "rgba(255, 255, 255, 0.12)",
                }}
              />
            )}
            <div
              className="w-full rounded-full bg-penumbra-orange"
              style={{ height: `${bar.bottom}px` }}
            />
          </div>
        ))}
      </div>
      <div className="text-xs text-secondary flex justify-between w-[250px]">
        <p>12</p>
        <p>16</p>
        <p>20</p>
      </div>
    </div>
  );
};

export default DynamicBarChart;
