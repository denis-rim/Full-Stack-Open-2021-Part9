import { v1 as uuid } from "uuid";

import patients from "../data/patients";

import { NewPatientEntry, NonSensitivePatientEntry } from "../types";

const getNonSensitivePatient = (): NonSensitivePatientEntry[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (entry: NewPatientEntry): NonSensitivePatientEntry => {
  const newPatient = {
    id: uuid(),
    ...entry,
  };

  patients.push(newPatient);

  return newPatient;
};

export default {
  getNonSensitivePatient,
  addPatient,
};
