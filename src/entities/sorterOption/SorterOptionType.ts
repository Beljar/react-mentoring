export type SorterOptionType<T> = {
    key: string,
    display: string,
    rule: (data: T[]) => T[],
}