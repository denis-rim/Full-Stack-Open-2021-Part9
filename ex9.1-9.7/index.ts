import express from "express";
import { calculateBmi, parseArguments } from "./calculateBmi";
const app = express();

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const { height, weight } = req.query;

  if (typeof height === "string" && typeof weight === "string") {
    try {
      const { parsedHeight, parsedWeight } = parseArguments(height, weight);
      const result = calculateBmi(parsedHeight, parsedWeight);
      return res.status(200).json(result);
    } catch (e) {
      return res.send({ error: e.message });
    }
  }
  return res.send({ error: "malformatted parameters" });
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
