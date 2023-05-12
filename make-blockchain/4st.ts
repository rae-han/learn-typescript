function superPrint<T>(a: T[]) {
  return a[0]
}

const a1 = superPrint([1, 2, 3, 4]);
const a2 = superPrint<number>([1, 2, 3, 4]);
const b = superPrint(['1', '2', '3', '4']);
const c = superPrint([true, false, true]);
const d = superPrint([1, 'a', true]);

type Player<E> = {
  name: string;
  extraInfo: E
}

const player1: Player<{ gender: string }> = {
  name: 'raehan',
  extraInfo: {
    gender: 'male'
  }
}

type GenderPlayer = Player<{ gender: string }>

const player2: GenderPlayer = {
  name: 'raehan',
  extraInfo: {
    gender: 'male'
  }
}

type PlayerExtra = {
  gender: string
}

const player3: Player<PlayerExtra> = {
  name: 'raehan',
  extraInfo: {
    gender: 'male'
  }
}

const player4: Player<null> = {
  name: 'wow',
  extraInfo: null,
}

// 상속이라기보다 재사용의 개념에 가깝다.



export {}
