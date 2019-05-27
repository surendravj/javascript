// program to find sum of integers in an Array

arr = [1, 2, 3, 4, 5, 6, 12]

sum_array = (arr) => {
    total = 0
    arr.forEach(element => {
        total += element
    });
    return total
}

print(sum_array(arr))


// program to find multiples of n in an given Array

nth_divisibles = (arr, n) => {
    n_divisibles = []
    arr.forEach(element => {
        if (n % element == 0) {
            n_divisibles.push(element)
        }
    })
    if (n_divisibles.length == 0) {
        return null
    }
    return n_divisibles
}

console.log(nth_divisibles(arr, 5));


// program to find sum two integers of n 


// 8=4+4   true

helper_find = (arr, n) => {
    for (let i = 0; i < arr.length; i++) {
        if (n == arr[i]) {
            return true
        }
    }
    return false
}

array_sum_int = (arr, n) => {
    if (helper_find(arr, n)) {
        return true
    } else {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j <= arr.length; j++) {
                if (arr[i] + arr[j] == n) {
                    return true
                }
            }
        }
        return false
    }
}

console.log(array_sum_int(arr, 12))