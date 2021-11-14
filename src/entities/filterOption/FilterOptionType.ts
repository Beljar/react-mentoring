export type FilterOptionType<T> = {
  key: string | number;
  display: string;
  value: string;
  rule: (data: T[]) => T[];
};
