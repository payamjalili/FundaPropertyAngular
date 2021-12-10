import { IMediaItem } from '.';

export interface IMedia {
  Categorie: number;
  ContentType: number;
  Id: string;
  IndexNumber: number;
  MediaItems: IMediaItem[];
  Soort: number;
}
