// program to check whether given aplhabet is valid or not

check_aplhabet = (c) => {
    if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
        return "Given aplhabet is valid"
    }
    return "Given aplhabet is not valid"

}

console.log(check_aplhabet('4'))


// program to check whether given aplhabet is ovwels or consonents

check_type_aplhabet = (c) => {
    c = c.toLowerCase()
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c =='u') {
        return "Given alphabet is owvel"

    }
    return "Given aplhabet is consonent"
}

console.log(check_type_aplhabet('o'))