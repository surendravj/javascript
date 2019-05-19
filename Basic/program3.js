// program to check whether given year is leap year or not

is_leapYear = (year) => {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                console.log("It is leap year");
            } else {
                console.log("It is not leap year");
            }
        }
        console.log("it is leap year")
    } else {
        console.log("it is not leap year");

    }
}
is_leapYear(1973)


//program to find gcd of a given numbers


find_gcd = (num1, num2) => {
    min_value = ''
    gcd = ''
    if (num1 > num2) {
        min_value = num1
    } else {
        min_value = num2
    }
    for (let i = 1; i <= min_value; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            gcd = i
        }
    }
    return gcd
}

console.log(find_gcd(42, 74))

//program to find lcm of two numbers

find_lcm = (num1, num2) => {
    return (num1 * num2) / find_gcd(num1, num2)
}

console.log(find_lcm(25, 125))