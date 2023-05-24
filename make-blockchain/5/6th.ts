// # Polymorphism
// 다형성, 제네릭, 클래스, 인터페이스를 합쳐보자.
// 다형성은 다른 모양을 코드를 가지게 하는 것.

// 제네릭은 concrete 타입이 아닌 placeholder 타입.
// 타입스크립트가 때가 되면 placeholder를 concrete로 바꿔줄 것이다.

// ## 로컬 스토리지 비슷하게 만들어 볼 것.
interface MyStorage<T> {
  // - 1 Storage는 이미 자바스크립트에 있다..
  [key: string]: T;
}

class LocalStorage<T> {
  // - 2 제네릭을 사용할 것인데 이건 또 다른 곳으로 전파할수 있다. 여기서는 MyStorage로 보냈다.
  private storage: MyStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();

const result1 = stringsStorage.get('key');
// 제네릭이 placeholder인 T를 concrete인 string으로 바꿔줬다.
console.log(result1);

export {};
