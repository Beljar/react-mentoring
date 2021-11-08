export type FilterOptionType<T> = {
  key: string;
  display: string;
  rule: (data: T[]) => T[];
};
