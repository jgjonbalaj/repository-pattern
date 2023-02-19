import { Router } from 'express';
import { CommentService } from '../services/CommentService';
import { CommentController } from '../controllers/CommentController';

const commentRoutes = Router();
const commentService = new CommentService();
const commentController = new CommentController(commentService);

commentRoutes.get('/get', commentController.getAllComment);
commentRoutes.get('/get/:commentId', commentController.getCommentById);

commentRoutes.post('/create', commentController.createComment);

commentRoutes.put('/update/:commentId', commentController.updateComment);

commentRoutes.delete('/delete/:commentId', commentController.deleteComment);

export default commentRoutes;
