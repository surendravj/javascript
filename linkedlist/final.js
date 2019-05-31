// single linked list implementaion in javascript and also
// implementaion of helper function used in linked list


// create node

class node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

// creating linkedList

class linkedList {
    constructor() {
        this.head = null
    }


    //----------------- Insertion operations on linkedList--------------------------------

    //Method to insert node at head postion

    insertAtHead(newnode) {
        let currentNode = this.head
        if (currentNode == null) {
            this.head = newnode
            return
        }
        this.head = newnode
        newnode.next = currentNode
    }

    //Method to insert a node at end of the list

    insertAtEnd(newnode) {
        let currentNode = this.head
        if (currentNode == null) {
            this.head = newnode
            return
        }
        while (currentNode.next != null) {
            currentNode = currentNode.next
        }
        currentNode.next = newnode
    }

    //Method to insert a newnode at given postion

    insertAtPos(newnode, pos) {
        if (pos < 0 || pos > this.listLength()) {
            console.log(pos + " is invalid postion ")
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
        let currentPos = 0
        let previousNode = null
        while (currentPos != pos) {
            previousNode = currentNode
            currentNode = currentNode.next
            currentPos++
        }
        previousNode.next = newnode
        newnode.next = currentNode
    }



    // ------------------------------Deletion operations on linkedList----------------------------------------



    //Method to delete a head node

    deleteAtHead() {
        let currentNode = this.head
        this.head = currentNode.next
    }

    //Method to delete a node at end

    deleteAtEnd() {
        let currentNode = this.head
        let previousNode = null
        while (currentNode.next != null) {
            previousNode = currentNode
            currentNode = currentNode.next
        }
        previousNode.next = null
    }

    //Method to delete a node at given position

    deleteAtPos(pos) {
        if (pos < 0 || pos > this.listLength()) {
            console.log(pos + " is invalid postion ")
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
        let currentPos = 0
        let previousNode = null
        while (currentPos != pos) {
            previousNode = currentNode
            currentNode = currentNode.next
            currentPos++
        }
        previousNode.next = currentNode.next
    }



    // Helper functions used in the linked list

    //Method to return the length of the linkedList

    listLength() {
        let currentNode = this.head
        let length = 0
        while (currentNode != null) {
            length++
            currentNode = currentNode.next
        }
        return length
    }

    //Method to print the whole list data

    printList() {
        let currentNode = this.head
        if (currentNode == null) {
            console.log("List is empty")
            return
        }
        while (currentNode != null) {
            console.log(currentNode.data)
            currentNode = currentNode.next
        }
    }

    //Method to reverse a linkedList

    reverseList() {
        let currentNode = this.head
        let previousPointer = null
        while (currentNode != null) {
            let nextNode = currentNode.next
            currentNode.next = previousPointer
            previousPointer = currentNode
            currentNode = nextNode
        }
        this.head = previousPointer
    }

    //method to search an element in a following linked list

    searchElement(element) {
        let index = 0
        let currentNode = this.head
        let noMatch = true
        while (currentNode != null) {
            index++
            if (currentNode.data == element) {
                console.log(" Element " + element + " is found at " + index + " node ")
                noMatch = false
                break
            }
            currentNode = currentNode.next
        }
        if (noMatch) {
            console.log("Element" + element + " is not found in following linkedList ")
        }
    }
}






// -----------------------------creating instance of the linkedList--------------------------------------------


linked = new linkedList()

linked.insertAtHead(new node(1))
linked.insertAtEnd(new node(2))
linked.insertAtEnd(new node(3))
linked.insertAtEnd(new node(4))
linked.insertAtEnd(new node(5))
linked.insertAtPos(new node(0), 0)
linked.insertAtPos(new node(6), linked.listLength())

console.log("The  linkedList whole data is :--");


linked.printList()

linked.deleteAtHead()

console.log(" After deletion of head node ")

linked.printList()

linked.deleteAtEnd()

console.log(" After deletion of Last node ")

linked.printList()

pos = 3
linked.deleteAtPos(pos)

console.log("After deletion of " + pos + " node ")

linked.printList()

pos = 0
linked.deleteAtPos(pos)

console.log("After deletion of " + pos + " node ")

linked.printList()

pos = linked.listLength()
linked.deleteAtPos(pos)

console.log("After deletion of " + pos + " node ")

linked.printList()

console.log("\n")

linked.searchElement(3)

console.log("Reversing the linked list")

linked.reverseList()

linked.printList()