import { PrismaClient as ClientPgsql } from './pgsql/generated/client'

export default {
  pgsql: new ClientPgsql()

}
