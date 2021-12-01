const getFormattedMonth = (date: Date): string => (date.getMonth() + 1).toString().padStart(2, '0');

const getFormattedDay = (date: Date): string => date.getDate().toString().padStart(2, '0');

export const dateToString = (date: Date): string =>
  `${date.getFullYear()}-${getFormattedMonth(date)}-${getFormattedDay(date)}`;
