// interface UserInfo {
//   name: string;
// }
// interface Post {
//   post: string;
// }
//
// declare function fetchUser(userId: string): Promise<UserInfo>;
// declare function fetchPostsForUser(userId: string): Promise<Post[]>;
//
// class UserPosts {
//   user: UserInfo | null;
//   posts: Post[] | null;
//
//   constructor() {
//     this.user = null;
//     this.posts = null;
//   }
//
//   async init(userId: string) {
//     return Promise.all([
//       async () => (this.user = await fetchUser(userId)),
//       async () => (this.posts = await fetchPostsForUser(userId)),
//     ]);
//   }
//
//   getUserName() {
//     // ...?
//   }
// }
class UserPosts {
    user;
    posts;
    constructor(user, posts) {
        this.user = user;
        this.posts = posts;
    }
    static async init(userId) {
        const [user, posts] = await Promise.all([fetchUser(userId), fetchPostsForUser(userId)]);
        return new UserPosts(user, posts);
    }
    getUserName() {
        return this.user.name;
    }
}
export {};
