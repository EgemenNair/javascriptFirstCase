// Defining the function:
function oddishOrEvenish(num) {
    num = num.toString().split("").map(Number).reduce((a, b) => a + b, 0);  // Turn number to string, form an array, turn string array items to number type. Use reduce method to add all elements togather.
    return (num % 2 == 1) ? "Odd" : "Even"; // If num%2 equals 1, return "Odd", else ; return "Even".
};