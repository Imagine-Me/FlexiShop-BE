import { ThemeOptions } from "@mui/material";
import {
  AlignmentEnum,
  ColorEnum,
} from "src/interface/components/common.interface";
import { IFooter } from "src/interface/components/footer.interface";
import { IHeader } from "src/interface/components/header.interface";
import { HomeComponents } from "src/interface/components/home.interface";

const theme: ThemeOptions = {
  components: {
    MuiTextField: {
      defaultProps: {
        size: "small",
        fullWidth: true,
      },
    },
    MuiSelect: {
      defaultProps: {
        size: "small",
        fullWidth: true,
      },
    },
    MuiCard: {
      defaultProps: {
        variant: "elevation",
      },
      styleOverrides: {
        root: {
          borderRadius: "10px",
          boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.1),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
        },
      },
    },
  },
  palette: {
    mode: "light",
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
    primary: {
      main: "#3C3D37",
      dark: "#181C14",
      light: "#697565",
      contrastText: "#ECDFCC",
    },
    secondary: {
      main: "#F2F3F4",
      dark: "#D1D3D4",
      light: "#F8F9FA",
      contrastText: "#3C3D37",
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#c62828",
      contrastText: "#fff",
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100",
      contrastText: "#fff",
    },
    info: {
      main: "#0288d1",
      light: "#03a9f4",
      dark: "#01579b",
      contrastText: "#fff",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
      contrastText: "#fff",
    },
    grey: {
      "50": "#fafafa",
      "100": "#f5f5f5",
      "200": "#eeeeee",
      "300": "#e0e0e0",
      "400": "#bdbdbd",
      "500": "#9e9e9e",
      "600": "#757575",
      "700": "#616161",
      "800": "#424242",
      "900": "#212121",
      A100: "#f5f5f5",
      A200: "#eeeeee",
      A400: "#bdbdbd",
      A700: "#616161",
    },
    contrastThreshold: 3,
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    background: {
      paper: "#fff",
      default: "#fff",
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  typography: {
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
    h1: {
      fontSize: "36px",
      fontWeight: 600,
      lineHeight: "46px",
    },
    h2: {
      fontSize: "28px",
      fontWeight: 600,
      lineHeight: "38px",
    },
    h3: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "34px",
    },
    h4: {
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "30px",
    },
    h5: {
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "28px",
    },
    h6: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "26px",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
    },
  },
};

const header: IHeader = {
  name: "watchHeader",
  title: "Watches",
  logo: {
    name: "watch-log",
    url: "http://localhost:3000/static/843e677c-6369-4633-84ea-c5ce539820dc",
  },
  wishListIcon: { name: "FaRegHeart", type: "fa" },
  cartIcon: { name: "MdOutlineShoppingCart", type: "md" },
};

const footer: IFooter = {
  logo: {
    url: "http://localhost:3000/static/843e677c-6369-4633-84ea-c5ce539820dc",
    name: "watch-log",
  },
  name: "watchFooter",
  linkMenu: [
    { links: [{ url: "/home", title: "Home" }], title: "Pages" },
    {
      links: [
        { url: "/home", title: "New Arrivals" },
        { url: "/home", title: "Feature Products" },
        { url: "/home", title: "Brands" },
      ],
      title: "Products",
    },
    {
      links: [
        { url: "/home", title: "Terms And Conditions" },
        { url: "/home", title: "Policies" },
      ],
      title: "About",
    },
  ],
  copyright: "2024 FlexiShop. All rights reserved.",
  socialMedia: [
    {
      url: "https://www.facebook.com",
      icon: { name: "IoLogoFacebook", type: "io5" },
      title: "Facebook",
    },
    {
      url: "https://www.instagram.com",
      icon: { name: "AiFillInstagram", type: "ai" },
      title: "Instagram",
    },
    {
      url: "https://www.twitter.com",
      icon: { name: "FaTwitter", type: "fa" },
      title: "Twitter",
    },
    {
      url: "https://www.linkedin.com",
      icon: { name: "FaLinkedin", type: "fa6" },
      title: "LinkedIn",
    },
  ],
};

