// Program to determine whether two strings are the anagram

is_anagram = (str1, str2) => {
    if (str1.length != str2.length) {
        return "Not anagram"
    } else {
        str1 = str1.toLowerCase()
        str2 = str2.toLowerCase()
        str1 = str1.split("")
        str2 = str2.split("")
        str1 = str1.join(str1.sort())
        str2 = str2.join(str2.sort())
        if (str1 === str2) {
            return "It is anagram"
        }
    }
    return "It is not anagram"
}

console.time("timer")
console.log(is_anagram('surendra', "adrrusen"));
console.timeEnd("timer")


// method2

// more efficent algoirthum compare to above algorithum
is_anagram2 = (str1, str2) => {
    let count = 0
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    noMatch = true
    if (str1.length != str2.length) {
        return "Not anagram"
    } else {
        for (let i = 0; i < str1.length; i++) {
            for (let j = 0; j < str2.length; j++) {
                if (str1[i] == str2[j]) {
                    count++
                    noMatch = false
                    break
                }
            }
            if (noMatch) {
                break
            }
        }
        if (count == str1.length) {
            return "It is Anagaram"
        }
        return "It is not an anagram"
    }
}

console.time("timer")
console.log(is_anagram2('loof', "ooof"));
console.timeEnd("timer")


// Program to divide a string in 'N' equal parts.


divide_nth_euqal_parts = (str, n) => {
    total_len = parseInt(str.length)
    let len = parseInt(str.length / n)
    if (total_len % n != 0) {
        return false
    } else {
        for (let i = 0; i < total_len; i++) {
            if (i % len == 0) {
                console.log("\n")
            }
            console.log(str[i])
        }
    }
}
console.log(divide_nth_euqal_parts("surendra", 4))