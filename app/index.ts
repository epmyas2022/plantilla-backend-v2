import Server from './config/server'
import UtilsAssets from './config/assets/utils'
import { defaultFormat } from './http/middlewares/morgan'

function main (): void {
  const server = new Server()
  UtilsAssets.loadBanner('banner', { version: '1.0.0' })
  server
    .addMiddleware(defaultFormat)
    .start()
}

main()
