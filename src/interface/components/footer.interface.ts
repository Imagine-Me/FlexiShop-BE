import { IIcon } from "src/filestore/dto/icon.dto";
import { Filestore } from "src/filestore/entities/filestore.entity";
import { ILink } from "./home.interface";

interface IIconLinks {
  link: ILink;
  icon: IIcon;
}

interface ILinkMenu {
  title: string;
  links: {
    title: string;
    url: string;
  }[];
}

export interface IFooter {
  name: string;
  logo: Partial<Filestore>;
  socialMedia: IIconLinks[];
  copyright: string;
  linkMenu: ILinkMenu[];
}
