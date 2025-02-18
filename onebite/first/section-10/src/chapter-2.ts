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
