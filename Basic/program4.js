// program to reverse a number

reverse_number = (n) => {
    let temp = n;
    let reversed_number = 0;
    while (temp != 0) {
        let digit = parseInt(temp % 10);
        reversed_number = reversed_number * 10 + digit
        temp = parseInt(temp / 10)
    }
    return reversed_number
}

console.log(reverse_number(458))

// program to add individual intergers in a integer

sum_numbers = (n) => {
    temp = n;
    total = 0
    while (temp != 0) {
        let digit = Math.floor(temp % 10)
        total = total + digit
        temp = Math.floor(temp / 10)
    }
    return total
}

console.log(sum_numbers(123))


// program to check whether given number is palindrom or not

check_palindrom = (n) => {
    reversed_number = reverse_number(n)
    if (n == reversed_number) {
        return true
    }
    return false
}

console.log(check_palindrom(121));