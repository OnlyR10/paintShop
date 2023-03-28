import Center from "../../assets/images/product/insideEco/center.jpg";
import Left from "../../assets/images/product/insideEco/left.jpg";
import InsideEco from "../../assets/images/products/insideEco.jpg";
import { categoriesOfPaints } from "../CategoryOfPaints";

export const insideEco = {
  category: [categoriesOfPaints.interior],
  path: "festek_inside_eco",
  name: "FESTEK-INSIDE ECO",
  header: "Краска интерьерная акриловая «FESTEK-INSIDE ECO»",
  productsPage: {
    title: "Интерьерная «FESTEK-INSIDE ECO»",
    text: "Матовая краска для окраски стен и потолков с умеренной эксплуатационной нагрузкой",
  },
  images: {
    products: InsideEco,
    product: [Center, Left],
  },
  documentation: {
    description: {
      purpose: {
        value:
          "Для окраски стен и потолков (кроме деревянных) в жилых и административных помещениях с умеренной влажностью и стандартной эксплуатационной нагрузкой (спальни, гостиные, коридоры, холлы, офисные помещения) по бетонным, кирпичным, оштукатуренным, зашпатлеванным, гипсокартонным и другим минеральным поверхностям. Допускается нанесение по обоям, предназначенным под покраску.",
        label: "Назначение",
      },

      properties: {
        value:
          "Образует матовое «дышащее» покрытие, обладающее высокой укрывистостью. Не разбрызгивается, легко наносится. Устойчива к легкой влажной уборке.",
        label: "Свойства",
      },

      composition: {
        value:
          "Водная дисперсия акриловых сополимеров, пигменты, наполнители, функциональные добавки, вода.",
        label: "Состав",
      },

      colorAndAppearanceCoatings: {
        value:
          "Цвет покрытия – должен находиться в пределах допускаемых отклонений, установленных контрольными образцами. Внешний вид – после высыхания краска должна образовывать однородную без кратеров, пор и морщин поверхность.",
        label: "Цвет и внешний вид покрытия",
      },

      technicalData: [
        {
          qualityIndicators: "Массовая доля нелетучих веществ, %",
          value: "56 - 68",
        },
        {
          qualityIndicators: "Показатель концентрации ионов водорода, pH",
          value: "7,0 - 9,5",
        },
        {
          qualityIndicators: "Степень перетира, мкм, не более",
          value: "70",
        },
       /* {
          qualityIndicators:
            "Укрывистость высушенного покрытия, г/м2, не более",
          value: "250",
        },*/
        {
          qualityIndicators:
            "Время высыхания до степени 3 при температуре (20±2) °С, ч, не более",
          value: "1",
        },
        /*{
          qualityIndicators: "Блеск покрытия, %",
          value: "4 - 19",
        },*/
        {
          qualityIndicators:
            "Стойкость покрытия к статическому воздействию воды при температуре (20±2) °С, ч, не менее",
          value: "24",
        },
        /*{
          qualityIndicators: "Адгезия покрытия к основанию, МПа, не менее",
          value: "1,0",
        },*/
      ],

      package: { value: "Ведро 11л, 20л.", label: "Упаковка" },
    },

    applicationTechnology: {
      suitableSubstrates: {
        value:
          "Бетонные, кирпичные, оштукатуренные, гипсокартонные и другие минеральные поверхности; допускается нанесение по обоям, предназначенным под покраску.",
        label: "Пригодные подложки",
      },

      preparationSurfaces: {
        value:
          "Поверхность очистить от пыли, грязи, разделительных жидкостей, меловых, известковых, непрочно держащихся и несовместимых покрытий (силикатные, масляные и т.п.), должен отсутствовать эффект меления. Биопоражения и высолы удалить механически, при необходимости обработать специальными составами. Глянцевые основания зашлифовать и обеспылить. Новые бетонные поверхности окрашивать не ранее, чем через 28 дней, оштукатуренные полимерминеральными составами – не ранее, чем через 7 дней после их естественного высыхания (или согласно рекомендациям производителя).",
        label: "Подготовка поверхности",
      },

      coatingSystem: {
        value: "Для получения качественного покрытия и снижения расхода краски поверхность обработать грунтовкой «Festek-Grunt» для глубокого проникновения, исходя из рекомендаций по применению.",
        label: "Система покрытия",
      },

      methodAndConditionsDrawing: {
        value:
          "Работы проводить при температуре окружающего воздуха, краски и окрашиваемой поверхности не ниже 10 °С. Влажность бетонных, каменных, оштукатуренных и зашпатлеванных оснований должна быть не более 8 %, влажность воздуха при интерьерных работах – 40-60 %. Перед применением краску тщательно перемешать и наносить на поверхность: •Кистью •Валиком •Пневматическим или безвоздушным методом распыления. Упаковку с частично использованным материалом необходимо плотно закрыть, а ее содержимое использовать в наиболее короткий срок. Краска готова к применению. При необходимости допускается разбавление водой – не более 5 %, при безвоздушном нанесении – около 10 %. После работы инструмент, пятна краски отмыть теплой водой с мылом до высыхания краски. Краска одного цвета, но различных партий, может незначительно отличаться по тону. Для исключения разнооттеночности получаемого покрытия следует выбирать краску одной партии или смешивать необходимое количество материала, либо окрашивать участки поверхностей, не лежащие в одной зрительной плоскости.",
        label: "Способ и условия нанесения",
      },

      temperature: {
        value:
          "Промежуточная сушка каждого слоя в течение 4 ч при температуре (20±2) °С. При более низкой температуре и/или повышенной влажности время высыхания может увеличиваться до 24 ч. Время выдержки покрытия до первой влажной уборки – не менее 21 суток.",
        label: "Температурный режим, время высыхания",
      },

      consumption: {
        value:
          "350-400 г/м2 на двухслойное покрытие. Зависит от состояния и подготовки поверхности, применяемого оборудования, квалификации работника и более точно определяется путем нанесения пробного покрытия. При окрашивании фактурных поверхностей (типа: шуба, барашек, короед и т.п.) расход краски увеличивается в 1,5 раза.",
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
          "Краска пожаровзрывобезопасна. Хранить в недоступном для детей месте. При попадании в глаза немедленно промыть водой. Не допускать попадания в сточные воды. Не смешивать с другими ЛКМ и растворителями. Для рук применять резиновые перчатки, для защиты органов дыхания – индивидуальные средства защиты. Для защиты глаз - защитные очки.",
        label: "Меры предосторожности",
      },

      recycling: {
        value:
          "Остатки материала после высыхания и пустую упаковку утилизировать как бытовой мусор.",
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
