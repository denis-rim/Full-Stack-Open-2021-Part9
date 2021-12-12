import express from "express";
import cors from "cors";
import diagnosesRouter from "./routes/diagnoses";
import patientsRouter from "./routes/patients";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3001;

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

// Routes, prefixed with /api/
app.use("/api/diagnoses", diagnosesRouter);
app.use("/api/patients", patientsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// 9.11: Patientor backend, step4
// Create data type Patient and set up the GET endpoint /api/patients which returns all patients to the frontend, excluding field ssn. Use a utility type to make sure you are selecting and returning only the wanted fields.
//
//     In this exercise, you may assume that field gender has type string.
//
// Try the endpoint with your browser and ensure that ssn is not included in the response:
