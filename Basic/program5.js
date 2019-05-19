// program to find nth febnico Number

getNth_Feb = (n) => {
    if (n == 1) {
        return 0
    }
    if (n == 2) {
        return 1
    }
    return getNth_Feb(n - 1) + getNth_Feb(n - 2)
}
console.log(getNth_Feb(5));

//program to print febnicco series in a given range
print_Feb = (n) => {
    num1 = 0
    num2 = 1
    console.log(num1);
    console.log(num2);
    for (let i = 2; i < n; i++) {
        let num3 = num1 + num2;
        num1 = num2
        num2 = num3
        console.log(num3);
    }
}
print_Feb(5)

//program to find factorial of a number using recursion

fact = (n) => {
    if (n == 1) {
        return 1
    }
    return n * fact(n - 1)
}

console.log(fact(5));


//program to find factorial on number without using recursion

fact2 = (n) => {
    factorial = 1;
    while (n != 0) {
        factorial *= n
        n -= 1
    }
    return factorial
}

console.log(fact2(4));