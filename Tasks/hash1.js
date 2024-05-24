const createHashTable = (size) => new Array(size);

const hashFunction = (table, value) => {
  let hash = 0;
  // for (let i = 0; i < value.length; i++) {
  //   hash = (hash + value.charCodeAt(i) * i) % table.length;
  // }
  hash = value.split("").reduce((acc, item, idx) =>  (acc + item.charCodeAt(0)* idx) % table.length, 0)
  return hash;
};

const set = (key, value, table) => {
  let memoryLocation = hashFunction(table, key);
  console.log(memoryLocation)
  if (table.length-1 < memoryLocation) {
    table.push([key, value]);
  } else {
  table[memoryLocation] = ([key, value]);}
  return table;
}

const getItems = (key, table) => {
  let memoryLocation = hashFunction(table, key);
  if (table.length-1 < memoryLocation) return null;
  console.log(table[memoryLocation])
  return table[memoryLocation];
}

const hashTable = createHashTable(4);
hashFunction(hashTable, 'Hey')
set('Victor', 24, hashTable)
set('Maria', 25, hashTable)
console.log(hashTable)
getItems('Victor', hashTable)
getItems('Maria', hashTable)
getItems('iii', hashTable)
