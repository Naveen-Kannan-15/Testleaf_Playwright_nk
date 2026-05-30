function factorial(n: number): number {
    // Check for negative input
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }

    // Initialize result
    let result = 1;

    // Compute factorial using a loop
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120
console.log(factorial(7)); // 5040

try {
    console.log(factorial(-3));
} catch (error) {
    console.error((error as Error).message);
}