import { Router } from 'express'

export class RouteController<T> {
  private readonly _controller: T
  private readonly router: Router = Router()
  constructor (controller: T) {
    this._controller = controller
  }

  group (path: string, callback: (router: Router, controller: T) => void): this {
    callback(this.router, this._controller)
    return this
  }
}
