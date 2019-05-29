// program to get numnerical number form a string


get_num = (str) => {
    let num = ""
    for (let i = 0; i < str.length; i++) {
        str = str.replace(" ", "")
        if (!isNaN(str[i])) {
            num += str[i]
        }
    }
    return num
}



console.log(get_num("sur4end42 is 242hbh4gv124h23vg42"))




// program to count total number of words in a given string

words_count = (str) => {
    words = str.split(" ")
    return words.length
}

console.log(words_count("Beauty lies in the eyes of beholder"));

// program to check whether the given string is palindrom or not

is_palindrom = (str) => {
    str_rev = str
    str_rev = str_rev.split("")
    str_rev = str_rev.reverse()
    str_rev = str_rev.join("")
    if (str == str_rev) {
        return "Palindrom"
    }
    return "Not palindrom"
}

console.log(is_palindrom("kayak"))

