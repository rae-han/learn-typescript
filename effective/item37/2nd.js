function listAbsolutePath(path) {
    // ...
}
function isAbsolutePath(path) {
    return path.startsWith('/');
}
function f(path) {
    if (isAbsolutePath(path)) {
        listAbsolutePath(path);
    }
    // listAbsolutePath(path);
    // Argument of type 'string' is not assignable to parameter of type 'AbsolutePath'.
    // Type 'string' is not assignable to type '{ _brand: "abs"; }'.
}
export {};
