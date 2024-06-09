import Server from './config/server'
import UtilsAssets from './config/assets/utils'

function main (): void {
  const server = new Server()
  UtilsAssets.loadBanner('banner', {
    version: '1.0.0'
  })
  server.start()
}

main()
