import { IBaseRepository } from '../interfaces/IBaseRepository';

type BaseEntity = { id: number };

export class BaseRepository<T extends BaseEntity> implements IBaseRepository<T> {
  private entities: Array<T>;

  constructor() {
    this.entities = [];
  }

  getEntities(): Array<T> {
    return this.entities;
  }

  getEntityById(id: number): T {
    return this.entities.find(entity => entity.id === id);
  }

  createEntity(entity: T): T {
    this.entities.push(entity);

    return entity;
  }

  private NOT_FOUND = -1;

  updateEntity(id: number, entity: T): T {
    const entityIndex = this.entities.findIndex(existingEntity => existingEntity.id === id);

    if (entityIndex === this.NOT_FOUND) {
      return undefined;
    }

    entity.id = id;
    this.entities[entityIndex] = entity;

    return entity;
  }

  deleteEntity(id: number): T {
    const entity = this.getEntityById(id);

    if (!entity) {
      return undefined;
    }

    this.entities = this.entities.filter(entity => entity.id !== id);

    return entity;
  }
}