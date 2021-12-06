function calculateBmi(height: number, mass: number): string {
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

console.log(calculateBmi(180, 74));
