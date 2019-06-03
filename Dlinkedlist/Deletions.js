// Double linked list insertion and Delete operations are programmed


class node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

class Dlink {
    constructor() {
        this.head = null
    }
    is_newNode(newnode) {
        this.head = newnode
        this.head.prev = null
    }
    listLength() {
        let currentNode = this.head
        let length = 0
        while (currentNode) {
            length++
            currentNode = currentNode.next
        }
        return length
    }
    insertAtHead(newnode) {
        let currentNode = this.head
        if (currentNode == null) {
            this.is_newNode(newnode)
            return
        }
        this.head = newnode
        this.head.prev = null
        this.head.next = currentNode
    }
    insertAtEnd(newnode) {
        let currentNode = this.head
        if (!currentNode) {
            this.is_newNode(newnode)
            return
        }
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        currentNode.next = newnode
        newnode.prev = currentNode
        newnode.next = null
    }
    insertAtPos(newnode, pos) {
        if (pos < 0 || pos > this.listLength()) {
            console.log("Error in postion")
            return
        }
        if (pos == this.listLength()) {
            this.insertAtEnd(newnode)
            return
        }
        if (pos == 0) {
            this.insertAtHead(newnode)
            return
        }
        let currentNode = this.head
        let currentPos = 0
        let PreviousNode = null
        while (currentPos != pos) {
            PreviousNode = currentNode
            currentNode = currentNode.next
            currentPos++
        }
        PreviousNode.next = newnode
        newnode.prev = PreviousNode
        newnode.next = currentNode
        currentNode.prev = newnode
    }

    deleteAtEnd() {
        let currentNode = this.head
        let PreviousNode = null
        while (currentNode.next) {
            PreviousNode = currentNode
            currentNode = currentNode.next
        }
        PreviousNode.next = null
        currentNode.prev = null
    }

    deleteAtHead() {
        let currentNode = this.head
        this.head = currentNode.next
        this.head.prev = null
    }
    deleteAtPos(pos) {
        let currentNode = this.head
        if (pos < 0 || pos > this.listLength()) {
            console.log("Error in postion")
            return
        }
        if (pos == this.listLength()) {
            this.deleteAtEnd(newnode)
            return
        }
        if (pos == 0) {
            this.deleteAtHead(newnode)
            return
        }
        let currentPos = 0
        let PreviousNode = null
        while (currentPos != pos) {
            PreviousNode = currentNode
            currentNode = currentNode.next
            currentPos++
        }
        PreviousNode.next = currentNode.next
        currentNode.prev = PreviousNode
    }
    printList() {
        let currentNode = this.head
        if (currentNode == null) {
            console.log("List empty")
        } else {
            while (currentNode) {
                console.log(currentNode.data)
                currentNode = currentNode.next
            }
        }
    }

    reverseList() {
        let currentNode = this.head
        let PreviousPointer = null
        while (currentNode) {
            let nextNode = currentNode.next
            currentNode.next = PreviousPointer
            currentNode.prev = nextNode
            PreviousPointer = currentNode
            currentNode = nextNode
        }
        this.head = PreviousPointer

    }

    deleteByValue(val) {
        let nodeIndex = -1
        let currentNode = this.head
        let noMatch = true
        while (currentNode) {
            nodeIndex++
            if (currentNode.data == val) {
                this.deleteAtPos(nodeIndex)
                noMatch = false
                return
            }
            currentNode = currentNode.next
        }
        if (noMatch) {
            console.log("Match not found to delete")
        }
    }
}



dlink = new Dlink()

dlink.insertAtEnd(new node(1))
dlink.insertAtEnd(new node(2))
dlink.insertAtEnd(new node(3))
dlink.insertAtHead(new node(0))
dlink.insertAtPos(new node(5), 2)
dlink.insertAtPos(new node(1.5), 0)
dlink.deleteAtPos(3)
dlink.reverseList()
dlink.deleteByValue(5)
dlink.printList()