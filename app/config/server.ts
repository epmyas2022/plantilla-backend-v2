import express from 'express'
import dotenv from 'dotenv'
import http from 'http'
import morgan from 'morgan'

import { type route, type middleware } from '../types/utils'
dotenv.config()

export default class Server {
  private readonly _port: number
  private readonly _app: express.Application
  private readonly _server: http.Server
  private readonly _host: string
  private readonly middlewares: middleware[] = []
  private readonly routes: route[] = []

  constructor (server?: http.Server | any, app?: express.Application) {
    this._port = Number(process.env.PORT ?? 3000)
    this._host = process.env.HOST ?? 'localhost'
    this._app = !app ? express() : app
    this._server = !server ? http.createServer(this._app) : server
    this.app.use(morgan('dev'))
  }

  get port (): number {
    return this._port
  }

  get app (): express.Application {
    return this._app
  }

  addMiddleware (middleware: middleware): this {
    this.middlewares.push(middleware)
    return this
  }

  addRoute (route: route): this {
    this.routes.push(route)
    return this
  }

  addRouter (router: express.Router): this {
    this._app.use(router)
    return this
  }

  initMiddlewares (): void {
    this.middlewares.forEach(middleware => this._app.use(middleware))
  }

  initRoutes (): void {
    this.routes.forEach(route => this._app.use(route.path, route.router))
  }

  start (): void {
    this.initMiddlewares()
    this.initRoutes()
    this._server.listen(this._port, this._host, () => {
      console.log(`🚀 Server running on http://${this._host}:${this._port}`)
    })
  }
}
