import { type Container } from 'inversify'
import { type IServiceProvider } from '../../interfaces/utils'
import { AuthService } from '../services/authService'
import { UserRepository } from '../../repositories/userRepository'
export default class UserProvider implements IServiceProvider {
  register (container: Container): void {
    container.bind(AuthService).toSelf()
    container.bind(UserRepository).toSelf()
  }
}
