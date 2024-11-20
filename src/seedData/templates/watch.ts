import { ThemeOptions } from "@mui/material";
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

export const home: HomeComponents = [
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
];

export default {
  name: "watch",
  theme,
  header,
  footer,
  home,
};
