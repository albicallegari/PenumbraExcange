import { PenumbraChipsProps } from "./PenumbraChips.model";

export const PenumbraChips = ({ price, performance }: PenumbraChipsProps) => {
  return (
    <div className="bg-light-gray bg-opacity-15 text-white px-4 py-3 rounded-full font-medium">
      <p className="text-secondary font-heading">
        UM Price: <span className="text-white">{price}</span>{" "}
        <span className="text-green-400"> ({performance})</span>
      </p>
    </div>
  );
};

export default PenumbraChips;
