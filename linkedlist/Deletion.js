// insertion operations on linekd list

// creating node
class node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

//creating linkedlist
class linked_list {
    constructor() {
        this.head = null
    }
    //method to insert newnode as a head
    insert_beg(newnode) {
        let temp = this.head
        this.head = newnode
        this.head.next = temp
    }
    //method to find the length of a gievn linked list
    length_list() {
        var temp = this.head
        let length = 0
        while (temp.next != null) {
            length++
            temp = temp.next
        }
        return length
    }
    //method to insert new nodes at desired postion
    insert_mid(newnode, pos) {
        if (pos < 0 || pos > this.length_list()) {
            console.log("Invalid Postion")
            return
        }
        if (pos == 0) {
            this.insert_beg(newnode)
            return
        }
        if (pos)
            var currentpostion = 0
        var previousNode = null
        var currentNode = this.head
        while (currentpostion != pos) {
            previousNode = currentNode
            currentNode = currentNode.next
            currentpostion++
        }
        previousNode.next = newnode
        newnode.next = currentNode
    }
    //methods to insert a newnodes at end of linked list
    insert_end(newnode) {
        let temp = this.head
        if (temp == null) {
            this.head = newnode
        } else {
            while (temp.next != null) {
                temp = temp.next
            }
            temp.next = newnode
        }
    }
    printList() {
        let temp = this.head
        if (temp == null) {
            console.log("List is empty")
        } else {
            while (temp != null) {
                console.log(temp.data)
                temp = temp.next
            }
        }
    }

    // deletion operations on linked list
    deleteAt(pos) {
        var temp = this.head
        let currentpos = 0
        let previousNode = null
        let currentNode = null
        if (pos < 0 || pos > this.length_list()) {
            console.log("invalid postion")
            return
        }
        if (pos == 0) {
            this.head = temp.next
            return
        } else {
            currentNode = this.head
            while (pos != currentpos) {
                previousNode = currentNode
                currentNode = currentNode.next
                currentpos++
            }
            previousNode.next = currentNode.next
        }
    }
    deleteTail() {
        var currentnode = this.head
        var previousNode = null
        while (currentnode.next != null) {
            previousNode = currentnode
            currentnode = currentnode.next
        }
        previousNode.next = null
    }
    deleteHead() {
        var currentnode = this.head
        this.head = currentnode.next
    }
}

linked = new linked_list()

linked.insert_end(new node("surendra"))
linked.insert_end(new node("surendra1"))
linked.insert_end(new node("surendra23"))
linked.insert_end(new node("surendra4"))
linked.insert_beg(new node("surendra king"))
linked.insert_mid(new node("surendra1.5"), 0)
// linked.deleteAt(2)
linked.deleteHead()
linked.printList()