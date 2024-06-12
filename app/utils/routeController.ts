import asyncHandler from 'express-async-handler'
import { type middleware } from '../types/utils'
import express from 'express'

type asyncHandlerType = typeof asyncHandler
export class RouteController<T> {
  private readonly _controller: T
  private readonly router: express.Router = express.Router()
  private readonly _prefix: string = 'api'

  constructor (controller: T, prefix?: string) {
    this._controller = controller
    if (prefix) this._prefix = prefix
  }

  group (path: string, callback: (
    router: express.Router,
    controller: T,
    asyncHandler: asyncHandlerType) => void): this {
    const subRouter = express.Router()
    this.router.use(`/${this._prefix}/${path}`, subRouter)
    callback(subRouter, this._controller, asyncHandler)
    return this
  }

  middleware (middleware: middleware): this {
    this.router.use(middleware)
    return this
  }

  context (app: express.Application): this {
    app.use(this.router)
    return this
  }

  getRouter (): express.Router {
    return this.router
  }
}
