// program to find the median of an two arrays


// helper  function to merge two arrays
merge_arrays = (first, second) => {
    arr3 = first.concat(second)
    arr3.sort((a, b) => {
        return a - b
    })
    return arr3
}

find_median = (arr1, arr2) => {
    arr3 = merge_arrays(arr1, arr2)
    array_len = arr3.length - 1
    half = parseInt(array_len / 2)
    median = arr3[half] + arr3[half + 1]
    return parseInt(median / 2)
}

arr1 = [5, 4, 3, 2, 1]
arr2 = [11, 10, 9, 8, 7]


console.log(find_median(arr1, arr2))




// program to reverse an array

reverse_array = (arr) => {
    let i = 0
    let j = arr.length - 1
    while (i != j) {
        temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
        i++
        j--
    }
    return arr
}

console.log(reverse_array(arr1))



// program to move elements towards left in given index range



// helper function to rotate elements

rotate_element = (arr) => {
    first = arr[0]
    last = arr.length - 1
    i = 0
    while (i != last) {
        arr[i] = arr[i + 1]
        i++
    }
    arr[last] = first
}

limit_index_rotate = (arr, limit_index) => {
    if (arr.length - 1 > limit_index) {
        for (let i = 0; i <= limit_index; i++) {
            rotate_element(arr)
        }
        return arr
    }
    return "Limit Overflow"
}


console.log(limit_index_rotate(arr1, 7))

// program to print index match elements inside in array



match_index_elements = (arr) => {
    no_match_index = true
    for (let i = 0; i < arr.length; i++) {
        if (i == arr[i]) {
            console.log(arr[i]);
            no_match_index = false
        }
    }
    if (no_match_index) {
        console.log("No match index found")
    }
}

match_index_elements([3, 4, 27, 4, 52])