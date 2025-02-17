interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Partial<T> = {
  [K in keyof T]?: T[K];
};

type PartialCheck = Partial<Post>;

const draft: Partial<Post> = {
  title: '제목 나중에 짓자',
  content: '초안...',
};
