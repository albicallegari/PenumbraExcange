import { ITab, TabsProps } from "./PenumbraTabs.model";

export const PenumbraTabs = ({ tabs, tabActive, onChange }: TabsProps) => {
  return (
    <div className="flex items-center gap-3 bg-light-gray-2 px-4 rounded-full">
      {tabs.map((tab: ITab, index) => (
        <div
          key={`${index}-${tab.value}`}
          style={
            tabActive === tab.value
              ? {
                  background:
                    "radial-gradient(50% 100% at 50% 100%, rgba(186, 77, 20, 0.35) 0%, rgba(186, 77, 20, 0) 95%)",
                }
              : {}
          }
        >
          <button
            className={`relative font-heading font-medium px-4 py-3 h-full transition-colors duration-300  ${
              tabActive === tab.value
                ? "text-white border-b-2 border-penumbra-orange"
                : "text-secondary border-transparent"
            }`}
            onClick={() => onChange(tab.value)}
          >
            {tab.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PenumbraTabs;
