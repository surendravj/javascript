class node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class stack {
    constructor() {
        this.first = null
        this.last = null
    }
    push(newnode) {
        let currentNode = this.first
        if (!currentNode) {
            this.first = newnode
            this.last = newnode
        } else {
            this.first = newnode
            this.first.next = currentNode
        }
        return this.first
    }
    pop() {
        let currentnode = this.first
        if (!currentnode) {
            console.log("Stack Uderflow")
        } else {
            this.first = this.first.next
        }
        return this.first
    }
    display() {
        let currentNode = this.first
        if (!currentNode) {
            console.log("Stack is empty")
        }
        if (currentNode == this.last) {
            this.last = null
        } else {
            while (currentNode) {
                console.log(currentNode.data)
                currentNode = currentNode.next
            }
        }
    }
}


stack = new stack()

stack.push(new node(1))
stack.push(new node(2))
stack.push(new node(3))
stack.display()
stack.pop()
// stack.pop()
// stack.pop()
stack.display()