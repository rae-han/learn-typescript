/**
 * Pick<T, K>
 * -> 뽑다, 고르다.
 * -> 객체 프로퍼티로부터 특정 프로퍼티만 골라내는 타입.
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  [Key in K]: T[Key];
};

const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: '',
  content: '',
};

/**
 * Omit<T, K>
 * -> 뽑다, 고르다.
 * -> 객체 프로퍼티로부터 특정 프로퍼티만 제거하는 타입.
 */
type Exclude<T, U> = T extends U ? never : T;

type Omit<T, K extends keyof T> = {
  [Key in keyof T as Key extends K ? never : Key]: T[Key];
};

// type Omit<T, K extends keyof T> = {
//   [Key in keyof T extends K ? K : never]: T[Key];
// };

const noTitlePost: Omit<Post, 'title'> = {
  title: '',
  content: '',
  tags: [] as string[],
  thumbnailURL: '',
};
