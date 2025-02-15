type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function warning(animal: Animal) {
  if ('isBark' in animal) {
    console.log(animal.isBark ? '짖습니다' : '안짖어요');
  } else if ('isScratch' in animal) {
    console.log(animal.isScratch ? '할큅니다' : '안할퀴어요');
  }
}
