function f(number){
    return g(number);
}

function g(number){
    return h(number);
}

function h(number){
    return number + 1;
}

console.log(f(5))