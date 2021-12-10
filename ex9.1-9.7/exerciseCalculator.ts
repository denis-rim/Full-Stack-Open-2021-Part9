// interface IResult {
//   periodLength: number;
//   trainingDays: number;
//   success: boolean;
//   rating: number;
//   ratingDescription: string;
//   target: number;
//   average: number;
// }
//
// function parseArguments(args: Array<string>): Array<number> {
//   if (args.length < 12) throw new Error("Not enough arguments");
//   if (args.length > 12) throw new Error("Too many arguments");
//
//   return args.slice(2).map((element) => {
//     if (isNaN(Number(element))) {
//       throw new Error("Provided values were not numbers!");
//     }
//     return Number(element);
//   });
// }
//
// function exerciseCalculator(inputData: number[]): IResult {
//   const target = inputData[0];
//   const data = inputData.slice(1);
//
//   const average = data.reduce((acc, hours) => acc + hours, 0) / data.length;
//
//   return {
//     periodLength: data.length,
//     trainingDays: data.filter((day) => day > 0).length,
//     success: average >= target,
//     rating: average >= target ? 3 : average >= target - 1 ? 2 : 1,
//     ratingDescription:
//       average >= target
//         ? "well done!"
//         : average >= target - 1
//         ? "not too bad but could be better"
//         : "better luck next time",
//     target,
//     average,
//   };
// }
//
// try {
//   const inputData = parseArguments(process.argv);
//   console.log(exerciseCalculator(inputData));
// } catch (error) {
//   let errorMessage = "Something bad happened.";
//   if (error instanceof Error) {
//     errorMessage += " Error: " + error.message;
//   }
//   console.log(errorMessage);
// }
