// Double linked list insertion operations are programmed


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
            this.head = newnode
            this.head.prev = null
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

    printList(self) {
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
}



dlink = new Dlink()

dlink.insertAtEnd(new node(1))
dlink.insertAtEnd(new node(2))
dlink.insertAtEnd(new node(3))
dlink.insertAtHead(new node(0))
dlink.insertAtPos(new node(5), 2)
dlink.insertAtPos(new node(1.5), 0)
dlink.printList()