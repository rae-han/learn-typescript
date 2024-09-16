function getComponent(vector, axis) {
    return vector[axis];
}
let x = 'x';
let vec = { x: 10, y: 20, z: 30 };
// getComponent(vec, x);
// TS2345: Argument of type 'string' is not assignable to parameter of type '"x" | "y" | "z"'.
const mixed = ['x', 1];
export {};
