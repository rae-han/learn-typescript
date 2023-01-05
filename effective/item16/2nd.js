var arr = [1, 2, 3];
var items = Object.entries(arr);
for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
    var _a = items_1[_i], key = _a[0], value = _a[1];
    console.log(typeof key, typeof value); // string number
}
