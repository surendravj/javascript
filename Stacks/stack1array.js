// Implementaion of stacks using javascript

// push  --> This method used to add elements in to the stack

// Pop--> This method used t remove the last element 

//  peek-->This method is used to display the top 
//most or last element in a stack but not deletes it

//  isEmpty()--> This method is check whether given stack is empty or not

//  printStack()--> This method used to print the current stack



// Implementing stack class

class Stack {
    constructor() {
        this.stackItem = []
    }
    isEmpty() {
        return this.stackItem.length == 0
    }

    push(item) {
        this.stackItem.push(item)
    }
    pop() {
        if (this.isEmpty()) {
            return "Underflow"
        }
        return this.stackItem.pop()
    }

    peekStack() {
        if (this.isEmpty()) {
            return "Stack empty"
        }
        return this.stackItem[(this.stackItem.length) - 1]
    }

    printStack() {
        if (this.isEmpty()) {
            return "List empty"
        }
        return this.stackItem
    }
}