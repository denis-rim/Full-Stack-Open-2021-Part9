import patients from "../data/patients";

import { NonSensitivePatientEntry } from "../src/types";

const getNonSensitivePatient = (): NonSensitivePatientEntry[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export default {
  getNonSensitivePatient,
};
