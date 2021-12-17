import { v1 as uuid } from "uuid";

import patients from "../../data/patients";

import {
  NewPatientEntry,
  NonSensitivePatientEntry,
  Patient,
  PublicPatient,
} from "../types";

const getPublicPatient = (): PublicPatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const getAllPatientDataById = (id: string): Patient | undefined => {
  return patients.find((patient) => patient.id === id);
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
  getPublicPatient,
  getAllPatientDataById,
  addPatient,
};
