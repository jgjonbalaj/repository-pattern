import { IBaseRepository } from './IBaseRepository';
import { Author } from '../entities/Author';

export interface IAuthorRepository extends IBaseRepository<Author> {
  getUserFullName(): string;
}