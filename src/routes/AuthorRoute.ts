import { Router } from 'express';
import { AuthorController } from '../controllers/AuthorController';
import { AuthorService } from '../services/AuthorService';
import { BaseRepository } from '../repositories/BaseRepository';
import { Author } from '../entities/Author';
import { IBaseRepository } from '../interfaces/IBaseRepository';

const authorRoutes = Router();
const authorRepository: IBaseRepository<Author> = new BaseRepository<Author>();
const authorService = new AuthorService(authorRepository);
const authorController = new AuthorController(authorService);

authorRoutes.get('/get', authorController.getAllAuthor);
authorRoutes.get('/get/:authorId', authorController.getAuthorById);

authorRoutes.post('/create', authorController.createAuthor);

authorRoutes.put('/update/:authorId', authorController.updateAuthor);

authorRoutes.delete('/delete/:authorId', authorController.deleteAuthor);

export default authorRoutes;
