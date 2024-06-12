import { Container } from 'inversify'
import UserProvider from '../http/providers/userProvider'
import ControllerProvider from '../http/providers/controllerProvider'

export default {
  name: process.env.APP_NAME ?? 'Node API',
  container: new Container(),
  key: process.env.APP_KEY,
  cipher: 'AES-256-CBC',
  version: '1.0.0',
  providers: [
    UserProvider,
    ControllerProvider
  ]

}
