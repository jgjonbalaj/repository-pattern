import { Request, Response } from 'express';
import { PostService } from '../services/PostService';

export class PostController {
  constructor(
    private readonly postService: PostService
  ) {}

  getAllPost = (_: Request, res: Response): void => {
    res.json(this.postService.getAllPosts());
  }

  getPostById = (req: Request, res: Response): void => {
    const postId = parseInt(req.params['postId'] ?? '');

    res.json(this.postService.getPostById(postId));
  }

  createPost = (req: Request, res: Response): void => {
    const title = req.body['title'] ?? '';
    const content = req.body['content'] ?? '';
    const authorId = parseInt(req.body['authorId'] ?? '');

    res.json(this.postService.createPost(title, content, authorId));
  }

  updatePost = (req: Request, res: Response): void => {
    const postId = parseInt(req.params['postId'] ?? '');
    const title = req.body['title'] ?? '';
    const content = req.body['content'] ?? '';
    const authorId = parseInt(req.body['authorId'] ?? '');

    res.json(this.postService.updatePost(postId, title, content, authorId));
  }

  deletePost = (req: Request, res: Response): void => {
    const postId = parseInt(req.params['postId'] ?? '');

    res.json(this.postService.deletePost(postId));
  }
}
