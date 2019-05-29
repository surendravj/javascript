// Program to remove all the white spaces from a string.

remove_whiteSpaces = (str) => {
    for (let i = 0; i < str.length; i++) {
        str = str.replace(" ", '')
    }
    return str
}

console.log(remove_whiteSpaces("i am surendra"))


// Program to replace lower-case characters with upper-case and vice versa.

lower_to_upper = (str) => {
    new_str = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            new_str.push(str[i].toUpperCase())
        } else if (str[i] >= 'A' && str[i] <= 'Z') {
            new_str.push(str[i].toLowerCase())
        }
    }
    new_str = new_str.join()
    for (let i = 0; i < new_str.length; i++) {
        new_str = new_str.replace(",", '')
    }
    return new_str
}

console.time("timer")
console.log(lower_to_upper("SureNdra"))
console.timeEnd("timer")


// method-2

lower_to_upper2 = (str) => {
    new_str = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            new_str += str[i].toUpperCase()
        } else if (str[i] >= 'A' && str[i] <= 'Z') {
            new_str += str[i].toLowerCase()
        }
    }
    return new_str
}

console.time("timer")
console.log(lower_to_upper2("SureNdra"))
console.timeEnd("timer")


// Program to replace the spaces of a string with a specific character


replace_spaces = (str, replace_char) => {
    for (let i = 0; i < str.length; i++) {
        str = str.replace(" ", replace_char)
    }
    return str
}

console.log(replace_spaces("i am surendra", "$"));



//program to check occurance of specific charcter in a given string


check_occurance = (str, key) => {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == key) {
            count++
        }
    }
    return ("The charcter " + key + " occured in the given string is " + count + " times ")
}


console.log(check_occurance('surendra', 'r'));