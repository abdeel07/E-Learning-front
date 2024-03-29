import { CoreMenu } from "@core/types";
import { environment } from 'environments/environment';

if(environment.isAuth == true){
    
}
const menuA: CoreMenu[] = [
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
        id: 'dash',
        title: 'Dashboard',
        type: 'item',
        icon: 'shopping-cart',
        url: "dash",
      },
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

const menuC: CoreMenu[] = [
  {
    id: "category",
    title: "Categories",
    type: "item",
    icon: "home",
    url: "category",
  }
];
export const menu: CoreMenu[] = (environment.isAuth ? menuC : menuA)

