let map = {};

// Add key-value pairs to the map
map['key1'] = 'value1';
map['key2'] = 'value2';
map['key3'] = 'value3';

// Access values in the map using keys
console.log(map['key1']); // outputs: "value1"
console.log(map['key2']); // outputs: "value2"
console.log(map['key3']); // outputs: "value3"

// Check if a key exists in the map
console.log('key1' in map); // outputs: true
console.log('key4' in map); // outputs: false

// Remove a key-value pair from the map
delete map['key2'];
console.log('key2' in map); // outputs: false


let array = [1, 2, 3, 2, 1, 3, 4, 4, 5];

let countMap = {};

// Loop through the array and count the occurrences of each element
array.forEach(element => {
  if (countMap[element] === undefined) {
    countMap[element] = 1;
  } else {
    countMap[element]++;
  }
});

// Log the count for each element
for (let key in countMap) {
  // console.log(`Element ${key} occurs ${countMap[key]} times`);
}

let arrays = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];

let countMap1 = {};

// Loop through the outer array and inner arrays
arrays.forEach(innerArray => {
  innerArray.forEach(element => {
    if (countMap1[element] === undefined) {
      countMap1[element] = 1;
    } else {
      countMap1[element]++;
    }
  });
});

// Log the count for each element
for (let key in countMap1) {
  console.log(`Element ${key} occurs ${countMap1[key]} times`);
}
