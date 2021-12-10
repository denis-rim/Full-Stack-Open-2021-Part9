interface IResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export function parseExerciseArguments(args: Array<string>, target: string) {
  if (isNaN(Number(target))) {
    throw new Error("malformatted parameters");
  }

  if (!Array.isArray(args)) {
    throw new Error("malformatted parameters");
  }

  const parsedArray = args.map((element) => {
    if (isNaN(Number(element))) {
      throw new Error("malformatted parameters");
    }
    return Number(element);
  });

  return {
    parsedArray,
    parsedTarget: Number(target),
  };
}

export function exerciseCalculator(data: number[], target: number): IResult {
  const average = data.reduce((acc, hours) => acc + hours, 0) / data.length;

  return {
    periodLength: data.length,
    trainingDays: data.filter((day) => day > 0).length,
    success: average >= target,
    rating: average >= target ? 3 : average >= target - 1 ? 2 : 1,
    ratingDescription:
      average >= target
        ? "well done!"
        : average >= target - 1
        ? "not too bad but could be better"
        : "better luck next time",
    target,
    average,
  };
}
