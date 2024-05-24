function _collect_whole_line(parentNodeAttributeName, node) {
  if (parentNodeAttributeName in node && node[parentNodeAttributeName]) {
    return [node, ..._collect_whole_line(parentNodeAttributeName, node[parentNodeAttributeName])]
  }
  return [node]
}

const a = [
  {
    "id": "RnVuY3Rpb246MTUy",
    "name": "ветеринария",
    "parent": null
  },
  {
    "id": "RnVuY3Rpb246MTUz",
    "name": "скот",
    "parent": {
      "id": "RnVuY3Rpb246MTUy",
      "name": "ветеринария",
      "parent": null
    }
  },
  {
    "id": "RnVuY3Rpb246MTU5",
    "name": "козы",
    "parent": {
      "id": "RnVuY3Rpb246MTUz",
      "name": "скот",
      "parent": {
        "id": "RnVuY3Rpb246MTUy",
        "name": "ветеринария"
      }
    }
  }
]

const b = [
  {
    "id": "RnVuY3Rpb246MTUy",
    "name": "ветеринария",
    "parent": null
  },
  {
    "id": "RnVuY3Rpb246MjM1",
    "name": "бельмо",
    "parent": {
      "id": "RnVuY3Rpb246MTUy",
      "name": "ветеринария",
      "parent": null
    }
  },
  {
    "id": "RnVuY3Rpb246MjI5",
    "name": "вши",
    "parent": {
      "id": "RnVuY3Rpb246MTUy",
      "name": "ветеринария",
      "parent": null
    }
  }
]

let c = a.map((e) => _collect_whole_line('parent', e).reverse().map((n) => n.name).join(' / '))
let d = b.map((e) => _collect_whole_line('parent', e).reverse().map((n) => n.name).join(' / '))

console.log(c);
console.log(d);