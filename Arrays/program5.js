// program to print array in reverse order


arr = [53, 232, 453, 2321, 53, 232, 453, 34, 1, 1]
reverse_print = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

reverse_print(arr)



// program to merge two arraya
arr1 = [1, 2, 3, 4]
merge_arrays = (arr1, arr2) => {
    arr3 = arr2.concat(arr1)
    arr3((a, b) => {
        return a - b
    })

    return arr3
}
merge_arrays(arr, arr1);


// program to find the frequency of elements in an array



// helper function to check frequency array for repeating elements existance

frequency_check = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            return false
        }
    }
    return true
}

// main function

frequency_finder = (arr) => {
    let frequency_array = []
    for (let i = 0; i < arr.length; i++) {
        let count = 1
        if (frequency_check(frequency_array, arr[i])) {
            for (let j = i + 1; j <= arr.length; j++) {
                if (arr[i] == arr[j]) {
                    count++
                    frequency_array.push(arr[i])
                }
            }
            console.log(arr[i] + " = " + count)
        }
    }
}


frequency_finder(arr)