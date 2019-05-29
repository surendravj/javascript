// Program to count the total number of punctuation characters exists in a string.

count_punc = (str) => {
    count = 0
    let punc = ['?', "/", ".", ",", "!", "@", "-", "'"]
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < punc.length; j++) {
            if (str[i] == punc[j]) {
                count++
            }
        }
    }
    return count
}

console.time("timer")
console.log(count_punc("hi! r u surendra ? yes i am ."))
console.timeEnd("timer")

// method-2

count_punc1 = (str) => {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '.' || str[i] == "," || str[i] == "/" || str[i] == "?" || str[i] == "-" || str[i] == "!") {
            count++
        }
    }
    return count
}
console.time("timer")
console.log(count_punc1("hi! r u surendra ? yes i am ."))
console.timeEnd("timer")


// program to count number of ovwels and consonents in a string


count_ovwels_consonents = (str) => {
    let ovwels = 0
    let consonents = 0
    str = str.toLowerCase()
    for (let ele = 0; ele < str.length; ele++) {
        if (str[ele] == 'a' || str[ele] == "e" || str[ele] == 'i' || str[ele] == "o" || str[ele] == "u") {
            ovwels++
        } else if (str[ele] >= "a" && str[ele] <= "z") {
            consonents++
        }
    };
    return (" ovwels " + ovwels + " cosonents " + consonents)
}


console.log(count_ovwels_consonents("APPLE"))