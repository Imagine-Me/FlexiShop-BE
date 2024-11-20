import { IIcon } from "src/filestore/dto/icon.dto";
import { Filestore } from "src/filestore/entities/filestore.entity";
// interface

export interface ILink {
  title: string;
  url: string;
}

export type Components = "carousel1" | "category1";

interface Component<T, E extends Components> {
  name: E;
  data: T;
}

// Carousel 1
type Carousel1 = Array<Partial<Filestore>>;

// Category 1
interface Category1 {
  title: string;
  categories: {
    icon: IIcon;
    category: string;
  }[];
  link: ILink;
}

export type HomeComponents =
  | Component<Carousel1, "carousel1">
  | Component<Category1, "category1">;
