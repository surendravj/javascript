// find an element in a binary search tree

class node {
    constructor(data) {
        this.data = data
        this.right = null
        this.left = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        let newnode = new node(value)
        if (!this.root) {
            this.root = newnode
            return this
        } else {
            let currentRoot = this.root
            if (currentRoot.data == value) {
                return undefined
            }
            while (true) {
                if (currentRoot.data > value) {
                    if (!currentRoot.left) {
                        currentRoot.left = newnode
                        //insert(current.left,value) recursively
                        return
                    }
                    currentRoot = currentRoot.left
                } else {
                    if (!currentRoot.right) {
                        currentRoot.right = newnode
                         //insert(current.right,value) recursively
                        return
                    }
                    currentRoot = currentRoot.right
                }
            }
        }
    }
    find(element) {
        if (!this.root) {
            return null
        }
        if (this.root.data == element) {
            console.log("Element found at root")
            return
        } else {
            let currentRoot = this.root
            while (true) {
                if (currentRoot.data > element) {
                    if (currentRoot.data == element) {
                        console.log("Element found at")
                        console.log(currentRoot)
                        return
                    }
                    if (!currentRoot.left) {
                        console.log("No match found")
                        return
                    }
                    currentRoot = currentRoot.left
                } else {
                    if (currentRoot.data == element) {
                        console.log("Element found at")
                        console.log(currentRoot)
                        return
                    }
                    if (!currentRoot.right) {
                        console.log("No match found")
                        return
                    }
                    currentRoot = currentRoot.right
                }
            }
        }
    }
}


tree = new BinarySearchTree()

tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(1)
tree.insert(6)
tree.insert(13)
tree.insert(16)
tree.insert(0)
console.log(tree.root)
tree.find(6)