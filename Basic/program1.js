// Program to check whether given number is even or odd


even_odd = (n) => {
    if (n % 2 == 0) {
        return "Given number is even"
    }
    return "Given number is odd"
}

console.log(even_odd(10))


//program to print even and odd number in a given interval


print_even_odd = (start, end) => {
    for (let i = start; i <= end; i++) {
        if (i % 2 == 0) {
            console.log(i + " = " + " even ");
        } else {
            console.log(i + " = " + " odd");
        }
    }
}

print_even_odd(1, 10)