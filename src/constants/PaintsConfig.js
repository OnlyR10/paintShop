import { categoriesOfPaints } from "./CategoryOfPaints";
import { facadeEco } from "./Paints/festekFacadeEco";
import { facadePremium } from "./Paints/festekFacadePremium";
import { facadeSilicate } from "./Paints/festekFacadeSilicate";
import { facadeSilicone } from "./Paints/festekFacadeSilicone";
import { grunt } from "./Paints/festekGrunt";
import { insideEco } from "./Paints/festekInsideEco";
import { insideLatex } from "./Paints/festekInsideLatex";
import { maxiGrunt } from "./Paints/festekMaxigrunt";
import { relief } from "./Paints/festekRelief";
import { roofPro } from "./Paints/festekRoofPro";
import { superWhite } from "./Paints/festekSuperwhite";

export const paints = {
  [categoriesOfPaints.facade]: [facadeEco, facadePremium, facadeSilicate, facadeSilicone],

  [categoriesOfPaints.interior]: [facadeEco, facadeSilicate, facadeSilicone, insideEco, insideLatex, superWhite],

  [categoriesOfPaints.textured]: [relief],

  [categoriesOfPaints.roofing]: [roofPro],

  [categoriesOfPaints.primer]: [grunt, maxiGrunt],
};

export const paintsForMainPage = Object.values(paints).reduce((accumulator, currentValue) => {
  const result = currentValue.find((item) => !accumulator.includes(item));
  accumulator.push(result);
  return accumulator;
}, []);
