export class Comment {
  id: number;
  content: string;
  authorId: number;
  postId: number;

  constructor(content: string, authorId: number, postId: number) {
    this.id = Math.round(Math.random() * 1_000_000);
    this.content = content;
    this.authorId = authorId;
    this.postId = postId;
  }
}
