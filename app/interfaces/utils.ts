import { type Container } from 'inversify'

export interface IServiceProvider {
  register: (container: Container) => void

}
