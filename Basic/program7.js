// program to validate armstrong Number

is_armstrong = (n) => {
    order = n.toString().length;
    n = parseInt(n);
    temp = n;
    armstrong_number = 0
    while (temp != 0) {
        let digit = parseInt(temp % 10)
        armstrong_number += Math.pow(digit, order)
        temp = parseInt(temp / 10)
    }
    if (n == armstrong_number) {
        return true
    }
    return false
}

console.log(is_armstrong(153));

// program to print armstrong number in given interval
print_armstrong = (start, end) => {
    for (let i = start; i < end; i++) {
        if (is_armstrong(i)) {
            console.log(i)
        }
    }
}

print_armstrong(5, 200)