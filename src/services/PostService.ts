import { Post } from '../entities/Post';

export class PostService {
  private posts: Array<Post>;

  constructor() {
    this.posts = [];
  }

  getAllPosts = (): Array<Post> => {
    return this.posts;
  }

  getPostById = (id: number): Post | undefined => {
    return this.posts.find(Post => Post.id === id);
  }

  createPost = (title: string, content: string, authorId: number): Post => {
    const post = new Post(title, content, authorId);

    this.posts.push(post);

    return post;
  }

  updatePost = (id: number, first: string, last: string, DOB: number): Post | undefined => {
    const post = this.getPostById(id);

    if (!post) {
      return undefined;
    }

    post.title = first;
    post.content = last;
    post.authorId = DOB;

    return post;
  }

  deletePost(id: number): Post | undefined {
    const post = this.getPostById(id);

    if (!post) {
      return undefined;
    }

    this.posts = this.posts.filter(post => post.id !== id);

    return post;
  }
}
