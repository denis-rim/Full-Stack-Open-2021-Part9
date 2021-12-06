interface IResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

function exerciseCalculator(data: number[], target: number): IResult {
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

console.log(exerciseCalculator([3, 0, 2, 4.5, 0, 3, 1], 2));
