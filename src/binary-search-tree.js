class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this._root) {
      this._root = newNode;
      return;
    }

  
    let current = this._root;
    while (true) {
      if (data < current.data) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else if (data > current.data) {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      } else {

        break;
      }
    }
  }


  has(data) {
    let current = this._root;
    while (current) {
      if (data === current.data) return true;
      current = data < current.data ? current.left : current.right;
    }
    return false;
  }


  root() {
    return this._root;
  }


  min() {
    if (!this._root) return null;
    let current = this._root;
    while (current.left) current = current.left;
    return current.data;
  }


  max() {
    if (!this._root) return null;
    let current = this._root;
    while (current.right) current = current.right;
    return current.data;
  }


  remove(data) {
    this._root = this._removeNode(this._root, data);
  }

  _removeNode(node, data) {
    if (!node) return null;

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {

      if (!node.left && !node.right) return null; 
      if (!node.left) return node.right; 
      if (!node.right) return node.left; 

      let minRight = node.right;
      while (minRight.left) minRight = minRight.left;
      node.data = minRight.data;
      node.right = this._removeNode(node.right, minRight.data);
      return node;
    }
  }
}
const tree = new BinarySearchTree();

tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4);
tree.add(5);

console.log("root:", tree.root().data); // 1
console.log("min:", tree.min()); // 1
console.log("max:", tree.max()); // 5

tree.remove(5);
console.log("has(5):", tree.has(5)); // false
console.log("max:", tree.max()); // 4