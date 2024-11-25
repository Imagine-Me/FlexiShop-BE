import {
  AlignmentEnum,
  ColorEnum,
} from "src/interface/components/common.interface";
import { HomeComponents } from "src/interface/components/home.interface";

export const components: HomeComponents[] = [
  {
    name: "carousel1",
    className: "watchPadding",
    description:
      "The full-screen image carousel automatically transitions between high-resolution images, offering a seamless and visually engaging experience with smooth scrolling.",
    data: {
      images: [
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
  },
  {
    name: "category1",
    className: "watchPadding",
    description:
      "The configurable category cards component allows users to display and customize category-based cards, offering flexibility in layout, content, and style to suit different needs and preferences.",
    data: {
      categories: [
        {
          icon: { name: "IoIosMale", type: "io" },
          category: "Male",
          link: {
            title: "Male",
            url: "/home",
          },
        },
        {
          icon: { name: "IoIosFemale", type: "io" },
          category: "Female",
          link: {
            title: "Female",
            url: "/home",
          },
        },
        {
          icon: { type: "io5", name: "IoWatchOutline" },
          category: "Smart watch",
          link: {
            title: "Smart Watch",
            url: "/home",
          },
        },
        {
          icon: { name: "IoStopwatchOutline", type: "io5" },
          category: "Analog watch",
          link: {
            title: "Analog Watch",
            url: "/home",
          },
        },
        {
          icon: { name: "TbDeviceWatchDollar", type: "tb" },
          category: "Premium watch",
          link: {
            title: "Premium Watch",
            url: "/home",
          },
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
    className: "watchPadding",
    description:
      "The product details card component displays essential information about a product, including images, descriptions, pricing, and other key details, in a neatly organized and user-friendly card format.",
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
    className: "watchPadding",
    description:
      "Tile1 is a customizable component that contains three cards, allowing full flexibility in content, layout, and style, to suit various design and functional needs.",
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
    className: "watchPadding",
    description:
      "Tile2 is a customizable component that contains two cards, offering the same flexibility in content, layout, and style as Tile1, but designed for a more compact presentation.",
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
  {
    name: "contact1",
    description:
      "Contact1 is a fully customizable component designed to display contact information such as phone numbers, email addresses, and physical locations, with flexible options for layout and styling.",
    data: {
      title1: "We're always here to help",
      title2: "You can get help by choosing from any of these options",
      contacts: [
        {
          icon: { name: "AiOutlineQuestionCircle", type: "ai" },
          title: "Help Center",
          contact: "help.mail.com",
        },
        {
          icon: { name: "IoCallOutline", type: "io5" },
          title: "Phone",
          contact: "+91 9876543210",
        },
        {
          icon: { name: "MdOutlineEmail", type: "md" },
          title: "Email Support",
          contact: "help.mail.com",
        },
      ],
    },
  },
];
