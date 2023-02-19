import { Comment } from '../entities/Comment';

export class CommentService {
  private comments: Array<Comment>;

  constructor() {
    this.comments = [];
  }

  getAllComments = (): Array<Comment> => {
    return this.comments;
  }

  getCommentById = (id: number): Comment | undefined => {
    return this.comments.find(Comment => Comment.id === id);
  }

  createComment = (content: string, authorId: number, postId: number): Comment => {
    const comment = new Comment(content, authorId, postId);

    this.comments.push(comment);

    return comment;
  }

  updateComment = (id: number, content: string, authorId: number, postId: number): Comment | undefined => {
    const comment = this.getCommentById(id);

    if (!comment) {
      return undefined;
    }

    comment.content = content;
    comment.authorId = authorId;
    comment.postId = postId;

    return comment;
  }

  deleteComment(id: number): Comment | undefined {
    const comment = this.getCommentById(id);

    if (!comment) {
      return undefined;
    }

    this.comments = this.comments.filter(comment => comment.id !== id);

    return comment;
  }
}
