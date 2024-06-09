import express from 'express'
import dotenv from 'dotenv'
import http from 'http'
dotenv.config()

export default class Server {
  private readonly _port: number
  private readonly _app: express.Application
  private readonly _server: http.Server
  private readonly _host: string

  constructor (server?: http.Server, app?: express.Application) {
    this._port = Number(process.env.PORT ?? 3000)
    this._host = process.env.HOST ?? 'localhost'
    this._app = !app ? express() : app
    this._server = !server ? http.createServer(this._app) : server
  }

  get port (): number {
    return this._port
  }

  get app (): express.Application {
    return this._app
  }

  start (): void {
    this._server.listen(this._port, this._host, () => {
      console.log(`🚀 Server running on http://${this._host}:${this._port}`)
    })
  }
}
