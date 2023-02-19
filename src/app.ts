import { config } from 'dotenv';
import express from 'express';
import authorRoutes from './routes/AuthorRoute';
import bodyParser from 'body-parser';
import postRoutes from './routes/PostRoute';
import commentRoutes from './routes/CommentRoute';

config();

const app = express();
const port = process.env['PORT'];

// Middlewares
app.use(bodyParser.json());

// Routes
app.use('/author', authorRoutes);
app.use('/post', postRoutes);
app.use('/comment', commentRoutes);

// Run server
app.listen(port, () => {
  console.log(`Server listening to ${port}!`);
});
