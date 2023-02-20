import { Author } from '../entities/Author';
import { IBaseRepository } from '../interfaces/IBaseRepository';

export class AuthorService {

  constructor(private authorRepository: IBaseRepository<Author>) {}

  getAllAuthors = (): Array<Author> => {
    return this.authorRepository.getEntities();
  }

  getAuthorById = (id: number): Author | undefined => {
    return this.authorRepository.getEntityById(id);
  }

  createAuthor = (first: string, last: string, DOB: number): Author => {
    const author = new Author(first, last, DOB);

    this.authorRepository.createEntity(author);

    return author;
  }

  updateAuthor = (id: number, first: string, last: string, DOB: number): Author | undefined => {
    const author = new Author(first, last, DOB);

    this.authorRepository.updateEntity(id, author);

    return author;
  }

  deleteAuthor(id: number): Author | undefined {
    return this.authorRepository.deleteEntity(id);
  }
}
