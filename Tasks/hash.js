
class HashTable {
  constructor(size) {
    this.table = new Array(size);
  }

  hashFunction(value) {
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
      hash = (hash + value.charCodeAt(i) * i) % this.table.length;
    }
    return hash;
  }

  // добавление элементов в хэш-таблицу
  set(key, value) {
    let memoryLocation = this.hashFunction(key);
    if (!this.table[memoryLocation]) {
      this.table[memoryLocation] = [];
    }
    this.table[memoryLocation].push([key, value]);
    return this.table;
  }

  // получение элементов для хэш-таблицы
  getItems(key) {
    let memoryLocation = this.hashFunction(key);
    if (!this.table[memoryLocation]) return null;

    return this.table[memoryLocation].find((x) => x[0] === key)[1];
  }
}