export const home: HomeComponents[] = [
  {
    name: "carousel1",
    data: [
      {
        name: "watch-1",
        url: "http://localhost:3000/static/a3b3e7b8-8a2d-4b54-a2d3-2f4868077ebe",
      },
      {
        name: "watch-2",
        url: "https://t3.ftcdn.net/jpg/05/88/96/12/360_F_588961271_RfOItwhZniSXm147QomUdB0r74xeFCfU.jpg",
      },
      {
        name: "watch-3",
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/89670937352801.573d3df298ad9.jpg",
      },
      {
        name: "watch-4",
        url: "https://img.pikbest.com/origin/06/43/38/95EpIkbEsTD94.jpg!w700wp",
      },
    ],
  },
  {
    name: "category1",
    data: {
      categories: [
        {
          icon: { name: "IoIosMale", type: "io" },
          category: "Male",
        },
        {
          icon: { name: "IoIosFemale", type: "io" },
          category: "Female",
        },
        {
          icon: { type: "io5", name: "IoWatchOutline" },
          category: "Smart watch",
        },
        {
          icon: { name: "IoStopwatchOutline", type: "io5" },
          category: "Analog watch",
        },
        {
          icon: { name: "TbDeviceWatchDollar", type: "tb" },
          category: "Premium watch",
        },
      ],
      link: {
        title: "See All",
        url: "/home",
      },
      title: "Shop By Category",
    },
  },
  {
    name: "productTile",
    data: {
      link: {
        title: "See All",
        url: "/home",
      },
      title: "New Arrivals",
      products: [
        {
          title: "Analog Watch  - For Men TW00ZR347",
          image: {
            url: "http://localhost:3000/static/76c57b5e-855f-4f0c-b104-191de547c479",
            name: "Analog Watch - For Men TW00ZR347",
          },
          price: 1500,
          rating: 4.5,
          description:
            "This is a high-quality analog watch for men. It has a stunning design and is made from durable leather.",
        },
        {
          title: "Analog Watch - For Women VH000008D",
          image: {
            url: "http://localhost:3000/static/b9142361-027a-41e9-a82d-d32c0e207145",
            name: "Analog Watch -",
          },
          price: 2500,
          rating: 3,
          description: "This is a high-quality analog watch for",
        },
        {
          title: "Minimalists Analog Watch  - For Men 38024PP25",
          image: {
            url: "http://localhost:3000/static/155bbc4b-ce67-4ef9-8fc2-9baababf5e40",
            name: "Minimalists Analog Watch -",
          },
          price: 999,
          rating: 5,
          description: "This is a high-quality analog watch for",
        },
        {
          title: "Analog Watch  - For Men Copper_31000",
          image: {
            url: "http://localhost:3000/static/843330c2-a0b7-43f7-9fa0-8d07b874648d",
            name: "Analog Watch -",
          },
          price: 1299,
          rating: 3.5,
          description: "This is a high-quality analog watch for",
        },
        {
          title: "Analog Watch  - For Men AS000010E",
          image: {
            url: "http://localhost:3000/static/2f401f09-9074-419e-a348-1fbe5278626f",
            name: "Analog Watch -",
          },
          price: 1099,
          rating: 4.5,
          description: "This is a high-quality analog watch for",
        },
        {
          title:
            "Elegant Series Square Analog Quartz For Men/Boys Analog Watch  - For Men RD-9102",
          image: {
            url: "http://localhost:3000/static/b9c731f8-a836-4945-bffd-b12b81c2d568",
            name: "Elegant Series Square Analog Quartz For Men/Boys Analog Watch -",
          },
          price: 6999,
          rating: 4.5,
          description: "This is a high-quality analog watch for",
        },
      ],
    },
  },
  {
    name: "tile1",
    data: {
      card1: {
        align: AlignmentEnum.LEFT,
        title1: "Watches",
        title2: "Your style delivered. Exclusively Online.",
        footer: "www.site.com",
        image: {
          url: "http://localhost:3000/static/91109a85-1e48-47e2-a5b5-d314181a2f97",
          name: "product -1 ",
        },
      },
      card2: {
        align: AlignmentEnum.LEFT,
        title1: "Timeless elegance",
        title2: "Discover our accessories collection",
        image: {
          url: "http://localhost:3000/static/2850f52d-bb17-4a91-b435-e0e2f464257a",
          name: "product -2 ",
        },
        color: ColorEnum.GREY,
      },
      card3: {
        align: AlignmentEnum.RIGHT,
        title1: "Find your perfect watch",
        title2: "Explore our latest collection",
        image: {
          url: "http://localhost:3000/static/7c1939bd-e648-4960-9931-c46c658ca800",
          name: "product -3 ",
        },
        color: ColorEnum.GREY,
      },
    },
  },
  {
    name: "tile2",
    data: {
      card1: {
        align: AlignmentEnum.LEFT,
        title1: "Timeless elegance",
        title2: "Discover our accessories collection",
        image: {
          url: "http://localhost:3000/static/2850f52d-bb17-4a91-b435-e0e2f464257a",
          name: "product - 1",
        },
        color: ColorEnum.PRIMARY,
      },
      card2: {
        align: AlignmentEnum.RIGHT,
        title1: "Find your perfect watch",
        title2: "Explore our latest collection",
        image: {
          url: "http://localhost:3000/static/7c1939bd-e648-4960-9931-c46c658ca800",
          name: "product - 2",
        },
        color: ColorEnum.SECONDARY,
      },
    },
  },
];

export default {
  name: "watch",
  theme,
  header,
  footer,
  home,
};
