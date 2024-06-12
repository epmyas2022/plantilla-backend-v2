import Server from './config/server'
import 'reflect-metadata'
import UtilsAssets from './config/assets/utils'
import { tinyFormat } from './http/middlewares/morgan'
import { type Container } from 'inversify'
import { InversifyExpressServer } from 'inversify-express-utils'
import app from './config/app'

function initProviders (providers: any[], container: Container): void {
  providers.forEach(Provider => new Provider().register(container))
}

function main (): void {
  const container = app.container

  initProviders(app.providers, container)

  const serverInstance = new InversifyExpressServer(container, null, { rootPath: '/api' })
  const server = new Server(null, serverInstance.build())

  UtilsAssets.loadBanner('banner', { version: app.version })

  server
    .addMiddleware(tinyFormat)
    .start()
}

main()
