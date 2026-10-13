// function isEven(number){
//     return number%2 === 0?"even":"odd";
// }

// function describeEven(number){
//     return `${number} is ${isEven(number)}`
// }

// const message = describeEven()

// console.log(message)

// function classify(number){
//     if(number>0){
//         return "positvie"
//     }
    
//     if(number<0){
//         return "negative"
//     }
    
//     return "zero"
// }

// console.log(classify(-1))


// greet();

// function greet() {
//   console.log("hello");
// }

// function double(number) {
//   return number * 2;
// }

// function addOne(number) {
//   return number + 1;
// }

// console.log(addOne(double(5)));

function f(number) {
  if (number === 0) {
    console.log("zero");
    return 0;
  }

  console.log("before", number);

  const result = f(number - 1);

  console.log("after", number);

  return result + number;
}

console.log(f(3));
