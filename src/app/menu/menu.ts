import { CoreMenu } from "@core/types";

export const menu: CoreMenu[] = [
  {
    id: "category",
    title: "Categories",
    type: "item",
    icon: "home",
    url: "category",
  },
  {
    id: "administrator",
    title: "Administrator",
    type: "collapsible",
    icon: "shopping-cart",
    children: [
      {
        id: 'cours',
        title: 'Add Cours',
        type: 'item',
        icon: 'shopping-cart',
        url: "cours/add",
      },
      {
        id: 'categoryAdd',
        title: 'Add Category',
        type: 'item',
        icon: 'circle',
        url: "category/add",
      },
      {
        id: 'skill',
        title: 'Skills',
        type: 'item',
        icon: 'circle',
        url: "skill",
      }
    ]
  }
];
