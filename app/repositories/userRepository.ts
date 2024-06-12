import type PrismaType from '../../prisma/pgsql/generated/client'
import { type GrudRepository } from '../interfaces/grudRepository'
import prisma from '../../prisma/index'
import { injectable } from 'inversify'

@injectable()
export class UserRepository implements GrudRepository {
  async create (data: PrismaType.User): Promise<object> {
    return await prisma.pgsql.user.create({ data })
  }

  async read (id: number): Promise<PrismaType.User> {
    const user = await prisma.pgsql.user.findFirst({ where: { id } })

    if (!user) {
      throw new Error('User not found')
    }
    return user
  }

  async update (id: number, data: object): Promise<object> {
    return await prisma.pgsql.user.update({ where: { id }, data })
  }

  async delete (id: number): Promise<object> {
    return await prisma.pgsql.user.delete({ where: { id } })
  }

  async list (): Promise<object[]> {
    return await prisma.pgsql.user.findMany()
  }
}
