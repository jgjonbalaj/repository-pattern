import { Router } from 'express';
import { AuthorController } from '../controllers/AuthorController';
import { AuthorService } from '../services/AuthorService';

const authorRoutes = Router();
const authorService = new AuthorService();
const authorController = new AuthorController(authorService);

authorRoutes.get('/get', authorController.getAllAuthor);
authorRoutes.get('/get/:authorId', authorController.getAuthorById);

authorRoutes.post('/create', authorController.createAuthor);

authorRoutes.put('/update/:authorId', authorController.updateAuthor);

authorRoutes.delete('/delete/:authorId', authorController.deleteAuthor);

export default authorRoutes;
