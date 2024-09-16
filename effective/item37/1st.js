function vec2D(x, y) {
    return { x, y, _brand: '2d' };
}
function calculateNorm(p) {
    return Math.sqrt(p.x * p.x + p.y * p.y); // Same as before
}
calculateNorm(vec2D(3, 4)); // OK, returns 5
const vec3D = { x: 3, y: 4, z: 1 };
export {};
