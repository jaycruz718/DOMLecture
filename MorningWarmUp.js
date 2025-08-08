// Take an array of numbers and return the sum.
const listOfNumb = [1, 2, 78, 6, 98]
// function sumArray(array){
    // let sum = 0;
    // array.forEach(number =>{
        // sum += number;
    // });
   //  return sum;
// }

// const numbers = [1, 2, 78, 6, 98];
// const sum = sumArray(numbers);
// console.log(sum);

// Take an array of numbers and return the average.
function aveArray(array){
    let average = 0;
    array.forEach(number =>{
        average += number;
    })
    return average / array.length;
}

const num = [1, 2, 78, 6, 98];
const average = aveArray(num);
console.log(average);
