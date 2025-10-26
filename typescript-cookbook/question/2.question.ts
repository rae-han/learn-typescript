// enum 은 컴파일 이후 비효율적은 결과코드를 생성할 수 있습니다.
// 3장과 4장에서 다룬 `as const` + 리터럴 유니온 패턴으로 enum 을 대체해 봅시다.

const Sport = {
  Soccer: 'Soccer',
  Basketball: 'Basketball',
  Baseball: 'Baseball',
} as const;

type Sport = (typeof Sport)[keyof typeof Sport];

const SPORT_LABEL: Record<Sport, string> = {
  [Sport.Soccer]: 'Soccer',
  [Sport.Basketball]: 'Basketball',
  [Sport.Baseball]: 'Baseball',
};

function assertNever(value: never): never {
  throw new Error(`Unhandled sport: ${value}`);
}

function getFavoriteSport(sport: Sport): string {
  switch (sport) {
    case Sport.Soccer:
      return SPORT_LABEL.Soccer;
    case Sport.Basketball:
      return SPORT_LABEL.Basketball;
    case Sport.Baseball:
      return SPORT_LABEL.Baseball;
    default:
      return assertNever(sport);
  }
}

// 문제 설명:
// pairs 함수를 확장하여 다양한 타입의 쌍을 처리할 수 있는 함수를 구현하세요.
// any 를 사용하지 마세요
// function pairs<T extends (number | string | boolean | null)[]>(...args: T): T {
//   return args;
// }

// function pairs<T extends (number | string | boolean | null)[]>(...args: T): T {
//   return args;
// }

// 제네릭 가변 인자를 사용해 전달된 순서를 그대로 튜플로 보존
function pairs<T extends readonly unknown[]>(...items: T): T {
  return items;
}

// 예시 사용:
// 아래 코드가 타입 체크를 통과하도록 pairs 함수를 구현하세요
const pair1 = pairs(1, 'a'); // [number, string]
const pair2 = pairs(true, 42, 'hello'); // [boolean, number, string]
const pair3 = pairs('a', 1, true, null); // [string, number, boolean, null]

// 문제:
// groupMembers함수를 구현하고, GroupedMembers 타입을 정의해주세요.

// 1. groupMembers 함수를 수정하여 그룹핑 기준을 동적으로 지정할 수 있도록 하세요.
// 2. 함수는 Member 배열을 받고, 그룹핑 기준은 kind를 기준으로 그룹핑해야 합니다.
// 3. 타입 안전성을 보장하면서 유연하게 사용할 수 있어야 합니다.

type GoldMember = {
  kind: 'gold';
  name: string;
  point: number;
  coupon: number;
};
type SilverMember = {
  kind: 'silver';
  name: string;
  coupon: number;
  point?: never;
};
type BronzeMember = {
  kind: 'bronze';
  name: string;
  point?: never;
  coupon?: never;
};
type Member = GoldMember | SilverMember | BronzeMember;

type GroupedMembers = {
  [K in Member['kind']]: Extract<Member, { kind: K }>[];
};

function groupMembers(members: Member[]): GroupedMembers {
  // return members.reduce(
  //   (acc, member) => ({
  //     ...acc,
  //     [member.kind]: [...acc[member.kind], member as Extract<Member, { kind: typeof member.kind }>],
  //   }),
  //   { gold: [], silver: [], bronze: [] } satisfies GroupedMembers,
  // );

  return members.reduce<GroupedMembers>(
    (acc, member) => ({
      ...acc,
      gold: member.kind === 'gold' ? [...acc.gold, member] : acc.gold,
      silver: member.kind === 'silver' ? [...acc.silver, member] : acc.silver,
      bronze: member.kind === 'bronze' ? [...acc.bronze, member] : acc.bronze,
    }),
    { gold: [], silver: [], bronze: [] },
  );
}

const groupedMembers = groupMembers([
  {
    kind: 'gold',
    name: '철수',
    point: 100,
    coupon: 10,
  },
  {
    kind: 'silver',
    name: '영희',
    coupon: 10,
  },
  {
    kind: 'bronze',
    name: '영수',
  },
  {
    kind: 'bronze',
    name: '민수',
  },
]);
console.log(groupedMembers);

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type GroupedMembersExpand = Expand<typeof groupedMembers>;
/*
groupMembers 의 결과값은 아래와 같이 나옵니다. groupMembers 의 return 타입을 정의해주세요.
{
  gold: [ { kind: 'gold', name: '철수', point: 100, coupon: 10 } ],
  silver: [ { kind: 'silver', name: '영희', coupon: 10 } ],
  bronze: [ { kind: 'bronze', name: '영수' }, { kind: 'bronze', name: '민수' } ]
}
*/

/*
  > 구현 내용

  - type GroupedMembers = { [K in Member['kind']]: Extract<Member, { kind: K }>[]; }로 유니온을 매핑해 각 kind별 배열을 고
  정했습니다. typesript-cookbook/4.md 4.5절에서 정리한 “유니온과 매핑된 타입으로 새 객체 형식 만들기” 패턴을 그대로 적용했
  습니다. (typescript-cookbook/question/2.question.ts:80)
  - groupMembers에서는 초기 그룹 객체를 실제 반환 타입으로 선언하고 switch (member.kind)를 통해 분기 시마다 타입이 좁혀
  지도록 했습니다. 이는 3장(특히 3.5/3.8)에서 다룬 “구별된 유니온을 조건문으로 좁히기” 흐름입니다. (typescript-cookbook/
  question/2.question.ts:84-105)

  로직

  1. GroupedMembers는 각 kind에 해당하는 하위 타입 배열을 담습니다. Extract로 해당 kind의 구체 멤버만 뽑아 배열에 넣도록
  보장합니다.
  2. groupMembers는 초기값에 빈 배열을 세팅한 뒤, 반복문에서 kind에 따라 올바른 배열에 push합니다. 분기가 끝나면 완성된
  GroupedMembers를 반환합니다.
  3. 제공된 예시 배열을 전달하면 콘솔 출력이 문제에 제시된 객체와 동일하며, 각 속성의 타입도 강하게 체크됩니다.
 */
