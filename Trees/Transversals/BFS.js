// implementaion of bearth first search in binary search tree

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
            return
        } else {
            let currentRoot = this.root
            while (true) {
                if (value < currentRoot.data) {
                    if (!currentRoot.left) {
                        currentRoot.left = newnode
                        return
                    }
                    currentRoot = currentRoot.left

                } else {
                    if (!currentRoot.right) {
                        currentRoot.right = newnode
                        return
                    }
                    currentRoot = currentRoot.right
                }
            }
        }
    }
    BFS() {
        var node = 0,
            data = [],
            que = [];
        que.push(this.root)
        while (que.length) {
            node = que.shift()
            data.push(node.data)
            if (node.left) {
                que.push(node.left)
            }
            if (node.right) {
                que.push(node.right)
            }
        }
        return data
    }
    findVal(value) {
        let currentRoot = this.root,
        Found = false
        if (!currentRoot) {
            return false
        }
        if (currentRoot.data == value) {
            return true
        } else {
            while (currentRoot && !Found) {
                if (value < currentRoot.data) {
                    currentRoot = currentRoot.left
                } else if (value > currentRoot.data) {
                    currentRoot = currentRoot.right
                } else {
                    Found = true
                }
            }
        }
        return Found
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
console.log(tree.BFS())
console.log(tree.findVal(36))