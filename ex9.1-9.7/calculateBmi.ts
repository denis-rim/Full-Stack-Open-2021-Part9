interface IParsedArguments {
  parsedHeight: number;
  parsedWeight: number;
}

interface IOutput {
  height: number;
  weight: number;
  bmi: string;
}

export function parseArguments(
  inputHeight: string,
  inputWeight: string
): IParsedArguments {
  const parsedHeight = parseInt(inputHeight);
  const parsedWeight = parseInt(inputWeight);

  if (isNaN(parsedHeight) || isNaN(parsedWeight)) {
    throw new Error("malformatted parameters");
  }
  return {
    parsedHeight,
    parsedWeight,
  };
}

export function calculateBmi(height: number, weight: number): IOutput {
  const bmiIndex = weight / (height / 100) ** 2;

  let bmi;

  if (bmiIndex < 16) {
    bmi = "Severely underweight";
  } else if (bmiIndex >= 16 && bmiIndex <= 16.9) {
    bmi = "Underweight (moderate thinness)";
  } else if (bmiIndex >= 17 && bmiIndex <= 18.4) {
    bmi = "Underweight (mild thinness)";
  } else if (bmiIndex >= 18.5 && bmiIndex <= 24.9) {
    bmi = "Normal (healthy weight)";
  } else if (bmiIndex >= 25 && bmiIndex <= 29.9) {
    bmi = "Overweight (pre-obesity)";
  } else if (bmiIndex >= 30 && bmiIndex <= 34.9) {
    bmi = "Overweight (obesity class I)";
  } else if (bmiIndex >= 35 && bmiIndex <= 39.9) {
    bmi = "Overweight (obesity class II)";
  } else {
    bmi = "Overweight (obesity class III)";
  }

  return {
    height,
    weight,
    bmi,
  };
}
