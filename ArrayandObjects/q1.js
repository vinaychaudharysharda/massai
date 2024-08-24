let numbers = [5, 3, 8, 1, 2];

function addNumber(array, number) {
  array.push(number);
}


function removeNumber(array, number) {
  let index = array.indexOf(number);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

function sortNumbers(array) {
  return array.slice().sort((a, b) => a - b);
}

function calculateSum(array) {
  return array.reduce((acc, val) => acc + val, 0);
}

function calculateAverage(array) {
  if (array.length === 0) return 0;
  let sum = calculateSum(array);
  return sum / array.length;
}

console.log('Initial array:', numbers);

addNumber(numbers, 4);
console.log('After adding 4:', numbers);

removeNumber(numbers, 3);
console.log('After removing 3:', numbers);

let sortedArray = sortNumbers(numbers);
console.log('Sorted array:', sortedArray);

let sum = calculateSum(numbers);
console.log('Sum of numbers:', sum);

let average = calculateAverage(numbers);
console.log('Average of numbers:', average);
