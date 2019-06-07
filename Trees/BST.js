// implementaion insertion of binary search tree using tree

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
            while (true) {
                if (value < currentRoot.data) {
                    if (!currentRoot.left) {
                        currentRoot.left = newnode
                        console.log(currentRoot)
                        return
                    }
                    currentRoot = currentRoot.left
                } else {
                    if (!currentRoot.right) {
                        currentRoot.right = newnode
                        console.log(currentRoot)
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

// console.log(tree.root)