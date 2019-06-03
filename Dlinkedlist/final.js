// Implementaion of double linked list and implementaion of operations on linked list


// Creating node

class node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

//Creating linked-list

class Dlink {
    constructor() {
        this.head = null
    }

    //------------- insertions operations on Double linked list--------------------------------

    //Method to insert  newnode at head postion

    insertAtHead(newnode) {
        let currentNode = this.head
        if (!currentNode) {
            this.head = newnode
            this.head.prev = null
            return
        }
        this.head = newnode
        this.head.next = currentNode
        this.head.prev = null
    }

    //Method to  insert newnode at end of the list

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
    }

    //Method to insert a newnode at given postion or in between nodes

    insertAtPos(newnode, pos) {
        if (pos < 0 || pos > this.listLength()) {
            console.log("Invalid postion")
            return
        }
        if (pos == 0) {
            this.insertAtHead(newnode)
            return
        }
        if (pos == this.listLength()) {
            this.insertAtEnd(newnode)
            return
        }
        let currentNode = this.head
        let previousNode = null
        let currentPos = 0
        while (currentPos != pos) {
            previousNode = currentNode
            currentNode = currentNode.next
            currentPos++
        }
        previousNode.next = newnode
        newnode.prev = previousNode
        newnode.next = currentNode
        currentNode.prev = newnode
    }

    // ---------------------------Helper function used on linked list----------------------------------------


    //Method to return length of the linked list

    listLength() {
        let currentNode = this.head
        let length = 0
        while (currentNode) {
            length++
            currentNode = currentNode.next
        }
        return length
    }

    //Method to print the whole list data

    printList() {
        let currentNode = this.head
        if (!currentNode) {
            console.log("List is empty")
            return
        }
        while (currentNode) {
            console.log(currentNode.data)
            currentNode = currentNode.next
        }
    }

    //Method to find an element in the linked list

    searchElement(ele) {
        let nodeIndex = 0
        let noMatch = true
        let currentNode = this.head
        while (currentNode) {
            nodeIndex++
            if (currentNode.data == ele) {
                noMatch = false
                console.log(ele + " is found at location " + nodeIndex + " node ")
                return
            }
            currentNode = currentNode.next
        }
        if (noMatch) {
            console.log("No match found in the following linked list")
        }
    }

    //Method to reverse a linked list

    reverseList() {
        let currentNode = this.head
        let previousPointer = null
        while (currentNode) {
            let nextItem = currentNode.next
            currentNode.next = previousPointer
            currentNode.prev = nextItem
            previousPointer = currentNode
            currentNode = nextItem
        }
        this.head = previousPointer
    }


    // Method to swap nodes by given node loocations

    swapNodes(node1, node2) {
        let node1CurrentPos = 0
        let node2CurrentPos = 0
        let node1Current = this.head
        let node2Current = this.head
        let node1PreviousNode = null
        let node2PreviousNode = null
        while (node1CurrentPos != node1) {
            node1PreviousNode = node1Current
            node1Current = node1Current.next
            node1CurrentPos++
        }
        while (node2CurrentPos != node2) {
            node2PreviousNode = node2Current
            node2Current = node2Current.next
            node2CurrentPos++
        }
        node1PreviousNode.next = node2Current
        node2Current.prev = node1PreviousNode
        node2PreviousNode.next = node1Current
        node1Current.prev = node2PreviousNode
    }

    //------------------ Deletions operations on linked list----------------------------------


    // Method to delete head node

    deleteAtHead() {
        let currentNode = this.head
        this.head = currentNode.next
        this.head.prev = null
    }

    //Method to delete end node 

    deleteAtEnd() {
        let currentNode = this.head
        let previousNode = null
        while (currentNode.next) {
            previousNode = currentNode
            currentNode = currentNode.next
        }
        previousNode.next = null
        currentNode.prev = null
    }

    //Method to delete a node at given postion or in between nodes

    deleteAtPos(pos) {
        if (pos < 0 || pos > this.listLength()) {
            console.log("Invalid postion")
            return
        }
        if (pos == 0) {
            this.deleteAtHead()
            return
        }
        if (pos == this.listLength()) {
            this.deleteAtEnd()
            return
        }
        let currentNode = this.head
        let previousNode = null
        let currentPos = 0
        while (currentPos != pos) {
            previousNode = currentNode
            currentNode = currentNode.next
            currentPos++
        }
        previousNode.next = currentNode.next
        currentNode.prev = previousNode
    }

    // Method to delete a  node by its value

    deleteAtValue(value) {
        let nodeIndex = -1
        let currentNode = this.head
        let noMatch = true
        while (currentNode) {
            nodeIndex++
            if (currentNode.data == value) {
                noMatch = false
                this.deleteAtPos(nodeIndex)
                return
            }
            currentNode = currentNode.next
        }
        if (noMatch) {
            console.log("No match found with this element")
        }
    }

}





dlink = new Dlink()

dlink.insertAtEnd(new node(1))
dlink.insertAtEnd(new node(2))
dlink.insertAtEnd(new node(3))
dlink.insertAtEnd(new node(4))
dlink.insertAtHead(new node(0))
dlink.insertAtPos(new node(2.5), 3)
dlink.insertAtPos(new node(4.5), dlink.listLength())
dlink.printList()

console.log("\n")

// dlink.swapNodes(3,6)

dlink.printList()

// console.log("After Deleting")

// dlink.deleteAtHead()
// dlink.deleteAtEnd()
// dlink.deleteAtPos(3)
// dlink.deleteAtValue(2.5)
// dlink.printList()