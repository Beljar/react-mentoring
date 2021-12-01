export type GenreName =
  | 'action'
  | 'adventure'
  | 'drama'
  | 'biography'
  | 'music'
  | 'oscar'
  | 'documentary'
  | 'comedy'
  | 'horror'
  | 'crime';

export type Genre = {
  id: string | number;
  nameShort: GenreName;
  nameFull?: string;
};
