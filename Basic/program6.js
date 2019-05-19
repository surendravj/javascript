// program to validate prime number

check_prime = (n) => {
    count = 0
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            count++
        }
    }
    console.log(count);

    if (count == 2) {
        return "It is prime"
    }
    return "It is not prime"
}

console.log(check_prime(134))

//program to print prime number in given interval


print_prime = (start, end) => {
    for (let i = start; i <= end; i++) {
        count = 0
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                count++
            }
        }
        if (count == 2) {
            console.log(i);
        }
    }
}

print_prime(1,15)