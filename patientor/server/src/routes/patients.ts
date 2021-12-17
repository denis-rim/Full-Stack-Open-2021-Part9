import express from "express";
import patientService from "../services/patientService";
import toNewPatientEntry from "../utils";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json(patientService.getPublicPatient());
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  const patient = patientService.getAllPatientDataById(id);

  if (!patient) {
    return res.status(404).send(`Patient with id ${id} not found`);
  }
  return res.json(patient);
});

router.post("/", (req, res) => {
  try {
    const newPatient = toNewPatientEntry(req.body);
    const addedPatient = patientService.addPatient(newPatient);

    res.json(addedPatient);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
