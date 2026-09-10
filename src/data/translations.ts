import { enTranslation } from "./en";
import { trTranslation } from "./tr";
import { arTranslation } from "./ar";

export type TranslationRecord = Record<string, string>;

export interface TranslationContent {
  nav: TranslationRecord;
  hero: TranslationRecord;
  manifesto: TranslationRecord;
  whyVienne: TranslationRecord;
  servicesPillars: TranslationRecord;
  capabilitiesSection: TranslationRecord;
  capabilitiesTech: TranslationRecord;
  system: TranslationRecord;
  studioSection: TranslationRecord;
  insights: TranslationRecord;
  portfolio: TranslationRecord;
  transformation: TranslationRecord;
  estimator: TranslationRecord;
  twinsSection: TranslationRecord;
  briefSection: TranslationRecord;
  chatConsole: TranslationRecord;
  contact: TranslationRecord;
  footerSection: TranslationRecord;
  modals: TranslationRecord;
  ui: TranslationRecord & { aiConcierge?: string }; // <-- aiConcierge buraya özel olarak eklendi
  briefOptions: TranslationRecord;
  reservation: TranslationRecord;
  showroomSection: TranslationRecord;
  portal: TranslationRecord;
  portfolioItems?: TranslationRecord;
  footer: string;
}

export const TRANSLATIONS: Record<string, TranslationContent> = {
  "EN": enTranslation,
  "TR": trTranslation,
  "AR": arTranslation
};

export const LANGUAGES = [
  { code: "EN", name: "English", dir: "ltr", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "AR", name: "العربية", dir: "rtl", flag: "https://flagcdn.com/w40/ae.png" },
  { code: "TR", name: "Türkçe", dir: "ltr", flag: "https://flagcdn.com/w40/tr.png" }
];