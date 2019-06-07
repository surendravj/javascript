// # Implementaion of binary search tree and it operations and transversals

// creating node

class node {
    constructor(data) {
        this.data = data
        this.right = null
        this.left = null
    }
}

// creating tree

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    // Method to insert a newnode in to correct postion in binary search tree

    insert(val) {
        let newnode = new node(val)
        if (!this.root) {
            this.root = newnode
            return
        }
        let current = this.root
        while (true) {
            if (current.data == val) {
                return undefined
            }
            if (val < current.data) {
                if (!current.left) {
                    current.left = newnode
                    return
                }
                current = current.left
            } else {
                if (!current.right) {
                    current.right = newnode
                    return
                }
                current = current.right
            }
        }
    }

    // Method to check given value is in tree or not

    contains(val) {
        let current = this.root,
            found = false
        if (!this.root) {
            return null
        }
        if (this.root.data == val) {
            return true
        }
        while (current && !found) {
            if (val < current.data) {
                current = current.left
            } else if (val > current.data) {
                current = current.right
            } else {
                found = true
            }
        }
        return found
    }

    // ----------------Transversal Algorithms on trees ---------------------

    //- Breadth-First-search-

    BFS() {
        let current = 0,
            data = [],
            visted = [];
        visted.push(this.root)
        while (visted.length) {
            current = visted.shift()
            data.push(current.data)
            if (current.left) visted.push(current.left)
            if (current.right) visted.push(current.right)
        }
        return data
    }

    // Death-First-Search pore-order

    //pre-order (root,left,right)

    DFS_preOrder() {
        let data = []
         let move = (node) => {
            data.push(node.data)
            if (node.left) move(node.left)
            if (node.right) move(node.right)
        }
        move(this.root)
        return data
    }

    // in-order (left,root,right)

    DFS_inOrder() {
        let data = []
        let move = (node) => {
            if (node.left) move(node.left)
            data.push(node.data)
            if (node.right) move(node.right)
        }
        move(this.root)
        return data
    }

    //post-order (left,right,root)

    DFS_postOrder(){
        let data = []
       let move = (node) => {
            if (node.left) move(node.left)
            if (node.right) move(node.right)
            data.push(node.data)
        }
        move(this.root)
        return data
    }
}



tree=new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(1)
tree.insert(6)
tree.insert(13)
tree.insert(16)
tree.insert(0)
console.log("BFS")
console.log(tree.BFS())
console.log("pre-order")
console.log(tree.DFS_preOrder())
console.log("in-order")
console.log(tree.DFS_inOrder())
console.log("post-order")
console.log(tree.DFS_postOrder())
console.log(tree.contains(161))