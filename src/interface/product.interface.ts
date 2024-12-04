import { Filestore } from "src/filestore/entities/filestore.entity";

export interface IProductSearchResult {
  name: string;
  link: string;
  image?: Partial<Filestore>;
}
