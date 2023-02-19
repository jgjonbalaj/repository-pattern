import { Author } from '../entities/Author';

export class AuthorService {
  private authors: Array<Author>;

  constructor() {
    this.authors = [];
  }

  getAllAuthors = (): Array<Author> => {
    return this.authors;
  }

  getAuthorById = (id: number): Author | undefined => {
    return this.authors.find(author => author.id === id);
  }

  createAuthor = (first: string, last: string, DOB: number): Author => {
    const author = new Author(first, last, DOB);

    this.authors.push(author);

    return author;
  }

  updateAuthor = (id: number, first: string, last: string, DOB: number): Author | undefined => {
    const author = this.getAuthorById(id);

    if (!author) {
      return undefined;
    }

    author.first = first;
    author.last = last;
    author.DOB = DOB;

    return author;
  }

  deleteAuthor(id: number): Author | undefined {
    const author = this.getAuthorById(id);

    if (!author) {
      return undefined;
    }

    this.authors = this.authors.filter(author => author.id !== id);

    return author;
  }
}
