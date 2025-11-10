const { NotImplementedError } = require("../extensions/index.js");

module.exports = class Queue {
  constructor() {
    this.queueArray = [];
  }

  // Добавить элемент в конец очереди
  enqueue(element) {
    this.queueArray.push(element);
  }

  // Удалить элемент из начала очереди
  dequeue() {
    return this.queueArray.shift();
  }

  // Посмотреть первый элемент (не удаляя его)
  front() {
    return this.queueArray.length > 0 ? this.queueArray[0] : undefined;
  }

  // Проверить, пуста ли очередь
  isEmpty() {
    return this.queueArray.length === 0;
  }

  // Получить количество элементов
  size() {
    return this.queueArray.length;
  }
};