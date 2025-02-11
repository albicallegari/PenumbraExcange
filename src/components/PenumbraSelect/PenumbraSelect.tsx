import { SelectProps } from "./PenumbraSelect.model";
import Image from "next/image";

export const PenumbraSelect = ({
  options,
  initialValue,
  onChange,
}: SelectProps) => {
  return (
    <div className="relative bg-light-gray-2 px-4 py-3 rounded-full w-[110px]" >
      <select
        className="text-white text-sm/1 !font-headline font-medium bg-transparent bg-opacity-15 appearance-none"
        value={initialValue}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Image
        src="./icon/arrows.svg"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white pointer-events-none"
        alt="arrows"
        width={10}
        height={10}
      />
    </div>
  );
};

export default PenumbraSelect;
