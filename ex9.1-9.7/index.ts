import express from "express";
import { calculateBmi, parseArguments } from "./calculateBmi";
import {
  exerciseCalculator,
  parseExerciseArguments,
} from "./exerciseCalculator";

const app = express();
app.use(express.json());

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
      const error = (e as Error).message;
      return res.json({ error });
    }
  }
  return res.send({ error: "malformatted parameters" });
});

app.post("/exercises", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-assignment
  const { dailyExercises, target }: any = req.body;

  if (!dailyExercises || !target) {
    return res.status(400).json({ error: "parameters missing" });
  }

  try {
    const { parsedArray, parsedTarget } = parseExerciseArguments(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      dailyExercises,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      target
    );
    const result = exerciseCalculator(parsedArray, parsedTarget);
    return res.status(200).json(result);
  } catch (e) {
    const error = (e as Error).message;
    return res.json({ error });
  }
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
