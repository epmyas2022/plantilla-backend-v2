export interface ICreate {
  create: (data: object | any) => Promise<object | any>
}

export interface IRead {
  read: (id: number) => Promise<object | any>
}

export interface IUpdate {
  update: (id: number, data: object | any) => Promise<object>
}

export interface IDelete {
  delete: (id: number) => Promise<object>
}

export interface IList {
  list: () => Promise<object[]>
}

export interface GrudRepository extends ICreate, IRead, IUpdate, IDelete, IList {}
