"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
add(1, 2);
add(1, 2, 3);
const add123 = (x, y) => x + y;
// 오버로딩 하면 any 사용해도 된다.
// 실제 검사할때 악영향을 미치는게 아니라 알아서 걸러준다.
class A {
    add(x, y) {
        return x + y;
    }
}
