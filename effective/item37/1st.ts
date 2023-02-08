interface Vector2D {
  _brand: '2d';
  x: number;
  y: number;
}
function vec2D(x: number, y: number): Vector2D {
  return { x, y, _brand: '2d' };
}
function calculateNorm(p: Vector2D) {
  return Math.sqrt(p.x * p.x + p.y * p.y); // Same as before
}

calculateNorm(vec2D(3, 4)); // OK, returns 5
const vec3D = { x: 3, y: 4, z: 1 };
// calculateNorm(vec3D);
// Argument of type '{ x: number; y: number; z: number; }' is not assignable to parameter of type 'Vector2D'.
// Property '_brand' is missing in type '{ x: number; y: number; z: number; }' but required in type 'Vector2D'.  1st.ts(2, 3): '_brand' is declared here.

export {};
