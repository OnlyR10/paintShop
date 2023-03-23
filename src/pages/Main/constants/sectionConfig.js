import Facade from "../../../assets/images/facade.jpg";
import Interior from "../../../assets/images/interior.jpg";
import Primer from "../../../assets/images/primer.jpg";
import Roofing from "../../../assets/images/roofing.jpg";
import Textured from "../../../assets/images/textured.jpg";
import videoM from "../../../assets/video/Roofing.mp4";
import videoW from "../../../assets/video/Roofing.webm";
import { categoriesOfPaints } from "../../../constants/CategoryOfPaints";

export const sectionConfig = [
  {
    header: "Для интерьеров",
    image: Interior,
    category: categoriesOfPaints.interior,
    purpose:
      "Линейка базовых интерьерных красок middle-сегмента с идеальным соотношением высокого качества и доступной цены",
  },
  {
    header: "Краска для фасадов",
    image: Facade,
    category: categoriesOfPaints.facade,
    purpose:
      "Атмосферостойкие акриловая, силиконовые и силикатные краски для высококачественной отделки фасадов",
  },
  {
    header: "Краска для крыш и цоколей",
    image: Roofing,
    videos: { webm: videoW, mp4: videoM },
    category: categoriesOfPaints.roofing,
    purpose: "Специальная краска для окраски шифера и кровли",
  },
  {
    header: "Декоративные акриловые штукатурка",
    image: Textured,
    category: categoriesOfPaints.textured,
    purpose:
      "Готовые к применению штукатурки, «камешковой» фактурой, средним и крупным зерном",
  },
  {
    header: "Грунтовки",
    image: Primer,
    category: categoriesOfPaints.primer,
    purpose:
      "Универсальные адгезионные, гидрофобизирующие и готовые к применению грунтовки для фасадов и интерьеров",
  },
];
