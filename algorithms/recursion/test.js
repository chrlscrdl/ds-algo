import { factorial, factorialIterative } from "./factorial.js";

export const runFactorialTests = () => {
  console.log('=== Factorial Tests ===\n');
  let n = 5;
  console.log('Factorial (Recursive)');
  console.log(factorial(n));
  console.log('Factorial (Iterative)')
  console.log(factorialIterative(n))
}