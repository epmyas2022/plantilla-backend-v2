import { type Router, type NextFunction, type Request, type Response } from 'express'

export type middleware = (req: Request, res: Response, next: NextFunction) => void
export interface route {
  path: string
  router: Router
}
export type controller = (req: Request, res: Response) => void
