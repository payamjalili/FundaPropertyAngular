import { IKenmerken, IMedia } from '.';

export interface IProperty {
  Adres: string;
  Postcode: string;
  Plaats: string;
  WoonOppervlakte: number;
  PerceelOppervlakte: number;
  PrijsGeformatteerd: string;
  VolledigeOmschrijving: string;
  Kenmerken: IKenmerken[];
  Media: IMedia[];
}
