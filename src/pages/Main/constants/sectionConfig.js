import Facade from "../../../assets/images/facade.jpg";
import { categoriesOfPaints } from "../../../constants/CategoryOfPaints";

export const sectionConfig = [
  {
    header: "Для интерьеров",
    Image: Facade,
    category: categoriesOfPaints.interior,
    purpose:
      "Линейка базовых интерьерных красок middle-сегмента с идеальным соотношением высокого качества и доступной цены",
  },
  {
    header: "Краска для фасадов",
    Image: Facade,
    category: categoriesOfPaints.facade,
    purpose:
      "Атмосферостойкие акриловая, силиконовые и силикатные краски для высококачественной отделки фасадов",
  },
  {
    header: "Краска для крыш и цоколей",
    Image: Facade,
    category: categoriesOfPaints.roofing,
    purpose: "Специальная краска для окраски шифера и кровли",
  },
  {
    header: "Декоративные акриловые штукатурка",
    Image: Facade,
    category: categoriesOfPaints.textured,
    purpose:
      "Готовые к применению штукатурки, «камешковой» фактурой, средним и крупным зерном",
  },
  {
    header: "Грунтовки",
    Image: Facade,
    category: categoriesOfPaints.primer,
    purpose:
      "Универсальные адгезионные, гидрофобизирующие и готовые к применению грунтовки для фасадов и интерьеров",
  },
];
