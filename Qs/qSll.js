class node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Q {
    constructor() {
        this.first = null
    }
    push(newnode) {
        let currentNode = this.first
        if (!currentNode) {
            this.first = newnode
        } else {
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = newnode
        }
    }
    pop() {
        let currentNode = this.first
        if (!currentNode) {
            connsole.log("Overflow")
        } else {
            this.first = currentNode.next
        }
    }
    display() {
        let currentNode = this.first
        if (!currentNode) {
            console.log("Queues is empty")
        } else {
            while (currentNode) {
                console.log(currentNode.data)
                currentNode = currentNode.next
            }
        }
    }
}


q = new Q()

q.push(new node("first"))

q.push(new node("second"))

q.push(new node("third"))

q.display()

q.pop()

q.display()