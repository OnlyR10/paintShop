import { categoriesOfPaints } from "./categoryOfPaints";
import { facadeEco } from "./paints/festekFacadeEco";
import { facadePremium } from "./paints/festekFacadePremium";
import { facadeSilicate } from "./paints/festekFacadeSilicate";
import { facadeSilicone } from "./paints/festekFacadeSilicone";
import { grunt } from "./paints/festekGrunt";
// import { gruntModification } from "./paints/festekGruntModification";
import { insideEco } from "./paints/festekInsideEco";
import { insideLatex } from "./paints/festekInsideLatex";
import { maxiGrunt } from "./paints/festekMaxigrunt";
// import { relief } from "./paints/festekRelief";
import { roofPro } from "./paints/festekRoofPro";
import { superWhite } from "./paints/festekSuperwhite";

export const paints = {
  [categoriesOfPaints.facade]: [
    facadeEco,
    facadePremium,
    facadeSilicate,
    facadeSilicone,
  ],

  [categoriesOfPaints.interior]: [insideEco, insideLatex, superWhite],

  [categoriesOfPaints.textured]: [
    /* relief */
  ],

  [categoriesOfPaints.roofing]: [roofPro],

  [categoriesOfPaints.primer]: [grunt, /* gruntModification, */ maxiGrunt],
};
