import { CoreMenu } from "@core/types";

export const menu: CoreMenu[] = [
  {
    id: "home",
    title: "MENU.HOME",
    type: "item",
    icon: "home",
    url: "home",
  },
  {
    id: "category",
    title: "MENU.Category",
    type: "collapsible",
    icon: "shopping-cart",
    children: [
      {
        id: 'shop',
        title: 'Shop',
        type: 'item',
        icon: 'circle',
        url: "shop",
      },
      {
        id: 'details',
        title: 'Details',
        type: 'item',
        icon: 'circle',
        url: "home",
      },
      {
        id: 'wishList',
        title: 'Wish List',
        type: 'item',
        icon: 'circle',
        url: "home",
      },
      {
        id: 'checkout',
        title: 'Checkout',
        type: 'item',
        icon: 'circle',
        url: "home",
      }
    ]
  }
];
