import { Request, Response } from 'express';
import { AuthorService } from '../services/AuthorService';

export class AuthorController {
  constructor(
    private readonly authorService: AuthorService
  ) {}

  getAllAuthor = (_: Request, res: Response): void => {
    res.json(this.authorService.getAllAuthors());
  }

  getAuthorById = (req: Request, res: Response): void => {
    const authorId = parseInt(req.params['authorId'] ?? '');

    res.json(this.authorService.getAuthorById(authorId));
  }

  createAuthor = (req: Request, res: Response): void => {
    const first = req.body['first'] ?? '';
    const last = req.body['last'] ?? '';
    const DOB = parseInt(req.body['DOB'] ?? '');

    res.json(this.authorService.createAuthor(first, last, DOB));
  }

  updateAuthor = (req: Request, res: Response): void => {
    const authorId = parseInt(req.params['authorId'] ?? '');
    const first = req.body['first'] ?? '';
    const last = req.body['last'] ?? '';
    const DOB = parseInt(req.body['DOB'] ?? '');

    res.json(this.authorService.updateAuthor(authorId, first, last, DOB));
  }

  deleteAuthor = (req: Request, res: Response): void => {
    const authorId = parseInt(req.params['authorId'] ?? '');

    res.json(this.authorService.deleteAuthor(authorId));
  }
}
