import { IIcon } from "src/filestore/dto/icon.dto";
import { Filestore } from "src/filestore/entities/filestore.entity";
import { AlignmentEnum, ColorEnum } from "./common.interface";
// interface

export interface ILink {
  title: string;
  url: string;
}

interface IProductModel {
  title: string;
  image: Partial<Filestore>;
  price: number;
  rating: number;
  description: string;
  link?: ILink;
}
interface CommonCardProps {
  image: Partial<Filestore>;
  title1: string;
  title2: string;
  align: AlignmentEnum;
  buttonText?: string;
  color?: ColorEnum;
}
interface Contacts {
  icon: IIcon;
  title: string;
  contact: string;
}

export type Components =
  | "carousel1"
  | "category1"
  | "productTile"
  | "tile1"
  | "tile2"
  | "contact1";

interface Component<T, E extends Components> {
  name: E;
  data: T;
  description: string;
  styles?: React.CSSProperties;
  className?: string;
}

// Carousel 1
type Carousel1 = Array<Partial<Filestore>>;

// Category 1
interface Category1 {
  title: string;
  categories: {
    icon: IIcon;
    category: string;
    link: ILink;
  }[];
  link: ILink;
}

// Product Tile
interface ProductTile {
  products: IProductModel[];
  title: string;
  link: ILink;
}

// Tile 1
export interface Tile1Props {
  card1: {
    image: Partial<Filestore>;
    title1: string;
    title2: string;
    align: AlignmentEnum;
    footer: string;
  };
  card2: CommonCardProps;
  card3: CommonCardProps;
}

// Tile 2
export interface Tile2Props {
  card1: CommonCardProps;
  card2: CommonCardProps;
}

// Contact 1
export interface Contact1Props {
  title1: string;
  title2: string;
  contacts: Contacts[];
}

export type HomeComponents =
  | Component<Carousel1, "carousel1">
  | Component<Category1, "category1">
  | Component<ProductTile, "productTile">
  | Component<Tile1Props, "tile1">
  | Component<Tile2Props, "tile2">
  | Component<Contact1Props, "contact1">;
