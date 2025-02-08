import { useEffect, useState } from "react";

const generateRandomBars = (count: number) => {
  return Array.from({ length: count }, () => ({
    bottom: Math.floor(Math.random() * 40) + 10, // Altezza pallino azzurro
    top: Math.floor(Math.random() * 40) + 20, // Altezza pallino arancione (sempre sopra)
  }));
};

export const CustomBarChart = () => {
  const [bars, setBars] = useState<{ bottom: number; top: number }[] | null>(
    null
  );

  useEffect(() => {
    setBars(generateRandomBars(21));
    const interval = setInterval(() => {
      setBars(generateRandomBars(21));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!bars) return null;
  return (
    <div className="flex flex-col gap-1 items-end">
      <div className="flex items-end w-full h-40 gap-[3px] justify-end">
        {bars.map((bar, index) => (
          <div key={index} className="flex flex-col items-center w-[8px]">
            <div className="w-[8px] h-[8px] rounded-full bg-orange-500" />
            <div
              className="w-[8px] bg-white"
              style={{
                height: `${bar.top - bar.bottom}px`,
                opacity: 0.1,
              }}
            />
            <div
              className="w-[8px] h-[8px] rounded-full bg-teal-400"
              style={{ marginBottom: `${bar.bottom}px` }}
            />
          </div>
        ))}
      </div>
      <div className="text-xs text-secondary flex justify-between w-[228px]">
        <p>Jan 13</p>
        <p>Jan 14</p>
        <p>Today</p>
      </div>
    </div>
  );
};

export default CustomBarChart;
