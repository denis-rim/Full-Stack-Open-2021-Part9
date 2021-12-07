interface IInput {
  height: number;
  weight: number;
}

function parseArguments(args: Array<string>): IInput {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (isNaN(Number(args[2])) || isNaN(Number(args[3]))) {
    throw new Error("Provided values were not numbers!");
  }
  return {
    height: Number(args[2]),
    weight: Number(args[3]),
  };
}

function calculateBmi(height: number, mass: number) {
  const bmi = mass / (height / 100) ** 2;
  if (bmi < 16) {
    return "Underweight (severe thinness)";
  } else if (bmi >= 16 && bmi <= 16.9) {
    return "Underweight (moderate thinness)";
  } else if (bmi >= 17 && bmi <= 18.4) {
    return "Underweight (mild thinness)";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal (healthy weight)";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight (pre-obesity)";
  } else if (bmi >= 30 && bmi <= 34.9) {
    return "Overweight (obesity class I)";
  } else if (bmi >= 35 && bmi <= 39.9) {
    return "Overweight (obesity class II)";
  } else {
    return "Overweight (obesity class III)";
  }
}

try {
  const { height, weight } = parseArguments(process.argv);
  console.log(calculateBmi(height, weight));
} catch (error) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}
