// program to find the maximum number in an array

arr = [37493, 4083, 21365, 45]

max_num = (arr) => {
    max = 0
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}


console.log(max_num(arr));


//program to find smallest number in the array

min_num = (arr) => {
    min = arr[0]
    let index;
    for (i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    return min
}

console.log(min_num(arr))