const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

module.exports = class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new ListNode(value);
    newNode.next = this.top; 
    this.top = newNode;
  }

  pop() {
    if (!this.top) return null; 
    const value = this.top.value;
    this.top = this.top.next;
    return value;
  }

  peek() {
    return this.top ? this.top.value : null;
  }

  getUnderlyingList() {
    return this.top;
  }
};