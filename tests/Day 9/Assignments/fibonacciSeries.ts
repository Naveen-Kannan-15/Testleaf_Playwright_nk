// Approach 1
console.log("1st Approach")
function fibonacci(n: number): number {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer");
    }

    if (n === 0) return 0;
    if (n === 1) return 1;

    let first = 0;
    let second = 1;

    for (let i = 2; i <= n; i++) {
        const next = first + second;
        first = second;
        second = next;
    }

    return second;
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55
console.log(fibonacci(15)); // 610

// Approach 2
console.log("2nd Approach")
const fibonacci2 = (n: number): number => {
    if (n <= 1) return n;

    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }

    return b;
};

console.log(fibonacci2(-1)); // 55