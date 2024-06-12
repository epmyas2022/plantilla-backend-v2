import { injectable } from 'inversify'
import { UserRepository } from '../../repositories/userRepository'

@injectable()
export class AuthService {
  public constructor (private readonly userRepository: UserRepository) {}

  async hello (): Promise<object[]> {
    return await this.userRepository.list()
  }
}
