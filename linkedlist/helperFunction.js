// helper functions used in linked list

// cretaing node

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

    // ---------------insertion operations on linkedList---------------------------

    // method to insert a node as a head node

    insertAtHead(newnode) {
        let currentnode = this.head
        if (currentnode == null) {
            this.head = newnode
            return
        }
        this.head = newnode
        this.head.next = currentnode
    }

    //method to insert a node at particular postion 

    insertAtPostion(newnode, pos) {
        let currentnode = this.head
        if (pos == 0) {
            this.insertAtHead(newnode)
            return
        } else if (pos < 0 || pos > this.listLength()) {
            console.log("Invalid postion to insert")
            return
        } else if (pos == this.listLength()) {
            this.insertAtTail(newnode)
            return
        }
        let previousnode = null
        let currentpostion = 0
        while (currentpostion != pos) {
            previousnode = currentnode
            currentnode = currentnode.next
            currentpostion++
        }
        previousnode.next = newnode
        newnode.next = currentnode
    }


    // method to insert a newnode at linkedList tail

    insertAtTail(newnode) {
        let currentnode = this.head
        while (currentnode.next != null) {
            currentnode = currentnode.next
        }
        currentnode.next = newnode
    }


    //------------------ Deletion operations on linked list--------------------------------

    // method.to delete a head node

    deleteAthead() {
        let currentnode = this.head
        if (currentnode == null) {
            return
        }
        this.head = currentnode.next
    }

    // method to delete a node at particular postion

    deleteAtpostion(pos) {
        let currentnode = this.head
        let previousnode = null
        let currentpostion = 0
        if (pos == 0) {
            this.deleteAthead()
            return
        }
        if (pos == this.listLength) {
            this.deleteAtTail()
            return
        }
        if (pos < 0 || pos > this.listLength()) {
            console.log("Invalid postion declaration")
            return
        }
        while (currentpostion != pos) {
            previousnode = currentnode
            currentnode = currentnode.next
            currentpostion++
        }
        previousnode.next = currentnode.next
    }

    // method to delete a node at the end of list

    deleteAtTail() {
        let currentnode = this.head
        let previousnode = null
        while (currentnode.next != null) {
            previousnode = currentnode
            currentnode = currentnode.next
        }
        previousnode.next = null
    }




    // --------------------helper functions used in linkedList--------------------------------------


    // method to print whole list data
    printList() {
        let currentnode = this.head
        if (currentnode == null) {
            console.log("list is empty")
            return
        }
        while (currentnode != null) {
            console.log(currentnode.data)
            currentnode = currentnode.next
        }
    }

    // method to return length of the linked list

    listLength() {
        let length = 0
        let currentnode = this.head
        while (currentnode != null) {
            length++
            currentnode = currentnode.next
        }
        return length
    }

    //method to search an element in a linked list

    searchElement(element) {
        let index = 0
        let currentnode = this.head
        let noMatch = true
        while (currentnode != null) {
            index++
            if (currentnode.data == element) {
                noMatch = false
                console.log(" The element " + element + " is found at " + index + " node ")
            }
            currentnode = currentnode.next
        }
        if (noMatch) {
            console.log(" The element " + element + " is not found in following linked lsit ")
        }
    }

}





linked = new linkedList()


linked.insertAtHead(new node("surendra"))
linked.insertAtTail(new node("mani"))
linked.insertAtTail(new node("msatya"))
linked.printList()
linked.deleteAthead()
linekd.printList()
