import { DiagnosisEntry } from "../types";
import diagnoses from "../../data/diagnoses";

const getEntries = (): Array<DiagnosisEntry> => {
  return diagnoses;
};

export default {
  getEntries,
};
