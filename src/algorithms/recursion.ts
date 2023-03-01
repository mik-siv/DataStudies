function findFactorialRecursive(number: number): number {
  if (number <= 0) {
    return 1;
  }
  return number * findFactorialRecursive(number - 1);
}

function fibonacciRecursive(n: number): number {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
