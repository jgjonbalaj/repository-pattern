export interface IBaseRepository<T> {
  getEntities(): Array<T>;
  getEntityById(id: number): T;
  createEntity(entity: T): T;
  updateEntity(id: number, entity: T): T;
  deleteEntity(id: number): T;
}