import { Router } from 'express';
import { PostService } from '../services/PostService';
import { PostController } from '../controllers/PostController';

const postRoutes = Router();
const postService = new PostService();
const postController = new PostController(postService);

postRoutes.get('/get', postController.getAllPost);
postRoutes.get('/get/:postId', postController.getPostById);

postRoutes.post('/create', postController.createPost);

postRoutes.put('/update/:postId', postController.updatePost);

postRoutes.delete('/delete/:postId', postController.deletePost);

export default postRoutes;
