class BucketStorage {
  constructor(size) {
    this.buckets = new Array(size).fill(null).map(() => []);
  }

  getBucket(index) {
    return this.buckets[index];
  }

  setBucket(index, key, value) {
    const bucket = this.buckets[index];
    const existing = bucket.find(pair => pair[0] === key);
    if (existing) {
      existing[1] = value;
    } else {
      bucket.push([key, value]);
    }
  }

  getFromBucket(index, key) {
    const bucket = this.buckets[index];
    const pair = bucket.find(pair => pair[0] === key);
    return pair ? pair[1] : undefined;
  }
}

module.exports = class HashTable {
  constructor(size = 50) {
    this.size = size;
    this.storage = new BucketStorage(size);
  }

  hash1(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) - hash + key.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash % this.size);
  }

  hash2(key) {
    let hash = 5381;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * 33) ^ key.charCodeAt(i);
    }
    return Math.abs(hash % this.size);
  }

  hash3(key) {
    let hash = 7;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * 31 + key.charCodeAt(i)) | 0;
    }
    return Math.abs(hash % this.size);
  }

  insert(key, value) {
    const pos = this.hash1(key);
    this.storage.setBucket(pos, key, value);
  }

  get(key) {
    const pos = this.hash1(key);
    return this.storage.getFromBucket(pos, key);
  }

  has(key) {
    return this.get(key) !== undefined;
  }
};

const table = new HashTable(10);

table.insert("apple", 42);
table.insert("banana", 17);
table.insert("orange", 99);

console.log("apple →", table.get("apple"));   // 42
console.log("banana →", table.get("banana")); // 17
console.log("orange →", table.get("orange")); // 99
console.log("has kiwi:", table.has("kiwi"));  // false