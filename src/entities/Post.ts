export class Post {
  id: number;
  title: string;
  content: string;
  authorId: number;

  constructor(title: string, content: string, authorId: number) {
    this.id = Math.round(Math.random() * 1_000_000);
    this.title = title;
    this.content = content;
    this.authorId = authorId;
  }
}
