// program to swap teo numbers using third variable

swap = (a, b) => {
    console.log(" before swap " + a + " " + b);
    let temp = a
    a = b
    b = temp
    console.log(" after swap " + a + " " + b);
}

swap(10, 12)


//program to swap two numbers without using third varable

swap2 = (a, b) => {
    console.log(" before swap " + a + " " + b);
    a = a + b
    b = a - b
    a = a - b
    console.log(" after swap " + a + " " + b);
}

swap2(4353, 1321)