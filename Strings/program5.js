// program to frequency occurance of charcters


// helper function
check_existance = (arr, key) => {
    for (let i = 0; i < arr.length; i++) {
        if (key == arr[i]) {
            return true
        }

    }
    return false
}

check_max_min_occurance = (str) => {
    frequency = []
    existance = []
    for (let i = 0; i < str.length; i++) {
        str = str.replace(" ", "")
    }
    console.log(str)
    for (let i = 0; i < str.length; i++) {
        count = 1
        if (!check_existance(existance, str[i])) {
            existance.push(str[i])
            for (let j = i + 1; j < str.length; j++) {
                if (str[i] == str[j]) {
                    count++
                }
            }
        }
        frequency.push(count)
    }
    for (let i = 0; i < existance.length; i++) {
        console.log(existance[i] + " || " + frequency[i])
    }
}

console.log(check_max_min_occurance("king of jungle"))