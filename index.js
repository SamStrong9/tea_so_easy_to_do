// Define a helper function to calculate the sum of an array of numbers
function calculateSum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Define an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Calculate the sum of the array using the helper function
var totalSum = calculateSum(numbers);

// Output the calculated sum
console.log("The sum of the numbers", numbers, "is:", totalSum);
