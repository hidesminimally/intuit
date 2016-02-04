/**
Get full path on an element from the JSON below.  For example the full path of item2 would be /itemList/items[1]/id.

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
**/

function getJsonPath(data, element, path) {
  var fullPath = [];
  path = path || "";
  for (var object in data) {
    if (data[object] == element) {
      return (path + "/" + object);
    } else if (typeof data[object] == "object") {
      var temp;
      if (isNaN(object)) {
        temp = getJsonPath(data[object], element, path + "/" + object);
      }
      else{
        temp = getJsonPath(data[object], element, path + "[" + object + "]");
      }


      if (temp.length) {
        fullPath.push(temp);
      }
    }
  }
  return fullPath.toString();
}



var items =
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

var test = getJsonPath(items, "item2");
console.log(test)
