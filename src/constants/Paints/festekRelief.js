import Center from "../../assets/images/product/relief/center.webp";
import Left from "../../assets/images/product/relief/left.webp";
import Relief from "../../assets/images/products/relief.webp";
import { categoriesOfPaints } from "../categoryOfPaints";

export const relief = {
  category: [categoriesOfPaints.textured],
  path: "festek_relief",
  name: "FESTEK-RELIEF",
  header: "Краска фактурная акриловая «FESTEK-RELIEF»",
  link: "https://drive.google.com/file/d/1sVNAQFiaYeEpOWrjcSkMl30v7Fvcukhr/view?usp=sharing",
  price: "180,00",
  productsPage: {
    title: "Декоративная акриловая штукатурка",
    text: "Готовая к применению штукатурка, «камешковой» фактурой, средним и крупным зерном",
  },
  images: {
    products: Relief,
    product: [Center, Left],
  },
  documentation: {
    description: {
      purpose: {
        value:
          "Для получения декоративно-защитного покрытия с рельефной фактурой по бетонным, кирпичным, оштукатуренным, гипсокартонным, зашпатлеванным и др. минеральным поверхностям. Используется для наружной и внутренней окраски зданий и сооружений (жилые, административные, промышленные, бытовые, складские помещения и т. д.), отделки интерьеров с повышенными эксплуатационными и пожарно-техническими требованиями (гостиницы, подъезды жилых домов, холлы, коридоры,лестничные клетки, производственные помещения), а также индивидуального жилья.",
        label: "Назначение",
      },

      properties: {
        value:
          "Образует паропроницаемое «дышащее» покрытие, не препятствующее естественной регуляции влажности, стойкое к воздействию климатических факторов. Отличается высокой адгезией к основанию и укрывистостью. Краска содержит структурный наполнитель, который позволяет визуально скрывать мелкие дефекты оснований, что значительно снижает трудозатраты на подготовку поверхности. Возможно нанесение без предварительного шпатлевания. Прогнозируемый срок службы покрытия при соблюдении технологии нанесения – не менее 8 лет в условиях умеренного климата.",
        label: "Свойства",
      },

      composition: {
        value:
          "Водная дисперсия акриловых сополимеров, пигменты, специальные наполнители, функциональные добавки, вода.",
        label: "Состав",
      },

      colorAndAppearanceCoatings: {
        value:
          "Цвет покрытия – должен находиться в пределах допускаемых отклонений, установленных контрольными образцами цвета. После высыхания краска должна образовывать шероховатую матовую поверхность без кратеров и трещин.",
        label: "Цвет и внешний вид покрытия",
      },

      technicalData: [
        {
          qualityIndicators: "Массовая доля нелетучих веществ, %",
          value: "70-80",
        },
        {
          qualityIndicators: "Показатель концентрации ионов водорода, рН",
          value: "7,0-9,5",
        },
        {
          qualityIndicators:
            "Время высыхания до степени 3 при температуре (20 ± 2) °С, ч, не более",
          value: "",
        },
        { qualityIndicators: "- до 0.5 мм", value: "2" },
        { qualityIndicators: "- 0,5 - 0,1 мм", value: "3" },
        {
          qualityIndicators: "- 1.0 - 1.5 мм",
          value: "4",
        },
        /*{
          qualityIndicators:
            "Время высыхания до степени 3 при температуре (20 ± 2) °С, ч, не более",
          value: "2",
        },*/
        {
          qualityIndicators:
            "Условная светостойкость покрытия за 24 ч (изменение коэффициента диффузного отражения), %, не более",
          value: "5",
        },
        {
          qualityIndicators:
            "Адгезия покрытия к основанию, Мпа, (по ГОСТ 28574 п.5) не менее",
          value: "0,8",
        },
        {
          qualityIndicators:
            "Стойкость покрытия к статическому воздействию воды при температуре (20 ± 2) °С, ч, не менее",
          value: "24",
        },
        /* {
          qualityIndicators:
            "Стойкость покрытия при температуре (20±2) °С к статическому воздействию рабочих дезинфицирующих растворов, мин, не менее:",
          value: "",
        },
        {
          qualityIndicators: "- «Гексадекон», «Дескоцид», «Полидез»",
          value: "30",
        },
        {
          qualityIndicators: "- «Триацид»",
          value: "60",
        },
        {
          qualityIndicators: "- «КДИ»",
          value: "120",
        },*/
        {
          qualityIndicators:
            "Коэффициент паропроницаемости, мг/(м∙ч∙Па), не менее",
          value: "0,015",
        },
        {
          qualityIndicators: "Морозостойкость покрытия, циклы, не менее",
          value: "50",
        },
        /*{
          qualityIndicators:
            "Устойчивость к воздействию переменных температур, циклы, (по ГОСТ 27037) не менее",
          value: "10",
        },*/
        {
          qualityIndicators:
            "Стойкость покрытия к воздействию климатических факторов, циклы, не менее",
          value: "100",
        },
        {
          qualityIndicators:
            "Срок службы покрытия в условиях эксплуатации ХЛ1, УХЛ1, лет, не менее",
          value: "8",
        },
      ],

      package: { value: "Пластиковые ведра: 11л, 20л", label: "Упаковка" },
    },

    applicationTechnology: {
      suitableSubstrates: {
        value:
          "Бетонные, кирпичные, оштукатуренные и другие минеральные поверхности, в том числе системы теплоизоляции фасадов.",
        label: "Пригодные подложки",
      },

      preparationSurfaces: {
        value:
          "Перед применением поверхность очистить от пыли, грязи, разделительных жидкостей, меловых, известковых, непрочно держащихся и несовместимых покрытий (силикатные, масляные и др. ЛКМ). При наличии биопоражений и высолов, удалить их механически или при помощи моек высокого давления,и при необходимости обработать специальными составами.",
        label: "Подготовка поверхности",
      },

      coatingSystem: {
        value: "",
        label: "Система покрытия",
      },

      methodAndConditionsDrawing: {
        value:
          "Работы проводить при t окружающего воздуха, грунтовки и поверхности не ниже 10 °С. Влажность бетонных, каменных, оштукатуренных и зашпатлеванных оснований должна быть не более 8%, влажность воздуха при фасадных работах – 40 - 80 %, внутри помещений – 40 - 60%. Не допускается нанесение и высыхание при неблагоприятных погодных условиях (жара, дождь, туман, выпадение росы, сильный ветер). Перед применением краску тщательно перемешать и наносить на поверхность: Технология применения - -Кистью (в труднодоступных местах, точечными движениями); -Специальным фактурным валиком; -Пневматическим методом распылением только для размера частиц зерна 1,5мм ; Краска готова к применению. При необходимости допускается разбавление водой не более 5 %. После работы инструмент, пятна краски отмыть теплой водой с мылом до высыхания краски.",
        label: "Способ и условия нанесения",
      },

      temperature: {
        value:
          "Промежуточная сушка каждого слоя в течение 4 ч при температуре (20±2) °С. При более низкой температуре и (или) повышенной влажности время высыхания может увеличиваться.",
        label: "Температурный режим, время высыхания",
      },

      consumption: {
        value:
          "Ориентировочный - с размером частиц структурного наполнителя 0,5 мм - до 1000 г/м2; 1,0 мм – до 1300 г/м2; 1,5мм - до 1500г/м2 . Расход зависит от фракции наполнителя, состояния и подготовки поверхности, применяемого оборудования, квалификации работника и более точно определяется путем нанесения пробного покрытия.",
        label: "Расход",
      },
    },

    additionalInformation: {
      transportationAndStorage: {
        value: "В плотно закрытой таре при температуре выше 5 °С.",
        label: "Транспортировка и хранение",
      },

      measuresPrecautions: {
        value:
          "Краска пожаровзрывобезопасна. Хранить в недоступном для детей месте. При попадании в глаза немедленно промыть водой. Не допускать попадания в сточные воды. Не смешивать с другими лакокрасочными материалами и растворителями. Для рук применять резиновые перчатки, для защиты органов дыхания – индивидуальные средства защиты. Для защиты глаз - защитные очки.",
        label: "Меры предосторожности",
      },

      recycling: {
        value:
          "Остатки краски после высыхания и пустую упаковку утилизировать как бытовой мусор. Полная информация по безопасному обращению и утилизации – в паспорте безопасности.",
        label: "Утилизация отходов",
      },

      warrantyPeriod: {
        value:
          "24 месяца с даты изготовления в упаковке производителя при соблюдении условий транспортирования и хранения.",
        label: "Гарантийный срок",
      },
    },
  },
};
