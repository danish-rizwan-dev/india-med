import { Doctor, Hospital, CostItem, SpecialityTranslations, SpecialityData } from "./types";
import { cardioData } from "./data/cardio";
import { orthoData } from "./data/ortho";
import { cancerData } from "./data/cancer";
import { neuroData } from "./data/neuro";
import { gastroData } from "./data/gastro";
import { liverData } from "./data/liver";
import { lungsData } from "./data/lungs";
import { gynoData } from "./data/gyno";
import { bmtData } from "./data/bmt";
import { plasticData } from "./data/plastic";
import { gynoOncoData } from "./data/gynoOnco";
import { rheumaData } from "./data/rheuma";
import { vascularData } from "./data/vascular";
import { ophthalmologyData } from "./data/ophthalmology";
import { endoData } from "./data/endo";
import { kidneyData } from "./data/kidney";
import { respiratoryData } from "./data/respiratory";
import { entData } from "./data/ent";

export type { Doctor, Hospital, CostItem, SpecialityTranslations, SpecialityData };

export const specialitiesData: Record<string, SpecialityData> = {
  cardio: cardioData,
  ortho: orthoData,
  cancer: cancerData,
  neuro: neuroData,
  gastro: gastroData,
  liver: liverData,
  lungs: lungsData,
  gyno: gynoData,
  bmt: bmtData,
  plastic: plasticData,
  gynoOnco: gynoOncoData,
  rheuma: rheumaData,
  vascular: vascularData,
  ophthalmology: ophthalmologyData,
  endo: endoData,
  kidney: kidneyData,
  respiratory: respiratoryData,
  ent: entData,
};
