import { paints } from "../../../constants/paintsConfig";
import { ROUTE_NAMES } from "../../../Router/routerNames";

export const BREADCRUMB = [
  {
    path: ROUTE_NAMES.HOME,
    breadcrumb: "Главная страница",
  },
  {
    path: ROUTE_NAMES.PRODUCTS_CATEGORIES,
    breadcrumb: "Продукты",
  },
  {
    path: ROUTE_NAMES.PRODUCT,
    breadcrumb: ({ match }) => {
      const { category, name } = match.params;
      const productName = paints[category].find(
        (product) => product.path === name
      );
      return productName.name;
    },
  },
  {
    path: ROUTE_NAMES.PALETTE,
    breadcrumb: "Палитра цветов",
  },
  {
    path: ROUTE_NAMES.ABOUT,
    breadcrumb: "О нас",
  },
];
