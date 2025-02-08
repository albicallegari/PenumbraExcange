export interface TabsProps {
    tabs: ITab[];
    tabActive: string;
    onChange: (value: string) => void;
}

export interface ITab {
    label: string;
    value: string;
}