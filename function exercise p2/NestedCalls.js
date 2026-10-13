function double(number) {
  return number * 2;
}

function addOne(number) {
  return number + 1;
}

console.log(addOne(double(10))) 
// output:21

console.log(double(addOne(10))) 
// output:22