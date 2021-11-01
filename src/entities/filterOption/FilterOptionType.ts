export type FilterOptionType<T> = {
    key: string | number,
    display: string,
    rule: (data: T[]) => T[],
}
