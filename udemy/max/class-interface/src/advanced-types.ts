type Blue = {
  color: string;
  blue: boolean;
};

type Red = {
  color: string;
  red: boolean;
};

type Purple1 = Blue & Red;

const purple1: Purple1 = {
  color: 'purple',
  blue: true,
  red: true,
};

type Purple2 = Blue | Red;

const purple2: Purple2 = {
  color: 'purple',
  red: true,
};

interface Bird {
  _type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  _type: 'holse';
  runningSpeed: number;
}

declare class Whale {
  _type: 'whale';
  swimmingSpeed: number;
}

type Animal = Bird | Horse | Whale;

const moveAnimal = (animal: Animal) => {
  let speed;
  switch (animal._type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'holse':
      speed = animal.runningSpeed;
      break;
    default:
      speed = 0;
      break;
  }
  console.log('Moving at speed: ' + speed);
};

moveAnimal({
  _type: 'whale',
  swimmingSpeed: 5,
})


export { purple1, purple2 }