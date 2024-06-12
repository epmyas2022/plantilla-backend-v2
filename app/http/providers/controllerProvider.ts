import { type Container } from 'inversify'
import { type IServiceProvider } from '../../interfaces/utils'
import { directoryImport } from 'directory-import'

const controllers = directoryImport('../controllers')

export default class ControllerProvider implements IServiceProvider {
  register (container: Container): void {
    Object.keys(controllers).forEach(controller => container.bind(controller))
  }
}
