// Implementaion of death first search preorder method to transeverse tree

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
    insert(val) {
        let newnode = new node(val),
            current = this.root
        if (!current) {
            this.root = newnode
            return
        }
        if (current.data == val) {
            return undefined
        }
        while (true) {
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
    // Method to transverse the tree horizontally
    BFS() {
        let data = [], //array that stores the data of every node 
            visited = [], //array that stores the visted node at every tansversal
            current = 0 //current is a variable that store thee current node
        visited.push(this.root)
        while (visited.length) {
            current = visited.shift()
            data.push(current.data)
            if (current.left) visited.push(current.left)
            if (current.right) visited.push(current.right)
        }
        return data
    }
    // Implementaion of DFS preorder algorithm on tree transversal using stack approach

    DFS_PreOrder() {
        let data = [], //array that stores the data of every node 
            visited = [], //array that stores the visted node at every tansversal
            current = 0 //current is a variable that store thee current node
        visited.push(this.root)
        while (visited.length) {
            current = visited.pop()
            data.push(current.data)
            if (current.right) visited.push(current.right)
            if (current.left) visited.push(current.left)
        }
        return data
    }
    DFS_inOrder() {
        let data = []
        let inorder = (node) => {
            if (node.left) inorder(node.left)
            data.push(node.data)
            if (node.right) inorder(node.right)
        }
        inorder(this.root)
        return data
    }
    DFS_postOrder() {
        
        let data = []
        let postorder = (node) => {
            if (node.left) postorder(node.left)
            if (node.right) postorder(node.right)
            data.push(node.data)
        }
        postorder(this.root)
        return data
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
console.log(tree.BFS())
console.log(tree.DFS_PreOrder())
console.log(tree.DFS_inOrder())
console.log(tree.DFS_postOrder())