export interface SelectOptionsProps {
  label: string;
  value: string;
}

export interface SelectProps {
  options: SelectOptionsProps[];
  initialValue: string;
  onChange: (value: string) => void;
}
