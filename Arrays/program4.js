// program to search an element in an Array

var arr = [34, 24, 645, 12, 56, 22]

is_search_element = (arr, key) => {
    noElement = true
    arr.forEach((element, index) => {
        if (element == key) {
            console.log(key + " is found at location " + index);
            noElement = false
        }
    });
    if (noElement) {
        console.log("No match found")
    }
}


is_search_element(arr, 23)


// program to check first prime number in an array

is_prime = (n) => {
    let count = 0
    for (i = 1; i <= n; i++) {
        if (n % i == 0) {
            count++
        }
    }
    if (count == 2) {
        return true
    }
    return false
}

check_first_prime = (arr) => {
    noPrime = true
    for (let i = 0; i < arr.length; i++) {
        if (is_prime(arr[i])) {
            console.log(arr[i]);
            noPrime = false
            break;
        }
    }
    if (noPrime) {
        console.log("No prime number in the array");
    }
}

check_first_prime(arr)