import express from "express";
import cors from "cors";
import diagnosesRouter from "./routes/diagnoses";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3001;

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.use("/api/diagnoses", diagnosesRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// 9.10: Patientor backend, step3
// Create a type Diagnose and use it to create endpoint /api/diagnoses for fetching all diagnoses with HTTP GET.
//
//     Structure your code properly by using meaningfully-named directories and files.
//
//     Note that diagnoses may or may not contain the field latin. You might want to use optional properties in the type definition.
