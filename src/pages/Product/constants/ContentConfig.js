import { lazy } from "react";

const PaletteContainer = lazy(() =>
  import("../../../components/PaletteContainer")
);
const Application = lazy(() => import("../components/Application"));
const Characteristics = lazy(() => import("../components/Characteristics"));
const Delivery = lazy(() => import("../components/Delivery"));
const Description = lazy(() => import("../components/Description"));

export const ContentConfig = {
  Description,
  Application,
  Characteristics,
  Delivery,
  PaletteContainer,
};
