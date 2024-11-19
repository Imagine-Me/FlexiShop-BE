import { Filestore } from "src/filestore/entities/filestore.entity";
import { IIcon } from "../general.interface";

export interface IHeader {
  logo?: Partial<Filestore>;
  title?: string;
  name: "watchHeader";
  wishListIcon: IIcon;
  cartIcon: IIcon;
}
