function fibonacci(number){
    if(number === 0){
        return 0;
    }

    if(number === 1){
        return 1;
    }

    let fibonnaciTrem = fibonacci(number-1) + fibonacci(number-2);

    return fibonnaciTrem
}

console.log(fibonacci(5));