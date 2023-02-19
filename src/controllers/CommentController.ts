import { Request, Response } from 'express';
import { CommentService } from '../services/CommentService';

export class CommentController {
  constructor(
    private readonly commentService: CommentService
  ) {}

  getAllComment = (_: Request, res: Response): void => {
    res.json(this.commentService.getAllComments());
  }

  getCommentById = (req: Request, res: Response): void => {
    const commentId = parseInt(req.params['commentId'] ?? '');

    res.json(this.commentService.getCommentById(commentId));
  }

  createComment = (req: Request, res: Response): void => {
    const content = req.body['content'] ?? '';
    const authorId = parseInt(req.body['authorId'] ?? '');
    const postId = parseInt(req.body['postId'] ?? '');

    res.json(this.commentService.createComment(content, authorId, postId));
  }

  updateComment = (req: Request, res: Response): void => {
    const commentId = parseInt(req.params['commentId'] ?? '');
    const content = req.body['content'] ?? '';
    const authorId = parseInt(req.body['authorId'] ?? '');
    const postId = parseInt(req.body['postId'] ?? '');

    res.json(this.commentService.updateComment(commentId, content, authorId, postId));
  }

  deleteComment = (req: Request, res: Response): void => {
    const commentId = parseInt(req.params['commentId'] ?? '');

    res.json(this.commentService.deleteComment(commentId));
  }
}
