let myCar = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020,
};
type CarType = typeof myCar;

const yourCar: CarType = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020,
};

// [문제]
// as 를 사용하지 않고, 아래의 TS 오류를 해결해주세요
// const changeCar = (from: CarType, to: CarType) => {
//   for (const key in from) {
//     to[key] = from[key];
//   }
// };

// [해결책 1] 제네릭으로 키 고정 (12.6절)
function copyProperty<K extends keyof CarType>(from: CarType, to: CarType, key: K): void {
  to[key] = from[key];
}

const changeCar = (from: CarType, to: CarType) => {
  const keys: (keyof CarType)[] = ['brand', 'model', 'year'];
  keys.forEach((key) => copyProperty(from, to, key));
};

changeCar(myCar, yourCar);

// [해결책 2] Object.assign (불변성 유지)
const changeCarImmutable = <T extends object>(from: T, to: T): T => {
  return Object.assign({}, to, from);
};

const newCar = changeCarImmutable(myCar, yourCar);
