function getJsonPath(data, element, path) {
  var fullPath = [];
  path = path || "";
  for (var key in data) {
    if (data[key] === element) {
      return (path + "/" + key);
    } else if (typeof data[key] === "object") {
      var temp;
      if (isNaN(key)) {
        temp = getJsonPath(data[key], element, path + "/" + key);
      }
      else {
        temp = getJsonPath(data[key], element, path + "[" + key + "]");
      }
      if (temp.length > 0) {
        fullPath.push(temp);
      }
    }
  }
  return fullPath.toString();
}
var json =
{"itemList": {"items": [
    {"id": "item1"},
    {"id": "item2","label": "Item 2"},
    {"id": "item3"},
    {"id": "item4"},
    {"id": "item5"},
    {"id": "subItem1",
        "subItems": [
            {"id": "subItem1Item1","label": "SubItem 1"},
            {"id": "subItem1Item2","label": "SubItem 2"},
            {"id": "subItem1Item3","label": "SubItem 3"}
        ]
    },
    {"id": "item6"},
    {"id": "item7","label": "Item 7"},
    {"id": "subItem2",
        "subItems": {"id": "item1","label": "SubItem 2 item1"}
    }
]}}

var test = getJsonPath(json, "item2");
console.log(test)
