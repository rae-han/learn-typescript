/*
[문제]
zod를 활용해서 아래 코드를 완성해주세요.

user 의 email 과 phone 의 유효성을 검증하는 checkUser 함수를 완성해주세요.

유효성 검증은 아래 조건을 충족해야 합니다.
- email 은 이메일 형식이어야 합니다.
- phone 은 010-0000-0000 형식이어야 합니다.
- type === 'email'이면 이메일은 필수 입니다. (phone은 필수가 아님, 하지만 있어도 됨)
- type === 'phone'이면 휴대폰 번호는 필수 입니다. (email은 필수가 아님, 하지만 있어도 됨)
*/

import { z } from 'zod';

// [해결책 1] discriminatedUnion (권장, 성능 좋음)
const UserSchemaDiscriminated = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('email'),
    email: z.string().email(),
    phone: z
      .string()
      .regex(/^010-\d{4}-\d{4}$/)
      .optional(),
  }),
  z.object({
    type: z.literal('phone'),
    email: z.string().email().optional(),
    phone: z.string().regex(/^010-\d{4}-\d{4}$/),
  }),
]);

type UserDiscriminated = z.infer<typeof UserSchemaDiscriminated>;

function checkUser(user: UserDiscriminated): boolean {
  return UserSchemaDiscriminated.safeParse(user).success;
}

// [해결책 2] union (일반적인 유니온, 순차 검증)
const UserSchemaUnion = z.union([
  z.object({
    type: z.literal('email'),
    email: z.string().email(),
    phone: z
      .string()
      .regex(/^010-\d{4}-\d{4}$/)
      .optional(),
  }),
  z.object({
    type: z.literal('phone'),
    email: z.string().email().optional(),
    phone: z.string().regex(/^010-\d{4}-\d{4}$/),
  }),
]);

type UserUnion = z.infer<typeof UserSchemaUnion>;

function checkUserWithUnion(user: UserUnion): boolean {
  return UserSchemaUnion.safeParse(user).success;
}

// false
console.log(
  checkUser({
    type: 'email',
    email: 'test.com',
  }),
);

// true
console.log(
  checkUser({
    type: 'email',
    email: 'test@test.com',
  }),
);

// true
console.log(
  checkUser({
    type: 'phone',
    phone: '010-1234-5678',
  }),
);

// false
console.log(
  checkUser({
    type: 'email',
    phone: '010-1234-5678',
  }),
);

// 개발환경에서 부터 TS 에러
console.log(
  checkUser({
    email: 'test.com',
  }),
);
