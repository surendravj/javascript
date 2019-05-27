// program to find second largest element in an array


arr = [4, 212, 342, 12, 213, 321]
find_second_max = (arr) => {
    first = Math.max(arr[0], arr[1]);
    second = Math.min(arr[0], arr[1]);
    for (let i = 2; i < arr.length; i++) {
        if (first < arr[i]) {
            second = first
            first = arr[i]
        } else {
            if (second < arr[i] && first > arr[i]) {
                second = arr[i]
            }
        }
    }
    return second
}


console.log(find_second_max(arr));


// program to find second smallest number

find_second_min = (arr) => {
    first = Math.min(arr[0], arr[1]);
    second = Math.max(arr[0], arr[1]);
    for (let i = 2; i < arr.length; i++) {
        if (first > arr[i]) {
            second = first
            first = arr[i]
        } else {
            if (second > arr[i] && first < arr[i]) {
                second = arr[i]
            }
        }
    }
    return second
}

console.log(find_second_min(arr));