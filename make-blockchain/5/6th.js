// # Polymorphism
// 다형성, 제네릭, 클래스, 인터페이스를 합쳐보자.
// 다형성은 다른 모양을 코드를 가지게 하는 것.
class LocalStorage {
    // - 2 제네릭을 사용할 것인데 이건 또 다른 곳으로 전파할수 있다. 여기서는 MyStorage로 보냈다.
    storage = {};
    set(key, value) {
        this.storage[key] = value;
    }
    remove(key) {
        delete this.storage[key];
    }
    get(key) {
        return this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}
const stringsStorage = new LocalStorage();
const result1 = stringsStorage.get('key');
// 제네릭이 placeholder인 T를 concrete인 string으로 바꿔줬다.
console.log(result1);
export {};
